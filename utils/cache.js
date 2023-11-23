
import NodeCache from 'node-cache';

const cache = new NodeCache();

const getDataFromCache = (key) => {
  return cache.get(key);
};

const setDataInCache = (key, data) => {
  cache.set(key, data, 1800); // Cache data for 30 minutes (1800 seconds)
};

export { getDataFromCache, setDataInCache };
