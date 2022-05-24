import {LoginPageViagens} from "../routes/coordinator"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useProtectedPage = () => {

  const navigate = useNavigate ();

  useEffect (()=>{

    const token =  window.localStorage.getItem("token");

    if (token === null) {

      LoginPageViagens(navigate);
    }

  },[navigate]);
   
  };
  
 