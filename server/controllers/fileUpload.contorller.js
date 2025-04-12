import uploadS3 from "../services/S3.js";

const uploadFile = async (req, res) => {
  try {
    const file = req.file.path;
    console.log("File:", file);
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Upload to S3
    const result = await uploadS3(file);
    console.log("Result:", result);

    res.status(200).json({ message: "File uploaded successfully", result });
  } catch (error) {
    console.error("Error uploading file:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export { uploadFile };
