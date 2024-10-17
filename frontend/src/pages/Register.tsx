import { useState, ChangeEvent, FormEvent } from 'react';
import { registerUser } from '../services/auth';

interface RegisterForm {
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  const [formData, setFormData] = useState<RegisterForm>({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registerUser(formData);
      window.location.href = '/login';
    } catch (error) {
      setError('Registration failed, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center bg-transparent"> 
      <div className="flex-grow flex items-center justify-center">
        <form onSubmit={handleSubmit} className="p-8 bg-[#3b2b29] shadow-md rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 custom-font text-eggshell text-center">Register</h2>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          {/* Username input */}
          <div className="mb-4">
            <label className="block text-eggshell mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-10 py-2 border border-eggshell bg-[#1c1a1a] text-eggshell rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email input */}
          <div className="mb-4">
            <label className="block text-eggshell mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-eggshell bg-[#1c1a1a] text-eggshell rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password input */}
          <div className="mb-6">
            <label className="block text-eggshell mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-eggshell bg-[#1c1a1a] text-eggshell rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3 outline-black bg-eggshell text-white font-bold rounded-md hover:bg-black transition"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>

          {/* Already have an account link */}
          <p className="mt-4 text-center text-eggshell">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>

      
    </div>
  );
};

export default Register;
