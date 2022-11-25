import logo from './logo.png';
import { useState } from 'react';
import GoogleLogin from 'react-google-login';
import './App.css';

function App() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [profilePic, setProfilePic] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseGoogle = (response) => {
  //   const { profileObj: {
  //     name,
  //     email,
  //     imageUrl
  //   }
  // } = response;
    console.log(response);

  // setName(name);
  // setEmail(email);
  // setProfilePic(imageUrl);
  // setIsLoggedIn(true)
  

  };

  return (
    <div className="App">
      <h1>PREFEITURA DE DUQUE DE CAXIAS</h1>
      <h2>SECRETARIA MUNICIPAL DE EDUCAÇÃO</h2>
      <h3>e-Diário</h3>
      <img src={logo} className="App-logo" alt="logo" />
      <div className="container">
        <GoogleLogin
          clientId="695118874171-fgh4lvei3bq64muh2b05n4lef12dve58.apps.googleusercontent.com"
          buttonText="Continuar com Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        {/* {isLoggedIn ? (
          <div>
            <img src={profilePic} alt="Imagem de perfil" className="profile"/>
            <p>Nome: {name}</p>
            <p>Logado como: {email}</p>
          </div> ) : ("")
        } */}
      </div>
    </div>
  );
};

export default App;