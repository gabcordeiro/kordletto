import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
const PORT = 4000;

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

let access_token = "";
let refresh_token = "";

// 1) Rota para login no Spotify
app.get("/login", (req, res) => {
  const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-modify-playback-state",
    "user-read-playback-state",
  ];
  res.redirect(
    "https://accounts.spotify.com/authorize" +
      "?response_type=code" +
      "&client_id=" +
      CLIENT_ID +
      "&scope=" +
      encodeURIComponent(scopes.join(" ")) +
      "&redirect_uri=" +
      encodeURIComponent(REDIRECT_URI)
  );
});

// 2) Callback depois do login
app.get("/callback", async (req, res) => {
  const code = req.query.code;

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      code: code,
      redirect_uri: REDIRECT_URI,
      grant_type: "authorization_code",
    }),
  });

  const data = await response.json();
  access_token = data.access_token;
  refresh_token = data.refresh_token;

  res.send("✅ Autenticado! Agora o frontend pode pedir /token");
});

// 3) Endpoint para frontend pegar o token
app.get("/token", async (req, res) => {
  if (!access_token) {
    return res.status(401).json({ error: "Usuário não autenticado" });
  }
  res.json({ access_token });
});

app.listen(PORT, () =>
  console.log(`Backend rodando em http://localhost:${PORT}`)
);
