import React from 'react'



export default class DadosGerais extends React.Component{

   

    render() {

        

        return(

            <div>
                 <h1>ETAPA 1 - Dados Gerais</h1>

                    <form >
                        <label>
                            <p> 1. Qual o seu nome ? </p>
                            <input type = "text" name="Nome" />
                        </label>
                        <label >
                            <p> 2. Qual sua idade ?</p>
                            <input type= "number" name='Idade' />
                        </label>
                        <label>
                            <p> 3. Qual seu e-mail ?</p>
                            <input type='email' name='Email'  />
                        </label>
                        <label>
                            <p> 4. Qual a sua escolaridade ? </p>
                            <select>
                                <option>Ensino médio completo</option>
                                <option>Ensino médio incompleto</option>
                                <option>Ensino superior completo</option>
                                <option>Ensino superior incompleto</option>
                            </select>  
                        </label>
                        
    
                    </form>

            </div>

           
        )
            
        

    };

};