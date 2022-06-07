import React from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import home from "./pages/App";

function Rotas() {
    return (
        <>
            <BrowserRouter>

            <Routes>
                <Route path="/" element={<home />}/>
            </Routes>

            </BrowserRouter>
        </>
    );
}

export default Rotas;