import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Absolutely love the quality! The delivery was super fast and the packaging was excellent. Highly recommended.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Great experience shopping here. The customer support team was very helpful and the product exceeded my expectations.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Premium items at affordable prices. I've bought multiple times and have never been disappointed.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Sachin Tendulkar",
    text: " The variety of products is amazing. Found exactly what I was looking for. Will definitely shop again!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-14 mb-10 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary font-bold uppercase tracking-wide">
            Testimonials
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-bold text-slate-900 dark:text-white mt-2">
            What Our Customers Say
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-xl py-8 px-6 mx-4 rounded-3xl bg-gray-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 relative border border-gray-100 dark:border-gray-700">
                  <div className="mb-4 flex justify-start">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-16 h-16 object-cover ring-2 ring-primary/50"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-4">
                    <div className="space-y-3">
                      <p className="text-sm text-gray-500 dark:text-gray-300 italic">
                        "{data.text}"
                      </p>
                      <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/10 dark:text-white/10 text-[10rem] font-serif absolute -top-10 right-4 leading-none">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
