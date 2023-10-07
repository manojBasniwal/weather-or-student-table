import {useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LOGIN_DETAILS } from "../../constants";

function LoginHandle() {
    const navigate = useNavigate('');
    const location = useLocation('');


    useEffect(()=>{
        const loginData = JSON.parse(localStorage.getItem("LOGIN_DETAILS"));
        if(!loginData || (loginData?.name !== LOGIN_DETAILS.name && loginData?.password !== LOGIN_DETAILS.password)){
            navigate('/login')
        }else{
            if(location.pathname === "/login"){
                navigate('/')
            }
            // navigate('/')
        }
    }, []);
  return null
}

export default LoginHandle
