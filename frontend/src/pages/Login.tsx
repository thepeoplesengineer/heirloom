import { useState, ChangeEvent, FormEvent } from 'react';
import { loginUser } from '../services/auth';

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginForm>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await loginUser(formData);
      console.log('Login Response:', data); // Debugging the response
      localStorage.setItem('token', data.token); // Store the JWT token
      window.location.href = '/dashboard'; // Redirect to dashboard after successful login
    } catch (error) {
      setError('Login failed, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-transparent">
      <form onSubmit={handleSubmit} className="p-8 bg-black bg-opacity-70 shadow-md rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 custom-font text-eggshell text-center">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Email input */}
        <div className="mb-4">
          <label className="block text-eggshell mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-eggshell bg-black bg-opacity-80 text-eggshell rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-4 py-2 border border-eggshell bg-black bg-opacity-80 text-eggshell rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {/* Don't have an account link */}
        <p className="mt-4 text-center text-eggshell">
          Don’t have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;


