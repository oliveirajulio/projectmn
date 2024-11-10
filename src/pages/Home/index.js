import React, { useEffect, useState, useSyncExternalStore } from 'react';
import "./index.css"

import FileOpenIcon from '@mui/icons-material/FileOpen';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import InsertPageBreakIcon from '@mui/icons-material/InsertPageBreak';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ListIcon from '@mui/icons-material/List';
import DescriptionIcon from '@mui/icons-material/Description';
import DifferenceIcon from '@mui/icons-material/Difference';
import AssignmentIcon from '@mui/icons-material/Assignment';

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

const info = () => {
    window.location = "informacoes_da_nota"
}

const triagem = () => {
    window.location = "triagem"
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
                <h1 className='main-title'>Ferramentas  online para auxiliar no sistema</h1>
                <h2 className='subtitle'>Ferramenta para auxiliar na entrada de dados no sistema, entrada de notas, cadastro de itens, transferências de mercadorias e separação de pedidos de mercadoria.</h2>
            </div>

            <div className='tools-container'>
                <button className='b1' onClick={insert}>
                    <NoteAddIcon className='icon'/>
                    <h3 className='title'>Entrada de nota</h3>
                    <p className='inf'>Insira todos os dados necessários, como CNPJ, data e itens.</p>
                </button>
                <button className='b2' onClick={cancel}>
                    <InsertPageBreakIcon className='icon'/>
                    <h3 className='title'>Cancelamento da  nota</h3>
                    <p className='inf'>Remova todos os dados necessários, como CNPJ, data e itens.</p>
                </button>
                <button className='b3' onClick={info}>
                    <DescriptionIcon className='icon'/>
                    <h3 className='title'>Informações da nota</h3>
                    <p className='inf'>Colete todos os dados necessários, como CNPJ, data e itens.</p>
                </button>
                <button>
                    
                </button>
                <button className='b5' onClick={registeritem}>
                    <DifferenceIcon className='icon'/>
                    <h3 className='title'>Cadastro de item</h3>
                    <p className='inf'>Insira os dados essenciais para registrar um novo item.</p>
                </button>
                <button className='b6' onClick={transfer}>
                    <FileOpenIcon className='icon'/>
                    <h3 className='title'>Transferências</h3>
                    <p className='inf'>Realiza a transferência de produtos do estoque atual para outra unidade.</p>
                </button>
                <button className='b7' onClick={triagem}>
                    <AssignmentIcon className='icon'/>
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