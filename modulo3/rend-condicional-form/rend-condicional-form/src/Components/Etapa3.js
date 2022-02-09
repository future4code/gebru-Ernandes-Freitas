import React from 'react'
 

export default class InfoGeraisEnsino extends React.Component {

    render(){
        return(

            <div>
                <h1> ETAPA 3 - Informações Gerais de Ensino </h1>

                <form>
                    <label>
                        <p>5. Por que você não terminou um curso de graduação?</p>
                        <input type="text"/>
                    </label>
                    <label>
                        <p>6.Você fez algum curso complementar ?</p>
                        <select>
                            <option>Nenhum</option>
                            <option>Curso Técnico</option>
                            <option>Curso de inglês</option>
                        </select>
                    </label>
                    
                </form>
            </div>

        )
    }



}
