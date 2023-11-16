import React from 'react';
import '../Styles/Pesquisa.css';
import lupa from '../lupa.svg';

const SearchBar = () => {
  return (
    <div class="pesqui">
        <div class="search-box">
            <input type="text" class="search-txt" placeholder="Pesquisar"/>
            <img src={lupa} alt="Descrição da Imagem" height={20} width={20} class="search-bnt"/>
        </div>
    </div>
  );
};

export default SearchBar;
