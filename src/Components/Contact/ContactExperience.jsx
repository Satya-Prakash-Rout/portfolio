import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { socialImgs } from '../../Constants/Index.jsx';

import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const ContactExperience = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const position = [20.2961, 85.8245]; // Bhubaneswar coordinates

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setSuccessMsg('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setErrorMsg('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
  <section
  id="contact"
  className="min-h-screen py-8 px-4 bg-black rounded-lg shadow-lg"
>
  {/* Centered Heading Section */}
  <div className="w-full flex flex-col items-center justify-center text-center mb-12">
    <h2 className="text-4xl font-extrabold text-white mb-4">Contact Me</h2>
    <p className="text-lg text-gray-300 max-w-xl">
      We'd love to hear from you! Fill out the form below to get in touch.
    </p>
  </div>

  {/* Contact Form and Location side by side */}
  <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center max-w-6xl mx-auto">
    {/* Contact Form */}
    <div className="flex-1 flex justify-center lg:justify-end">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-zinc-900 p-8 rounded-xl shadow-2xl space-y-6"
      >
        <label className="block">
          <span className="text-white text-lg font-medium">Name:</span>
          <input
            type="text"
            name="user_name"
            placeholder="Your full name"
            required
            className="mt-2 block w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
          />
        </label>

        <label className="block">
          <span className="text-white text-lg font-medium">Email:</span>
          <input
            type="email"
            name="user_email"
            placeholder="your.email@example.com"
            required
            className="mt-2 block w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
          />
        </label>

        <label className="block">
          <span className="text-white text-lg font-medium">Message:</span>
          <textarea
            name="message"
            placeholder="Type your message here..."
            rows="6"
            required
            className="mt-2 block w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg resize-y"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
        >
          {loading ? "Sending..." : "Send Your Message"}
        </button>

        {successMsg && <p className="text-green-600 text-center">{successMsg}</p>}
        {errorMsg && <p className="text-red-600 text-center">{errorMsg}</p>}
      </form>
    </div>

    {/* Location - double-click zoom enabled, zoomed out */}
    <div className="flex-1 flex flex-col justify-center lg:justify-center">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-xl shadow-2xl">
        <h3 className="text-2xl font-bold text-white mb-4">My Location</h3>
        <p className="text-lg text-white mb-6">Based in Bhubaneswar, Odisha</p>
        <div className="h-110 w-full rounded-lg overflow-hidden shadow-md">
          <MapContainer 
            center={position} 
            zoom={8} 
            style={{ height: '100%', width: '100%' }}
            dragging={false}
            scrollWheelZoom={false}
            doubleClickZoom={true}
            touchZoom={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Satya Prakash<br />
                MERN Stack Developer<br />
                Bhubaneswar, Odisha
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  </div>

</section>
  );
};

export default ContactExperience;


