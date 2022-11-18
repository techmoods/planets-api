// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Mercury from "./pages/planets/Mercury";
import Venus from "./pages/planets/Venus";
import Earth from "./pages/planets/Earth";
import Mars from "./pages/planets/Mars";
import Jupiter from "./pages/planets/Jupiter";
import Saturn from "./pages/planets/Saturn";
import Uranus from "./pages/planets/Uranus";
import Neptune from "./pages/planets/Neptune";
import Subscribe from "./pages/Subscribe";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="planets/Mercury" element={<Mercury />} />
          <Route path="planets/Venus" element={<Venus />} />
          <Route path="planets/Earth" element={<Earth />} />
          <Route path="planets/Mars" element={<Mars />} />
          <Route path="planets/Jupiter" element={<Jupiter />} />
          <Route path="planets/Saturn" element={<Saturn />} />
          <Route path="planets/Uranus" element={<Uranus />} />
          <Route path="planets/Neptune" element={<Neptune />} />
          <Route path="subscribe" element={<Subscribe />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
