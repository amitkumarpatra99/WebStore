import React from "react";
import Image1 from "../../assets/hero/BLACK FRIDAY.png.png"; // Ensure this path is correct
import Image2 from "../../assets/hero/women.png";
import Image3 from "../../assets/hero/cart.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Black Friday Sale",
    subtitle: "Up to 50% Off",
    description: "Experience the best deals of the year. Premium quality, unbeatable prices.",
  },
  {
    id: 2,
    img: Image2,
    title: "Women's Collection",
    subtitle: "New Arrivals",
    description: "Discover the latest trends in women's fashion. Elegant, stylish, and comfortable.",
  },
  {
    id: 3,
    img: Image3,
    title: "Huge Discounts",
    subtitle: "Grab the Deal",
    description: "Don't miss out on our limited time offers. Shop your favorites now.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    customPaging: i => (
      <div className="w-3 h-3 bg-gray-300 rounded-full mt-4 hover:bg-primary transition-colors"></div>
    )
  };

  return (
    <div className="relative overflow-hidden min-h-[600px] sm:min-h-[700px] bg-gray-50 dark:bg-slate-950 flex justify-center items-center duration-300">
      {/* Abstract Background Shapes */}
      <div className="h-[700px] w-[700px] bg-gradient-to-r from-primary/30 to-secondary/30 absolute -top-1/2 right-0 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="h-[500px] w-[500px] bg-tertiary/20 absolute bottom-0 left-0 rounded-full blur-3xl opacity-40"></div>

      <div className="container pb-8 sm:pb-0 z-10">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text Content */}
                <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 px-4">
                  <h2
                    data-aos="fade-right"
                    data-aos-duration="500"
                    className="text-primary text-xl font-bold tracking-widest uppercase"
                  >
                    {data.subtitle}
                  </h2>
                  <h1
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900 dark:text-white"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    className="text-lg text-gray-500 dark:text-gray-300 max-w-md mx-auto sm:mx-0"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-3 px-8 rounded-full font-bold shadow-lg shadow-primary/40"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="order-1 sm:order-2 flex justify-center items-center">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    {/* Glass Backing for Image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-2xl transform scale-90"></div>

                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-contain mx-auto animate-float drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
