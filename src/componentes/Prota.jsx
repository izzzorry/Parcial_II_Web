import React from 'react';


function Prota({ results, searchForArtist }) {
  if (results.length === 0) {
    // Si no hay resultados, realiza la búsqueda de "Rosalia"
    searchForArtist("Rosalia");
  }
  return (
    <div className="body">
      <h1>Echa un vistazo</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((track) => (
            <li key={track.id}>
              <div className='contenedor'>
                <img src={track.album.images[0].url} alt={`Cover de ${track.name}`} style={{ width: '100px' }} />
                <h3>{track.name}</h3>
                <p>{track.artists.map(artist => artist.name).join(', ')}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando resultados By default...</p>
      )}
    </div>
  );
}

export default Prota;
