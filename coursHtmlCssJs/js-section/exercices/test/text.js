/*
 * Ecrire un algorithme qui demande un nombre à l’utilisateur, et l’informe ensuite si ce nombre est positif, négatif ou nul
 */


// Déclaration des variables
let nombre;

// Saisie du entier
console.log('Saisir un entier :');
nombre = prompt('Saisir un nombre');

// Mise en place des tests
if (nombre > 0) {
    console.log('Le nombre est positif');
} else if (nombre < 0) {
    console.log('Le nombre est négatif');
} else {
    console.log('Le nombre est nul');
}