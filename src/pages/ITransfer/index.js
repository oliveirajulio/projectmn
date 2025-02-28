import "./index.css"
import React, { useRef, useState } from "react";
import uploadnf from "../../services/service-upload";
import { processarNota } from "../../services/service-transferir";
import getnf from "../../services/service-getnf";

function Inserir_Nota () {

    const fileInputRef = useRef(null);
    const [fileSelected, setfileSelected] = useState(false);

    const [File, setFile] = useState(null);
    const [notas, setNotas] = useState([])
    const [idNota, setIdNota] = useState(null); // Estado para armazenar o ID da nota


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
                setIdNota(response.id_nota); // Armazena o ID da nota
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

    const Transferir = async () => {
        if (!idNota) {
            alert("Nenhuma nota foi carregada para processar.");
            return;
        }
    
        try {
            const response = await processarNota(idNota);
            alert(response.message);
        } catch (error) {
            console.error("Erro ao processar a nota fiscal:", error.message);
            alert("Erro ao processar a nota fiscal.");
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
                        <h1 className="main">Transferências</h1>
                        <h2 className="inf2">Realiza a transferência de produtos do estoque atual para outra unidade. atualizando automaticamente os registros de entrada e saída de mercadorias.</h2>
                        <div className="btn-group">
                            <button className="btntransfer" onClick={fileselect}>Selecionar arquivo</button>
                        <div className="sd-container">
                            <button className="sdtransfer"></button>
                            <button className="sd1transfer"></button>
                        </div>
                        </div>
                        <h3 className="uploader">ou arraste e solte seu arquivo aqui</h3>
                    </div>    
                </>
                ) : (

                <>
                    <div className="layout-file-selected">
                        <div className="ctn-interprises">
                            <button className="main-transfer"></button>
                            <button className="l1"></button>
                            <button className="l2"></button>
                            <button className="l3"></button>
                            <button className="l4"></button>
                            <button className="l5"></button>
                            <button className="l6"></button>
                            <button className="l7"></button>
                            <button className="l8"></button>
                        </div>
                        <div className="boxtransfer-tool">
                            <div className="boxtransfer-title">
                                <h1>Transferência</h1>
                            </div>
                            <div className="btntransfer-box">
                                <button onClick={Transferir}>Transferir</button>
                            </div>
                        </div>
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