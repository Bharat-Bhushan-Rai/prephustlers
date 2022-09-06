import React from "react";
import {toast} from "react-toastify";
import { baseURL } from "../../api";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import UserContext from "../../context/userContext";


const SignUp=({setSignInActive})=>{

    const {setUser}=useContext(UserContext);
    let navigate=useNavigate();
    const [formData,setFormData]=useState({firstname:"",lastname:"",email:"",password:"",repassword:""})
    const uploadHandler=async(e)=>{
        console.log(e);
        e.preventDefault();
        console.log(formData);
        if(
            formData.firstname &&
            formData.lastname &&
            formData.email &&
            formData.password && 
            formData.repassword &&
            formData.password===formData.repassword
        ){
            // post data
            let result=await fetch(baseURL+'/auth/register/local',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formData)
            })
            let res=result.json();
            if(res.success===true){
                window.localStorage.setItem('JWTtoken',res.data.token);
                setUser(res.data.user);
                navigate('/');
            }
            console.log(res);
        }
        else if(formData.password!==formData.repassword){

            toast('password did not match');
        }
        else{
            toast("Please enter valid details");
            console.log('invalid');
        }

    }
    return(
        <div className="auth-signup">
            <input className="auth-sign-up-name" type="text" name=""  placeholder="First Name *" onChange={(e)=>{setFormData({...formData,firstname:e.target.value})}} />
            <input className="auth-sign-up-name" type="text" name="" placeholder="Last Name *" onChange={(e)=>{setFormData({...formData,lastname:e.target.value})}}/>
            <input className="auth-sign-up-input" type="email" name="" placeholder="Enter Email *" onChange={(e)=>{setFormData({...formData,email:e.target.value})}}/>
            <input className="auth-sign-up-input" type="password" name="" placeholder="Password *" onChange={(e)=>{setFormData({...formData,password:e.target.value})}}/>
            <input className="auth-sign-up-input" type="password" name=""  placeholder="Repeat Password *" onChange={(e)=>{setFormData({...formData,repassword:e.target.value})}}/>
            <button className="auth-sign-up-button-general" onClick={(e)=>uploadHandler(e)}>SIGN UP</button>
            <hr className="auth-sign-up-hr" />
            <div className="auth-sign-up-or"> OR </div>
            <button className="auth-sign-up-button-social">GOOGLE SIGN IN</button>
            <p>ALREADY HAVE AN ACCOUNT? <button className="signin-migrator" onClick={async()=>{await setSignInActive(true)}}>SIGN IN</button></p>

        </div>
    )
}

export default SignUp;
