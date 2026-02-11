import AnimatedCounter from "../Components/AnimatedCounter.jsx";
// import HeroExperiance from "../Components/HeroModel/HeroExperiance.jsx";
import  {words}  from "../Constants/Index.jsx";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap'

function Hero() {
  useGSAP(()=>{
    gsap.fromTo('.hero-text h1',
      {
        y: 50,
        opacity:0

      },
      {
        y:0,
        opacity: 1,
        stagger: .2,
        duration : 5,
        ease : 'power2.inOut'
      }
    )
  })
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* Hero Content */}
        <header className="flex flex-col justify-center w-full md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={`${word.text}-${index}`} // ✅ unique key
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
            
              <h1>into Real World Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                Hi, I’m Satya Prakash Rout, a MERN Stack Developer from India.
                I build scalable and responsive web applications using modern tools.<br/>
                Passionate about clean UI, strong backend logic, and performance.
                I love solving real-world problems through code.
                Currently focused on improving my full-stack expertise.
              </p>
              <AnimatedCounter/>
          </div>
        </header>
      </div>
    </section>
  );
}

export default Hero;
