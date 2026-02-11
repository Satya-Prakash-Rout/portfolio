import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { counterItems } from "../Constants/Index.jsx";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  // GSAP Animation
  useGSAP(
    () => {
      countersRef.current.forEach((counter, index) => {
        const numberElement = counter.querySelector(".counter-number");
        const item = counterItems[index];

        if (!numberElement) return;

        // Start from 0
        gsap.set(numberElement, { innerText: 0 });

        // Animate to target
        gsap.to(numberElement, {
          innerText: item.value,
          duration: 2.5,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 80%", // when element enters viewport
          },
          onUpdate: function () {
            numberElement.textContent = `${Math.floor(
              numberElement.innerText
            )}${item.suffix || ""}`;
          },
          onComplete: () => {
            numberElement.textContent = `${item.value}${item.suffix || ""}`;
          },
        });
      });
    },
    { scope: counterRef }
  );

  return (
    <section
      id="counter"
      ref={counterRef}
      className="px-4 sm:px-6 lg:px-16 py-16 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) countersRef.current[index] = el;
            }}
            className="bg-zinc-800 rounded-xl p-8 sm:p-10 flex flex-col justify-center items-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div
              className="counter-number text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2"
              aria-label={`${item.value} ${item.label}`}
            >
              0{item.suffix || ""}
            </div>
            <div className="text-white text-lg sm:text-xl text-center">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedCounter;
