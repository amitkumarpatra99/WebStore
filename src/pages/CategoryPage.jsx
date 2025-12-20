import React from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaCartPlus } from "react-icons/fa";
import { useCart } from "../context/CartContext";

// Dummy images (placeholders for now, or reusing existing assets if imported)
// In a real app, these would be imported or fetched from an API
const getCategoryData = (category) => {
    switch (category) {
        case "mobiles":
            return [
                {
                    id: 101,
                    img: "https://placehold.co/400x600/png?text=iPhone+15",
                    title: "iPhone 15 Pro",
                    description: "Titanium design, A17 Pro chip.",
                    price: 134900,
                    rating: 4.8,
                    color: "Natural Titanium",
                    aosDelay: "0",
                },
                {
                    id: 102,
                    img: "https://placehold.co/400x600/png?text=Samsung+S24",
                    title: "Samsung Galaxy S24",
                    description: "Galaxy AI is here.",
                    price: 129999,
                    rating: 4.7,
                    color: "Titanium Gray",
                    aosDelay: "200",
                },
                {
                    id: 103,
                    img: "https://placehold.co/400x600/png?text=Pixel+8",
                    title: "Google Pixel 8",
                    description: "The AI phone by Google.",
                    price: 75999,
                    rating: 4.6,
                    color: "Rose",
                    aosDelay: "400",
                },
                {
                    id: 104,
                    img: "https://placehold.co/400x600/png?text=OnePlus+12",
                    title: "OnePlus 12",
                    description: "Smooth Beyond Belief.",
                    price: 64999,
                    rating: 4.5,
                    color: "Flowy Emerald",
                    aosDelay: "600",
                },
            ];
        case "electronics":
            return [
                {
                    id: 201,
                    img: "https://placehold.co/400x600/png?text=Sony+Headphones",
                    title: "Sony WH-1000XM5",
                    description: "Industry-leading noise cancellation.",
                    price: 26990,
                    rating: 4.9,
                    color: "Black",
                    aosDelay: "0",
                },
                {
                    id: 202,
                    img: "https://placehold.co/400x600/png?text=MacBook+Air",
                    title: "MacBook Air M3",
                    description: "Lean. Mean. M3 machine.",
                    price: 114900,
                    rating: 4.9,
                    color: "Midnight",
                    aosDelay: "200",
                },
                {
                    id: 203,
                    img: "https://placehold.co/400x600/png?text=iPad+Air",
                    title: "iPad Air",
                    description: "Fresh air.",
                    price: 59900,
                    rating: 4.7,
                    color: "Blue",
                    aosDelay: "400",
                },
                {
                    id: 204,
                    img: "https://placehold.co/400x600/png?text=Smart+Watch",
                    title: "Apple Watch Series 9",
                    description: "Smarter. Brighter. Mightier.",
                    price: 41900,
                    rating: 4.8,
                    color: "Starlight",
                    aosDelay: "600",
                },
            ];
        case "fashion":
            return [
                {
                    id: 301,
                    img: "https://placehold.co/400x600/png?text=Levis+Jacket",
                    title: "Levi's Denim Jacket",
                    description: "Classic trucker jacket.",
                    price: 3500,
                    rating: 4.5,
                    color: "Blue",
                    aosDelay: "0",
                },
                {
                    id: 302,
                    img: "https://placehold.co/400x600/png?text=Zara+Dress",
                    title: "Floral Summer Dress",
                    description: "Light and breezy for summer.",
                    price: 2200,
                    rating: 4.3,
                    color: "Floral",
                    aosDelay: "200",
                },
                {
                    id: 303,
                    img: "https://placehold.co/400x600/png?text=Nike+Sneakers",
                    title: "Nike Air Max",
                    description: "Comfort meets style.",
                    price: 8995,
                    rating: 4.7,
                    color: "White/Red",
                    aosDelay: "400",
                },
                {
                    id: 304,
                    img: "https://placehold.co/400x600/png?text=RayBan",
                    title: "Ray-Ban Aviator",
                    description: "Timeless style.",
                    price: 6500,
                    rating: 4.6,
                    color: "Gold",
                    aosDelay: "600",
                },
            ];
        default:
            return [];
    }
};

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
                            <div
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
                                            onClick={(e) => { e.stopPropagation(); addToCart(data); }}
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
                            </div>
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
