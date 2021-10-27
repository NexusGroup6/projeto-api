import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header-conteudo">
                <nav className="header-logo-box">
                    <img className="logo" src="" alt="logo-forza" title="logo-forza" />
                    <h1 className="slogan">API | Forza</h1>
                </nav>
                
                <nav className="header-links">
                    <a className="header-link" href="https://github.com/public-apis/public-apis#games-comics" target="_blank">Repositório API</a>
                    <a className="header-link" href="https://docs.forza-api.tk" target="_blank">API Forza</a>
                    <a className="header-link" href="https://github.com/nexusgroup6" target="_blank">GitHub Squad</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;