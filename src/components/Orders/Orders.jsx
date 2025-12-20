import React from "react";
import { useOrder } from "../../context/OrderContext";

const Orders = () => {
    const { orders } = useOrder();

    return (
        <div className="container py-14 min-h-[60vh] dark:text-white">
            <h1 className="text-3xl font-bold mb-10 text-center">My Orders</h1>

            {orders.length === 0 ? (
                <div className="text-center">
                    <p className="text-xl text-gray-500">You haven't placed any orders yet.</p>
                </div>
            ) : (
                <div className="space-y-6 max-w-4xl mx-auto">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
                        >
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                                <div>
                                    <h3 className="font-bold text-lg">Order ID: #{order.id}</h3>
                                    <p className="text-sm text-gray-400">
                                        Placed on: {new Date(order.date).toLocaleDateString()}
                                    </p>
                                </div>
                                <div className="mt-2 sm:mt-0">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-bold ${order.status === "Placed"
                                                ? "bg-green-100 text-green-600"
                                                : "bg-gray-100 text-gray-600"
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-2 mb-4">
                                {order.items.map((item) => (
                                    <div key={item.id} className="flex justify-between text-sm">
                                        <span className="text-gray-600 dark:text-gray-300">
                                            {item.title} (x{item.quantity})
                                        </span>
                                        <span>₹{(item.price || 500) * item.quantity}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between items-center font-bold text-lg pt-4 border-t border-gray-200 dark:border-gray-700">
                                <span>Total Amount</span>
                                <span className="text-primary">₹{order.total}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Orders;
