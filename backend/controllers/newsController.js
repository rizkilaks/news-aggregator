const axios = require("axios");

exports.getNews = async (req, res) => {
  const { category, source, from, to, q, page, pageSize } = req.query;
  const params = {
    apiKey: process.env.NEWS_API_KEY,
    country: "us",
    category,
    sources: source,
    from,
    to,
    q,
    page,
    pageSize,
  };

  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", { params });
    res.json(response.data.articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
