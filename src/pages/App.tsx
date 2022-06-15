import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkedinScreen from "./LinkedinScreen";
import Home from "./Home";

import ReactGa from 'react-ga';
import { useEffect } from "react";

const TRACKING_ID = "G-Q42GBBZFSD"; // OUR_TRACKING_ID
ReactGa.initialize(TRACKING_ID);

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
