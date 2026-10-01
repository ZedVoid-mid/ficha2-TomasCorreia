const express = require("express");
const app = express();

const cards = [
    { name: "Add", type: "Demónio", attack: 23, defense: 15 },
    { name: "Bee", type: "Demónio", attack: 3, defense: 3 },
    { name: "Cif", type: "Demónio", attack: 9, defense: 4 },
    { name: "Lev", type: "Demónio", attack: 6, defense: 8 },
    { name: "Gray", type: "Humano", attack: 2, defense: 3 }
];

const items = cards.map(card => `<li>${card.name}, ${card.type}, ${card.attack}, ${card.defense}</li>`).join("");


app.get("/", (req, res) => {
    res.send("<h1>Início</h1>" + "<h2>Número de cartas:<h2>" + cards.length);
})

app.get("/sobre", (req, res) => {
    res.send("<h1>Rodrigo Domingos TGPSI24U</h1>");
  });

  app.get("/cartas", (req, res) => {
    res.send(items);
  });

  app.get("/agora", (req, res) => {
    const now = new Date().toLocaleString("pt-PT");
    res.send(now);
  });


  app.get("/cartas/aleatoria", (req, res) => {
    const card = cards[Math.floor(Math.random() * cards.length)];
    const cardString = `Carta: ${card.name}, Tipo: ${card.type}, Ataque: ${card.attack}, Defesa: ${card.defense}`;
    res.send(cardString);
    });

app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(3000, () => console.log("http://localhost:3000"));
