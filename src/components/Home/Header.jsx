import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Header=()=>{
    let navigate=useNavigate();
    const[userDropDown,setUserDropDown]=useState(false);
    const isloggedIn=false;
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
                isloggedIn ?
                (<div className="home-header-user-info" onClick={async()=>{await setUserDropDown(!userDropDown)}}>
                    <div>
                        <img src="/images/user.png" alt="" className="home-header-user-image" />
                    </div>
                    <div className="home-header-user-name">
                        <p>Python</p>
                    </div>
                    <div>
                        <img src="/images/down-arrow.png" alt="" className="home-header-user-dropdown" />
                    </div>
                </div>)
                :(<HomeHeaderSignIn/>)
            }
            {userDropDown && <UserClick setUserDropDown={setUserDropDown}/>}
        </div>
    )
}

export default Header;

const UserClick=({setUserDropDown})=>{
    return(
        <div className="user-info-click">
            <div className="user-info-click-child" onClick={async()=>await setUserDropDown(false)}>
                Show Profile
            </div>
            <hr />
            <div className="user-info-click-child" onClick={async()=>await setUserDropDown(false)}>
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