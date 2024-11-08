import "./index.css"
import React, { useRef } from "react";

function Transferencia () {

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
                <h1 className="main">Transferências</h1>
                <h2 className="inf2">Realiza a transferência de produtos do estoque atual para outra unidade. atualizando automaticamente os registros de entrada e saída de mercadorias.</h2>
                <button className="btntransfer" onClick={file}>Selecionar NF</button>
                <h3 className="uploader">ou arraste e solte seu arquivo aqui</h3>

                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    accept=".pdf, .xls, .xlsx" 
                />

                <button className="sdtransfer"></button>
                <button className="sd1transfer"></button>
            </div>

        </div>
    )
}

export default Transferencia;