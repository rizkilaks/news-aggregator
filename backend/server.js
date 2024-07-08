const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the News Aggregator API");
});

// Import routes
const authRoutes = require("./routes/auth");
const newsRoutes = require("./routes/news");
const savedNewsRoutes = require("./routes/savedNews");

app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/saved", savedNewsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
