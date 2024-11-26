import { useEffect, useState } from "react";

// Fungsi FetchApi kali ini adalah untuk mengambil data dari API dengan try catch async/await
export default function FetchApi() {
    const [data, setData] = useState([]); // State untuk menyimpan data dari API
    const [error, setError] = useState(''); // State untuk menyimpan pesan error
    const [loading, setLoading] = useState(true); // State untuk menandakan apakah data sedang diambil
    const URL = 'https://jsonplaceholder.typicode.com/users'; // URL API

    // Fungsi fetchApi menggunakan async/await untuk mengambil data API
    const fetchApi = async () => {
        try {
            const response = await fetch(URL); // Memanggil API
            const data = await response.json(); // Mengubah response menjadi JSON

            setData(data); // Menyimpan data ke state
            console.log(response); // Debug: Melihat response di console
            setLoading(false); // Mengubah loading menjadi false setelah data diterima
        } catch (e) {
            setError("Error : " + e.message); // Menyimpan pesan error jika terjadi kesalahan
        }
    };

    // useEffect dijalankan satu kali saat komponen pertama kali dirender.
    useEffect(() => {
        fetchApi();
    }, []); // Array kosong berguna untuk merender 1x ketika data dimuat

    return (
        <>
            <strong>Fetch Api With Try Catch</strong>
            {/* Jika terjadi error, tampilkan pesan error, jika masih loading tampilkan "Loading...",
            jika data sudah tersedia, tampilkan data dalam bentuk list */}
            {error ? <p>{error}</p> : loading ? <p>Loading...</p> : 
                data.map((datas, index) => (
                    <ul key={datas.id}>
                        {/* Menampilkan data dengan nomor urut */}
                        <strong>{index + 1}</strong>
                        <li><strong>Name: </strong>{datas.name}</li>
                        <li><strong>Username: </strong>{datas.username}</li>
                        <li><strong>Email: </strong>{datas.email}</li>
                    </ul>
                ))
            }
            {/* <br> sebagai spasi doang :) */}
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