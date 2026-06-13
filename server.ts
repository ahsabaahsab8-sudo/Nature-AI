import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Server-side lazy initialized Gemini client
  let aiClient: GoogleGenAI | null = null;
  const getAi = () => {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is required");
      }
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          }
        }
      });
    }
    return aiClient;
  };

  // API Route for Leafy Chat AI
  app.post("/api/chat", async (req, res) => {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    try {
      const ai = getAi();
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: message,
        config: {
          systemInstruction: "You are Leafy, an expert AI botanist, entomologist, and ecosystem companion chatbot for Nature AI. Provide helpful, accurate, and concise guidelines on plant taxonomy, foliage diseases, treatment remedies, avian patterns, insect tracking, and river ecosystems. Use friendly, clear language and keep replies to a maximum of 3-4 descriptive sentences.",
        }
      });

      res.json({ reply: response.text });
    } catch (err: any) {
      console.warn("Gemini API Client Fallback active:", err.message);
      // Fallback local response representing botanical advice when API key isn't provided
      res.json({
        reply: `[Leafy Sandbox]: Cedar Apple Rust (pathological spots on foliage) is best solved by trimming cedar growths in proximity and misting leaves with natural sulfur soap. Ensure relative soil volumetric levels are maintained around 65% humidity balance. For real-time AI capabilities, configure a valid GEMINI_API_KEY in the Secrets panel.`
      });
    }
  });

  // Serve app-ads.txt directly to bypass any catch-all routing
  app.get("/app-ads.txt", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.send("google.com, pub-3542857199729042, DIRECT, f08c47fec0942fa0");
  });

  // Serve assetlinks.json directly to bypass any catch-all routing
  app.get("/.well-known/assetlinks.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify([
      {
        "relation": [
          "delegate_permission/common.handle_all_urls"
        ],
        "target": {
          "namespace": "android_app",
          "package_name": "com.nature.ai",
          "sha256_cert_fingerprints": [
            "71:C7:52:0A:AA:34:08:9D:74:DA:A8:91:FF:30:EC:1D:5A:1A:71:DD:66:BE:F9:23:AA:48:AD:F0:DE:A6:0A:45"
          ]
        }
      }
    ], null, 2));
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
