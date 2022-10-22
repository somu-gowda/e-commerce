import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";

let Layouts = () => {
  return (
    <div className="App">
      <Categories />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Layouts />} />
        <Route exact path="/productDetail" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
