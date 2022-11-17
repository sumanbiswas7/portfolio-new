import { useEffect, useState } from "react"
import { database } from "../server/firebase";
import { goOnline, get, ref, goOffline, set } from "firebase/database";
import { useContext } from "react";
import { FirstLoadContext } from "../pages/_app";

export default function initFirstLoad() {
    const [firstLoad, setFirstLoad] = useContext<any>(FirstLoadContext)

    useEffect(() => {
        if (!firstLoad.loaded) {
            getViews()
        }
    }, [])

    async function getViews() {
        goOnline(database)
        const data = await get(ref(database, "/views"))
        const views = data.val().views || 0
        setFirstLoad({ views: views + 1, loaded: true })
        updateViews(views)
        goOffline(database)
    }

    async function updateViews(count: number) {
        const intCount = parseInt(<string><unknown>count)
        await set(ref(database, "/views"), { views: intCount + 1 })
        setFirstLoad(false)
        goOffline(database)
    }
}

