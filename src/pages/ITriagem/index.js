import "./index.css"
import React, { useRef, useState } from "react";
import uploadnf from "../../services/service-upload";
import getnf from "../../services/service-getnf";

function Inserir_Nota () {

    const fileInputRef = useRef(null);
    const [fileSelected, setfileSelected] = useState(false);

    const [File, setFile] = useState(null);
    const [notas, setNotas] = useState([])

    const fileselect = () => {
        fileInputRef.current.click()
    };

    const fileopen = async (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setfileSelected(true); 
            try {
                const response = await uploadnf(selectedFile); 
                alert(response.message); 
                fetchNotas(); 
            } catch (error) {
                console.error("Erro ao fazer upload da nota fiscal:", error.message);
                alert("Erro ao fazer upload da nota fiscal.");
            }
        }
    };

    const fetchNotas = async () => {
        try {
            const data = await getnf();
            setNotas(data)
        }
        catch (error) {
            console.error("Error ao buscar notas", error.message);
            alert("Erro ao carregar notas fiscais")
        }
    };

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
                        <h1 className="main">Triagem</h1>
                        <h2 className="inf2">Solicitação para repor ou ajustar a quantidade de itens no estoque conforme a demanda.</h2>
                        <div className="btn-group">
                            <button className="btntriagem" onClick={fileselect}>Selecionar NF</button>
                        <div className="sd-container">
                            <button className="sdtriagem"></button>
                            <button className="sd1triagem"></button>
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

export default Inserir_Nota;