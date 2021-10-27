import React from 'react';
import './estilo_header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-conteudo">
                <nav className="header-logo-box">
                    <img className="logo" src="assets/icon-forza.png" alt="logo-forza" title="logo-forza" />
                    <h1 className="slogan">API FORZA</h1>
                </nav>
                
                <nav className="header-links">
                    <a className="header-link" href="https://github.com/public-apis/public-apis#games-comics" target="_blank">Repositório</a>
                    <a className="header-link" href="https://docs.forza-api.tk" target="_blank">API</a>
                    <a className="header-link" href="https://github.com/nexusgroup6" target="_blank">GitHub</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;