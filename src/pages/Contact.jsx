import React from "react";
import Hero from "../components/Hero";

const Contact = () => {
  return (
    <div>
      <Hero heading={"Contact"} />
      <div className="flex md:flex-row flex-col gap-10 960px:px-20 sm:px-10 xs:px-5 px-3 my-36">
        <Form />
        <Address />
      </div>
      <Reviews />
    </div>
  );
};

export default Contact;
const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="shadow-md p-6 md:w-1/2 border-gray-100 border">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6 my-4">
          <Input name={"name"} />
          <Input name={"phone"} />
        </div>
        <Input name={"Email"} type="email" />
        <div className="flex flex-col gap-2 my-4">
          <label
            htmlFor="message"
            className="capitalize text-gray-700 font-mukta-mahee"
          >
            Write Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="border-2 border-gray-300 font-mukta-mahee  outline-none focus:border-black transitional p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className=" border-2 !border-teal-400 px-4 py-2 hover:text-teal-400 transitional"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
const Address = () => {
  return (
    <div className="flex flex-col gap-8  px-10">
      <Street />
      <Phone />
      <Email />
    </div>
  );
};
const Street = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold text-lg text-teal-500">Address</h3>
      <h1 className="font-bold text-2xl">98 West 21th Street, Suite</h1>
      <h1 className="font-bold text-2xl">721 New York NY 10016</h1>
    </div>
  );
};
const Phone = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold text-lg text-teal-500">Phone</h3>
      <h1 className="font-bold text-2xl">(+1) 435 3533</h1>
    </div>
  );
};
const Email = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold text-lg text-teal-500">Email</h3>
      <h1 className="font-bold text-2xl">info@yourdomain.com</h1>
    </div>
  );
};
const Input = ({ name, type = "text" }) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="capitalize text-gray-700 font-mukta-mahee"
      >
        {name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className=" border-2 border-gray-300 font-mukta-mahee  outline-none focus:border-black transitional py-3 px-2"
        required
      />
    </div>
  );
};
const Reviews = () => {
  return (
    <div className="bg-[#fafafa] py-28">
      <h1 className="sm:text-6xl xs:text-5xl text-4xl font-bold text-center">
        Happy Customers
      </h1>
      <div className="grid 960px:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 960px:px-20 sm:px-10 xs:px-5 px-3 my-10">
        <Review
          image={"/images/person_1.jpg.webp"}
          name={"Clare Gupta"}
          review={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
          }
        />
        <Review
          image={"/images/person_2.jpg.webp"}
          name={"Rogie Slater"}
          review={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
          }
        />{" "}
        <Review
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
const Review = ({ image, name, review }) => {
  return (
    <div className="flex flex-col gap-3">
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
    </div>
  );
};
