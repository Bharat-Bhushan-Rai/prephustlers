import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Registration/Auth";
import Home from "./pages/Home/Home";
import Header from "./components/Home/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./Routes/ProtectedRoutes";
import UserContext from "./context/userContext";
import User from "./pages/User/User";
import IndividualPost from "./pages/Post/Post";
import { useState } from "react";
function App() {
  // const [user,setUser]=useState({firstname:"",lastname:"",image:""});
  const [firstname,setFirstname]=useState(null);
  const [lastname,setLastname]=useState(null);
  const [image,setImage]=useState(null);
  return (
    <div className="App">
      <UserContext.Provider value={{firstname, setFirstname,lastname,setLastname,image,setImage}}>
        <Header />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/user" element={<User />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/post/:id" element={<IndividualPost />} />
          </Route>

          <Route>
            <Route path="/auth" element={<Auth />} />
          </Route>
        </Routes>
      </UserContext.Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
