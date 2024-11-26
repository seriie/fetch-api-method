import { useEffect, useState } from "react";

// Komponen FetchAsyncMeth untuk mengambil data dari API dan menampilkannya.
export default function FetchAsyncMeth() {
    const [data, setData] = useState([]); // State untuk menyimpan data dari API berupa array
    const [loading, setLoading] = useState(true); // State untuk menunjukkan proses loading
    const [error, setError] = useState(""); // State untuk menyimpan pesan error
    const URL = "https://jsonplaceholder.typicode.com/users"; // URL API untuk mengambil data

    // Fungsi untuk mengambil data menggunakan fetch API dengan metode async
    const fetchApiAsyncMeth = () => {
        fetch(URL)
            .then(response => {
                if (!response.ok) {
                    // Menangani status HTTP selain 200-299
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json(); // Mengubah response menjadi JSON(mengembalikan response(return))
            })
            .then(data => {
                setData(data); // Menyimpan data ke state
                setLoading(false); // Mengubah loading menjadi false setelah data diterima
            })
            .catch(error => {
                setError("Error: " + error.message); // Menyimpan pesan error ke state
                setLoading(false); // Mengubah loading menjadi false meskipun terjadi error
            });
    };

    // useEffect dijalankan ketika komponen pertama kali dirender.
    useEffect(() => {
        fetchApiAsyncMeth(); // Memanggil fungsi fetchApiAsyncMeth
    }, []); // Array kosong memastikan fungsi hanya dipanggil sekali setelah render awal.

    return (
        <>
            <strong>Fetch API With Async Method</strong>
            {/* Jika terjadi error, tampilkan pesan error; jika masih loading, tampilkan "Loading...";
            jika data sudah tersedia, tampilkan data dalam bentuk list */}
            {error ? (
                <p>{error}</p>
            ) : loading ? (
                <p>Loading...</p>
            ) : (
                data.map((datas, index) => (
                    <ul key={datas.id}>
                        {/* Menampilkan data nama, username, dan email */}
                        <strong>{index + 1}</strong>
                        <li>
                            <strong>Name: </strong>
                            {datas.name}
                        </li>
                        <li>
                            <strong>Username: </strong>
                            {datas.username}
                        </li>
                        <li>
                            <strong>Email: </strong>
                            {datas.email}
                        </li>
                    </ul>
                ))
            )}
        </>
    );
}