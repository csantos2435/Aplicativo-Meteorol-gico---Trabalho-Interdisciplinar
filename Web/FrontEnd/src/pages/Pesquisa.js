import React, { useState, useEffect } from 'react';
import '../Styles/Pesquisa.css';
import lupa from '../lupa.svg';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const [cities, setCity] = useState('');
  const [dados, setDados] = useState('');

  const handleGetCity = async ()=> {
    try{
      const response = await fetch(`http://localhost:3000/cities?name=${cities}`);
      const dados = await response.json();
      setDados(dados);

      handleNavegacao();
    }catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  const handleNavegacao = () =>{
    const idCity = dados?.map((city) => city.Id)
    
    history.push(`/Home/${idCity}`);
  }

  return (
    <div class="pesqui">
        <div class="search-box">
            <input type="text" class="search-txt" placeholder="Pesquisar" value={cities} onChange={e => setCity(e.target.value)}/>
            <img src={lupa} alt="Descrição da Imagem" height={20} width={20} class="search-bnt" onClick={handleGetCity}/>
        </div>
    </div>
  );
};

export default SearchBar;
