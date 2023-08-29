import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { LOGIN_DETAILS } from "../../constants";

function LoginHandle() {
    const navigate = useNavigate()

    useEffect(()=>{
        const loginData = JSON.parse(localStorage.getItem("LOGIN_DETAILS"));
        if(!loginData || (loginData?.name !== LOGIN_DETAILS.name && loginData?.password !== LOGIN_DETAILS.password)){
            navigate('/login')
        }else{
            navigate('/')
        }
    }, []);
  return null
}

export default LoginHandle
