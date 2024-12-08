document.getElementById('calculateBtn').addEventListener('click', function() {
    const number = parseInt(prompt("Entrez un nombre"));
    let sum = 0;
    let resultsHtml = '';
    for(let i = 0; i < number; i++){
        sum = i + number;
        resultsHtml += `${i} + ${number} = ${sum}<br>`;
    }
    resultsHtml += `La somme des nombres de 1 à ${number} est : ${sum}`;
    document.getElementById('results').innerHTML = resultsHtml;
});