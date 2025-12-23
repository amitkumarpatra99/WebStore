import React, { useState } from "react";
import { useOrder } from "../../context/OrderContext";
import OrderActionsModal from "./OrderActionsModal";

const OrderStepper = ({ timeline, status }) => {
    if (status === "Cancelled") {
        return <div className="text-red-600 font-bold mt-4">🚫 Order Cancelled</div>;
    }
    return (
        <div className="flex items-center justify-between w-full mt-6 relative">
            {/* Progress Bar Background */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 -z-0"></div>

            {timeline?.map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center">
                    <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors duration-300 ${step.completed ? "bg-green-500 text-white" : "bg-gray-300 dark:bg-gray-600 text-gray-500"
                            }`}
                    >
                        {step.completed ? "✓" : index + 1}
                    </div>
                    <span className={`text-xs mt-2 font-medium ${step.completed ? "text-green-600" : "text-gray-400"}`}>
                        {step.status}
                    </span>
                </div>
            ))}
        </div>
    );
};

const Orders = () => {
    const { orders, cancelOrder, updateOrderDetails } = useOrder();
    const [modalConfig, setModalConfig] = useState({ isOpen: false, type: null, order: null });

    const openModal = (type, order) => {
        setModalConfig({ isOpen: true, type, order });
    };

    const handleConfirm = (data) => {
        if (modalConfig.type === "cancel") {
            cancelOrder(modalConfig.order.id);
        } else if (modalConfig.type === "edit") {
            updateOrderDetails(modalConfig.order.id, data);
        }
    };

    return (
        <div className="container py-14 min-h-[60vh] dark:text-white">
            <h1 className="text-3xl font-bold mb-10 text-center">My Orders</h1>

            {orders.length === 0 ? (
                <div className="text-center">
                    <p className="text-xl text-gray-500">You haven't placed any orders yet.</p>
                </div>
            ) : (
                <div className="space-y-8 max-w-4xl mx-auto">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden"
                        >
                            {/* Header */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                                <div>
                                    <h3 className="font-bold text-xl flex items-center gap-2">
                                        Order #{order.id}
                                        <span className={`text-xs px-2 py-1 rounded-full ${order.status === 'Cancelled' ? 'bg-red-100 text-red-600' : 'bg-primary/10 text-primary'}`}>
                                            {order.status}
                                        </span>
                                    </h3>
                                    <p className="text-sm text-gray-400 mt-1">
                                        Placed on: {new Date(order.date).toLocaleDateString()}
                                    </p>
                                </div>
                                <div className="mt-4 md:mt-0 flex gap-3">
                                    {order.status !== "Cancelled" && order.status !== "Delivered" && (
                                        <>
                                            <button
                                                onClick={() => openModal("edit", order)}
                                                className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                                            >
                                                Edit Details
                                            </button>
                                            <button
                                                onClick={() => openModal("cancel", order)}
                                                className="px-4 py-2 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-lg transition-colors"
                                            >
                                                Cancel Order
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Items */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="md:col-span-2 space-y-4">
                                    <h4 className="font-semibold text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">Items</h4>
                                    {order.items.map((item) => (
                                        <div key={item.id} className="flex gap-4 items-center bg-gray-50 dark:bg-slate-700/50 p-3 rounded-lg">
                                            <img src={item.img} alt={item.title} className="w-16 h-16 object-contain rounded-md bg-white" />
                                            <div>
                                                <p className="font-bold line-clamp-1">{item.title}</p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Qty: {item.quantity}</p>
                                                <p className="text-primary font-bold">₹{item.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Delivery Info */}
                                <div className="bg-gray-50 dark:bg-slate-700/30 p-4 rounded-lg h-fit">
                                    <h4 className="font-semibold text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider mb-3">Delivery Address</h4>
                                    <p className="font-bold">{order.name}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{order.address}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">📞 {order.phone}</p>
                                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 flex justify-between items-center">
                                        <span className="font-bold">Total Paid</span>
                                        <span className="text-xl font-bold text-primary">₹{order.total}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Tracking Stepper */}
                            <OrderStepper timeline={order.timeline || [
                                { status: "Placed", completed: true },
                                { status: "Processing", completed: false },
                                { status: "Shipped", completed: false },
                                { status: "Delivered", completed: false }
                            ]} status={order.status} />
                        </div>
                    ))}
                </div>
            )}

            <OrderActionsModal
                isOpen={modalConfig.isOpen}
                type={modalConfig.type}
                order={modalConfig.order || {}}
                onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
                onConfirm={handleConfirm}
            />
        </div>
    );
};

export default Orders;
