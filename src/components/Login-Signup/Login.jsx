import { useState } from "react"

const Login = () => {
  const [ user, setUser ] = useState('');
  const [ userPassword, setUserPassword ]= useState('');
  return (
    <div className="login">
      <div className="login-left-form">
          <form>
            <div>
              <label htmlFor="userName">Username:</label>
              <input 
                type="text" 
                name="userName" 
                id="userName" 
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password" required/>
            </div>
            <div>
              <input type="submit" value="" />
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