import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onSearchInput, onSearchSubmit, searchValue, showSearchBar }) => {
  return (
    <>
      <div className='encabezado'>
        <a className="Logo">
          <img src="src/assets/IGOR.svg" alt="Logo" />
          <span>Gloomy Grooves</span>
        </a>
        {/* Renderizar condicionalmente los botones basados en showSearchBar */}
        {!showSearchBar && (
          <div className="Botones">
            <Link to="/login"><button className="login"><strong>Log in</strong></button></Link>
            <Link to="/registro"><button className="registro"><strong>Registro</strong></button></Link>
          </div>
        )}  {showSearchBar && (
          <div className="Botones">
            <Link to="/login"><button className="logout">Log Out</button></Link>
          </div>
        )}
      </div>
      <nav className='NavAbajo'>
        <h1>Explora el Mundo Musical</h1>
        {showSearchBar && (
          <form className="form" onSubmit={onSearchSubmit}>
            <input 
              type="text" 
              placeholder="Ariana Grande, Rosalia, ..."
              onChange={onSearchInput} 
              value={searchValue}
            />
            <button type="submit">
              <img src="src/assets/Lupita.svg" alt="Buscar" />
            </button>
          </form>
        )}
      </nav>
    </>
  );
}

export default Header;
