import { useEffect } from "react"
import { database } from "./firebase";
import { goOnline, get, ref, goOffline, set, push } from "firebase/database";
import { useContext } from "react";
import { FirstLoadContext } from "../pages/_app";
import moment from "moment";
import { localSigners } from "../helpers/localSigners";

export default function initFirstLoad() {
    const [firstLoad, setFirstLoad] = useContext<any>(FirstLoadContext)

    useEffect(() => {
        if (!firstLoad.loaded) {
            initLoad() // gets view, updates view count , calls pushSigner
        }
    }, [])

    async function initLoad() {
        try {
            goOnline(database)
            const data = await get(ref(database, "/views"))
            const views = data.val().views || 0
            setFirstLoad({ views: views + 1, loaded: true })
            updateViews(views)

        } catch (error) {
            console.log("initLoad():", error)
        }
    }

    async function updateViews(count: number) {
        try {
            const intCount = parseInt(<string><unknown>count)
            await set(ref(database, "/views"), { views: intCount + 1 })
            // postSigner() 

        } catch (error) {
            console.log("updateViews():", error)
        }
    }

    async function postSigner() {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        const URL = `https://api.ipdata.co/?api-key=${apiKey}`

        try {
            const res = await fetch(URL)
            const info = await res.json()
            const date = moment().utcOffset("+05:30").format('h:mm A, Do MMMM YYYY')
            const asn_provider = info?.asn?.name;
            if (asn_provider in localSigners) return console.log("postSigner(): local signer")
            push(ref(database, "/users"), { date, info })
            goOffline(database)

        } catch (error) {
            console.log("postSigner(): ", error)
        }
    }
}

