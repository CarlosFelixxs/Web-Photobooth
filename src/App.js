import React from "react";
import Rotas from './rotas';
import './App.css'
import ReactGA from 'react-ga';
  
const TRACKING_ID = "G-FNKBLQ4Q3N"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <>
      <Rotas />
    </>
  );
}

export default App;