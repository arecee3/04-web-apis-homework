var data = JSON.parse(localStorage.getItem('score'));

data.forEach(element => {
    var tableEl = document.createElement('tr');
    var td1 = document.createElement('td');
    td1.textContent = element.playerName;
    var td2 = document.createElement('td');
    td2.textContent = element.score;

    tableEl.appendChild(td1);
    tableEl.appendChild(td2);

    document.getElementById('HighScores').appendChild(tableEl)
    
});