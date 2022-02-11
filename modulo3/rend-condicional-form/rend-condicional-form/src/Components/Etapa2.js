import React from 'react'


export default class InformacaoDoEnSup extends React.Component {

    render(){

        return(
            <div>
                <h1> ETAPA 2 - Informações do Ensino Superior</h1>

                <form>
                    <label>
                        <p> 5. Qual curso?</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>6. Qual a unidade de ensino ?</p>
                        <input type="text"/>
                    </label>

                    

                </form>
            </div>
        )
    };


};