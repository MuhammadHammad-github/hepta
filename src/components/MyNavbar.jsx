import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const [toggled, setToggled] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="py-10 px-3 flex justify-between items-center absolute top-0 left-0 w-full">
      <a
        onClick={() => navigate("/")}
        className="text-3xl !font-bold text-white cursor-pointer"
      >
        Hepta
      </a>
      <Hamburger toggled={toggled} setToggled={setToggled} />
      <Links toggled={toggled} setToggled={setToggled} />
    </div>
  );
};

export default MyNavbar;

const Hamburger = ({ toggled, setToggled }) => {
  return (
    <div
      className="flex flex-col gap-[6px] cursor-pointer hamburger transitional z-50"
      onClick={() => setToggled((prev) => !prev)}
    >
      <div
        className={` w-8 h-[2px] transition-transform duration-300   ${
          toggled ? "rotate-45 translate-y-2 bg-black" : "bg-white"
        }`}
      ></div>
      <div
        className={` w-8 h-[2px]  transitional ${
          toggled ? "fadeOutLeft" : "fadeInRight bg-white"
        }`}
      ></div>
      <div
        className={` w-8 h-[2px] transition-transform duration-300  ${
          toggled ? "-rotate-45 -translate-y-2 bg-black" : "bg-white"
        }`}
      ></div>
    </div>
  );
};
const Links = ({ toggled, setToggled }) => {
  const navigate = useNavigate();

  const [pathname, setPathname] = useState("");
  useEffect(() => {
    setPathname(window.location.pathname);
  }, [window.location.pathname]);
  const navLinks = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Hotels",
      link: "/hotels",
    },
    {
      text: "About Us",
      link: "/about",
    },
    {
      text: "Gallery",
      link: "/gallery",
    },
    {
      text: "News",
      link: "/news",
    },
    {
      text: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div
      className={`flex items-center justify-center flex-col transition-opacity duration-300 ease-in-out  gap-4 absolute top-0 left-0 w-full h-screen overflow-y-auto transitional  bg-white ${
        toggled ? "opacity-100 z-40" : "opacity-0 -z-40"
      }`}
    >
      {navLinks.map((item, index) => {
        return (
          <a
            // href={item.link}
            onClick={() => {
              navigate(item.link);
              setToggled(false);
            }}
            key={index}
            className={`${
              pathname === item.link && "text-teal-400"
            } text-4xl font-semibold text-black transitional cursor-pointer`}
          >
            {item.text}
          </a>
        );
      })}
    </div>
  );
};
