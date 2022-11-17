import axios from "axios"
import { useEffect, useState } from "react"


export async function pushSigner() {
    const URL = `https://sumanbiswas-server.onrender.com/ip`
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apiKey': 'b002705f0e9bf870eba746b0388dcb64fa553015174af9b41a3d7b18'
        }
    }

    try {
        const res = await axios.post(URL, {}, config)
        console.log("new signer", res)

    } catch (error) {
        console.log(error)
    }

}
