import { useEffect, useState } from "react";

// Fungsi FetchAsyncMeth adalah sebuah komponen React untuk mengambil data dari API dan menampilkannya.
export default function FetchAsyncMeth() {
    const [data, setData] = useState([]) // State untuk menyimpan data dari API berupa array
    const [loading, setLoading] = useState(true); // State untuk menambahkan loading, dengan default true(loading di awal)
    const [error, setError] = useState(''); // State untuk menyimpan pesan error
    const URL = 'https://jsonplaceholder.typicode.com/users'; // URL API untuk mengambil data

    // Fungsi untuk mengambil data menggunakan fetch API dengan metode async (promise chaining)
    const fetchApiAsyncMeth = () => {
        fetch(URL)
        .then(response => response.json()) // Mengubah response menjadi JSON
        .then(data => setData(data)) // Menyimpan data ke state
        .catch((e) => setError("Error: " + e.message)); // Menambahkan error jika terjadi
        setLoading(false); // Mengubah loading menjadi false setelah request selesai(loading menghilang ketika data ditampilkan)
    }

    // useEffect dijalankan ketika komponen pertama kali dirender.
    useEffect(() => {
        fetchApiAsyncMeth();
    }, []) // Array kosong berguna untuk memanggil fungsi fetchApiAsyncMeth satu kali setelah render awal.

    return (
        <>
            <strong>Fetch Api With Async Method</strong>
            {/* Jika terjadi error, tampilkan pesan error, jika masih loading tampilkan "Loading...",
            jika data sudah tersedia, tampilkan data dalam bentuk list */}
            {error ? <p>{error}</p> : loading ? <p>Loading...</p> : 
                data.map((datas, index) => (
                    <ul key={datas.id}>
                        {/* Menampilkan data nama, username, dan email */}
                        <strong>{index + 1}</strong>
                        <li><strong>Name: </strong>{datas.name}</li>
                        <li><strong>Username: </strong>{datas.username}</li>
                        <li><strong>Email: </strong>{datas.email}</li>
                    </ul>
                ))
            }
            {/* Spasi kosong (banyak <br>) hanya penandaan */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}