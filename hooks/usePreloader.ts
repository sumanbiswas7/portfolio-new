import { useEffect, useState } from "react";

export function usePreloader() {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const handlePageLoad = () => {
         // Update the state when the entire page is loaded
         setLoading(false);
      };

      window.addEventListener("load", handlePageLoad);

      return () => {
         window.removeEventListener("load", handlePageLoad);
      };
   }, []);

   return { loading };
}
