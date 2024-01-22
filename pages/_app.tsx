import { useEffect, useState } from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const handlePageLoad = () => {
         // Update the state when the entire page is loaded
         setLoading(false);
         console.log("Loaded");
      };

      window.addEventListener("load", handlePageLoad);

      return () => {
         window.removeEventListener("load", handlePageLoad);
      };
   }, []);

   if (loading) return <p>Please wait...</p>;

   return <Component {...pageProps} />;
}
