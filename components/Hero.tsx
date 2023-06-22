"use client";

import { BsArrowRight } from "react-icons/bs";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Hero() {
  // Create Ref element.
  const el = useRef(null);

  // functions
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "am Syed Kazmi 👋",
        "am a web designer",
        "am a web developer",
        "build cool things 🔥",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 60,
      backSpeed: 50,
      backDelay: 200,
      smartBackspace: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="hero-bg h-screen flex flex-col items-center justify-center py-2 px-4 md:py-12 md:px-20 gap-10 md:gap-12 animate-fade-up">
      {/* Hero */}
      <h1 className="text-5xl md:text-6xl font-bold md:mb-2 text-center gradient-text h-36 md:h-auto md:py-2 animate-none">
        Hey there, I <span ref={el} />
      </h1>

      <p className="text-xl md:text-2xl md:w-1/2 text-center font-extralight animate-fade-up animate-duration-[2000ms]">
        I am a web designer/developer with 2+ years of experience working on my
        own side projects and a startup. I have built web apps, browser
        extensions, mobile apps, and even dabbled in data science. This is my
        portfolio.
      </p>

      {/* Action Button */}
      <div className="text-center">
        <button
          onClick={scrollToProjects}
          className="btn btn-primary md:btn-lg gap-3 hover:gap-6 animate-fade-up animate-duration-[2000ms]"
        >
          Browse Projects
          <BsArrowRight strokeWidth={1} className="ml-auto md:text-xl" />
        </button>
      </div>
    </div>
  );
}
