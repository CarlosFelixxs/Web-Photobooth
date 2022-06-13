import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkedinScreen from "../components/LinkedinScreen";
import Home from "../components/Home";

import ReactGa from 'react-ga';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    ReactGa.initialize('G-Q42GBBZFSD')
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

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
