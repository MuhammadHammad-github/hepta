import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MyFooter = () => {
  return (
    <div className="bg-[#1a1a1a] 960px:px-20 sm:px-10 xs:px-5 px-3 py-20 text-white">
      <div className=" grid 960px:grid-cols-4  gap-y-10 sm:grid-cols-2 grid-cols-1">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-xl">Quick Link</h2>
          <a
            href="#"
            className="font-mukta-mahee transitional text-lg text-gray-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="font-mukta-mahee transitional text-lg text-gray-300"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="font-mukta-mahee transitional text-lg text-gray-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="font-mukta-mahee transitional text-lg text-gray-300"
          >
            Help
          </a>
          <a
            href="#"
            className="font-mukta-mahee transitional text-lg text-gray-300"
          >
            Rooms
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-xl">Support</h2>
          <a
            href="#"
            className="font-mukta-mahee transitional text-lg text-gray-300"
          >
            Our Location
          </a>
          <a
            href="#"
            className="font-mukta-mahee transitional text-lg text-gray-300"
          >
            The Hosts
          </a>
          <a
            href="#"
            className="font-mukta-mahee transitional text-lg text-gray-300"
          >
            About
          </a>
          <a
            href="#"
            className="font-mukta-mahee transitional text-lg text-gray-300"
          >
            Contact
          </a>
          <a
            href="#"
            className="font-mukta-mahee transitional text-lg text-gray-300"
          >
            Restaurant
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-xl">Support</h2>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold font-mukta-mahee text-lg">Address:</h3>
            <p className="text-gray-400">98 West 21th Street, Suite 721</p>
            <p className="text-gray-400">New York NY 10016</p>
          </div>{" "}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold font-mukta-mahee text-lg">Phone:</h3>

            <p className="text-gray-400">(+1) 435 3533</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold font-mukta-mahee text-lg">Email:</h3>

            <p className="text-gray-400">info@yourdomain.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-xl">Subscribe</h2>
          <p className="text !text-xl">Sign up for our newsletter</p>
          <div className="relative">
            <input
              type="text"
              className="bg-transparent font-mukta-mahee border-b-2 transitional focus:border-b-gray-400 focus:outline-none border-b-gray-700 w-full my-4 py-2 px-2 "
              placeholder="Your Email..."
            />
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="absolute top-1/2 right-2 -translate-y-1/2 text-teal-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="my-10 border-t-2 rounded border-gray-400 py-4">
        <p className="text-center text !text-xl my-6">
          Copyright &copy; 2024 All Rights Reserved | This template is made with{" "}
          by Colorlib
        </p>
      </div>
    </div>
  );
};

export default MyFooter;
