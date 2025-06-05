const { Monster } = require('./p5-class');

let monsters = [
  new Monster('Ghoul', 100, 20),
  new Monster('Troll', 120, 30),
  new Monster('Vampire', 90, 10),
];

function playRound() {
  monsters.forEach(monster => {
    const damage = Math.floor(Math.random() * 20);
    monster.takeDamage(damage);
  });
}

function getMonsters() {
  return monsters.map(({ name, health, minHealth }) => ({
    name, health, minHealth, alive: health > minHealth,
  }));
}

function addMonster({ name, health, minHealth }) {
  monsters.push(new Monster(name, health, minHealth));
}

module.exports = { playRound, getMonsters, addMonster };

