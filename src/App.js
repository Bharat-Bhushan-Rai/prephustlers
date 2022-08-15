import './App.css';
import {Route,Routes} from 'react-router-dom';
import Auth from './pages/Registration/Auth';
import Home from './pages/Home/Home';
import Header from './components/Home/Header';
import User from './pages/User/User';
function App() {
  return (
    <div className="App">
        <Header/>
       <Routes>
        <Route>
          <Route path='/' element={<Home/>}/>
        </Route>
        <Route>
          <Route path='/user' element={<User/>}/>
        </Route>

        <Route> 
          <Route path='/auth' element={<Auth/>}/>
        </Route>
      </Routes> 

    </div>
  );
}

export default App;
