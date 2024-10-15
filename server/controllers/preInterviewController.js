import PreInterview from '../models/preInterview.js';


// Handle saving the pre-interview data
export const savePreInterview = async (req, res) => {
  try {
    // Extract user info from JWT token (req.user will be available after token validation)
    const userId = req.user.id;

    const { fullName, birthdate, birthplace, event1, event2, event3 } = req.body;

    // Validate required fields
    if (!fullName || !birthdate || !birthplace || !event1 || !event2 || !event3) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save the pre-interview data associated with the logged-in user
    const newPreInterview = await PreInterview.create({
      userId, // Associate this pre-interview with the user
      fullName,
      birthdate,
      birthplace,
      event1,
      event2,
      event3,
    });

    res.status(201).json({ message: 'Pre-Interview data saved!', data: newPreInterview });
  } catch (error) {
    console.error('Error saving pre-interview:', error.message);
    res.status(500).json({ error: 'Failed to save Pre-Interview data' });
  }
};

// Handle fetching the pre-interview data for the logged-in user
export const getPreInterview = async (req, res) => {
  try {
    // Extract user info from JWT token (req.user will be available after token validation)
    const userId = req.user.id;

    // Fetch the pre-interview data associated with the logged-in user
    const preInterviewData = await PreInterview.findAll({ where: { userId } });

    // If no data found, return an appropriate message
    if (!preInterviewData.length) {
      return res.status(404).json({ message: 'No pre-interview data found for this user' });
    }

    res.json(preInterviewData);
  } catch (error) {
    console.error('Error fetching pre-interview data:', error.message);
    res.status(500).json({ error: 'Failed to fetch Pre-Interview data' });
  }
};
