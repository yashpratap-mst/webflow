import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static files from the 'public' directory
app.use("/static",express.static(path.join(__dirname, "public")));

// Default route for testing server response

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
