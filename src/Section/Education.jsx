import React, { useState, useEffect, useRef } from "react";
import { educationData } from "../Constants/Index.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../Components/TitleHeader.jsx";
gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardsRef = useRef([]);

  const toggleDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
    id="education"
     className="w-full py-12 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <TitleHeader
          title="My Education"
          sub="🎓 Academic background and learning path"
        />

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() => toggleDetails(index)}
              className="bg-zinc-900 border border-gray-800 rounded-2xl p-6 cursor-pointer transition-all duration-500 ease-out hover:scale-[1.03] hover:border-indigo-500"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300">{edu.field}</p>
                  <p className="text-gray-400 text-sm mt-1">
                    {edu.institution}
                  </p>
                </div>

                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-gray-300 font-medium">{edu.year}</p>
                  <p className="text-indigo-400 font-semibold text-sm">
                    {edu.score}
                  </p>
                </div>
              </div>

              <div
                className={`grid transition-all duration-500 ease-out ${
                  activeIndex === index
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="text-gray-400 text-sm">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Education
