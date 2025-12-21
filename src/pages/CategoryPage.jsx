import React from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaCartPlus } from "react-icons/fa";
import { useCart } from "../context/CartContext";

import { getCategoryData } from "../data/products";
import { Link } from "react-router-dom";

const CategoryPage = ({ category: propCategory, title }) => {
    const { category: paramCategory } = useParams();
    const category = propCategory || paramCategory;
    const products = getCategoryData(category);
    const displayTitle = title || category.charAt(0).toUpperCase() + category.slice(1);

    const { addToCart } = useCart();

    return (
        <div className="min-h-screen pt-10 pb-20 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p className="text-sm text-primary font-bold tracking-wider uppercase">
                        Browse Category
                    </p>
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
                        {displayTitle}
                    </h1>
                </div>

                {/* Content */}
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-8">
                        {products.map((data) => (
                            <Link
                                to={`/product/${data.id}`}
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                key={data.id}
                                className="group relative cursor-pointer w-full max-w-[300px]"
                            >
                                <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative bg-white dark:bg-slate-800">
                                    <div className="h-[350px] overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                                        <img
                                            src={data.img}
                                            alt={data.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <button
                                            onClick={(e) => { e.preventDefault(); addToCart(data); }}
                                            className="bg-primary text-white p-3 rounded-full hover:scale-110 transition-transform shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300"
                                            title="Add to Cart"
                                        >
                                            <FaCartPlus className="text-xl" />
                                        </button>
                                    </div>
                                </div>

                                <div className="pt-4 px-2">
                                    <h3 className="font-bold text-lg text-slate-800 dark:text-white group-hover:text-primary transition-colors duration-200 line-clamp-1">
                                        {data.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{data.description}</p>
                                    <div className="flex items-center justify-between mt-2">
                                        <p className="font-bold text-lg text-slate-900 dark:text-white">₹{data.price.toLocaleString()}</p>
                                        <div className="flex items-center gap-1 text-yellow-500">
                                            <FaStar className="text-xs" />
                                            <span className="text-sm font-medium">{data.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-gray-500 dark:text-gray-400">
                        <h2 className="text-2xl font-bold">No products found for this category.</h2>
                        <p className="mt-2">Check back later for updates!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
