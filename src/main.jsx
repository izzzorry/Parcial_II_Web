import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Unstarted from './componentes/Unstarted';
import { Mode } from "./App";
import Inicio from './componentes/Inicio';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <Unstarted mode={Mode.LOGIN} /> },
      { path: "registro", element: <Unstarted mode={Mode.REGISTRO} /> },
      { path: "inicio", element: <Inicio/> }  // Ruta para la página de inicio
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
