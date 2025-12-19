import React from "react";
import BannerImg from "../../assets/4547829.jpg";
import { GrSecure } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { MdPayment } from "react-icons/md";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="Sale Banner"
              className="max-w-[400px] h-[350px] w-full mx-auto object-cover rounded-3xl shadow-2xl hover:scale-105 duration-300"
            />
          </div>

          {/* Text Content Section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0 pl-0 sm:pl-10">
            <h1 data-aos="fade-up" className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Winter Sale <br />
              <span className="text-primary">Up to 50% Off</span>
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-6"
            >
              Don't miss out on our exclusive winter collection. Grab your favorites at unbeatable prices. Limited time offer!
            </p>

            <div className="flex flex-col gap-5">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-14 w-14 shadow-lg p-4 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300" />
                <p className="font-semibold text-slate-700 dark:text-slate-200">Quality Products</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="100" className="flex items-center gap-4">
                <FaShippingFast className="text-4xl h-14 w-14 shadow-lg p-4 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300" />
                <p className="font-semibold text-slate-700 dark:text-slate-200">Fast Delivery</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="200" className="flex items-center gap-4">
                <MdPayment className="text-4xl h-14 w-14 shadow-lg p-4 rounded-full bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300" />
                <p className="font-semibold text-slate-700 dark:text-slate-200">Easy Payment Methods</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-4">
                <BiSolidOffer className="text-4xl h-14 w-14 shadow-lg p-4 rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-300" />
                <p className="font-semibold text-slate-700 dark:text-slate-200">Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
