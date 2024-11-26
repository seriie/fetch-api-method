import { useEffect, useState } from "react";
import axios from "axios"; // Mengimpor Axios, library untuk melakukan HTTP request

// Komponen FetchingAxiosMethod untuk mengambil data API menggunakan Axios
export default function FetchingAxiosMethod() {
    const [data, setData] = useState([]); // State untuk menyimpan data dari API
    const [loading, setLoading] = useState(true); // State untuk menunjukkan proses loading
    const [error, setError] = useState(""); // State untuk menyimpan pesan error
    const URL = "https://jsonplaceholder.typicode.com/users"; // URL API

    // Fungsi fetchApi menggunakan Axios untuk mengambil data dari API
    const fetchApi = async () => {
        try {
            const response = await axios.get(URL); // Mengirimkan request GET ke URL
            setData(response.data); // Menyimpan data dari response ke state
        } catch (error) {
            setError("Error: " + error.message); // Menangkap error dan menyimpan pesan error
        } finally {
            setLoading(false); // Menandakan loading selesai di akhir proses (sukses/gagal)
        }
    };

    // useEffect untuk memanggil fetchApi saat komponen pertama kali dirender
    useEffect(() => {
        fetchApi(); // Memanggil fungsi fetchApi
    }, []); // Array kosong untuk merender data hanya satu kali

    return (
        <>
            <strong>Fetch Api With Axios</strong>
            {/* Jika terjadi error, tampilkan pesan error, jika loading tampilkan "Loading...",
            jika data tersedia, tampilkan data dalam bentuk list */}
            {
                error ? (
                    <p>{error}</p>
                ) : loading ? (
                    <p>Loading...</p>
                ) : (
                    data.map((datas, index) => (
                        <ul key={datas.id}>
                            <strong>{index + 1}</strong>
                            <li><strong>Name: </strong>{datas.name}</li>
                            <li><strong>Username: </strong>{datas.username}</li>
                            <li><strong>Email: </strong>{datas.email}</li>
                        </ul>
                    ))
                )
            }
        </>
    );
}