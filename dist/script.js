function myLineUp(event) {
  event.preventDefault();

  const form = document.getElementById('lineupForm');

  const status = form.elements['status'].value;
  const gameDate = form.elements['gameDate'].value;
  const players = Array.from(
    form.querySelectorAll('input[name="players"]:checked')
  ).map(el => el.value);

  console.log('Status:', status);
  console.log('Date:', gameDate);
  console.log('Players:', players);

  const summary =
    `Status: ${status} | Date: ${gameDate} | ` +
    `Players: ${players.length ? players.join(', ') : 'None'}`;

  document.getElementById('lineupOutput').textContent = summary;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submitLineup').addEventListener('click', myLineUp);
});