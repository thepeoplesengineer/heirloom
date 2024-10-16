import React, { useState } from 'react';

const Chat = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{ sender: string, message: string }[]>([]);

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const newMessage = { sender: 'You', message: userInput };
    setChatHistory([...chatHistory, newMessage]);
    setUserInput('');  

    const token = localStorage.getItem('token'); // Retrieve the token from localStorage

    try {
      const response = await fetch('http://localhost:5000/api/conversation/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include the Bearer token in the headers
        },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await response.json();
      setChatHistory([...chatHistory, newMessage, { sender: 'Ellie', message: data.message }]);
    } catch (error) {
      console.error('Error communicating with Ellie:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 bg-black bg-opacity-80">
      <div
        id="chat-box"
        className="w-full max-w-3xl bg-black bg-opacity-60 rounded-lg shadow-lg p-6 text-eggshell overflow-y-auto h-96"
        style={{ color: '#F1EAD7' }} // Set text color to eggshell
      >
        {chatHistory.map((chat, index) => (
          <p key={index}><strong>{chat.sender}:</strong> {chat.message}</p>
        ))}
      </div>

      <form id="chat-form" onSubmit={handleSendMessage} className="w-full max-w-3xl mt-4 flex flex-col md:flex-row">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your response..."
          required
          className="flex-grow p-4 text-eggshell rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-lg mb-4 md:mb-0 md:mr-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#F1EAD7' }} // Set eggshell color and transparent background
        />
        <button
          type="submit"
          className="bg-gold text-black font-bold py-3 px-6 rounded-lg hover:bg-eggshell hover:text-black transition text-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;



