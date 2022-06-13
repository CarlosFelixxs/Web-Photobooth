import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import List from '../List';
import Logo from '../Logo/itemLogo';
import imagemLogo from "../../img/logo-AI.png";
import img from "../../img/work.png";
import icon from "../../img/icon1.png";
import LinkedinScreen from "../LinkedinScreen";


function Home() {
  return (
      <div className="App">
        <div className="container">
          <div className='headerLogo'>
            <Logo linkImagem={imagemLogo}></Logo>
          </div>
          <div className="container2">
            <div className='divTitle'>
              <div className='new'>
                <img id='medalhaimg' src={icon} alt="software team" />
                <b className='title'>NEW GEN PHOTOBOOTH <br />A Liquid Studios project</b>
              </div>
              <List />
            </div>
            <img id="imagem1" src={img} alt="software team" />
          </div>
          <div className='containerButton'>
            <a href="https://www.accenture.com/br-pt/services/technology/liquid-studio-brasil"> <span id='textButton'>LIQUID STUDIO<br />BRASIL</span></a>
            <a href="https://newsroom.accenture.com/news/accenture-cloud-first-launches-with-3-billion-investment-to-accelerate-clients-move-to-cloud-and-digital-transformation.htm"><span id='textButton'>ACCENTURE'S<br />CLOUD FIRST</span></a>
            <a href="https://www.accenture.com/br-pt/insights/technology/technology-trends-2022?c=acn_glb_technologyvisiogoogle_12886377&n=psgs_0322&gclid=Cj0KCQjw-daUBhCIARIsALbkjSbYfZwI_fAVY3l76llH7w8DmDFK"><span id='textButton'>TECH VISION<br /> 2022</span></a>
          </div>
          <div id='findUs'>
            <NavLink to="/LinkedinScreen"><span>FIND US</span></NavLink>
            <section className='continuacao'>
            </section>
          </div>
        </div>
        
      </div>
  );
}

export default Home;
