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
            id: Date.now().toString(),
            date: new Date().toISOString(),
            status: "Placed",
            timeline: [
                { status: "Placed", date: new Date().toISOString(), completed: true },
                { status: "Processing", date: null, completed: false },
                { status: "Shipped", date: null, completed: false },
                { status: "Delivered", date: null, completed: false },
            ],
            ...orderData,
        };
        setOrders((prev) => [newOrder, ...prev]);
        toast.success("Order Placed Successfully!");
    };

    const cancelOrder = (orderId) => {
        setOrders((prev) =>
            prev.map((order) =>
                order.id === orderId
                    ? { ...order, status: "Cancelled", timeline: order.timeline.map(t => ({ ...t, completed: false })) }
                    : order
            )
        );
        toast.error("Order Cancelled");
    };

    const updateOrderDetails = (orderId, newDetails) => {
        setOrders((prev) =>
            prev.map((order) =>
                order.id === orderId ? { ...order, ...newDetails } : order
            )
        );
        toast.success("Order Details Updated");
    };

    return (
        <OrderContext.Provider value={{ orders, placeOrder, cancelOrder, updateOrderDetails }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => useContext(OrderContext);
