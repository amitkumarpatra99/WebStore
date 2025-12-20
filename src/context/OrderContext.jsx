import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState(() => {
        const localData = localStorage.getItem("orders");
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);

    const placeOrder = (orderData) => {
        const newOrder = {
            id: Date.now().toString(), // Simple ID generation
            date: new Date().toISOString(),
            status: "Placed",
            ...orderData,
        };
        setOrders((prev) => [newOrder, ...prev]);
        toast.success("Order Placed Successfully!");
    };

    return (
        <OrderContext.Provider value={{ orders, placeOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => useContext(OrderContext);
