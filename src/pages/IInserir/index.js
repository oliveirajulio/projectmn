import "./index.css"
import React, { useRef } from "react";

function Inserir_Nota () {

    const fileInputRef = useRef(null);

const file = () => {
    fileInputRef.current.click();
};
    return (
        <div className='ctn'>
            <header className='main-header'>
                <nav className='nav'>
                    <ul>
                        <li>Inserir NF</li>
                        <li>Remover NF</li>
                    </ul>
                </nav>
            </header>

            <div className="work-container">
                <h1 className="main">Entrada de nota</h1>
                <h2 className="inf2">Insira todos os dados necessários, como CNPJ, data e itens.  A precisão é crucial para evitar erros e garantir conformidade fiscal.</h2>
                <button className="btn" onClick={file}>Selecionar NF</button>
                <h3 className="uploader">ou arraste e solte seu arquivo aqui</h3>

                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    accept=".pdf, .xls, .xlsx" 
                />

                <button className="sd"></button>
                <button className="sd1"></button>
            </div>

        </div>
    )
}

export default Inserir_Nota;