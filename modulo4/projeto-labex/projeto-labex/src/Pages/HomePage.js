
import React from "react";
import {useNavigate} from "react-router-dom"
import {listTripsPageViagens,adminHomePageViagens} from "../routes/coordinator"


function HomePage () {

  const navigate = useNavigate()
  return (
    <div>
        <h1>labex</h1>
        <button onClick={()=>listTripsPageViagens(navigate)} > ver viagens </button>
        <button onClick={()=>adminHomePageViagens(navigate)}> login </button>
        
    </div>
  );
};

export default HomePage;
