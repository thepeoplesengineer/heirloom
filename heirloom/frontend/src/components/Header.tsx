import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaTwitter } from 'react-icons/fa';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    window.addEventListener('storage', checkLoginStatus);
    checkLoginStatus();

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  return (
    <header className="bg-cover bg-left bg-no-repeat p-4 relative" style={{ backgroundImage: 'url(/HeirloomNav.svg)' }}>
      {/* Heirloom Title */}
      <img
        src="/HeirloomNavTitle.svg"
        alt="Heirloom"
        className="absolute md:left-0 md:pl-4 left-1/2 transform md:translate-x-0 -translate-x-1/2 top-1 w-auto h-20"
      />

      <div className="container mx-auto flex flex-col md:flex-row md:justify-end items-center mt-12 md:mt-0">
        <nav>
          <ul className="flex justify-center space-x-2 items-center">
            {!isLoggedIn ? (
              <>
                <li>
                  <Link
                    to="/login"
                    className="custom-font text-sm md:text-lg text-eggshell border border-eggshell px-3 py-2 md:px-4 md:py-2 rounded-full hover:bg-eggshell hover:text-black transition"
                    style={{ display: 'inline-block', width: '100%' }}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="custom-font text-sm md:text-lg text-eggshell border border-eggshell px-3 py-2 md:px-4 md:py-2 rounded-full hover:bg-eggshell hover:text-black transition"
                    style={{ display: 'inline-block', width: '100%' }}
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-font text-sm md:text-lg text-eggshell border border-eggshell px-3 py-2 md:px-4 md:py-2 rounded-full hover:bg-eggshell hover:text-black transition flex items-center justify-center"
                    style={{ display: 'inline-block', width: '100%' }}
                  >
                    <FaTwitter />
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    className="custom-font text-sm md:text-lg text-eggshell border border-eggshell px-3 py-2 md:px-4 md:py-2 rounded-full hover:bg-eggshell hover:text-black transition"
                    style={{ display: 'inline-block', width: '100%' }}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="custom-font text-sm md:text-lg text-eggshell border border-eggshell px-3 py-2 md:px-4 md:py-2 rounded-full hover:bg-eggshell hover:text-black transition"
                    style={{ display: 'inline-block', width: '100%' }}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      localStorage.removeItem('token');
                      setIsLoggedIn(false);
                    }}
                    className="custom-font text-sm md:text-lg text-eggshell border border-eggshell px-3 py-2 md:px-4 md:py-2 rounded-full hover:bg-eggshell hover:text-black transition"
                    style={{ display: 'inline-block', width: '100%' }}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;



