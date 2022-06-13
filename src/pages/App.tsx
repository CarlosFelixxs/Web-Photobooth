import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from '../components/List';
import Logo from '../components/Logo/itemLogo';
import imagemLogo from "../img/logo-AI.png";
import img from "../img/work.png";
import icon from "../img/icon1.png";
import { link } from 'fs';
import LinkedinScreen from "../components/LinkedinScreen";
import { findAllByDisplayValue, getByDisplayValue } from '@testing-library/react';
import Home from "../components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LinkedinScreen" element={<LinkedinScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
