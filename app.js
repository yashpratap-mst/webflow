import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Default route for testing server response
app.get("/", (req, res) => {
  res.status(200).json({ message: "hello from server side" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
