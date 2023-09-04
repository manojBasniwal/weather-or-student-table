import Login from 'screens/login';
import Home from './screens/home';
// import Navbar from 'components/navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginHandle from 'components/login-handle';
import Weather from 'screens/weather';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer />
      <LoginHandle/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="login" element={<Login/>}/>
        <Route exact path="weather" element={<Weather/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
