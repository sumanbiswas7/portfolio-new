import { useEffect, useState } from "react";
import { goOnline, get, ref, goOffline, set } from "firebase/database";
import { database } from "../server/firebase";

export default function useViews() {
    const [totalViews, setTotalViews] = useState(0)

    useEffect(() => {
        getViews()
    }, [])

    return [totalViews]


    async function getViews() {
        goOnline(database)
        const data = await get(ref(database, "/views"))
        const views = data.val().views || 0
        setTotalViews(views + 1)
        updateViews(views)
    }

    async function updateViews(count: number) {
        const intCount = parseInt(<string><unknown>count)
        await set(ref(database, "/views"), { views: intCount + 1 })
        goOffline(database)
    }
}


