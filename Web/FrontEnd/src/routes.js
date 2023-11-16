import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Pesquisa from './pages/Pesquisa';



function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Cadastro/:id' element={<Cadastro/>}/>
                <Route path='/Pesquisa/:id' element={<Pesquisa/>}/>
            </Routes>
        </BrowserRouter>
    )
    
}

export default RoutesApp;