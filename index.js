import express from "express";
import axios from "axios";
import  Parser  from "rss-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 9000;
const RSS_FEED_URL = "https://medium.com/@cloudcomputingclub/feed";

app.use(cors());

const fetchRssData = async () => {
  try {
    const response = await axios.get(RSS_FEED_URL);
    const parser = new Parser();
    const feed = await parser.parseString(response.data);
    return feed;
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    throw error;
  }
};

app.get("/api/rss", async (req, res) => {
  try {
    const rssData = await fetchRssData();
    res.json(rssData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
