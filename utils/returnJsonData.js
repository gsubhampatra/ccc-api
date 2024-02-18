import axios from "axios";
// Function to fetch Medium data
async function returnJsonData(usermedium) {
  const rssMedium = `https://medium.com/feed/@${usermedium}`;
  const rssToJson = (rss) =>
    `https://api.rss2json.com/v1/api.json?rss_url=${rss}`;
  try {
    const { data } = await axios.get(rssToJson(rssMedium));

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export default returnJsonData;
