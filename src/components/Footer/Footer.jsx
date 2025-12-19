import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <div className="text-white bg-[#212529] dark:bg-slate-950">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-20 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-primary to-secondary rounded-xl flex items-center justify-center text-white font-extrabold shadow-md">W</div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                WebStore
              </span>
            </h1>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Your one-stop destination for premium products. We bring you the best quality items at unbeatable prices.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* Quick Links */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li key={link.title} className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-400 hover:font-semibold">
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Support
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-400">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-400">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-400">
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Contact Us
              </h1>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="text-primary" />
                  <p className="text-gray-400">Puri, Odisha, India</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt className="text-primary" />
                  <p className="text-gray-400">+91 1234567890</p>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#" className="text-3xl hover:text-primary duration-300">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-3xl hover:text-primary duration-300">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-3xl hover:text-primary duration-300">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700/50 py-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} WebStore. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
