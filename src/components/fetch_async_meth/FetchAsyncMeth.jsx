import { useEffect, useState } from "react";

export default function FetchAsyncMeth() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const URL = 'https://jsonplaceholder.typicode.com/users'

    const fetchApiAsyncMeth = () => {
        fetch(URL)
        .then(response => response.json())
        .then(data => setData(data))
        .catch((e) => setError("Error: " + e.message));
        setLoading(false);
        console.log(data);
    }

    useEffect(() => {
        fetchApiAsyncMeth();
    }, [])

    return (
        <>
            <strong>Fetch Api With Async Method</strong>
            {error ? <p>{error}</p> : loading ? <p>Loading...</p> : 
                data.map((datas, index) => (
                    <ul key={datas.id}>
                        <strong>{index + 1}</strong>
                        <li><strong>Name: </strong>{datas.name}</li>
                        <li><strong>Username: </strong>{datas.username}</li>
                        <li><strong>Email: </strong>{datas.email}</li>
                    </ul>
                ))
            }
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