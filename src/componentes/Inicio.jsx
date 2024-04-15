

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Prota from './Prota';
import '../App.css';

const Client_ID = "156b344f6e0a4372a9ebe8061a590389";
const Client_Secret = "eb70b7735d0844df9bede1f1039d01b6";

function Inicio() {
  const [searchInput, setSearchInput] = useState("");
  const [token, setToken] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchType, setSearchType] = useState("track");
  const [searchHistory, setSearchHistory] = useState([]);

  const getToken = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(Client_ID + ':' + Client_Secret)
      },
      body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    setToken(data.access_token);
    searchForArtist("Rosalia");  // Búsqueda inicial por Rosalia
  };

  const searchForArtist = async (artistName) => {
    if (!token) return;

    const queryParams = new URLSearchParams({
      q: artistName,
      type: searchType,
    });

    const response = await fetch(`https://api.spotify.com/v1/search?${queryParams.toString()}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    if (response.ok) {
      setSearchResults(data.tracks.items);
      setSearchHistory(prevHistory => [...prevHistory, artistName]);
    } else {
      console.error('Error fetching data:', data);
      setSearchResults([]);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchForArtist(searchInput);
  };

  return (
    <>
      <Header
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSearchSubmit}
        searchValue={searchInput}
        showSearchBar={true}
      />
      <div className='opciones'>
        <div className="albums"><h2>Desde los clásicos hasta las últimas tendencias.</h2><img src='src/assets/Igor2.svg' alt="Filtrar por Álbum" /></div>

        <div className="canciones">
          <div className="texto">
            <h2>Más que música, una experiencia.</h2>
            <p>Únete a GloomyGrooves ahora y comienza a explorar el lado oscuro de la música que nunca sabías que necesitabas.</p>
          </div>
          <img src="src/assets/Igor3.svg" alt="Filtrar por Canciones" /></div>
      </div>
      <Prota results={searchResults} searchForArtist={searchForArtist} />
      <div className='record'>
        <h3>Historial de búsqueda:</h3>
        <ul>
          {searchHistory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Inicio;
