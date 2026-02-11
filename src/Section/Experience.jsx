import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import GlowCard from "../Components/GlowCard";
import  {expCards} from "../Constants/Index.jsx";
import TitleHeader  from "../Components/TitleHeader.jsx";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((el, index) => {
      if (!el) return;

      const left = el.querySelector(".exp-left");
      const right = el.querySelector(".exp-right");

      gsap.fromTo(
        left,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        right,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <TitleHeader
          title="My Experience"
          sub="📈 Career highlights and personal experience"
        />

        <div className="flex flex-col gap-24 p-5">
          {expCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="grid grid-cols-1 xl:grid-cols-12 items-start"
            >
              {/* LEFT: Glow Card */}
              <div className="exp-left xl:col-span-5 xl:pl-20">
                <GlowCard index={index}>
                  <p className="text-white-50 text-lg italic leading-relaxed">
                    “{card.review}”
                  </p>
                </GlowCard>
              </div>

              {/* RIGHT: Timeline + Text */}
              <div className="exp-right xl:col-span-7 xl:pl-16 mt-10 xl:mt-0">
                <div className="flex gap-6">
                  {/* Timeline */}
                  <div className="relative flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-purple-500" />
                    <div className="w-[2px] bg-neutral-700 flex-1 mt-2" />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-3xl font-semibold text-white">
                      {card.title}
                    </h3>

                    <p className="text-purple-400 mt-1">
                      {card.company}
                    </p>

                    <p className="text-white-50 my-4">
                      {card.date}
                    </p>

                    <ul className="list-disc ml-5 space-y-2 text-white-50">
                      {card.points?.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
