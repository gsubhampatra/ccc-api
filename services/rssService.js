// src/services/rssService.js
import axios from 'axios';
import Parser from 'rss-parser';
import { getDataFromCache, setDataInCache } from '../utils/cache.js';

const RSS_FEED_URL = 'https://medium.com/@cloudcomputingclub/feed';
const CACHE_KEY = 'rssData';

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

    // Update cache with fresh data
    setDataInCache(CACHE_KEY, feed);

    return feed;
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    throw error;
  }
};

export { fetchRssData };
