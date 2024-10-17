const MEMOIR_API_URL = `${import.meta.env.VITE_API_URL}/memoir`; // Make sure this URL is correct

// Define Memoir and MemoirData types
interface Memoir {
  id: number;
  title: string;
  content: string;
}

interface MemoirData {
  title: string;
  content: string;
}

// Fetch memoirs
export const fetchMemoirs = async (): Promise<Memoir[]> => {
  const token = localStorage.getItem('token'); // Get the token from localStorage

  const response = await fetch(`${MEMOIR_API_URL}/view`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch memoirs');
  }

  const data = await response.json();
  return data;
};

// Create memoir
export const createMemoir = async (memoirData: MemoirData) => {
  const token = localStorage.getItem('token'); // Get the token from localStorage

  const response = await fetch(`${MEMOIR_API_URL}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
    },
    body: JSON.stringify(memoirData),
  });

  if (!response.ok) {
    throw new Error('Failed to create memoir');
  }

  return response.json(); // Return the result of the memoir creation
};