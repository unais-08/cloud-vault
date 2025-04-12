import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// Convert `import.meta.url` to `__dirname` equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define storage settings
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads/")); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Add timestamp to avoid conflicts
  },
});

// Initialize Multer with storage configuration
export const upload = multer({ storage });
