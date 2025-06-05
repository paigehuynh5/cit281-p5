async function playRound() {
    const res = await fetch('/api/play');
    const monsters = await res.json();
    displayMonsters(monsters);
  }
  
  document.getElementById('addMonsterForm').addEventListener('submit', async e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const health = +document.getElementById('health').value;
    const minHealth = +document.getElementById('minHealth').value;
  
    const res = await fetch('/api/monsters', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, health, minHealth })
    });
  
    const data = await res.json();
    alert(data.message);
    playRound(); // Refresh list
  });
  
  function displayMonsters(monsters) {
    const output = document.getElementById('output');
    output.innerHTML = monsters.map(m => `
      <div>${m.name} - ${m.health} HP (${m.alive ? 'Alive' : 'Dead'})</div>
    `).join('');
  }
  
  