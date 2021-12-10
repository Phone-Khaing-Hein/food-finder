import "./App.css";
import Heading from "./Components/Heading/Heading";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="mainWrapper">
      <Heading>Food Find With Us</Heading>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
