//1° es in classe inserisco 2 numeri e stampo il maggiore

//var fnumber = parseInt(prompt('Inserisci un numero'));
//console.log(fnumber);
//var snumber = parseInt(prompt('Inserisci secondo numero'));
//console.log(snumber);

//if(fnumber > snumber){
//  document.getElementById('vince').innerHTML = 'user 1 vincitore ';
//}else if(snumber > fnumber){
//  document.getElementById('vince').innerHTML = 'user 2 vincitore ';
//}else{
//  document.getElementById('vince').innerHTML = 'pareggio ';
//}

//2° es in classe inserisco due parole e stampo la piu lunga e poi la piu corta
//usando length per valutare le lunghezze

//var fparola = prompt('Inserisci prima parola');
//console.log(fparola);
//var sparola = prompt('Inserisci secondo parola');
//console.log(sparola);

//console.log(fparola.length);
//console.log(sparola.length);

//if (fparola.length > sparola.length){
  //document.getElementById('plunga').innerHTML = fparola + '  ' + sparola;
//}else if (sparola.length > fparola.length){
//  document.getElementById('plunga').innerHTML = sparola + '  ' + fparola;
//}else{
//  document.getElementById('plunga').innerHTML = 'le due parole sono lunghe uguali  ' + fparola +'  '+ sparola;
//}

//3° esercizio
var number=[];
var somma=0;
for (var i = 0; i < 5; i++) {
 number[i] = parseInt(prompt('inserisci un numero'));
 somma=somma + number[i];
}
console.log(number);
document.getElementById('plunga').innerHTML = somma;
