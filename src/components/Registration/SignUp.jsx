import React from "react";

const SignUp=({setSignInActive})=>{

    return(
        <div className="auth-signup">
            <input className="auth-sign-up-name" type="text" name=""  placeholder="First Name"  />
            <input className="auth-sign-up-name" type="text" name="" placeholder="Last Name" />
            <input className="auth-sign-up-input" type="email" name="" placeholder="Enter Email" />
            <input className="auth-sign-up-input" type="password" name="" id="" placeholder="Password"/>
            <input className="auth-sign-up-input" type="password" name="" id="" placeholder="Repeat Password"/>
            <button className="auth-sign-up-button-general" >SIGN UP</button>
            <hr className="auth-sign-up-hr" />
            <div className="auth-sign-up-or"> OR </div>
            <button className="auth-sign-up-button-social">GOOGLE SIGN IN</button>
            <p>ALREADY HAVE AN ACCOUNT? <button className="signin-migrator" onClick={async()=>{await setSignInActive(true)}}>SIGN IN</button></p>

        </div>
    )
}

export default SignUp;