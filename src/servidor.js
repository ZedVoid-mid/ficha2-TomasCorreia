const http = require("http");

const PORT = 3000;

const cards = [
    { name: "Add", type: "Demónio", attack: 23, defense: 15 },
    { name: "Bee", type: "Demónio", attack: 3, defense: 3 },
    { name: "Cif", type: "Demónio", attack: 9, defense: 4 },
    { name: "Lev", type: "Demónio", attack: 6, defense: 8 },
    { name: "Gray", type: "Humano", attack: 2, defense: 3 }
];

const items = cards.map(card => `<li>${card.name}, ${card.type}, ${card.attack}, ${card.defense}</li>`).join("");



const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  if (req.url === "/sobre") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Rodrigo Domingos TGPSI24U</h1>");
    return;
  }
  else if (req.url === "/cartas") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(items);
    return;
  }
  else if (req.url === "/now") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const now = new Date().toLocaleString("pt-PT");
    res.end(now);
    return;
  }
  else if (req.url === "/")
  {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Número de cartas:</h1>" + cards.length);
    return;
  }
  else if (req.url === "/cartas/aleatoria")
    {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const card = cards[Math.floor(Math.random() * cards.length)];
    const cardString = `Carta: ${card.name}, Tipo: ${card.type}, Ataque: ${card.attack}, Defesa: ${card.defense}`;
    res.end(cardString);
    return;
    }


res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end("404");

});

server.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);
});
