import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import ContactPage from "./component/Contact";
import AboutPage from "./component/About";
import RetryLater from "./component/RetryLater";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/home" Component={Home} />
        <Route exact path="/" Component={Home} />
        <Route exact path="/login" Component={RetryLater} />
        <Route exact path="/register" Component={RetryLater} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/products/:id" Component={Product} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/contact" Component={ContactPage} />
        <Route exact path="/about" Component={AboutPage} />
      </Routes>
    </>
  );
}

export default App;
