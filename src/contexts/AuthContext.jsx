import { createContext, useState } from "react"

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ token, setToken ] = useState(null);
  return (
      <AuthContext.Provider values={{ isLoggedIn, setIsLoggedIn, token, setToken }}>
        { children }
      </AuthContext.Provider>
  )
}

export default AuthProvider