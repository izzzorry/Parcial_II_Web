import React, { useState } from 'react';
import { Mode } from "../App";
import { useNavigate } from 'react-router-dom';

const Cuestionario = ({ mode }) => {
  const navigate = useNavigate();  // Crea la instancia de navigate
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "name") {
      setName(value);
    }
  };

  const handleSignUp = () => {
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
      setErrorResponse("User already exists. Try another username.");
      return;
    }
    const userDetails = JSON.stringify({ name, password });
    localStorage.setItem(username, userDetails);
    alert("Account created successfully!");
    setUsername("");
    setPassword("");
    setName("");
    setErrorResponse("");
    navigate("/login");  // Redirecciona a la página de inicio
  };

  const handleLogin = () => {
    const userDetails = localStorage.getItem(username);
    if (!userDetails) {
      setErrorResponse("User not found.");
      return;
    }
    const details = JSON.parse(userDetails);
    if (details.password !== password) {
      setErrorResponse("Invalid credentials.");
      return;
    }
    alert("Logged in successfully!");
    setUsername("");
    setPassword("");
    setErrorResponse("");
    navigate("/inicio");  // Redirecciona a la página de inicio
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === Mode.REGISTRO) {
      handleSignUp();
    } else {
      handleLogin();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formi">
      <h1>{mode === Mode.REGISTRO ? "Signup" : "Login"}</h1>
      {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}

      {mode === Mode.REGISTRO && (
        <>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
          />
        </>
      )}

      <label>Usuario</label>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        value={username}
      />

      <label>Contraseña</label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={password}
      />

      <button type="submit">{mode === Mode.REGISTRO ? "Create account" : "Login"}</button>
    </form>
  );
};

export default Cuestionario;
