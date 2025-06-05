class Monster {
    constructor(name, health, minHealth) {
      this.name = name;
      this.health = health;
      this.minHealth = minHealth;
    }
  
    isAlive() {
      return this.health > this.minHealth;
    }
  
    takeDamage(amount) {
      this.health -= amount;
      if (this.health < 0) this.health = 0;
    }
  
    status() {
      return `${this.name}: ${this.health > this.minHealth ? 'Alive' : 'Dead'} (${this.health} HP)`;
    }
  }
  
  module.exports = { Monster };
  
  
  

  