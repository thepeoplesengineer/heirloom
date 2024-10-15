import { Link } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col relative bg-cover bg-fixed bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/LandingBasicBG.svg)', 
        backgroundSize: 'cover', 
        height: '100vh',
      }}
    >
      {/* Custom navigation links at the top-right */}
      <div className="absolute top-4 right-4 flex space-x-4 z-10"> {/* Ensure z-index puts links on top */}
        <Link to="/login" className="custom-font text-xs sm:text-sm text-eggshell border border-eggshell px-2 py-1 rounded hover:text-yellow-300">Login</Link>
        <Link to="/register" className="custom-font text-xs sm:text-sm text-eggshell border border-eggshell px-2 py-1 rounded hover:text-yellow-300">Register</Link>
        <a href="https://twitter.com" className="text-eggshell text-lg border border-eggshell rounded p-1">
          <FaTwitter />
        </a>
      </div>

      {/* Main content */}
      <main className="flex-grow relative z-0"> {/* Adjust z-index */}
        {/* Learn More button in the bottom-right */}
        <button className="absolute bottom-8 right-8 px-4 py-2 text-eggshell border border-eggshell rounded-full custom-font hover:bg-gray-800 hover:border-black">
          Learn More
        </button>
      </main>
    </div>
  );
};

export default LandingPage;





