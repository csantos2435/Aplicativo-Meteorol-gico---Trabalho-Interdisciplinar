<<<<<<< HEAD
import React from 'react';
import '../Styles/StyleCad.css';

const Cadastro = () => {
=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Styles/StyleCad.css';

const Cadastro = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleConfirm = () => {
    const data = {
      name,
      email,
      password
    };

    fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      navigate(`/`)
    })
  };

>>>>>>> main
 return (
    <div className="container">
      <div className="form-container">
        <h1>Cadastro</h1>
<<<<<<< HEAD
        <input type="text" placeholder="Nome de Usuário" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button className="btn-cadastrar">Cadastrar</button>
=======
        <input type="text" placeholder="Nome de Usuário" value={name} onChange={e => setName(e.target.value)}/>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
        <button className="btn-cadastrar" onClick={handleConfirm}>Cadastrar</button>
>>>>>>> main
      </div>
    </div>
 );
};

<<<<<<< HEAD
export default Cadastro;
=======
export default Cadastro;
>>>>>>> main
