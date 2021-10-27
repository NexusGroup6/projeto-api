import React from 'react';
import api from '../Services/api';

import './estilo_homepage.css';

import EstruturaPagina from '../componentes/EstruturaPagina';

const HomePage = () => {

    return (
        <EstruturaPagina>
            <h1 id="teste-h1">Teste Page 1</h1>
            <h1>Teste Page 2</h1>
            <h1>Teste Page 3</h1>
            <h1>Teste Page 4</h1>
            <h1>Teste Page 5</h1>
            <h1>Teste Page 6</h1>
            <h1>Teste Page 7</h1>
            <h1>Teste Page 8</h1>
        </EstruturaPagina>
    );
}

export default HomePage;