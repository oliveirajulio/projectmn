import Home from "./pages/Home";
import Inserir_Nota from "./pages/IInserir"
import Cancelar_Nota from "./pages/ICancelar"
import Cadastro_Item from "./pages/ICadItem"
import Transferir_Item from "./pages/ITransfer"
import Info from "./pages/IInfo"
import Triagem from "./pages/ITriagem"
import Consulta from "./pages/IConsulta"
import Planilha from "./pages/IPlanilha"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/entrada_de_nota" element={<Inserir_Nota />} />
                <Route path="/cancelar_nota" element={<Cancelar_Nota />} />
                <Route path="/cadastro_de_item" element={<Cadastro_Item />} />
                <Route path="/transferencias" element={<Transferir_Item />} />
                <Route path="/informacoes_da_nota" element={<Info />} />
                <Route path="/triagem" element={<Triagem />} />
                <Route path="/consulta" element={<Consulta />} />
                <Route path ="/planilha" element={<Planilha />} />
            </Routes>    
        </BrowserRouter>

    )
}

export default Router;