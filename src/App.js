import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Registration/Auth";
import Home from "./pages/Home/Home";
import Header from "./components/Home/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./Routes/ProtectedRoutes";
import User from "./pages/User/User";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<ProtectedRoute/>}>
          
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<ProtectedRoute/>}>
          <Route path="/user" element={<User />} />
        </Route>

        <Route >
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
