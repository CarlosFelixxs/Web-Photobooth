import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "../Home"


export default function LinkedinScreen() {
  return (
    <>
    <div className='parede'>
    <NavLink to="/"><span>FIND US</span></NavLink>
    </div>
    <div>LinkedinScreen</div>
    </>
  )
}
