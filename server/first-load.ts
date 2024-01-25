import { useContext, useEffect } from "react";
import { database } from "../lib/firebase";
import { goOnline, get, ref, set } from "firebase/database";
import { FirstLoadContext } from "../providers/first-load";

export default function initFirstLoad() {
   const [firstLoad, setFirstLoad] = useContext<any>(FirstLoadContext);

   useEffect(() => {
      if (!firstLoad.loaded) {
         initLoad(); // gets view, updates view count
      }
   }, []);

   async function initLoad() {
      try {
         goOnline(database);
         const data = await get(ref(database, "/views"));
         const views = data.val().views || 0;
         setFirstLoad({ views: views + 1, loaded: true });
         updateViews(views);
      } catch (error) {
         console.log("initLoad():", error);
      }
   }

   async function updateViews(count: number) {
      try {
         const intCount = parseInt(<string>(<unknown>count));
         await set(ref(database, "/views"), { views: intCount + 1 });
      } catch (error) {
         console.log("updateViews():", error);
      }
   }
}
