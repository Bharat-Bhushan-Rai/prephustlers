import SignIn from "../../components/Registration/SignIn";
import SignUp from "../../components/Registration/SignUp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Auth = () => {
    let navigate= useNavigate();
  useEffect(() => {
    const decodedJwt = parseJwt(localStorage.getItem("JWTtoken"));
    console.log(decodedJwt);
    if (
      localStorage.getItem("JWTtoken") 
      // &&
      // decodedJwt.exp * 1000 > Date.now()
    ) {
        // console.log('fdjsl');
        navigate('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [signInActive, setSignInActive] = useState(true);
  return (
    <div className="auth-container">
      <div className="auth-container-tabs">
        <div
          className={
            "auth-container-tabs-tab " +
            (signInActive ? "auth-type-active" : "")
          }
          onClick={async () => {
            await setSignInActive(true);
          }}
        >
          SIGN IN
        </div>
        <div
          className={
            "auth-container-tabs-tab " +
            (!signInActive ? "auth-type-active" : "")
          }
          onClick={async () => {
            await setSignInActive(false);
          }}
        >
          SIGN UP
        </div>
      </div>
      {signInActive ? (
        <SignIn setSignInActive={setSignInActive} />
      ) : (
        <SignUp setSignInActive={setSignInActive} />
      )}
    </div>
  );
};

export default Auth;

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
