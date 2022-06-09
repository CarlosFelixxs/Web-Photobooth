import React from 'react';
import List from '../components/List';
import Logo from '../components/Logo/itemLogo';
import imagemLogo from "../img/logo-AI.png";
import img from "../img/work.png";
import icon from "../img/icon1.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Logo linkImagem={imagemLogo}></Logo>
        <div className="container2">
          <div className='divTitle'>
            <img src={icon} alt="software team" height={"50px"} width={"50px"} />
            <b className='title'>NEW GEN PHOTOBOOTH </b><br /><b className='title'>A Liquid Studios project</b>
            <List />
          </div>
          <img src={img} alt="software team" height={"250px"} width={"400px"} />
        </div>
        <div className='containerButton'>
          <button>oi</button>
          <button>oi2</button>
          <button>oi3</button>
        </div>
      </div>
    </div>
  );
}

export default App;
