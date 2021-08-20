'use strict';

// https://developer.mozilla.org/fr/docs/Glossary/Falsy
// https://developer.mozilla.org/fr/docs/Glossary/Truthy

function test () {
    const test = 2;
    
    if (test === '2') {
        // Marche pas, c'est la valeur et le type qui est testé
    }

    if (test) {
        // Ça marche
    }

    if (test !== undefined && test !== null && test !== '' && test !== 0) {
        // Ça marche
    }

    var test0 = 0;

    if (test0) {
        // Ça marche pas ici, ça retourne falsy
    } else {
        // Ça marche ici
    }

}

// Truthy

if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)


// Falsy

if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("");

