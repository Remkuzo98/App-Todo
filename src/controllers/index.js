exports.getWelcomeController = (req, res) => {
  res.status(200).json({ message: 'Welcome to the ToDo App where your task lists are well organized' });
};
