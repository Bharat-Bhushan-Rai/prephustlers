import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import { baseURL } from "../../api";
const SignIn=({setSignInActive})=>{
    let navigate=useNavigate();
    const [formData,setFormData]=useState({email:"",password:""});
    const loginHandler=async(e)=>{
        e.preventDefault();
        if(formData.email && formData.password){
            let result=await fetch(baseURL+'/auth/login/local',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formData)
            })
            
            let res=await result.json();
            if(res.success===true){

                window.localStorage.setItem('JWTtoken',res.data.token);
                navigate('/');
                
            }
            else{
                toast.error('user credentials are wrong');
            }


            console.log(res);
        }else{
            toast.error('Required Data Not Filled');
        }
    }
    return(
        <div className="auth-signin">
            <input type="email" name=""  placeholder="Enter Your Email" onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
            <input type="password" name="" placeholder="Enter Your Password" onChange={(e)=>setFormData({...formData,password:e.target.value})}/>
            <button className="auth-signin-button-general" onClick={(e)=>loginHandler(e)}>SIGN IN</button>
            <hr />
            <div className="auth-sign-or">OR</div>
            <button className="auth-signin-button-social">GOOGLE SIGN IN</button>
            <p>Don't have account ? <button className="auth-signup-migrator" onClick={async()=>{await setSignInActive(false)}}>SIGN UP</button></p>
        </div>
    )
}

export default SignIn;