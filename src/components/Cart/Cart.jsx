import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
    const { cartItems, removeFromCart, cartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="h-[50vh] flex flex-col items-center justify-center gap-4 dark:text-white">
                <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
                <p className="text-gray-500">Looks like you haven't added anything yet.</p>
                <Link
                    to="/"
                    className="bg-primary text-white px-6 py-2 rounded-full hover:scale-105 duration-300"
                >
                    Shop Now
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-14 min-h-[60vh] dark:text-white">
            <h1 className="text-3xl font-bold mb-10 text-center">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                                <div>
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="text-sm text-gray-400">{item.description}</p>
                                    <p className="text-primary font-bold mt-1">
                                        ₹{item.price || 500} x {item.quantity}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700 p-2"
                            >
                                <FaTrash />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md h-fit border border-gray-100 dark:border-gray-700 sticky top-24">
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>₹{cartTotal}</span>
                    </div>
                    <div className="flex justify-between mb-4 pb-4 border-b border-gray-200 dark:border-gray-600">
                        <span>Shipping</span>
                        <span className="text-green-500">Free</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold mb-6">
                        <span>Total</span>
                        <span>₹{cartTotal}</span>
                    </div>

                    <Link
                        to="/checkout"
                        className="block w-full bg-primary text-white text-center py-3 rounded-full font-bold hover:bg-secondary transition-colors duration-300 shadow-lg"
                    >
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
