import "./index.css"
import React, { useRef, useState } from "react";
import uploadnf from "../../services/service-upload";
import { processarNota } from "../../services/service-transferir";
import getnf from "../../services/service-getnf";

import HomeWorkTwoToneIcon from '@mui/icons-material/HomeWorkTwoTone';

function Inserir_Nota () {

    const fileInputRef = useRef(null);
    const [fileSelected, setfileSelected] = useState(false);

    const [File, setFile] = useState(null);
    const [notas, setNotas] = useState([])
    const [idNota, setIdNota] = useState(null); // Estado para armazenar o ID da nota
    const [selectedButtons, setSelectedButtons] = useState({
        mainTransfer: false,
        l1: false,
        l2: false,
        l3: false,
        l4: false,
        l5: false,
        l6: false,
        l7: false,
        l8: false,
        l9: false,
        l10: false
      });
      const [isProcessing, setIsProcessing] = useState(false);


    const buttonselect = (buttonName) => {
    setSelectedButtons(prev => ({
        ...prev,
        [buttonName]: !prev[buttonName]
    }));
    };

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
      
        // Verificar se pelo menos uma loja foi selecionada
        const algumaSelecionada = Object.values(selectedButtons).some(value => value === true);
        if (!algumaSelecionada) {
          alert("Selecione pelo menos uma loja para transferência.");
          return;
        }
      
        try {
          // Mostrar indicador de carregamento
          setIsProcessing(true);
          const response = await processarNota(idNota, selectedButtons);
          alert(response.message);
        } catch (error) {
          console.error("Erro ao processar a nota fiscal:", error.message);
          alert("Erro ao processar a nota fiscal: " + error.message);
        } finally {
          // Esconder indicador de carregamento
          setIsProcessing(false);
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
                            <button 
                                className={`main-transfer ${selectedButtons['mainTransfer'] ? 'selected' : ''}`} 
                                onClick={() => buttonselect('mainTransfer')}
                            >   
                                <span><HomeWorkTwoToneIcon className="ic-interprise"/></span>
                                <span className="inter-name">CD. Matriz</span>
                            </button>
                            <span className="vertical-line"><p>Para onde vai a transferência?</p></span>
                            <button 
                                className={`l1 ${selectedButtons.l1 ? 'selected' : ''}`} 
                                onClick={() => buttonselect('l1')}
                            >
                                <span><HomeWorkTwoToneIcon className="ic-interprise"/></span>
                                <span className="inter-name">G. Portela - Loja 07</span> 
                            </button>
                            <button 
                                className={`l2 ${selectedButtons.l2 ? 'selected' : ''}`} 
                                onClick={() => buttonselect('l2')}
                            >
                                <span><HomeWorkTwoToneIcon className="ic-interprise"/></span>
                                <span className="inter-name">P. Frontim - Loja 04</span>
                            </button>
                            <button 
                                className={`l3 ${selectedButtons.l3 ? 'selected' : ''}`} 
                                onClick={() => buttonselect('l3')}
                            >
                                <span><HomeWorkTwoToneIcon className="ic-interprise"/></span>
                                <span className="inter-name">A. Garcia - Loja 10</span>
                            </button>
                                {/* <button 
                                    className={`l4 ${selectedButtons.l4 ? 'selected' : ''}`} 
                                    onClick={() => buttonselect('l4')}
                                >
                                    L4
                                </button>
                                <button 
                                    className={`l5 ${selectedButtons.l5 ? 'selected' : ''}`} 
                                    onClick={() => buttonselect('l5')}
                                >
                                    L5
                                </button>
                                <button 
                                    className={`l6 ${selectedButtons.l6 ? 'selected' : ''}`} 
                                    onClick={() => buttonselect('l6')}
                                >
                                    L6
                                </button> */}
                            <button 
                                className={`l7 ${selectedButtons.l7 ? 'selected' : ''}`} 
                                onClick={() => buttonselect('l7')}
                            >
                                <span><HomeWorkTwoToneIcon className="ic-interprise"/></span>
                                <span className="inter-name">Vassouras - Loja 05</span>
                            </button>
                            <button 
                                className={`l8 ${selectedButtons.l8 ? 'selected' : ''}`} 
                                onClick={() => buttonselect('l8')}
                            >
                                <span><HomeWorkTwoToneIcon className="ic-interprise"/></span>
                                <span className="inter-name">V. Redonda - Loja 06</span>
                            </button>
                            <button 
                                className={`l9 ${selectedButtons.l9 ? 'selected' : ''}`} 
                                onClick={() => buttonselect('l9')}
                            >
                                <span><HomeWorkTwoToneIcon className="ic-interprise"/></span>
                                <span className="inter-name">Mendes - Loja 09</span>
                            </button>
                            <button 
                                className={`l10 ${selectedButtons.l10 ? 'selected' : ''}`} 
                                onClick={() => buttonselect('l10')}
                            >
                                <span><HomeWorkTwoToneIcon className="ic-interprise"/></span>
                                <span className="inter-name">VR Vila - Loja 11</span>
                            </button>
                        </div>
                        <div className="boxtransfer-tool">
                            <div className="boxtransfer-title">
                                <h1>Transferência</h1>
                            </div>
                            <div className="btntransfer-box">
                                <button 
                                    onClick={Transferir} 
                                    disabled={isProcessing}
                                >
                                    {isProcessing ? 'Processando...' : 'Transferir'}
                                </button>
                                {isProcessing && <div className="loading-spinner"></div>}
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