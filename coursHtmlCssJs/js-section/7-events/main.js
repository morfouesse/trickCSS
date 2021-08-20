"use strict";
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode

var text = "Toto";

var json = {
    id: 1,
    name: "Erwan",
    age: 30,
    table: ['Erwan', 'Toto', 'Alicia'],
    displayText: function (text) {
        console.log(text);
    }
};

json.displayText('Bonjour Erwan');

console.log(json);


function handleClickButton() {
    alert('Bonjour !');
}

function handleOverButton() {
    text = "Over";
    document.getElementById('js-display-text').innerHTML = text;
}

function handleOutButton() {
    text = "Out";
    document.getElementById('js-display-text').innerHTML = text;
}