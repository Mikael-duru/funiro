// import Route when you uncomment element within the Routes, and uncomment element import from its folder
import { BrowserRouter as Router, Routes} from "react-router-dom";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import Cart from "./pages/Cart";
// import Header from "./components/Header";
// import Footer from "./components/footer/Footer"
import './App.css';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}
export default App;
