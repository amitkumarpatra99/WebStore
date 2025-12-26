import React, { useState } from "react";
import toast from "react-hot-toast";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Subscribed successfully!");
      setEmail("");
    }, 2000);
  };

  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
    >
      <div className="container backdrop-blur-sm py-16 px-6 relative overflow-hidden rounded-3xl mt-10">
        {/* Background Gradient Blob */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 opacity-90"></div>

        <div className="space-y-6 max-w-2xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
            Get Notified About New Products
          </h1>
          <p className="text-white/80 text-sm sm:text-base">
            Subscribe to our newsletter and be the first to know about our latest arrivals and exclusive offers.
          </p>

          <div className="w-full relative flex items-center justify-center">
            <input
              data-aos="fade-up"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 pr-32 rounded-full border-none bg-white text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg text-base"
            />
            <button
              type="button"
              onClick={handleSubscribe}
              disabled={loading}
              className={`absolute right-2 top-1.5 bottom-1.5 px-6 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-md ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
