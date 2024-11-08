import React, { useEffect, useState, useSyncExternalStore } from 'react';
import "./index.css"

import FileOpenIcon from '@mui/icons-material/FileOpen';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import InsertPageBreakIcon from '@mui/icons-material/InsertPageBreak';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ListIcon from '@mui/icons-material/List';

const insert = () => {
    window.location = "entrada_de_nota"
}

const cancel = () => {
    window.location = "cancelar_nota"
}

const registeritem = () => {
    window.location = "cadastro_de_item"
}

const transfer = () => {
    window.location = "transferencias"
}



function Home() {
    return( 
        <div className='container'>
            <header className='main-header'>
                <nav className='nav'>
                    <ul>
                        <li onClick={insert}>Inserir NF</li>
                        <li>Remover NF</li>
                    </ul>
                </nav>
            </header>

            <div className='infos'>
                <h1 className='main-title'>NF Tools</h1>
                <h2 className='subtitle'>Ferramenta para auxiliar na entrada de dados no sistema</h2>
            </div>

            <div className='tools-container'>
                <button className='b1' onClick={insert}>
                    <NoteAddIcon className='icon'/>
                    <h3 className='title'>Entrada de nota</h3>
                    <p className='inf'>Insira todos os dados necessários, como CNPJ, data e itens.</p>
                </button>
                <button className='b2' onClick={cancel}>
                    <InsertPageBreakIcon className='icon'/>
                    <h3 className='title'>Cancelar</h3>
                    <p className='inf'>Remova todos os dados necessários, como CNPJ, data e itens.</p>
                </button>
                <button className='b3' onClick={registeritem}>
                    <AppRegistrationIcon className='icon'/>
                    <h3 className='title'>Cadastro de item</h3>
                    <p className='inf'>Insira os dados essenciais para registrar um novo item.</p>
                </button>
                <button></button>
                <button></button>
                <button className='b6' onClick={transfer}>
                    <UploadFileIcon className='icon'/>
                    <h3 className='title'>Transferências</h3>
                    <p className='inf'>Realiza a transferência de produtos do estoque atual para outra unidade.</p>
                </button>
                <button className='b7'>
                    <ListIcon className='icon'/>
                    <h3 className='title'>Triagem</h3>
                    <p className='inf'>Solicitação para repor ou ajustar a quantidade de itens no estoque conforme a demanda.</p>
                </button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>

            </div>

            
        </div>
    )
}

export default Home 