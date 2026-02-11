import React from 'react';
import { socialImgs } from '../Constants/Index.jsx';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <p className="text-gray-400 text-sm mb-6">Connect with me</p>
        <div className="flex justify-center items-center gap-8">
          {socialImgs.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200 p-2 rounded-full hover:bg-white hover:bg-opacity-10"
              aria-label={social.name}
            >
              <img
                src={social.imgPath}
                alt={social.name}
                className="w-10 h-10 object-contain"
              />
            </a>
          ))}
        </div>
        <p className="text-gray-500 text-xs mt-8">
          © {new Date().getFullYear()} Satya Prakash. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
