import { useEffect, useState } from "react"
import axios from 'axios';

export default function FetchingAxiosMethod() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const URL = 'https://jsonplaceholder.typicode.com/users';

    const fetchApi = () => {
        axios.get(URL)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            setError('Error: ' + error.message);
        });

        setLoading(false);
    }

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <>
                <strong>Fetch Api With Axios</strong>
            {
                error ? <p>Error</p> : loading ? <p>Loading...</p> : 
                data.map((datas, index) => (
                    <ul key={datas.id}>
                        <strong>{index + 1}</strong>
                        <li><strong>Name: </strong>{datas.name}</li>
                        <li><strong>Username: </strong>{datas.username}</li>
                        <li><strong>Email: </strong>{datas.email}</li>
                    </ul>
                ))
            }
        </>
    )
}