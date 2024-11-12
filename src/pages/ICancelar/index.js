import "./index.css"
import React, { useRef, useState } from "react";

function Cancelar () {

    const fileInputRef = useRef(null);
    const [fileSelected, setfileSelected] = useState(false);

    const fileselect = () => {
        fileInputRef.current.click()
    };

    const fileopen = (event) => {
        if (event.target.files.length > 0) {
            setfileSelected(true);
        }
    }

    return (
        <div className='ctn'>
            <header className='main-header'>
                <nav className='nav'>
                    <ul>
                        <li>ENTRADA DE NF</li>
                        <li>REMOVER NF</li>
                        <li>CONSULTAR NF</li>
                    </ul>
                </nav>
            </header>

            {!fileSelected ? (
                <>
                    <div className="layout-initial">
                        <h1 className="main">Cancelamento de nota</h1>
                        <h2 className="inf2">Remova todos os dados necessários, como CNPJ, data e itens.  A precisão é crucial para evitar erros e garantir conformidade fiscal.</h2>
                        <div className="btn-group">
                            <button className="btncancel" onClick={fileselect}>Selecionar NF</button>
                        <div className="sd-container">
                            <button className="sdcancel"></button>
                            <button className="sd1cancel"></button>
                        </div>
                        </div>
                        <h3 className="uploader">ou arraste e solte seu arquivo aqui</h3>
                    </div>    
                </>
                ) : (

                <>
                    <div className="layout-file-selected">
                        <button className="btn-op">Finalizar</button>
                    </div>
                </>
                )}

                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    accept=".pdf, .xls, .xlsx" 
                    onChange={fileopen}
                />
        </div>
    )
}

export default Cancelar;