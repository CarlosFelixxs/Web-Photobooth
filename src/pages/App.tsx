import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import LinkedinScreen from "./LinkedinScreen";
import Home from "./Home";

=======
import LinkedinScreen from "../components/LinkedinScreen";
import Home from "../components/Home";
>>>>>>> 750abe9333b740eac98059c360b9393e0b3feaff
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
