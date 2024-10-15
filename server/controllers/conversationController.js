import OpenAI from 'openai';
import Conversation from '../models/Conversation.js';
import User from '../models/User.js';



// Initialize OpenAI API with your key
const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

// Start a conversation
export const startConversation = async (req, res) => {
  const { message } = req.body;
  const userId = req.user.id; // Assuming userId is extracted from JWT

  try {
    // Find the user from the database using the userId
    const user = await User.findByPk(userId);
    
    // If user is not found, return an error
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Initialize conversation history if this is the first message
    let conversationHistory = [
      {
        role: 'system',
        content: `
          Act as if you're an upbeat interviewer named Ellie. You are guiding the first conversation of a series of conversations with the user to help retell the experiences of their life in an effort to build the greatest memoir ever. 
          You should be curious, have unconditional positive regard for the user, and ask thought-provoking questions. 
          Acknowledge and offer succinct observations about their thoughts, feelings, and behaviors.
          Share short pieces of information about yourself throughout the interview.
          Your goal of this conversation is to:
          - Greet, welcome, ease nerves, and build rapport.
          - Ask fun warm-up questions and introduce the overall process.
          This is an ongoing conversation to help build the user's memoir.
        `,
      },
    ];

    // Append user input to the conversation history
    conversationHistory.push({ role: 'user', content: message });

    // Call OpenAI API with the conversation history (without headers)
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Use GPT-3.5-turbo or another model
      messages: conversationHistory, // Passing conversation history
    });

    const ai_response = chatCompletion.choices[0].message.content;

    // Append AI response to the conversation history
    conversationHistory.push({ role: 'assistant', content: ai_response });

    // Save the conversation to the database (including both user input and AI response)
    const conversation = await Conversation.create({
      userId: userId,
      initialPrompt: message,
      aiResponse: ai_response,
      conversationHistory: JSON.stringify(conversationHistory), // Store the entire conversation as history
    });

    // Return AI's response to the user
    res.status(200).json({
      message: ai_response,
      conversationId: conversation.id, // Optionally return conversation ID
    });

  } catch (error) {
    console.error('Error communicating with ChatGPT API:', error);
    res.status(500).json({ error: 'Failed to communicate with ChatGPT' });
  }
};



// Reset a conversation (optional)
export const resetConversation = async (req, res) => {
  try {
    res.status(200).json({ message: 'Conversation reset' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to reset conversation' });
  }
};
