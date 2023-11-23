// src/services/rssService.js
import axios from "axios";
import Parser from "rss-parser";
import { getDataFromCache, setDataInCache } from "../utils/cache.js";

const RSS_FEED_URL = "https://medium.com/@cloudcomputingclub/feed";
const CACHE_KEY = "rssData";

const fetchRssData = async () => {
  try {
    // Check if data is in cache
    const cachedData = getDataFromCache(CACHE_KEY);
    if (cachedData) {
      return cachedData;
    }

    // Fetch data from RSS feed
    const response = await axios.get(RSS_FEED_URL);
    const parser = new Parser();
    const feed = await parser.parseString(response.data);
    const extractInfo = (item) => {
      const title = item.title;
      const contentEncodedSnippet = item["content:encodedSnippet"];
      const contentEncoded = item["content:encoded"];

      // Extract the first image tag from content:encoded
      const imageRegex = /<img[^>]*src="([^"]*)"[^>]*>/;
      const match = contentEncoded.match(imageRegex);
      const imageUrl = match ? match[1] : null;
      const descriptionLines = contentEncodedSnippet.split("\n").slice(0, 5);
      const description = descriptionLines.join("\n");
      const url = item.link;

      return { title, description, imageUrl, url };
    };
    const newfeed = feed.items.map(extractInfo);
    // Update cache with fresh data
    console.log(newfeed);
    setDataInCache(CACHE_KEY, newfeed);

    return newfeed;
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    throw error;
  }
};

export { fetchRssData };
