import { createContext, useState } from "react"

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ user, setUser ] = useState(null);

    const userLogin = (userName, password) => {
      if( userName !== '' && password !== '') {
        setIsLoggedIn(true);
      }
    }

    const userLogout = () => {
      setIsLoggedIn(false);
    }
  return (
      <AuthContext.Provider value={{ userLogin, userLogout, isLoggedIn  }}>
        { children }
      </AuthContext.Provider>
  )
}

export default AuthProvider