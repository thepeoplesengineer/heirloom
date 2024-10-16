export const createMemoir = (req, res) => {
    // Memoir creation logic here
    res.json({ message: 'Memoir creation started', user: req.user });
  };
  
  export const viewMemoir = (req, res) => {
    // Memoir viewing logic here
    res.json({ message: 'Viewing memoirs', user: req.user });
  };
  