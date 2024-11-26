import { useEffect, useState } from "react"

export default function FetchApi() {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const URL = 'https://jsonplaceholder.typicode.com/users';

    const fetchApi = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();

            setData(data);
            console.log(response);
            setLoading(false);
        } catch (e) {
            setError("Error : " + e.message);
        }
    }

    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <>
            <strong>Fetch Api With Try Catch</strong>
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