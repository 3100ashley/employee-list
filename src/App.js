import "./index.css";
import Header from "./components/Header";
import Employees from "../src/pages/Employess";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dictionary from "../src/pages/Dictionary";
import Definition from "../src/pages/Definition";
import NotFound from "./components/NotFound"
import Customers from "./pages/Customer";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/dictionary/:search" element={<Definition />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
       
      </Header>
    </BrowserRouter>
  );
}

export default App;
