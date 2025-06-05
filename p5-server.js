const express = require('express');
const app = express();
const { playRound, getMonsters, addMonster } = require('./p5-game');

app.use(express.json());
app.use(express.static('public'));

app.get('/api/monsters', (req, res) => {
  res.json(getMonsters());
});

app.get('/api/play', (req, res) => {
  playRound();
  res.json(getMonsters());
});

app.post('/api/monsters', (req, res) => {
  addMonster(req.body);
  res.json({ message: 'Monster added!', monster: req.body });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

