import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./styleLinkedinScreen.css";
import Akira from "../../img/Akira.png"
import Marcelo from "../../img/Marcelo.png"
import link from "../../img/in.png"


export default function LinkedinScreen() {
  return (
    <>
      <div className='firstContainer'>
        <div className='backButton'>
          <NavLink id="findUs" to="/">FIND US</NavLink>
        </div>
        <div className='containerInfos'>
          <div className='infos'>
            <div className="info1">
              <img id='Marcelo' src={Marcelo} alt="software team" />
              <span className="textMarcelo">
                <h3><b> Marcelo de Lima</b></h3>
                Head of Emerging Techs Team<br />
                Part of LS Brasil Labs
              </span>
              <a id='linkedinImgMarcelo' href="https://www.linkedin.com/in/marcelo-de-lima/"><img id='aLinkedinImgMarcelo' src={link} alt="software team" /></a>
            </div>
            <div className="info2">
              <img id='Akira' src={Akira} alt="software team" />
              <span className="textAkira">
              <h3><b>Paulo Akira</b></h3>
                Artificial Intelligence Lead<br />
                Part of LS Brasil Labs
              </span>
              <a id='linkedinImgAkira' href="https://www.linkedin.com/in/paulo-akira-enabe-732973172/"><img id='aLinkedinImgAkira' src={link} alt="software team" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
