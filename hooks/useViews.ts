import axios from "axios";
import { useEffect, useState } from "react";

export default function useViews() {
    const [totalViews, setTotalViews] = useState(0)

    useEffect(() => {

        getViews()

    }, [])

    return [totalViews]


    async function getViews() {
        const URL = "https://sumanbiswas-server.onrender.com/views"
        try {
            const res = await axios.get(URL, {
                headers: {
                    'Access-Control-Allow-Origin': true,
                }
            })
            const views = res.data.views
            setTotalViews(views + 1)
            await updateViews(views)

        } catch {
            return setTotalViews(0)
        }
    }

    async function updateViews(count: number) {
        const URL = `https://sumanbiswas-server.onrender.com/views?count=${count}`
        try {
            await axios.post(URL, {
                headers: {
                    'Access-Control-Allow-Origin': true,
                }
            })
        } catch {
            return console.error("error: updating views count")
        }
    }
}


