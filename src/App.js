import Login from 'screens/login';
import Home from './screens/home';
// import Navbar from 'components/navbar';
import {HashRouter,Routes,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginHandle from 'components/login-handle';
import Weather from 'screens/weather';

function App() {
  return (
    <div>
      <HashRouter>
      <ToastContainer />
      <LoginHandle/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="login" element={<Login/>}/>
        <Route exact path="weather" element={<Weather/>}/>
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
