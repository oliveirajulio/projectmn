import "./index.css"
import React, { useRef } from "react";

function Triagem () {

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
                <h1 className="main">Triagem</h1>
                <h2 className="inf2">Solicitação para repor ou ajustar a quantidade de itens no estoque conforme a demanda.</h2>
                <button className="btntriagem" onClick={file}>Selecionar NF</button>
                <h3 className="uploader">ou arraste e solte seu arquivo aqui</h3>

                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    accept=".pdf, .xls, .xlsx" 
                />

                <button className="sdtriagem"></button>
                <button className="sd1triagem"></button>
            </div>

        </div>
    )
}

export default Triagem;