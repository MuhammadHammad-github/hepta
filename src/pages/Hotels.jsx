import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import Hero from "../components/Hero";
import {
  faEarth,
  faLightbulb,
  faMountainSun,
  faPlane,
  faUmbrellaBeach,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { motion, useAnimation, useInView } from "framer-motion";

const Hotels = () => {
  return (
    <div className="hotels">
      <Hero heading={"Our Hotels"} />
      <Services />
      <FamilyRoom text={"Family Room"} />
      <FamilyRoom
        text={"Presidential Room"}
        className={"960px:!flex-row-reverse !flex-col-reverse "}
      />
      {/* <MoreHotelFeatures /> */}
      <SlideShow />
      <Blogs />
    </div>
  );
};

export default Hotels;
const FamilyRoom = ({ className, text }) => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      controls1.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1 },
      });
      controls2.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
  }, [controls1, isInView]);
  return (
    <div
      className={`flex ${className}  960px:flex-row flex-col justify-center gap-10 sm:px-20 my-10 xs:px-10 px-5`}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls2}
        className="960px:w-1/2"
      >
        <img
          src="/images/welcome.webp"
          alt="person standing"
          className="object-contain max-w-full h-auto"
        />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 50 }}
        animate={controls1}
        className="960px:w-1/2 flex flex-col  justify-center gap-8"
      >
        <h1 className="text-3xl font-bold">{text}</h1>
        <p className="text">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <p className="text">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <div className="flex gap-4 items-center  watchVideo cursor-pointer my-4">
          <p className="uppercase tracking-wider  border-2 border-green-700 px-4 py-3 rounded-lg ">
            Learn More
          </p>
        </div>
      </motion.div>
    </div>
  );
};
const MoreHotelFeatures = () => {
  return (
    <div className="my-20 960px:px-20 sm:px-10 xs:px-5 px-3  ">
      <h1 className="text-center 960xp:text-7xl sm:text-6xl xs:text-5xl text-4xl font-bold">
        More Hotel Features{" "}
      </h1>
      <p className="text-center text my-4 960px:w-[60%] sm:w-[80%] xs:w-[90%] w-[95%] mx-auto !text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        saepe quis deleniti! Ipsa, mollitia. Nihil fugiat dolor voluptates
        beatae saepe, cumque aliquam doloremque omnis deserunt dolore,
        voluptatum similique, modi laborum.
      </p>
      <div className="grid 960px:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-20 gap-6">
        <Feature
          image={"/images/place1.jpg"}
          heading={"Five Reasons to Stay at resort villa"}
          text={
            " Far far away, behind the word mountains, far from the countries          Vokalia and Consonantia, there live the blind texts. Separated they          live in Bookmarksgrove right at the coast of the Semantics, a large          language ocean."
          }
        />
        <Feature
          image={"/images/personStanding.jpg"}
          heading={"Five Reasons to Stay at resort villa"}
          text={
            " Far far away, behind the word mountains, far from the countries          Vokalia and Consonantia, there live the blind texts. Separated they          live in Bookmarksgrove right at the coast of the Semantics, a large          language ocean."
          }
        />
        <Feature
          image={"/images/place1.jpg"}
          heading={"Five Reasons to Stay at resort villa"}
          text={
            " Far far away, behind the word mountains, far from the countries          Vokalia and Consonantia, there live the blind texts. Separated they          live in Bookmarksgrove right at the coast of the Semantics, a large          language ocean."
          }
        />
      </div>
    </div>
  );
};
const Feature = ({ date, heading, text, image }) => {
  return (
    <div className="flex flex-col gap-4 bg-white h-auto shadow-md">
      <div className="overflow-hidden">
        <img
          src={image}
          alt="blogPostImage"
          className="object-cover w-full h-48"
        />
      </div>
      <div className="flex flex-col px-4 py-6 gap-2">
        <h2 className="text-2xl font-semibold">{heading}</h2>
        <p className="text !text-xl">{text}</p>
      </div>
    </div>
  );
};
const Services = () => {
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
  }, [controls, isInView]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="flex flex-col justify-center items-center sm:px-20 xs:px-10 px-5  my-20 "
    >
      <div className="mt-20 grid 960px:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ">
        <Service
          icon={faUtensils}
          heading={"Good Foods"}
          text={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          }
        />
        <Service
          icon={faEarth}
          heading={"Travel Anywhere"}
          text={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          }
        />
        <Service
          icon={faPlane}
          heading={"Airplane"}
          text={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          }
        />
        <Service
          icon={faUmbrellaBeach}
          heading={"Beach Resort"}
          text={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          }
        />
        <Service
          icon={faMountainSun}
          heading={"Climbing Mountains"}
          text={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          }
        />
        <Service
          icon={faLightbulb}
          heading={"Hot Air Balloon"}
          text={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          }
        />
      </div>
    </motion.div>
  );
};
const Service = ({ icon, heading, text }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <FontAwesomeIcon icon={icon} className="text-5xl my-4 text-teal-600 " />
      <h1 className="text-2xl font-bold">{heading}</h1>
      <p className="text-center">{text}</p>
    </div>
  );
};

const SlideShow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true, // Enable fade effect
  };
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
  }, [controls, isInView]);
  const images = [
    "/images/hero.jpg",
    "/images/place1.jpg",
    "/images/personStanding.jpg",
  ];
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className=" my-20 gap-6 items-center justify-center flex-col 960px:px-20 sm:px-10 xs:px-5 px-3 max-w-full"
    >
      <h1 className="sm:text-5xl xs:text-4xl text-3xl font-bold text-center my-6">
        Hotel Gallery
      </h1>
      <p className="text text-center mx-auto my-6">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean.
      </p>
      <div className="slider-container my-20 ">
        <Slider {...settings}>
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className="w-full h-[600px]  shadow shadow-black flex items-center justify-center"
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </motion.div>
  );
};
const Blogs = () => {
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
  }, [controls, isInView]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="blogs relative py-20 bg-[#e9ecef] "
    >
      <div className="clip absolute w-full min-h-screen bg-[#e9ecef] -top-96 -z-10 left-0"></div>
      <div className="flex items-center justify-center gap-4 flex-col">
        <h1 className="text-center text-6xl font-bold my-6 ">
          More Hotel Features
        </h1>
        <p className=" text-center !text-xl  960px:w-[60%] sm:w-[80%] w-[90%]">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
      </div>
      <div className="grid 960px:grid-cols-3 sm:grid-cols-2 960px:gap-6 gap-4 960px:px-20 sm:px-10 xs:px-5 px-3 my-20">
        <Feature
          image={"/images/hero.jpg"}
          heading={"Five Reasons to Stay at resort villa"}
        />{" "}
        <Feature
          image={"/images/place1.jpg"}
          heading={"Five Reasons to Stay at resort villa"}
        />{" "}
        <Feature
          image={"/images/personStanding.jpg"}
          heading={"Five Reasons to Stay at resort villa"}
        />
      </div>
    </motion.div>
  );
};
const Blog = ({ date, heading, text, image }) => {
  return (
    <div className="flex flex-col gap-4 bg-white h-auto shadow-md">
      <div className="overflow-hidden">
        <img
          src={image}
          alt="blogPostImage"
          className="object-cover w-full h-48"
        />
      </div>
      <div className="flex flex-col px-4 py-6 gap-2">
        <p className="text-gray-300 text-lg tracking-widest">{date}</p>
        <h2 className="text-2xl font-semibold">{heading}</h2>
        <p className="text !text-xl">{text}</p>
      </div>
    </div>
  );
};
