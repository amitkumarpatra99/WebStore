import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const localData = localStorage.getItem("cart");
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const decrementCartItem = (id) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === id);
            if (existingItem && existingItem.quantity > 1) {
                return prevItems.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
            // Optional: Remove if quantity becomes 0?
            // For now, let's just keep it at 1 or use removeFromCart explicitly
            return prevItems;
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartTotal = cartItems.reduce(
        (total, item) => total + (item.price || 500) * item.quantity, // Default price 500 if missing
        0
    );

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, clearCart, cartTotal, decrementCartItem }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
