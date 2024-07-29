import "react-slideshow-image/dist/styles.css";
import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  faEarth,
  faGlobe,
  faHandsBubbles,
  faLightbulb,
  faMountain,
  faMountainCity,
  faMountainSun,
  faPlane,
  faPlay,
  faPlayCircle,
  faUmbrella,
  faUmbrellaBeach,
  faUtensilSpoon,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUtensils,
  width,
} from "@fortawesome/free-solid-svg-icons/faUtensils";
import StarRating from "../components/RatingStars";
import { motion, useAnimation, useInView } from "framer-motion";
const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Welcome />
      <Services />
      <SlideShow />
      <Blogs />
      <Reviews />
      <TopDestination />
    </div>
  );
};

export default Home;

const Hero = () => {
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref);
  // Trigger animation on entering view
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
    <div className="hero w-full min-h-screen flex flex-col gap-4 items-center justify-center ">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="text-white sm:text-7xl text-4xl my-4 !font-extrabold text-center"
      >
        Travel & Tours
      </motion.h1>
      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={controls}
        className="text-white sm:text-3xl text-xl font-light text-center"
      >
        A free template by <span className="text-gray-400">Colorlib</span>.
        Download and Share
      </motion.p>
      <motion.button
        ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
        className={`uppercase !text-sm tracking-widest my-10 rounded-lg font-semibold bg-transparent px-4 py-4 transitional border border-white text-white  hover:bg-white hover:text-black hover:border-black active:scale-95`}
      >
        Visit Colorlib
      </motion.button>
    </div>
  );
};
const Welcome = () => {
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref);
  // Trigger animation on entering view
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
    <div className="flex 960px:flex-row flex-col justify-center gap-10 my-28 sm:px-20 xs:px-10 px-5">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
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
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        className="960px:w-1/2 flex flex-col  justify-center gap-8"
      >
        <h1 className="text-3xl font-bold">Welcome To Our Website</h1>
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
        <div className="flex gap-4 items-center watchVideo cursor-pointer my-4">
          <FontAwesomeIcon
            icon={faPlayCircle}
            className="playIcon text-5xl text-green-700 hover:text-black transitional"
          />
          <p className="uppercase tracking-wider text-green-700">
            Watch The Video
          </p>
        </div>
      </motion.div>
    </div>
  );
};
const Services = () => {
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref);
  // Trigger animation on entering view
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
    <div className="flex flex-col justify-center items-center sm:px-20 xs:px-10 px-5 py-28 my-20 bg-[#fafafa]">
      <div className="flex gap-4 flex-col ">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          className="sm:text-3xl text-2xl font-bold text-center"
        >
          Experience Once In Your Life Time
        </motion.h1>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 150 }}
          animate={controls}
          className="text text-center sm:!text-xl  960px:w-[80%] sm:w-[90%] mx-auto"
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </motion.p>
      </div>
      <div className="mt-20 grid 960px:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ">
        <Service
          ref={ref}
          initial={{ opacity: 0, y: 150 }}
          animate={controls}
          icon={faUtensils}
          heading={"Good Foods"}
          text={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          }
        />
        <Service
          ref={ref}
          initial={{ opacity: 0, y: 200 }}
          animate={controls}
          icon={faEarth}
          heading={"Travel Anywhere"}
          text={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          }
        />
        <Service
          ref={ref}
          initial={{ opacity: 0, y: 250 }}
          animate={controls}
          icon={faPlane}
          heading={"Airplane"}
          text={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          }
        />
        <Service
          ref={ref}
          initial={{ opacity: 0, y: 300 }}
          animate={controls}
          icon={faUmbrellaBeach}
          heading={"Beach Resort"}
          text={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          }
        />
        <Service
          ref={ref}
          initial={{ opacity: 0, y: 350 }}
          animate={controls}
          icon={faMountainSun}
          heading={"Climbing Mountains"}
          text={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          }
        />
        <Service
          ref={ref}
          initial={{ opacity: 0, y: 400 }}
          animate={controls}
          icon={faLightbulb}
          heading={"Hot Air Balloon"}
          text={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          }
        />
      </div>
    </div>
  );
};
const Service = ({
  icon,
  heading,
  text,
  ref = {},
  initial = {},
  animate = {},
}) => {
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      className="flex flex-col gap-2 items-center justify-center"
    >
      <FontAwesomeIcon icon={icon} className="text-5xl my-4 text-teal-600 " />
      <h1 className="text-2xl font-bold">{heading}</h1>
      <p className="text-center">{text}</p>
    </motion.div>
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
  // Trigger animation on entering view
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
    <div className="  gap-6 items-center justify-center flex-col 960px:px-20 sm:px-10 xs:px-5 px-3 max-w-full">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        className="sm:text-5xl xs:text-4xl text-3xl font-bold text-center my-6"
      >
        International Tour Management
      </motion.h1>
      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 150 }}
        animate={controls}
        className="text text-center mx-auto my-6"
      >
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean.
      </motion.p>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={controls}
        className="slider-container my-20 "
      >
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
      </motion.div>
    </div>
  );
};
const Blogs = () => {
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref);
  // Trigger animation on entering view
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
    <div className="blogs relative py-20 bg-teal-400 ">
      <div className="clip absolute w-full min-h-screen bg-teal-400 -top-96 -z-10 left-0"></div>
      <div className="flex items-center justify-center gap-4 flex-col">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          className="text-center text-6xl font-bold my-6 "
        >
          Recent Blog Post
        </motion.h1>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 150 }}
          animate={controls}
          className="text-gray-200 text-center !text-xl  960px:w-[60%] sm:w-[80%] w-[90%]"
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </motion.p>
      </div>
      <div className="grid 960px:grid-cols-3 sm:grid-cols-2 960px:gap-6 gap-4 960px:px-20 sm:px-10 xs:px-5 px-3 my-20">
        <Blog
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          image={"/images/hero.jpg"}
          date={"FEBRUARY 26, 2018"}
          heading={"45 Best Places To Unwind"}
          text={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          }
        />{" "}
        <Blog
          ref={ref}
          initial={{ opacity: 0, y: 150 }}
          animate={controls}
          image={"/images/personStanding.jpg"}
          date={"FEBRUARY 26, 2018"}
          heading={"45 Best Places To Unwind"}
          text={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          }
        />{" "}
        <Blog
          ref={ref}
          initial={{ opacity: 0, y: 200 }}
          animate={controls}
          image={"/images/place1.jpg"}
          date={"FEBRUARY 26, 2018"}
          heading={"45 Best Places To Unwind"}
          text={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          }
        />
      </div>
    </div>
  );
};
const Blog = ({
  date,
  heading,
  text,
  image,
  ref = {},
  initial = {},
  animate = {},
}) => {
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      className="flex flex-col gap-4 bg-white h-auto shadow-md"
    >
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
    </motion.div>
  );
};

