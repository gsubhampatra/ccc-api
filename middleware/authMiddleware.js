// Middleware to check authorization
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"]; // Get the authorization header

  // Check if the authorization header matches the expected value
  if (authHeader === "cccdevpassword") {
    next(); // Proceed to the next middleware or route handler
  } else {
    // Respond with a 401 Unauthorized status if the token is invalid
    res
      .status(401)
      .json({
        message: "You are not a CCC Developer",
        help: "Contact to Subham (gsubhampatra)",
      });
  }
};

export default authMiddleware;
