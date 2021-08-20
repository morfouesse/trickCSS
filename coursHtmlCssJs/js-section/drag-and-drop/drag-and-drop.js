"use strict";

function drag(event) {
    console.log('drag', event.target.id);
    event.dataTransfer.setData("bloc", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    console.log('drop');
    event.preventDefault();
    var data = event.dataTransfer.getData("bloc");
    console.log('drop data', data);
    event.target.appendChild(document.getElementById(data));
}
