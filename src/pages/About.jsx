import React from "react";
import Hero from "../components/Hero";
import Slider from "react-slick";

const About = () => {
  return (
    <div>
      <Hero heading={"About Us"} />
      <Welcome />
      <SlideShow />
      <Team />
    </div>
  );
};

export default About;
const Welcome = () => {
  return (
    <div className="flex 960px:flex-row flex-col justify-center gap-10 my-28 sm:px-20 xs:px-10 px-5">
      <div className="960px:w-1/2">
        <img
          src="/images/welcome.webp"
          alt="person standing"
          className="object-contain max-w-full h-auto"
        />
      </div>
      <div className="960px:w-1/2 flex flex-col  justify-center gap-8">
        <h1 className="text-3xl font-bold">Welcome Travel & Tours</h1>
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
      </div>
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

  const images = [
    "/images/hero.jpg",
    "/images/place1.jpg",
    "/images/personStanding.jpg",
  ];
  return (
    <div className=" my-36 gap-6 items-center justify-center flex-col 960px:px-20 sm:px-10 xs:px-5 px-3 max-w-full">
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
    </div>
  );
};
const Team = () => {
  return (
    <div className="960px:px-20 sm:px-10 xs:px-5 px-3 !my-48">
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Team</h1>
        <p className="text !text-xl 960px:w-[60%]  sm:w-[80%] xs:w-[90%] w-[95%]">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
      </div>
      <div className="grid 960px:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 my-20">
        <TeamMember
          image={"/images/person_2.jpg.webp"}
          name={"Vince Richardson"}
          role={"CEO, CO FOUNDER"}
        />
        <TeamMember
          image={"/images/person_3.jpg.webp"}
          name={"Jeff Stark"}
          role={"CEO, CO FOUNDER"}
        />
        <TeamMember
          image={"/images/person_1.jpg.webp"}
          name={"Vince Richardson"}
          role={"CEO, CO FOUNDER"}
        />{" "}
        <TeamMember
          image={"/images/person_2.jpg.webp"}
          name={"Vince Richardson"}
          role={"CEO, CO FOUNDER"}
        />
        <TeamMember
          image={"/images/person_3.jpg.webp"}
          name={"Jeff Stark"}
          role={"CEO, CO FOUNDER"}
        />
        <TeamMember
          image={"/images/person_1.jpg.webp"}
          name={"Vince Richardson"}
          role={"CEO, CO FOUNDER"}
        />
      </div>
    </div>
  );
};
const TeamMember = ({ role, name, image }) => {
  return (
    <div className="flex flex-col gap-2 shadow-md rounded">
      <div className="w-full overflow-hidden ">
        <img
          src={image}
          className="object-cover w-full h-96"
          alt="profile pic"
        />
      </div>
      <div className="my-2 mx-2">
        <p className="text">{role}</p>

        <h1 className="text-2xl font-bold">{name}</h1>
      </div>
    </div>
  );
};
