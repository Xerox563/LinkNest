import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const ImageGrid = ({ images }) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 "
      data-aos="fade-up"
    >
      {images.map((image, index) => (
        <div key={index} className="flex justify-center items-center ">
          <img
            src={image}
            alt={`image-${index}`}
            className="w-full h-auto rounded-md border hover:scale-105 shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
