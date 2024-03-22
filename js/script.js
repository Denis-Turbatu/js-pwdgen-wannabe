const username = prompt("Come ti chiami?");
console.log(username);

const surname = prompt("Qual è il tuo cognome?");
console.log(surname);

const colPref = prompt("Qual è il tuo colere preferito?");
console.log(colPref);

document.getElementById('result').innerHTML = username + surname + colPref + 21;