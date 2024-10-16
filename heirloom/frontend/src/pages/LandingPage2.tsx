import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'; // Import the NavBar

const LandingPage = () => {
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) { // Adjust scroll threshold
        setButtonVisible(true);
      } else {
        setButtonVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Background image and parallax effect */}
      <div className="landing-bg h-screen w-full bg-fixed bg-cover" style={{ backgroundImage: `url('/LandingBG.svg')` }}></div>

      {/* Add NavBar component */}
      <NavBar />

      {/* Add the "Get Started" button */}
      <div className="absolute top-[60vh] w-full flex justify-center">
        <button className={`bg-blue-500 text-white py-3 px-8 rounded-full transition-opacity duration-500 ${buttonVisible ? 'opacity-100' : 'opacity-0'}`}>
          Get Started
        </button>
      </div>

      {/* Social Links at the bottom */}
      <div className="absolute bottom-8 w-full flex justify-center space-x-8">
        <a href="https://twitter.com" className="text-white">Twitter</a>
        <a href="/contact" className="text-white">Contact Us</a>
      </div>
    </div>
  );
};

export default LandingPage;
