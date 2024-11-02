import React, { useEffect, useState, useSyncExternalStore } from 'react';
import "./index.css"

import FileOpenIcon from '@mui/icons-material/FileOpen';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import InsertPageBreakIcon from '@mui/icons-material/InsertPageBreak';


function Home() {
    return( 
        <div className='container'>
            <header className='main-header'>
                <nav className='nav'>
                    <ul>
                        <li>Insert</li>
                        <li>Remove</li>
                    </ul>
                </nav>
            </header>

            <div className='infos'>
                <h1>NF Tools</h1>
                <h2>Ferramenta para auxiliar na entrada de dados no sistema</h2>
            </div>

            <div className='tools-container'>
                <button className='b1'>
                    <NoteAddIcon className='icon'/>
                    <h3 className='title'>Inserir nota</h3>
                    <p className='inf'>Insira todos os dados necessários, como CNPJ, data e itens.</p>
                </button>
                <button className='b2'>
                    <InsertPageBreakIcon className='icon'/>
                    <h3 className='title'>Cancelar nota</h3>
                    <p className='inf'>Remove todos os dados necessários, como CNPJ, data e itens.</p>
                </button>
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