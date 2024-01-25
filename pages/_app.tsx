import { FirstLoadCtxProvider } from "../providers/first-load";
import "../styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
   return (
      <FirstLoadCtxProvider>
         <Component {...pageProps} />;
      </FirstLoadCtxProvider>
   );
}
