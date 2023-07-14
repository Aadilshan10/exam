import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";

import Aboutus from "./components/Aboutus";
import Destinations from "./components/Destinations";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Destinations" element={<Destinations/>} />
          <Route path="Aboutus" element={<Aboutus />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App


