import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { webflow } from "./public/dynamicText.js";

const app = express();
const port = 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello from server side" });
});

const router = express.Router();
router.post("/webflow", webflow);

app.use(router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
