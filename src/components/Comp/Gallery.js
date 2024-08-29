"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="mt-16 bg-black" data-aos="fade-right">
      <div style={{ backgroundColor: "" }} className="h-full">
        <div className="container mx-auto lg:px-20">
          <div className="grid grid-cols-3 h-full pb-20 bg-gray-900">
            {/* Item 1 */}
            <div className="border-r border-gray-900 mx-3 lg:pl-20">
              <div className="py-10 pb-3 mt-72 h-4/6 relative bg-red-100 hover:bg-red-200 group cursor-pointer transition ease-out duration-300">
                <div>
                  <Image
                    src="https://cdn.dribbble.com/users/1172503/screenshots/4505740/login-form.gif"
                    alt="Quick Sign-Up"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="px-7 mt-20">
                  <h1 className="text-3xl font-bold group-hover:text-purple-300 transition ease-out duration-300">
                    01.
                  </h1>
                  <h2 className="text-xl mt-4 font-bold"> 🚀 Quick Sign-Up</h2>
                  <p className="mt-2 opacity-60 group-hover:opacity-70">
                    Get started in seconds with a simple and easy sign-up
                    process!
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="border-r border-gray-300 mx-3 lg:pl-20">
              <div className="py-10 pb-3 mt-32 h-4/6 relative bg-red-100 hover:bg-red-200 cursor-pointer transition ease-out duration-300">
                <div>
                  <Image
                    className="h-50 w-30 mx-auto"
                    src="https://freight.cargo.site/t/original/i/27a6d084ea51fe06de339eb859dd8b9f34ed797b37211761200853968997b496/09_How_to_change_your_font_and_font_color.gif"
                    alt="Personalize Your Profile"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="px-7 mt-10">
                  <h1 className="text-3xl font-bold group-hover:text-indigo-300 transition ease-out duration-300">
                    02.
                  </h1>
                  <h2 className="text-xl mt-4 font-bold">
                    🎨 Personalize Your Profile
                  </h2>
                  <p className="mt-2 opacity-60 group-hover:opacity-70">
                    Customize your profile with a unique style and standout
                    design.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="border-r border-gray-300 mx-3 lg:pl-20">
              <div className="py-10 pb-3 mt-5 h-4/6 relative bg-red-100 group hover:bg-red-200 cursor-pointer transition ease-out duration-300">
                <div>
                  <Image
                    src="https://cloud.headwayapp.co/changelogs_images/images/big/000/082/451-b4a10456e995e661339627fbec538d14abb4d623.gif"
                    alt="Add & Arrange Links"
                    width={600}
                    height={500}
                  />
                </div>
                <div className="px-7 mt-20">
                  <h1 className="text-3xl font-bold group-hover:text-red-300 transition ease-out duration-300">
                    03.
                  </h1>
                  <h2 className="text-xl mt-6 font-bold">
                    🔗 Add & Arrange Links
                  </h2>
                  <p className="mt-2 opacity-60 group-hover:opacity-70">
                    Effortlessly add your links and organize them for maximum
                    impact!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
