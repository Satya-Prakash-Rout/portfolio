import { useEffect, useRef } from "react";
import { abilities } from "../Constants/Index.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }, index) => (
          <div
            key={title}
            ref={(el) => (cardsRef.current[index] = el)}
            className="card-border rounded-xl p-8 flex flex-col gap-4 will-change-transform transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>

            <h3 className="text-white text-2xl font-semibold mt-2">
              {title}
            </h3>

            <p className="text-white-50 text-lg">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
