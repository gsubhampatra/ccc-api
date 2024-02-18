import returnJsonData from "../utils/returnJsonData.js";
import returnJsonPosts from "../utils/returnPost.js";

const getPosts = async (req, res) => {
  try {
    const { usermedium } = req.params || "cloudcomputingclub";

    const mediumPosts =
      usermedium && (await returnJsonData(usermedium.toString()));

    const dataMedium = returnJsonPosts(mediumPosts, mediumPosts.items);

    res.json({ dataMedium });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({  message: "User not found" });
  }
};

export { getPosts };
