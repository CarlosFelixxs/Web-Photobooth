import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkedinScreen from "../components/LinkedinScreen";
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
