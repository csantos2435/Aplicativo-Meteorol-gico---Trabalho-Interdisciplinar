import React from 'react';
import '../Styles/login.css';
import { Link } from 'react-router-dom';

function App() {
 return (
    <div className="App">
      <div className="LoginScreen">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button type="submit"><Link to='Pesquisa/2' className="LinkWithoutUnderline">Entrar</Link></button>
        </form>
        <button> <Link to='Cadastro/1' className="LinkWithoutUnderline">Novo Cadastro</Link></button>
      </div>
    </div>
 );
}

export default App;