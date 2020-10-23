// definisco la variabile arrey contenente i cognomi
var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

var cognomeUtente = prompt("Inserisci il tuo cognome");

// aggiungo il cognome inserito nell'arrey
cognomi.push(cognomeUtente);
cognomi.sort();


// Mando in output la lista
var listEl = document.getElementById('cognomiList')
var posizioneUtente = 0;
for(var i = 0; i < cognomi.length; i++){
  listEl.innerHTML += '<li>' + cognomi[i] + '</li>';
  if(cognomeUtente == cognomi[i]) {
    posizioneUtente = 1;
  }
}

document.getElementById('result').innerHTML += (posizioneUtente + 3);
