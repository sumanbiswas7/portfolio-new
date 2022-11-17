import { useContext, useEffect, useState } from "react";
import { goOnline, get, ref, goOffline, set } from "firebase/database";
import { database } from "../server/firebase";
import { FirstLoadContext } from "../pages/_app";

export default function useViews() {
    const [totalViews, setTotalViews] = useState(0)
    const [firstLoad, setFirstLoad] = useContext<any>(FirstLoadContext)

    useEffect(() => {
        if (!firstLoad.loaded) getViews()
    }, [])

    return [totalViews]

    async function getViews() {
        goOnline(database)
        const data = await get(ref(database, "/views"))
        const views = data.val().views || 0
        // setTotalViews(views + 1)
        setFirstLoad({ loaded: true, views: views + 1 })
        updateViews(views)
    }

    async function updateViews(count: number) {
        const intCount = parseInt(<string><unknown>count)
        await set(ref(database, "/views"), { views: intCount + 1 })
        setFirstLoad(false)
        goOffline(database)
    }
}


