"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Final = () => {
  return (
    <div
      data-aos="fade-up"
      className="bg-purple-900 rounded-md flex justify-center items-center pt-28 pb-28"
    >
      <h1 className="linkText text-8xl font-bold text-purple-300 animate-pulse py-2">
        LinkNest
      </h1>
    </div>
  );
};

export default Final;
