import "./login.scss"
import React from "react"
import {RiUserFill,RiLockFill} from "react-icons/ri"
const Login=()=>{


    return(
    <div className="login">
    <h1>LOGIN TO LIBRARY</h1>

<div className="loginBox">
 
<div className="loginForm">
<div className="emailBox">
< RiUserFill className="iconlg"/><input type="email" className="email"  placeholder="Email"/>
   
    </div>
    <div className="passwordBox">
<RiLockFill className="iconlg"/><input type="password" className="password"  placeholder="Password"/>
   
    </div>

    <p><a>Forgot your password?</a></p>
</div>  <div className="loginBtn">
        <button type="submit">LOG IN</button></div>  
    </div>
</div>
   
   
   
    )
}
export default  Login