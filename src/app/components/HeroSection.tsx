"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";

function HeroSection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm a Cat", "I'm a bird", "I'm a dog"],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              Hello, &nbsp;
            </span>
            <p className="text-[#ADB7BE] text-4xl lg:text-xl">
              <span ref={el} className="align-baseline"></span>
            </p>
          </h1>
          <p className="text-[#ADB7BE] text-base  sm:text-lg lg:text-xl mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis hic
            quas laboriosam praesentium laudantium similique dignissimos
            reprehenderit tenetur officiis? Culpa impedit fugiat, inventore ab
            quia molestiae quod! Eum, possimus mollitia.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-2 mb-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-slate-200">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-4   py-3">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
