const { SavedNews } = require("../models");

exports.saveNews = async (req, res) => {
  const { userId, articleId, title, description, url } = req.body;
  try {
    const savedNews = await SavedNews.create({ userId, articleId, title, description, url });
    res.status(201).json(savedNews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSavedNews = async (req, res) => {
  const { userId } = req.params;
  try {
    const savedNews = await SavedNews.findAll({ where: { userId } });
    res.json(savedNews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
