import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import ProductDetail from "./pages/ProductDetail";
import SignInSide from "./Config/Login/Login";
import Cart from "./pages/Order/Cart";
import Checkout from "./pages/CheckOut/CheckOut";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignInSide/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/product/:productName" element={<ProductDetail />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
