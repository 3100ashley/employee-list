import "./index.css";
import Header from "./components/Header";
import Employees from "../src/pages/Employess";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dictionary from "./components/Dictionary";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/Employees" element={<Employees />} />
          <Route path="/Dictionary" element={<Dictionary />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
