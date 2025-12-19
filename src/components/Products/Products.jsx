import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "Brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-16 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary font-bold tracking-wider uppercase">
            Top Selling Products
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Our Products
          </h1>
          <p data-aos="fade-up" className="text-gray-400 mt-4 text-sm">
            Discover our curated collection of high-quality products designed to elevate your style.
          </p>
        </div>

        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-8">
            {/* Card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="group relative cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="h-[250px] w-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>

                <div className="pt-3 text-center sm:text-left">
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white group-hover:text-primary transition-colors duration-200">
                    {data.title}
                  </h3>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{data.color}</p>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <FaStar className="text-xs" />
                      <span className="text-sm font-medium">{data.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center">
            <button className="mt-14 bg-primary text-white py-3 px-8 rounded-full font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
