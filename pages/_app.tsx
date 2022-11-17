import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";

export const FirstLoadContext: any = createContext(true);

export default function App({ Component, pageProps }: AppProps) {
  const [firstLoad, setFirstLoad] = useState({ views: 0, loaded: false });

  return (
    <FirstLoadContext.Provider value={[firstLoad, setFirstLoad]}>
      <Component {...pageProps} />
    </FirstLoadContext.Provider>
  );
}
