import React, { useEffect, useState } from 'react';
import api from '../Services/api';
import './estilo_homepage.css';
import EstruturaPagina from '../componentes/EstruturaPagina';

export default function HomePage() {
    const [user, setUser] = useState();
    useEffect(() => {
        api
          .get('https://forza-api.tk/')
          .then((response) => setUser(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

    return (
        <div className='Homepage'>
            <p>Usuário: {user?.image}</p>
        </div>
    )
}



//export default HomePage;