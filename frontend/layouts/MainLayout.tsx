import { Outlet, useLocation } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import backgroundImage from '../public/InternalLandingBG.svg'; // Adjust the path to your SVG file

const MainLayout = () => {
  const location = useLocation();

  // Exclude Header and Footer for the landing page
  const isLandingPage = location.pathname === '/';

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      
      {!isLandingPage && <Header />}

      {/* Main content */}
      <div
        className="relative flex-grow bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          paddingTop: '75px', // Adjust based on the height of your header
        }}
      >
        <main className="flex-grow container mx-auto p-0 min-h-screen">
          <Outlet /> {/* This is where the child routes will render */}
        </main>
      </div>

      {/* Conditionally render Footer */}
      {!isLandingPage && <Footer />}
    </div>
  );
};

export default MainLayout;