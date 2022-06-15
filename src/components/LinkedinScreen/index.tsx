import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./styleLinkedinScreen.css";
import Akira from "../../img/Akira.png"
import Marcelo from "../../img/Marcelo.png"
import link from "../../img/in.png"
import ReactGa from "react-ga";
import { useEffect } from "react";
import useAnalyticsEventTracker from "../../useAnalyticsEventTracker";

useEffect(() => {
  ReactGa.pageview(window.location.pathname + window.location.search)
}, [])
export default function LinkedinScreen() {
  const gaEventTracker = useAnalyticsEventTracker('Linkedin');

  return (
    <>
      <div className='firstContainer'>
        <div className='backButton'>
          <NavLink id="findUs" to="/">BACK</NavLink>
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
              <a id='linkedinImgMarcelo' onClick={()=>gaEventTracker('Marcelo')} href="https://www.linkedin.com/in/marcelo-de-lima/"><img id='aLinkedinImgMarcelo' src={link} alt="software team" /></a>
            </div>
            <div className="info2">
              <img id='Akira' src={Akira} alt="software team" />
              <span className="textAkira">
                <h3><b>Paulo Akira</b></h3>
                Artificial Intelligence Lead<br />
                Part of LS Brasil Labs
              </span>
              <a id='linkedinImgAkira' onClick={()=>gaEventTracker('Akira')} href="https://www.linkedin.com/in/paulo-akira-enabe-732973172/"><img id='aLinkedinImgAkira' src={link} alt="software team" /></a>
            </div>
          </div>
        </div>
          <div className="footer">
            <div className="linha">
          <span className="textFooter">2021-2022 Labs is part of Accenture's Liquid Studios Brasil </span>
            </div>
          </div>
      </div>
    </>
  )
}
