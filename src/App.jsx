import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import { CartProvider } from "./context/CartContext";
import Layout from "./Layout";
import Cart from "./components/Cart/Cart";
import Order from "./components/Order/Order";
import Orders from "./components/Orders/Orders";
import { OrderProvider } from "./context/OrderContext";
import { Toaster } from "react-hot-toast";

// Landing Page Component
const Home = ({ handleOrderPopup }) => (
  <>
    <Hero handleOrderPopup={handleOrderPopup} />
    <Products />
    <TopProducts handleOrderPopup={handleOrderPopup} />
    <Banner />
    <Testimonials />
    <Subscribe />
    <Popup orderPopup={false} setOrderPopup={() => { }} />
  </>
);

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <CartProvider>
      <OrderProvider>
        <BrowserRouter>
          <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
            <Routes>
              <Route path="/" element={<Layout handleOrderPopup={handleOrderPopup} />}>
                <Route index element={<Home handleOrderPopup={handleOrderPopup} />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Order />} />
                <Route path="orders" element={<Orders />} />
              </Route>
            </Routes>
          </div>
          <Toaster position="bottom-center" />
        </BrowserRouter>
      </OrderProvider>
    </CartProvider>
  );
};

export default App;
