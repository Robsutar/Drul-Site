import { useRouter } from "next/router"
import { useState } from "react";
const axios = require('axios');
export default function Verify(){
    const [message,changeMessage] = useState('Sending...')

    const router = useRouter()
    axios.post('/api/accountVerify',{id:router.query.id})
    .then((response)=>{
        changeMessage(response.data.message)
    })
    .catch((error)=>{
        changeMessage(error.response.data.message)
    })
    return (
        <div className="container">
            <div>{message}</div>
            <button className="btn" type="button">Log in</button>
        </div>
    )
}