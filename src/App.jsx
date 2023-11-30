import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Debounce from "./pages/Debounce";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/debounce" element={<Debounce />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
