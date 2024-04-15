// App.js
import React from 'react';
import { Outlet } from 'react-router-dom'; // Importar Outlet correctamente
import './App.css';

export const Mode = {
  REGISTRO: 'Registro',
  LOGIN: 'Login'
};
const App = () => {
  console.log("App is rendering");
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;