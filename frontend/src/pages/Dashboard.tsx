import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { fetchMemoirs } from '../services/memoir'; // Comment this out since we're not fetching memoirs for now

interface Memoir {
  id: number;
  title: string;
}

const Dashboard = () => {
  const [memoirs, setMemoirs] = useState<Memoir[]>([]); // Memoir state is still here for future use
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Commenting out memoir fetching logic for now
    // const getMemoirs = async () => {
    //   try {
    //     const data = await fetchMemoirs(); // Fetch memoir data
    //     setMemoirs(data);
    //   } catch (err) {
    //     if (err instanceof Error) {
    //       if (err.message.includes('401')) {
    //         setError('Logged out due to inactivity. Please login again.');
    //       } else {
    //         setError('Failed to load memoirs.');
    //       }
    //     } else {
    //       setError('An unknown error occurred.');
    //     }
    //   }
    // };

    // getMemoirs(); // Don't fetch memoirs for now
  }, []);

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handlePreInterview = () => {
    navigate('/pre-interview');
  };

  const handleStartConversation = () => {
    navigate('/conversation');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  const handleGiveAGift = () => {
    navigate('/give-a-gift');
  };

  const handleCreateMemoir = () => {
    navigate('/create-memoir');
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <div className="relative z-10 flex-grow">
        <div className="bg-black bg-opacity-50 p-4 flex flex-col items-center justify-center min-h-screen">

          {error ? (
            <div className="text-center">
              <p className="text-red-500 text-lg">{error}</p>
              <button
                onClick={handleLoginRedirect}
                className="mt-4 px-6 py-3 bg-blue-600 text-white text-lg rounded hover:bg-blue-700"
              >
                Go to Login
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold custom-font mb-6">Dashboard</h2>

              {/* Memoir list temporarily removed */}
              {/* <ul className="mb-10 text-center text-lg text-white">
                {memoirs.length > 0 ? (
                  memoirs.map((memoir) => (
                    <li key={memoir.id} className="py-2">{memoir.title}</li>
                  ))
                ) : (
                  <p>Your latest entry will be listed here</p>
                )}
              </ul> */}

              {/* Stack the buttons in a column */}
              <div className="flex flex-col space-y-4 text-center">
                <button
                  onClick={handlePreInterview}
                  className="text-lg md:text-xl custom-font text-eggshell border border-eggshell px-6 py-4 rounded-lg hover:bg-eggshell hover:text-black transition"
                >
                  Start Pre-Interview
                </button>

                <button
                  onClick={handleStartConversation}
                  className="text-lg md:text-xl custom-font text-eggshell border border-eggshell px-6 py-4 rounded-lg hover:bg-eggshell hover:text-black transition"
                >
                  Start Conversation
                </button>

                {/* Additional buttons */}
                <button
                  onClick={handleProfile}
                  className="text-lg md:text-xl custom-font text-eggshell border border-eggshell px-6 py-4 rounded-lg hover:bg-eggshell hover:text-black transition"
                >
                  Profile
                </button>

                <button
                  onClick={handleGiveAGift}
                  className="text-lg md:text-xl custom-font text-eggshell border border-eggshell px-6 py-4 rounded-lg hover:bg-eggshell hover:text-black transition"
                >
                  Give a Gift
                </button>

                <button
                  onClick={handleCreateMemoir}
                  className="text-lg md:text-xl custom-font text-eggshell border border-eggshell px-6 py-4 rounded-lg hover:bg-eggshell hover:text-black transition"
                >
                  Create Memoir
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;








  