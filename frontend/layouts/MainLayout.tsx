import { Outlet, useLocation } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const MainLayout = () => {
  const location = useLocation();

  // Exclude Header and Footer for the landing page
  const isLandingPage = location.pathname === '/';

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Conditionally render Header */}
      {!isLandingPage && <Header />}

      {/* Main content */}
      <div className="relative z-10 flex-grow">
        <main className="flex-grow container mx-auto p-0 min-h-screen">
          <Outlet /> {/* This is where the child routes will render */}
        </main>
      </div>

      {/* Conditionally render Footer */}
      {!isLandingPage && <Footer />}

      {/* Background image positioned under the header */}
      {!isLandingPage && (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/InternalLandingBG.svg')",
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            top: '75px',  
            minHeight: '100vh',  // Removed fixed height, let it scale based on content
          }}
        ></div>
      )}
    </div>
  );
};

export default MainLayout;


