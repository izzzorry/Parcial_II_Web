
import React, { useState, useEffect } from 'react';
import Header from './Header';
import '../App.css';
import Cuestionario from './Cuestionario';
import { Mode } from "../App"; // Asegúrate de que la ruta relativa sea correcta

const Unstarted = ({ mode = Mode.LOGIN }) => {
  const [currentMode, setCurrentMode] = useState(mode);

  useEffect(() => {
    setCurrentMode(mode);
  }, [mode]); 
  
  return (
    <>
      <Header showSearchBar={false} />
      
      <div className='opciones'>
        <div className="albums"><h2>Desde los clásicos hasta las últimas tendencias.</h2><img src='src/assets/Igor2.svg' alt="Filtrar por Álbum" /></div>

        <div className="canciones">
          <div className="texto">
            <h2>Más que música, una experiencia.</h2>
            <p>Únete a GloomyGrooves ahora y comienza a explorar el lado oscuro de la música que nunca sabías que necesitabas.</p>
          </div>
          <img src="src/assets/Igor3.svg" alt="Filtrar por Canciones" /></div>
      </div>
      
      <Cuestionario mode={currentMode} /> 
    </>
  );
}

export default Unstarted;
