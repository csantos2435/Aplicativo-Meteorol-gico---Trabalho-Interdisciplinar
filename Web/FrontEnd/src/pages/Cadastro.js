import React from 'react';
import '../Styles/Cadastro.css';

const Cadastro = () => {
 return (
    <div className="container">
      <div className="form-container">
        <h1>Cadastro</h1>
        <input type="text" placeholder="Nome de Usuário" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button className="btn-cadastrar">Cadastrar</button>
      </div>
    </div>
 );
};

export default Cadastro;