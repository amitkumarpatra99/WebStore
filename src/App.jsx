import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
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
import ProductDetails from "./pages/ProductDetails";
import { OrderProvider } from "./context/OrderContext";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import SearchResults from "./pages/SearchResults";
import { WishlistProvider } from "./context/WishlistContext";
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
      <AuthProvider>
        <WishlistProvider>
          <OrderProvider>
            <BrowserRouter>
              <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
                <Routes>
                  <Route path="/" element={<Layout handleOrderPopup={handleOrderPopup} />}>
                    <Route index element={<Home handleOrderPopup={handleOrderPopup} />} />
                    <Route path="mobiles" element={<CategoryPage category="mobiles" />} />
                    <Route path="electronics" element={<CategoryPage category="electronics" />} />
                    <Route path="fashion" element={<CategoryPage category="fashion" />} />
                    <Route path="top-products" element={<CategoryPage category="top-products" title="Top Products" />} />
                    <Route path="best-selling" element={<CategoryPage category="best-selling" title="Best Selling" />} />
                    <Route path="top-rated" element={<CategoryPage category="top-rated" title="Top Rated" />} />
                    <Route path="product/:id" element={<ProductDetails />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="checkout" element={<Order />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="search" element={<SearchResults />} />
                    <Route path="wishlist" element={<Wishlist />} />
                  </Route>
                </Routes>
              </div>
              <Toaster position="bottom-center" />
            </BrowserRouter>
          </OrderProvider>
        </WishlistProvider>
      </AuthProvider>
    </CartProvider>
  );
};

export default App;
