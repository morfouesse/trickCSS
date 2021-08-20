'use strict';
// A mettre au tout début du fichier
// Permet de meilleures pratiques JS
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode

// A VOIR
// https://developer.mozilla.org/fr/docs/Glossaire/Fonction_de_rappel
/*
    Une fonction de rappel (aussi appelée callback en anglais) est une fonction passée 
    dans une autre fonction en tant qu'argument, qui est ensuite invoquée à l'intérieur
    de la fonction externe pour accomplir une sorte de routine ou d'action.
*/

processUserInput(salutationAlert, salutationConsole);

function processUserInput(callback, callbackBis) {
    var name = prompt('Entrez votre nom');
    callback(name);
    callbackBis(name);
}

function salutationAlert(name) {
    alert('Bonjour ' + name);
}

function salutationConsole(name) {
    console.log('Bonjour ' + name);
}
