import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/register", async (req, res) => {
  try {
    const response = await fetch(
      "https://app.emireq.com/api/startups/register/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: "Proxy Failed", detail: err.message });
  }
});

app.listen(8080, () =>
  console.log("🔵 Proxy running at http://localhost:8080")
);
