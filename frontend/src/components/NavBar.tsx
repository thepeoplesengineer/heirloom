import { useState, useEffect } from 'react';

const NavBar = () => {
  const [navbarSolid, setNavbarSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarSolid(true);
      } else {
        setNavbarSolid(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 p-4 transition duration-500 ${navbarSolid ? 'bg-black bg-opacity-80' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center container mx-auto">
        <div className="text-white text-2xl">Heirloom</div>
        <ul className="flex space-x-4 text-white">
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
