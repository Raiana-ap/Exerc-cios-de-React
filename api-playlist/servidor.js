// api-playlist/servidor.js (código pronto — apenas copie)
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json()); // permite ler JSON enviado pelo React
let musicas = [
  { id: 1, titulo: "Aquarela", artista: "Toquinho" },
  { id: 2, titulo: "Águas de Março", artista: "Elis Regina" },
];
let proximoId = 3;
app.get("/musicas", (req, res) => {
  res.json(musicas);
});
app.post("/musicas", (req, res) => {
  const nova = { id: proximoId++, ...req.body };
  musicas.push(nova);
  res.status(201).json(nova);
});
app.patch("/musicas/:id", (req, res) => {
  const id = Number(req.params.id);
  musicas = musicas.map((m) => (m.id === id ? { ...m, ...req.body } : m));
  res.json(musicas.find((m) => m.id === id));
});
app.delete("/musicas/:id", (req, res) => {
  const id = Number(req.params.id);
  musicas = musicas.filter((m) => m.id !== id);
  res.status(204).send();
});
app.listen(3000, () => console.log("API no ar: http://localhost:3000/musicas"));
