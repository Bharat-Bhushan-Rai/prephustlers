import SignIn from "../../components/Registration/SignIn";
import SignUp from "../../components/Registration/SignUp";
import {useState} from 'react';
const Auth=()=>{
    const[signInActive,setSignInActive]=useState(true);
    return(
        
         <div className="auth-container">
            <div className="auth-container-tabs">
                <div className={"auth-container-tabs-tab "+(signInActive ?"auth-type-active":"")} onClick={async()=>{await setSignInActive(true)}} >
                    SIGN IN
                </div>
                <div className={"auth-container-tabs-tab "+(!signInActive ?"auth-type-active":"")} onClick={async()=>{await setSignInActive(false)}} >
                    SIGN UP
                </div>
            </div>
            {signInActive ?<SignIn setSignInActive={setSignInActive}/>:<SignUp setSignInActive={setSignInActive}/>}
         </div>
        
    )
}
 
export default Auth;