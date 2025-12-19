import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = ({ handleOrderPopup }) => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Navbar handleOrderPopup={handleOrderPopup} />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
