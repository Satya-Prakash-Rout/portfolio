import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { counterItems } from "../Constants/Index.jsx";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(
    () => {
      countersRef.current.forEach((counter, index) => {
        const numberElement = counter.querySelector(".counter-number");
        const item = counterItems[index];

        // Ensure it's clean before animating
        if (!numberElement) return;

        // Set initial value to 0
        gsap.set(numberElement, { innerText: 0 });

        // Animate to target number
        gsap.to(numberElement, {
          innerText: item.value,
          duration: 2.5,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter, // animate per box, not the whole section
            start: "top 80%", // triggers when the box enters viewport
          },
          onUpdate: function () {
            numberElement.textContent = `${Math.floor(numberElement.innerText)}${item.suffix}`;
          },
          onComplete: () => {
            numberElement.textContent = `${item.value}${item.suffix}`;
          },
        });
      });
    },
    { scope: counterRef } // safer than passing as a second arg to forEach
  );

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) countersRef.current[index] = el;
            }}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center items-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              0{item.suffix}
            </div>
            <div className="text-white text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
