import logo from './logo.png';
import jwt_decodde from 'jwt-decode';
import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [user, setUser] = useState();

    useEffect(() => {
    // Google global
    google.accounts.id.initialize({
      client_id: "695118874171-fgh4lvei3bq64muh2b05n4lef12dve58.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("singInDiv"),
      {
        theme: "outline",
        size: "large"
      }
    );
  }, []);

  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID Token " + response.credential);
    let userObject = jwt_decodde(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("singInDiv").hidden = true;
    document.getElementById("userInfo").hidden = false;
  };

  
  const logout = (e) => {
    setUser({});
    document.getElementById("singInDiv").hidden = false;
    document.getElementById("userInfo").hidden = true;
  };


  // sem usuário: botão de login
  // com usuário: botão logout
  return (
    <div className="App">
      <h1>PREFEITURA DE DUQUE DE CAXIAS</h1>
      <h2>SECRETARIA MUNICIPAL DE EDUCAÇÃO</h2>
      <h3>e-Diário</h3>
      <img src={logo} className="App-logo" alt="logo" />
      <div className="container">
        <div id="singInDiv"></div>
        { 
          user &&
            <div id="userInfo">
              <img src={user.picture} alt="Foto de perfil" />
              <h3>Olá, {user.given_name}!</h3>
              <h4>Você fez login como: {user.email}</h4>
              <button className="btn" onClick={(e) => logout(e)}>Sair</button>
            </div>
        }
      </div>
    </div>
  );
};



export default App;