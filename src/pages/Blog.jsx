import React from "react";
import Hero from "../components/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  return (
    <div>
      <Hero heading={"Blog"} />
      <div className="grid 960px:grid-cols-3 sm:grid-cols-2  960px:px-20 sm:px-10 xs:px-5 px-3 my-36 gap-10">
        <Posts />
        <div>
          <SearchCard />
          <PopularPosts />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Blog;
const SearchCard = () => {
  return (
    <div className="p-6 bg-white shadow-lg border border-gray-100 ">
      <div className="relative">
        <FontAwesomeIcon
          className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500"
          icon={faSearch}
        />
        <input
          type="text"
          className="font-mukta-mahee px-10 transitional outline-none focus:border-black py-3 w-full border-2 border-gray-300"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};
const PopularPosts = () => {
  return (
    <div className="shadow-lg p-4 py-6 my-10 border border-gray-100 flex-grow-0">
      <h3 className="font-semibold font-mukta-mahee text-lg">Popular Post</h3>
      <div>
        <PopularPost
          date={"February 16, 2018"}
          heading={"Free Template By Colorlib"}
          image={"/images/place1.jpg"}
        />
        <PopularPost
          date={"February 16, 2018"}
          heading={"Free Template By Colorlib"}
          image={"/images/personStanding.jpg"}
        />{" "}
        <PopularPost
          date={"February 16, 2018"}
          heading={"Free Template By Colorlib"}
          image={"/images/hero.jpg"}
        />{" "}
        <PopularPost
          date={"February 16, 2018"}
          heading={"Free Template By Colorlib"}
          image={"/images/place1.jpg"}
        />
      </div>
    </div>
  );
};
const PopularPost = ({ date, heading, image }) => {
  return (
    <div className="my-10 flex items-center gap-4 flex-grow-0">
      <div className="w-1/2 h-20 ">
        <img
          className="max-w-full h-full  object-cover"
          src={image}
          alt="post image"
        />
      </div>
      <div className="my-2">
        <p className="text-gray-400  tracking-widest">{date}</p>
        <h1 className="text-lg font-bold ">{heading}</h1>
      </div>
    </div>
  );
};
const Posts = () => {
  return (
    <div className="960px:col-span-2">
      <div className=" grid 960px:grid-cols-2 grid-cols-1 lg:gap-x-20 gap-x-10 gap-y-10 w-full ">
        <Post
          image={"/images/place1.jpg"}
          heading={"Free Template By Colorlib"}
          date={"FEBRUARY 26, 2018"}
        />
        <Post
          image={"/images/place1.jpg"}
          heading={"Free Template By Colorlib"}
          date={"FEBRUARY 26, 2018"}
        />
        <Post
          image={"/images/place1.jpg"}
          heading={"Free Template By Colorlib"}
          date={"FEBRUARY 26, 2018"}
        />
        <Post
          image={"/images/place1.jpg"}
          heading={"Free Template By Colorlib"}
          date={"FEBRUARY 26, 2018"}
        />
        <Post
          image={"/images/welcome.webp"}
          heading={"Free Template By Colorlib"}
          date={"FEBRUARY 26, 2018"}
        />
        <Post
          image={"/images/personStanding.jpg"}
          heading={"Free Template By Colorlib"}
          date={"FEBRUARY 26, 2018"}
        />
      </div>
      <div className="my-1 mt-20 flex gap-2 items-center font-mukta-mahee">
        <a
          href="#"
          className="bg-teal-400  px-5 hover:text-white  rounded-full py-3 text-xl text-white shadow"
        >
          1
        </a>
        <a
          href="#"
          className="text-teal-400  px-5   rounded-full py-3 text-xl  "
        >
          2
        </a>{" "}
        <a
          href="#"
          className="text-teal-400  px-5   rounded-full py-3 text-xl  "
        >
          3
        </a>
      </div>
    </div>
  );
};
const Post = ({ date, heading, text, image }) => {
  return (
    <div className="flex flex-col  gap-4 bg-white h-auto shadow-md ">
      <div className="overflow-hidden h-48">
        <img
          src={image}
          alt="blogPostImage"
          className="object-cover  w-full max-h-full"
        />
      </div>
      <div className="flex flex-col px-4 py-6 gap-2">
        <p className="text-gray-300 text-lg tracking-widest">{date}</p>
        <h2 className="text-2xl font-semibold">{heading}</h2>
      </div>
    </div>
  );
};
const Categories = () => {
  return (
    <div className="shadow-lg p-4 py-6 my-10 border border-gray-100">
      <h3 className="font-semibold font-mukta-mahee text-lg">Categories</h3>
      <div className="my-5">
        <Category linkText={"Events"} num={12} />
        <Category linkText={"Resto Bar"} num={4} />
        <Category linkText={"Celebration"} num={23} />
        <Category linkText={"Promos"} num={8} />
      </div>
    </div>
  );
};
const Category = ({ linkText, num }) => {
  return (
    <div className="flex justify-between border-b-2 py-4">
      <a href="#" className="text-teal-500">
        {linkText}
      </a>
      <p>({num})</p>
    </div>
  );
};
