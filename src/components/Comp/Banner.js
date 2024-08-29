"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  return (
    <div>
      <section className=" bg-blue-700 pt-32 pb-36" data-aos="fade-left">
        <div className="mx-auto  px-4  lg:flex  lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Create and Customize
              <strong className="font-extrabold text-red-700 sm:block">
               
                Your LinkNest in Minutes! 🚀.
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Transform your digital presence with LinkNest, the ultimate
              link-in-bio tool for creators, influencers and businesses !!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
