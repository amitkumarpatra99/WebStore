import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaCartPlus, FaArrowLeft } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { getProductById } from "../data/products";

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const data = getProductById(id);
        setProduct(data);
        window.scrollTo(0, 0); // Scroll to top when page loads
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center dark:bg-slate-950 dark:text-white">
                <p>Loading or Product Not Found...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20 pb-10 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="container px-4 md:px-10">
                {/* Back Button */}
                <Link
                    to={-1}
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-6 transition-colors"
                >
                    <FaArrowLeft /> Back
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl">
                    {/* Image Section */}
                    <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden h-[400px] md:h-auto">
                        <img
                            src={product.img}
                            alt={product.title}
                            className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 max-h-[500px]"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm text-primary font-bold tracking-widest uppercase mb-1">
                                    {product.category}
                                </p>
                                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                                    {product.title}
                                </h1>
                            </div>
                            <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-lg">
                                <FaStar className="text-yellow-500" />
                                <span className="font-bold text-slate-900 dark:text-white">
                                    {product.rating}
                                </span>
                            </div>
                        </div>

                        <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                            {product.description}
                        </p>

                        {/* Price */}
                        <div className="text-3xl font-bold text-slate-900 dark:text-white my-4">
                            ₹{product.price.toLocaleString()}
                        </div>

                        {/* Colors (Mock) */}
                        <div className="flex gap-4 items-center">
                            <span className="text-gray-500 dark:text-gray-400 font-medium">Color:</span>
                            <span className="text-slate-900 dark:text-white font-semibold">{product.color}</span>
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-700 my-6 pt-6"></div>

                        {/* Actions */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => addToCart(product)}
                                className="flex-1 bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                                <FaCartPlus /> Add to Cart
                            </button>
                            <button
                                className="flex-1 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                                onClick={() => alert("Proceeding to checkout...")} // Placeholder
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
