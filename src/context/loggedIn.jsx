import { createContext, useState } from "react";

export const loggedIncontext = createContext();
export function Loggedin({ children }) {
  let [logged, setLogged] = useState(false);
  return (
    <loggedIncontext.Provider value={{ logged, setLogged }}>
      {children}
    </loggedIncontext.Provider>
  );
}
