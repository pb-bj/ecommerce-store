import { useState, useContext } from "react"
import './Login.scss'
import { AuthContext } from "../../contexts/AuthContext";


const Login = () => {
  const [ userName, setUserName ] = useState('');
  const [ userPassword, setUserPassword ]= useState('');

  const { userLogin } = useContext(AuthContext);

  const handleSignIn = () => {
    userLogin( userName, userPassword);
  }
  
  return (
    <div className="login">
      <div className="login-left-form">
          <form>
            <div>
              <label htmlFor="userName">Username:</label>
              <input 
                  type="text" 
                  name="userName" 
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  autoComplete="off"
                  required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input 
                  type="password" 
                  name="password"
                  value={userPassword} 
                  onChange={(e) => setUserPassword(e.target.value)}
                  autoComplete="off"
                  required
              />
            </div>
            <div>
              <input type="submit" value="Sign in" onClick={ handleSignIn }/>
            </div>
          </form>
      </div>
      <div className="login-image">
        {/* <img src="" alt="" /> */}
      </div> 
    </div>
  )
}

export default Login