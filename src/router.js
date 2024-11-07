import Home from "./pages/Home";
import Inserir_Nota from "./pages/IInserir"
import Cancelar_Nota from "./pages/ICancelar"
import Cadastro_Item from "./pages/ICadItem"
import Transferir_Item from "./pages/ITransfer"

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
            </Routes>
        </BrowserRouter>

    )
}

export default Router;