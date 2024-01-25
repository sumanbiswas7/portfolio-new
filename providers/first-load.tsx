import React, { createContext, useState } from "react";

export const FirstLoadContext: any = createContext(true);

export function FirstLoadCtxProvider({ children }: { children: any }) {
   const [firstLoad, setFirstLoad] = useState({ views: 0, loaded: false });

   return <FirstLoadContext.Provider value={[firstLoad, setFirstLoad]}>{children}</FirstLoadContext.Provider>;
}
