import axios from "axios";
import{useEffect ,useState} from "react"
// import { useParams } from "react-router-dom";


function TripDetailsPage (id) {
  
     
      const [detalViagens,setDetalViagens] = useState ([])
      
    useEffect (()=>{

      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/ernandes-freitas-gebru/trip/id`
      const headers = {
        headers: {
          auth: localStorage.getItem("token")
        }
      };

      axios
      .get(url,headers)
      .then((response) => {
        setDetalViagens(response.data.trip);
      })
      .catch((error) => {
        console.log("ERRO:",error.response);
      });
      

    },[])

      const detal = detalViagens.map((viagens)=>{
        
            return (
              <div key={viagens.id} onClick= {()=> TripDetailsPage(viagens.id)} >
                <p><strong>Nome:</strong> {viagens.name}</p>
                <p> <strong>Descrição:</strong> {viagens.description} </p>
                <p> <strong>Planeta:</strong> {viagens.planet} </p>
                <p> <strong>Duração:</strong> {viagens.durationInDays} </p>
                <p> <strong>Data:</strong> {viagens.date}</p>
             </div>
            )
            
        });


      return (
        <div>
          
          Detalhes da viagem!!!
          {detal}
          
        </div>
      );
    }
  
  export default TripDetailsPage;