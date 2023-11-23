// controllers/rssController.js
import { fetchRssData } from '../services/rssService.js';

const getRssData = async (req, res) => {
  try {
    const rssData = await fetchRssData();
    res.json(rssData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getRssData };
