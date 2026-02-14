let homeScore = 0;
let guestScore = 0;

function addScore(team, points) {

    if (team === 'home') {
        homeScore += points;
        document.getElementById('homeScore').textContent = homeScore;
    }

    if (team === 'guest') {
        guestScore += points;
        document.getElementById('guestScore').textContent = guestScore;
    }
}
