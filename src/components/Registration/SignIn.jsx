import React from "react";

const SignIn=({setSignInActive})=>{

    return(
        <div className="auth-signin">
            <input type="email" name=""  placeholder="Enter Your Email"/>
            <input type="password" name="" placeholder="Enter Your Password" />
            <button className="auth-signin-button-general">SIGN IN</button>
            <hr />
            <div className="auth-sign-or">OR</div>
            <button className="auth-signin-button-social">GOOGLE SIGN IN</button>
            <p>Don't have account ? <button className="auth-signup-migrator" onClick={async()=>{await setSignInActive(false)}}>SIGN UP</button></p>
        </div>
    )
}

export default SignIn;