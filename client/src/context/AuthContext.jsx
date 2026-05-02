import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("portfolio_token") || "");

  const value = useMemo(
    () => ({
      token,
      isAuthed: Boolean(token),
      setToken: (newToken) => {
        setToken(newToken);
        localStorage.setItem("portfolio_token", newToken);
      },
      logout: () => {
        setToken("");
        localStorage.removeItem("portfolio_token");
      }
    }),
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}