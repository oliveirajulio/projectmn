import "./index.css"
import React, { useRef, useState, useEffect} from "react";
import uploadnf from "../../services/service-upload";
import getnf from "../../services/service-getnf";
import converter from "../../services/service-convert";
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';

function Planilha () {

    const fileInputRef = useRef(null);
    const [fileSelected, setfileSelected] = useState(false);

    const [File, setFile] = useState(null);
    const [notas, setNotas] = useState([])
    const [convert, setConvert] = useState("")

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

    const convertToExcel = async () => {
        try {
            const response = await converter();  // Chama a função convert, que é a responsável pela conversão
            alert("Conversão realizada com sucesso!"); // Mensagem de sucesso após a conversão
            setConvert("Conversão concluída! Clique em 'Baixar' para obter o Excel."); // Atualiza o estado
        } catch (error) {
            console.error("Erro na conversão:", error.message); // Erro no console
            alert("Erro ao realizar a conversão."); // Mensagem de erro
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
                        <h1 className="main">Planilha (Excel)</h1>
                        <h2 className="inf2">Converte dados de notas fiscais em planilhas Excel, facilitando a entrada de informações no sistema.</h2>
                        <div className="btn-group">
                            <button className="btnplanilha" onClick={fileselect}>Selecionar NF</button>
                        <div className="sd-container">
                            <button className="sdplanilha"></button>
                            <button className="sd1planilha"></button>
                        </div>
                        </div>
                        <h3 className="uploader">ou arraste e solte seu arquivo aqui</h3>
                    </div>    
                </>
                ) : (

                <>
                    <div className="layout-file-selected">
                        <div className="box-tool">
                            <div className="box-title">
                                <h1>Planilha(Excel)</h1>
                            </div>
                            <div className="btn-box">
                                <button onClick={convertToExcel}>Converter</button>
                            </div>
                        </div>
                        <div className="box-main">

                        </div>
                    </div>
                </>
                )}

                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    accept=".pdf, .xls, .xlsx, .csv" 
                    onChange={fileopen}
                />
        </div>
    )
}

export default Planilha;