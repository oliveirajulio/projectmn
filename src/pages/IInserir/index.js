import "./index.css"
import React, { useRef, useState } from "react";

function Inserir_Nota () {

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
                        <li>Inserir NF</li>
                        <li>Remover NF</li>
                    </ul>
                </nav>
            </header>

            {!fileSelected ? (
                <>
                    <div className="layout-initial">
                        <h1 className="main">Entrada de nota</h1>
                        <h2 className="inf2">Insira todos os dados necessários, como CNPJ, data e itens.  A precisão é crucial para evitar erros e garantir conformidade fiscal.</h2>
                        <button className="btn" onClick={fileselect}>Selecionar NF</button>
                        <h3 className="uploader">ou arraste e solte seu arquivo aqui</h3>
                        <button className="sd"></button>
                        <button className="sd1"></button>
                    </div>    
                </>
                ) : (

                <>
                    <div className="layout-file-selected">
                        <h1>Arquivo Selecionado!</h1>
                        <p>O conteúdo do arquivo agora pode ser processado.</p>
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

export default Inserir_Nota;