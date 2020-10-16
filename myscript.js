//1° es in classe inserisco 2 numeri e stampo il maggiore

var fnumber = parseInt(prompt('Inserisci un numero'));
console.log(fnumber);
var snumber = parseInt(prompt('Inserisci secondo numero'));
console.log(snumber);

if(fnumber > snumber){
  document.getElementById('vince').innerHTML = 'user 1 vincitore ';
  console.log('user 1 vincitore');
}else if(snumber > fnumber){
  document.getElementById('vince').innerHTML = 'user 2 vincitore ';
  console.log('user 2 vincitore');
}else{
  document.getElementById('vince').innerHTML = 'pareggio ';
  console.log('pareggio');
}

//2° es in classe inserisco due parole e stampo la piu lunga e poi la piu corta
usando length per valutare le lunghezze

var fparola = prompt('Inserisci prima parola');
console.log(fparola);
var sparola = prompt('Inserisci secondo parola');
console.log(sparola);

console.log(fparola.length);
console.log(sparola.length);

if (fparola.length > sparola.length){
  document.getElementById('plunga').innerHTML = sparola + '  ' + fparola;
  console.log(sparola + '  ' + fparola);
}else if (sparola.length > fparola.length){
  document.getElementById('plunga').innerHTML = fparola + '  ' + sparola;
  console.log(fparola + '  ' + sparola);
}else{
  document.getElementById('plunga').innerHTML = 'le due parole sono lunghe uguali  ' + fparola +'  '+ sparola;
  console.log('le due parole sono lunghe  uguali  '+ sparola + '  ' + fparola);
}

//3° esercizio richiesta 5 numeri somma dei 5 numeri e stampa somma es da fare usando for
var number=[];
var somma=0;
for (var i = 0; i < 5; i++) {
 number[i] = parseInt(prompt('inserisci un numero'));
 somma=somma + number[i];
}
console.log(number);
document.getElementById('somma').innerHTML = somma;

//4° es festa gasby

var gasby = ["paolo","fabio","lorenzo"];

console.log(gasby);
var nome = prompt('Inserisci il tuo nome').toLowerCase();
console.log(nome);

var checknome = false;

for (var i = 0; i < gasby.length; i++) {
  var check = gasby[i];

  if (check == nome) {
    var checknome = true;
  }
}

if (checknome === true) {
  console.log('sei invitato alla festa ' + nome);
  document.getElementById('nome').innerHTML = 'sei invitato alla festa ' + nome;
} else {
  console.log('non sei invitato alla festa il tuo nome non risulta nella lista ' + nome);
  document.getElementById('nome').innerHTML = 'non sei invitato alla festa il tuo nome non risulta nella lista  ' + nome;
}

//es 5 array vuoto chiedere sei numeri e inserire nel array solo i dispari

var number=[];

for (var i = 0; i < 6; i++) {

 var val=parseInt(prompt('inserisci un numero'));

 if(val % 2 != 0){
   number.push(val);
 }

}
console.log(number);
