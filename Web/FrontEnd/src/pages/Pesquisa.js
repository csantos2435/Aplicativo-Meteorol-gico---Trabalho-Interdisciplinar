import React, { useState, useEffect } from 'react';
import '../Styles/Pesquisa.css';
import lupa from '../lupa.svg';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const [cities, setCity] = useState('');
  const [dados, setDados] = useState('');

  const handleGetCity = async ()=> {
    try{
      const response = await fetch(`http://localhost:3000/cities?name=${cities}`);
      const dados = await response.json();
      setDados(dados);

      const idCity = dados?.map((city) => city.Id)
      
      navigate(`/Home/${idCity}`);
    }catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

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