const Reviews = () => {
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref);
  // Trigger animation on entering view
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
    <div className="bg-[#fafafa] py-28">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="sm:text-6xl xs:text-5xl text-4xl font-bold text-center"
      >
        Happy Customers
      </motion.h1>
      <div className="grid 960px:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 960px:px-20 sm:px-10 xs:px-5 px-3 my-10">
        <Review
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          image={"/images/person_1.jpg.webp"}
          name={"Clare Gupta"}
          review={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
          }
        />
        <Review
          ref={ref}
          initial={{ opacity: 0, y: 150 }}
          animate={controls}
          image={"/images/person_2.jpg.webp"}
          name={"Rogie Slater"}
          review={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
          }
        />{" "}
        <Review
          ref={ref}
          initial={{ opacity: 0, y: 200 }}
          animate={controls}
          image={"/images/person_3.jpg.webp"}
          name={"John Doe"}
          review={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
          }
        />
      </div>
    </div>
  );
};
const Review = ({
  image,
  name,
  review,
  ref = {},
  initial = {},
  animate = {},
}) => {
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      className="flex flex-col gap-3"
    >
      <div>
        <img
          src={image}
          alt="profilePic"
          className="rounded-full object-contain w-20 h-20 max-w-full"
        />
      </div>
      <blockquote className="!italic text-xl font-light tracking-wide">
        "{review}"
      </blockquote>
      <p className="flex items-center gap-2">
        <span>~</span>
        {name}
      </p>
    </motion.div>
  );
};
const TopDestination = () => {
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref);
  // Trigger animation on entering view
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
    <div className="my-28 flex flex-col gap-4">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="text-3xl font-bold text-center"
      >
        Top Destination
      </motion.h1>
      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        className="text-center text 960px:w-[60%] sm:w-[70%] xs:w-[80%] w-[90%] mx-auto"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
        iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum
        voluptate id porro, culpa maiores quis, blanditiis laboriosam alias.
        Sed.
      </motion.p>
      <div className="grid 960px:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 960px:px-20 sm:px-10 xs:px-5 px-3 my-20">
        <DestinationCard
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          image={"/images/hero.jpg"}
          heading={"Food & Wines"}
          noOfReviews={3239}
          rating={4}
        />
        <DestinationCard
          ref={ref}
          initial={{ opacity: 0, y: 150 }}
          animate={controls}
          image={"/images/place1.jpg"}
          heading={"Resort & Spa"}
          noOfReviews={4921}
          rating={3}
        />
        <DestinationCard
          ref={ref}
          initial={{ opacity: 0, y: 200 }}
          animate={controls}
          image={"/images/welcome.webp"}
          heading={"Hotel Rooms"}
          noOfReviews={2112}
          rating={4}
        />
        <DestinationCard
          ref={ref}
          initial={{ opacity: 0, y: 250 }}
          animate={controls}
          image={"/images/personStanding.jpg"}
          heading={"Mountain Climbing"}
          noOfReviews={6421}
          rating={5}
        />
      </div>
    </div>
  );
};
const DestinationCard = ({
  image,
  heading,
  rating,
  noOfReviews,
  ref = {},
  initial = {},
  animate = {},
}) => {
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      className="cursor-pointer"
    >
      <div>
        <img
          src={image}
          alt="destination image"
          className="shadow-md object-cover w-full h-40"
        />
      </div>
      <h2 className="font-bold text-xl tracking-tighter my-2">{heading}</h2>
      <div className="flex justify-between items-center my-1">
        <p>
          <StarRating rating={rating} />
        </p>
        <p className="text-lg text-gray-300 !italic">{noOfReviews} Reviews</p>
      </div>
    </motion.div>
  );
};
