import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const PreInterview = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    birthdate: '',
    birthplace: '',
    event1: '',
    event2: '',
    event3: ''
  });
  const [error, setError] = useState<string | null>(null); // Track error messages
  const [loading, setLoading] = useState<boolean>(false); // Add loading state

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const token = localStorage.getItem('token'); // Ensure token is present

    try {
      const response = await fetch('http://localhost:5000/api/pre-interview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include token in request
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const { error } = await response.json(); // Parse error message
        throw new Error(error || 'Failed to submit pre-interview data');
      }

      // Handle success (navigate to another page, show a success message, etc.)
      navigate('/landing');
    } catch (error: any) {
      console.error('Error:', error.message);
      setError(error.message); // Show error message to user
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-50 bg-cover" style={{ backgroundImage: "url('/path-to-your-background.svg')" }}>
      <div className="bg-black bg-opacity-70 p-10 rounded-lg shadow-md w-full max-w-4xl border border-eggshell">
        <h1 className="text-4xl custom-font text-center text-eggshell mb-8">
          Pre-Interview Form
        </h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Show error message */}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-eggshell" htmlFor="fullName">Full Name:</label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 bg-transparent border border-eggshell rounded-md text-eggshell focus:ring-eggshell" />
            </div>

            <div>
              <label className="block text-sm font-medium text-eggshell" htmlFor="birthdate">Birthdate:</label>
              <input type="date" id="birthdate" name="birthdate" value={formData.birthdate} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 bg-transparent border border-eggshell rounded-md text-eggshell focus:ring-eggshell" />
            </div>

            <div>
              <label className="block text-sm font-medium text-eggshell" htmlFor="birthplace">Birthplace:</label>
              <input type="text" id="birthplace" name="birthplace" value={formData.birthplace} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 bg-transparent border border-eggshell rounded-md text-eggshell focus:ring-eggshell" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-eggshell">If you had to pick three moments in your life that define you, what would they be?</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <input type="text" id="event1" name="event1" value={formData.event1} onChange={handleChange} placeholder="Event 1" className="mt-1 block w-full px-4 py-2 bg-transparent border border-eggshell rounded-md text-eggshell focus:ring-eggshell" />
                <input type="text" id="event2" name="event2" value={formData.event2} onChange={handleChange} placeholder="Event 2" className="mt-1 block w-full px-4 py-2 bg-transparent border border-eggshell rounded-md text-eggshell focus:ring-eggshell" />
                <input type="text" id="event3" name="event3" value={formData.event3} onChange={handleChange} placeholder="Event 3" className="mt-1 block w-full px-4 py-2 bg-transparent border border-eggshell rounded-md text-eggshell focus:ring-eggshell" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="mt-4 bg-eggshell text-black px-4 py-2 rounded-md hover:bg-opacity-80" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PreInterview;



     
