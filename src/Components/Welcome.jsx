import React, { useState, useEffect } from 'react';

const Welcome = ({ onComplete }) => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowWelcome(false);
        onComplete();
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!showWelcome) return null;

  return (
    <div
      className={`fixed inset-0 bg-black flex flex-col items-center justify-center z-50 transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInText {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .welcome-text {
          animation: slideInUp 1s ease-out, fadeInText 1.5s ease-out;
        }

        .visit-text {
          animation: slideInUp 1s ease-out 0.5s both, fadeInText 1.5s ease-out 0.5s both;
        }
      `}</style>

      <h1 className="welcome-text text-5xl md:text-6xl font-extrabold text-white mb-8 text-center px-4">
        Welcome to My Portfolio
      </h1>
      <p className="visit-text text-2xl md:text-3xl text-gray-300 text-center px-4">
        Let's explore together
      </p>
    </div>
  );
};

export default Welcome;
