'use strict';

// A VOIR
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise
/*
    L'objet Promise (pour « promesse ») est utilisé pour réaliser des traitements de façon asynchrone. 
    Une promesse représente une valeur qui peut être disponible maintenant, dans le futur voire jamais.
*/

// Etape 1
var isDisplay = true;

// Etape 2
setTimeout(function() {
    // calcul
    console.log('setTimeOut');

}, 4000);

// Etape 3
isDisplay = false;
console.log(isDisplay);





// var valueReturn;

// const promise = new Promise(function(resolve, reject) {
//     const isFind = true;
//     setTimeout(function() {
//         if (isFind === true) {
//             resolve('isFind est true, Tout est bon'); // Déclenche le .then
//         } else {
//             reject('isFind est false'); // Déclenche le .catch
//         }
//     }, 4000);
// });

// promise
// .then(function(messageResolve) {
//     console.log('Then : ', messageResolve);
//     valueReturn = messageResolve;
//     document.getElementById('js-test-promise').innerHTML = '<p>' + valueReturn + '</p>';
//     // expected output: "isFind est true, Tout est bon"
// })
// .catch(function(messageError) {
//     console.error('Error', messageError);
//     // expected output : "Error : isFind est false"
// });
  
// console.log(promise);
// console.log('Après');
// expected output: [object Promise]
