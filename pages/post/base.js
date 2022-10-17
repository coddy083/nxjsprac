import axios from "axios";
import { useEffect, useState } from "react"

export default function Base() {
    const [Welcome, setWelcome] = useState('Loading...');

    const BACKEND_URL = 'http://localhost:8000';

    useEffect(() => {
        axios.get(`${BACKEND_URL}/base/`)
            .then((res) => {
                setWelcome(res.data.message);
            })
            .catch((err) => {
                console.log(err);
            })
    }
        , []);


    return (
        <div>
            <h1>{Welcome}</h1>
            <div>헬로우 월드?</div>
        </div>
    )
}