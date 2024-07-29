import React, { useState } from "react";
import Hero from "../components/Hero";
import { Gallery } from "react-grid-gallery";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCancel,
  faCross,
  faDeleteLeft,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
const MyGallery = () => {
  const images = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "/images/place1.jpg",
      width: 600,
      height: 420,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "/images/personStanding.jpg",
      width: 600,
      height: 420,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (event) => {
    const src = event.target.src;
    setCurrentImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };
  return (
    <div>
      <Hero heading={"Gallery"} />
      <div className="960px:px-20 sm:px-10 xs:px-5 px-3 my-32 flex justify-evenly gap-y-4   flex-wrap">
        {/* <Gallery images={images} onClick={openModal} /> */}
        {images.map((image, index) => {
          return (
            <div
              className={` cursor-pointer sm:w-1/2  ${
                index === 8 || index === 9 ? "960px:w-[46.5%]" : "960px:w-[22%]"
              } `}
              key={index}
            >
              <img
                src={image.src}
                className="object-cover w-full h-full"
                alt="galleryImage"
                onClick={openModal}
              />
            </div>
          );
        })}
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{ background: "transparent" }}
      >
        <button
          onClick={closeModal}
          className="bg-black bg-opacity-45 hover:bg-opacity-80 text-white transitional rounded px-2 py-1 absolute right-5"
        >
          <FontAwesomeIcon icon={faRemove} />
        </button>
        <div className="w-full h-full">
          <img
            src={currentImage}
            style={{ width: "100%", height: "100%" }}
            className="object-contain"
            alt="Current"
          />
        </div>
      </Modal>
    </div>
  );
};

export default MyGallery;
