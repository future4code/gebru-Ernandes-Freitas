import {useNavigate} from "react-router-dom"
import {backPage,createTripPageViagens} from "../routes/coordinator"

function AdminHomePage () {
  const navigate = useNavigate()
    return (
      <div>
          AdminHomePage
          <button onClick={()=> backPage(navigate)}>Voltar</button>
          <button  onClick={()=> createTripPageViagens(navigate)}>Criar Viagem </button>
      </div>
    );
  };
  
  export default AdminHomePage;