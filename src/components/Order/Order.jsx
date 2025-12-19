import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Order = () => {
    const { cartItems, cartTotal } = useCart();
    const [paymentMethod, setPaymentMethod] = useState("razorpay");
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePayment = () => {
        if (paymentMethod === "razorpay") {
            // Redirect to Razorpay link
            window.location.href = "https://rzp.io/rzp/amitpatra";
        } else {
            // Handle COD logic
            setOrderPlaced(true);
        }
    };

    if (cartItems.length === 0 && !orderPlaced) {
        return (
            <div className="h-[50vh] flex flex-col items-center justify-center text-center dark:text-white">
                <h2 className="text-2xl font-bold mb-4">No items to checkout</h2>
                <Link to="/" className="text-primary hover:underline">Return to Home</Link>
            </div>
        )
    }

    if (orderPlaced) {
        return (
            <div className="h-[60vh] flex flex-col items-center justify-center text-center dark:text-white px-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h2 className="text-3xl font-bold mb-2">Order Placed Successfully!</h2>
                <p className="text-gray-500 mb-8 max-w-md">Thank you for your order. You will receive a confirmation email shortly. Your order will be delivered soon.</p>
                <Link
                    to="/"
                    className="bg-primary text-white py-3 px-8 rounded-full font-bold shadow-lg hover:scale-105 transition-all duration-300"
                >
                    Continue Shopping
                </Link>
            </div>
        )
    }

    return (
        <div className="container py-14 min-h-[70vh] dark:text-white">
            <h1 className="text-3xl font-bold mb-10 text-center">Checkout</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {/* Shipping Form (Visual Only for now) */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-xl font-bold mb-4">Shipping Details</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" />
                            <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" />
                            <input type="text" placeholder="Address" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" />
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="City" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" />
                                <input type="text" placeholder="Zip Code" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Summary */}
                <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 h-fit">
                    <h2 className="text-xl font-bold mb-6">Payment Summary</h2>
                    <div className="space-y-3 mb-6">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">{item.title} (x{item.quantity})</span>
                                <span>₹{(item.price || 500) * item.quantity}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-gray-300 dark:border-gray-600 pt-4 flex justify-between font-bold text-xl mb-6">
                        <span>Total Amount</span>
                        <span>₹{cartTotal}</span>
                    </div>

                    {/* Payment Method Selection */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-3">Payment Method</h3>
                        <div className="space-y-2">
                            <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${paymentMethod === 'razorpay' ? 'border-primary bg-primary/10' : 'border-gray-300 dark:border-gray-600'}`}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="razorpay"
                                    checked={paymentMethod === 'razorpay'}
                                    onChange={() => setPaymentMethod('razorpay')}
                                    className="accent-primary w-5 h-5"
                                />
                                <span className="font-medium">Online Payment (Razorpay)</span>
                            </label>

                            <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-primary bg-primary/10' : 'border-gray-300 dark:border-gray-600'}`}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cod"
                                    checked={paymentMethod === 'cod'}
                                    onChange={() => setPaymentMethod('cod')}
                                    className="accent-primary w-5 h-5"
                                />
                                <span className="font-medium">Cash on Delivery</span>
                            </label>
                        </div>
                    </div>

                    <button
                        onClick={handlePayment}
                        className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                    >
                        {paymentMethod === 'razorpay' ? "Pay Now" : "Place Order"}
                    </button>

                    <p className="text-xs text-center text-gray-400 mt-4">
                        {paymentMethod === 'razorpay' ? "You will be redirected to complete payment." : "Pay nicely when the delivery arrives."}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Order;
