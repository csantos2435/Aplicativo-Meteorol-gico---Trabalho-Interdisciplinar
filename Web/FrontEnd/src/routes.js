<<<<<<< HEAD
import {BrowserRouter, Routes, Route} from 'react-router-dom';
=======
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
>>>>>>> main

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Pesquisa from './pages/Pesquisa';
<<<<<<< HEAD
=======
import Home from './pages/Home';
>>>>>>> main



function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Cadastro/:id' element={<Cadastro/>}/>
                <Route path='/Pesquisa/:id' element={<Pesquisa/>}/>
<<<<<<< HEAD
=======
                <Route path='/Home/:id/:nome' element={<Home/>}/>
>>>>>>> main
            </Routes>
        </BrowserRouter>
    )
    
}

export default RoutesApp;