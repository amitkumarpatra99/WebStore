import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getAllProducts } from "../data/products";
import { FaStar } from "react-icons/fa6";

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";
    const [results, setResults] = useState([]);
    const allProducts = getAllProducts();

    useEffect(() => {
        if (query) {
            const filtered = allProducts.filter(product =>
                product.title.toLowerCase().includes(query.toLowerCase()) ||
                product.category.toLowerCase().includes(query.toLowerCase()) ||
                product.color.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered);
        } else {
            setResults([]);
        }
    }, [query]);

    return (
        <div className="container py-14 min-h-[60vh] dark:text-white">
            <h1 className="text-3xl font-bold mb-4">Search Results</h1>
            <p className="text-gray-500 mb-8">Showing results for: <span className="font-bold text-primary">"{query}"</span></p>

            {results.length === 0 ? (
                <div className="text-center py-10">
                    <h2 className="text-xl font-semibold">No products found.</h2>
                    <p className="text-gray-400">Try searching for "mobiles", "shirt", or "watch".</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {results.map((data) => (
                        <div
                            key={data.id}
                            className="space-y-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform duration-300"
                        >
                            <div className="h-[180px] w-full flex items-center justify-center bg-gray-50 dark:bg-gray-700/50 rounded-lg overflow-hidden relative group">
                                <img
                                    src={data.img}
                                    alt={data.title}
                                    className="max-h-full max-w-full object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-110 transition-transform duration-300"
                                />
                                {/* Quick action overlay could go here */}
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg truncate" title={data.title}>{data.title}</h3>
                                <p className="text-sm text-gray-400">{data.color}</p>
                                <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                                    <FaStar />
                                    <span>{data.rating}</span>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="font-bold text-xl">₹{data.price}</span>
                                    <Link to={`/product/${data.id}`} className="text-sm bg-primary text-white px-3 py-1.5 rounded-lg hover:bg-secondary transition-colors">
                                        View
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResults;
