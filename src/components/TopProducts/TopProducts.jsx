import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const ProductsData = [
  {
    id: 6,
    img: Img1,
    title: "Casual Wear",
    description: "Perfect for daily outings. Comfortable, breathable.",
    price: 80,
  },
  {
    id: 7,
    img: Img2,
    title: "Printed Shirt",
    description: "Stand out with unique prints. High-quality fabric.",
    price: 95,
  },
  {
    id: 8,
    img: Img3,
    title: "Women's Shirt",
    description: "Elegant designs for the modern woman.",
    price: 110,
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  const { addToCart } = useCart();

  return (
    <div className="py-10 bg-gray-50 dark:bg-slate-900 transition-colors duration-300" id="top-products">
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-28">
          <p data-aos="fade-up" className="text-sm text-primary font-bold tracking-wide uppercase">
            Top Rated Products
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Best Sellers
          </h1>
          <p data-aos="fade-up" className="text-gray-500 dark:text-gray-400 mt-2 max-w-lg">
            Explore our most popular items, loved by customers for their quality and style.
          </p>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-10 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-3xl bg-white dark:bg-slate-800 hover:bg-slate-900 dark:hover:bg-primary/90 hover:text-white relative shadow-xl hover:shadow-2xl transition-all duration-300 group max-w-[320px] p-4 pt-0 mt-10 w-full"
            >
              {/* Image Section */}
              <div className="h-[120px] relative z-10">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[160px] block mx-auto transform -translate-y-20 group-hover:scale-110 group-hover:-rotate-6 duration-500 drop-shadow-2xl"
                />
              </div>

              {/* Details Section */}
              <div className="p-4 text-center -mt-10">
                {/* Star Rating */}
                <div className="w-full flex items-center justify-center gap-1 mb-3">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                  <FaStar className="text-yellow-400/50 text-sm" />
                </div>

                <h1 className="text-2xl font-bold mb-2 group-hover:tracking-wider duration-300">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-gray-200 duration-300 text-sm line-clamp-2 px-2">
                  {data.description}
                </p>
                <div className="mt-2 font-bold text-xl group-hover:text-white duration-300">₹{data.price}</div>

                <button
                  className="bg-primary group-hover:bg-white group-hover:text-primary text-white py-2 px-6 rounded-full mt-4 hover:scale-105 duration-300 font-semibold shadow-md"
                  onClick={() => addToCart(data)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
