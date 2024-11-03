import Home from "./pages/Home";
import Inserir_Nota from "./pages/Inserir"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inserir_nota" element={<Inserir_Nota />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router;