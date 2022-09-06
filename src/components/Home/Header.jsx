import { useNavigate } from "react-router-dom";
import { useState,useContext } from "react";
import CreatePostModal from "./CreatePostModal";
import UserContext from "../../context/userContext";

const Header=()=>{
    let navigate=useNavigate();
    const[userDropDown,setUserDropDown]=useState(false);
    const[CreateModal,setCreateModal]=useState(false);
    const {firstname}=useContext(UserContext);
    return(
        <div className="home-header">
            <div className="home-header-logo-container" onClick={()=>navigate('/')} >
                <div>

                <img className="home-header-logo" src="/images/running.png" alt="PrepHuslers" srcset="" />
                </div>
                <div>

                    <h2>PREPHUSTLERS</h2>
                </div>
            </div>
            {
                firstname ?
                (<div className="home-header-user-info" >
                    <div style={{'background':'#efefef','display':'flex','alignItems':'center','padding':'10px'}} onClick={()=>{setCreateModal(!CreateModal)}}>
                        Create Post &nbsp;
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div onClick={async()=>{await setUserDropDown(!userDropDown)}}> 
                        <img src="/images/user.png" alt="" className="home-header-user-image" />
                    </div>
                    <div className="home-header-user-name" onClick={async()=>{await setUserDropDown(!userDropDown)}}>
                        <p>{firstname}</p>
                    </div>
                    <div onClick={async()=>{await setUserDropDown(!userDropDown)}}>
                        <img src="/images/down-arrow.png" alt="" className="home-header-user-dropdown" />
                    </div>
                </div>)
                :(<HomeHeaderSignIn/>)
            }
            {userDropDown && <UserClick setUserDropDown={setUserDropDown}/>}
            <CreatePostModal CreateModal={CreateModal} setCreateModal={setCreateModal}/>
        </div>
    )
}

export default Header;

const UserClick=({setUserDropDown})=>{
    let navigate=useNavigate();
    return(
        <div className="user-info-click">
            <div className="user-info-click-child" onClick={async()=>{await setUserDropDown(false);navigate('/user')}}>
                Show Profile
            </div>
            <hr />
            <div className="user-info-click-child" onClick={async()=>{await setUserDropDown(false);window.localStorage.clear();window.location.reload();}}>
                Log Out
            </div>
        </div>
    )
}

const HomeHeaderSignIn=()=>{
    return(
        <button className="home-header-sign-in">SignIn</button>
    )
}