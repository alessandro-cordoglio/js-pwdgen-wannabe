/* 
CONSEGNA:

Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito76
*/ 

/* 1. Nome utente chiesto tramite prompt e salvato in una variabile const */
/* 2. Cognome chiesto con lo stesso metodo */
/* 3. Colore idem */
/* 4. Manipolare il testo in html stampando la variabile con all'interno la "somma" delle 3 precedenti a schermo */

const user_name= prompt("Inserisci il tuo nome");
const user_surname= prompt("Inserisci il tuo cognome");
const fav_color= prompt("Inserisci il tuo colore preferito");

const generated_password= `${user_name}${user_surname}${fav_color}`;
/* console.log(generated_password) */
document.getElementById('generated_psw').innerHTML="La tua password generata è: " + `<b> ${generated_password}76</b>`;

