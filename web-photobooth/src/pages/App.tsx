import React from 'react';
import List from '../components/List';
import Logo from '../components/Logo/itemLogo';
import imagemLogo from "../components/Logo/logo-AI.png";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Logo linkImagem={imagemLogo} ></Logo>
        <div className="container2">
          <div className='divTitle'><b className='title'>NEW GEN PHOTOBOOTH </b><br />
            <b className='subTitle'>A Liquid Studios project</b>
            <List />
          </div>
          <img src="../work.png" alt="" height={"250px"} width="350px"/>
        </div>
      </div>
    </div>
  );
}

export default App;
