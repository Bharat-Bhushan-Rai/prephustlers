import Post from "../../components/Home/Post";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseURL } from "../../api";
import UserContext from "../../context/userContext";


const Home = () => {
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
          console.log(result);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home-content-container">
      <Post />
    </div>
  );
};

export default Home;
