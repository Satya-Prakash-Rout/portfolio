import React, { useState } from 'react'
import Hero from './Section/Hero'
import AnimatedCounter from './Components/AnimatedCounter'
import ShowcaseSection from './Section/ShowcaseSection'
import CV from './Components/CV'
import NavBar from './Components/NavBar'
import Welcome from './Components/Welcome'
//import LogoSection from './Components/LogoSection'
import FeaturedCards from './Section/FeaturedCards'
import Experience from './Section/Experience'
import TechStack from './Section/TechStack'
import ContactExperience from './Components/Contact/ContactExperience'
import Footer from './Components/Footer'
import Chatbot from './Components/Chatbot'
import Education from './Section/Education'

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <>
    {showWelcome && <Welcome onComplete={handleWelcomeComplete} />}
    
    <NavBar/>
    <Hero/>
    <AnimatedCounter/>
    <CV/>
    
    <ShowcaseSection/>
    <Education/>
    
    <FeaturedCards/>
    <Experience/>
    <TechStack/>
    <div data-section="contact">
      <ContactExperience/>
    </div>
    <Footer/>
    <Chatbot/>
    </>
  )
}

export default App
