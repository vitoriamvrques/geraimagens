import React from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
export default class Busca extends React.Component{
    
    state = {
        termoDeBusca: ''
    }

onTermoAlterado = (event) => {
    console.log(event.target.value)
} 

    render(){
        return(
            <div className="flex flex-column">
                <IconField iconPosition='left'>
                    <InputIcon 
                    className='pi pi-search'/>
                    <InputText
                    className='w-full'
                    onChange={this.onTermoAlterado}
                    placeholder='Buscar...'/>

                    </IconField>
                    <Button
                        className='mt-2 p-button-outlined'
                        label='OK'/>
                    
            </div>
        )
    }
}

Busca.defaultProps = {
    dica: "Digite algo que deseja ver..."
}