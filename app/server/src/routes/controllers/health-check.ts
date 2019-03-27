export const healthCheck = async (req, res) => {
  try {
    res.status(200).json({ isHealthy: "true" });
  } catch (e) {
    res.status(400).json({ isHealthy: "false" });
  }
};
