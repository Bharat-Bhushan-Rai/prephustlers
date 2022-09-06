import Post from "../../components/Home/Post";
import { useContext, useEffect } from "react";
import { baseURL } from "../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext";

const User=()=>{
    let navigate=useNavigate();
  const { firstname, setFirstname,lastname,setLastname,image,setImage } = useContext(UserContext);
  useEffect(() => {
    // const
    fetch(baseURL + "/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("JWTtoken")}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.success === true) {
            setFirstname(result.data.user.firstname);
            setLastname(result.data.user.lastname);
            setImage(result.data.user.image);
            console.log(result.data.user);
          } else {
            toast.error(result.message);
          }
        },
        (error) => {
          // console.log(error);
          toast.error('Unauthorised Access');
          localStorage.clear();
          navigate('/auth');
        }
      );
  }, []);
    return(
        <div className="user-content-container">
            <LeftSide/>
            <div className="user-post-container">

                <Post/>
                <Post/>
            </div>
        </div>
    )
}
export default User;

const LeftSide=()=>{

    const Uploaddp =async(e)=>{
        const formData= new FormData();
        formData.append('file',e.target.files[0]);
        console.log(formData);
        fetch(baseURL+'/upload',{
            method:"POST",
            headers:{
                Authorization: `Bearer ${localStorage.getItem("JWTtoken")}`,
            },
            body:formData
        }).then((res)=>{console.log(res); return res.json()})
        .then((result)=>{
            console.log(result);
            if(result.success===true){
                toast.success('uploaded successfully');
            }
            else{
                toast.error('something went wrong');
            }
        })
        .catch((error)=>{
          // toast.error(error);
          toast.info('Unauthorised access');
          window.location.reload();
          // console.log(error);
        })
    }
    return(
        <div className="user-profile">
                <div className="user-profile-image">

                    <img src="/images/luser128.png" alt="" />
                    <div className="add-dp">
                        <input type="file" name="" id="file" accept="image/*" onChange={(e)=>{Uploaddp(e)}}/>
                        <label htmlFor="file">
                            <i class="fa-solid fa-camera "></i>
                        </label>
                    </div>
                </div>
                <div className="user-profile-detail">
                    <p>Bharat Bhushan Rai</p>
                    <p>Post 12</p>
                    <p>Total Likes 15</p>
                </div>
        </div>
    )
}