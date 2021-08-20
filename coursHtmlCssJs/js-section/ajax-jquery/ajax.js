'use strict';

$(document).ready(
    function() {
        
    }
);

let user = {
    id: 1,
    firstName: 'Erwan'
}; 

/**
 * https://api.jquery.com/jquery.ajax/
 */
function callAjax() {
    $.ajax(
        {
            url: 'https://jsonplaceholder.typicode.com/users/1',
            //[data: iciData],
            method: "GET"
        })
        .done(function(data, status, xhr) {
            // Lorsque l'appel Ajax s'est terminé correctement
            console.log("done", data);
            console.log("done", status);
            console.log("done", xhr);
        })
        .fail(function(xhr, status, errorThrown) {
            // Lorsque l'appel Ajax s'est terminé en erreur
            console.log("fail", xhr);
            console.log("fail", status);
            console.error("fail", errorThrown);
        })
        .always(function(data, status, xhr) {
            // Appelé quoi qu'il arrive (Optionnel)
            console.log("always", data);
            console.log("always", status);
            console.log("always", xhr);
        });

    // Tout votre code après se déclanche sans attendre le résultat de la requête AJAX
}

function callAjaxRealCase() {
    $.ajax(
        {
            url: 'https://jsonplaceholder.typicode.com/users/3',
            //[data: iciData],
            method: "GET"
        })
        .done(function(data, status, xhr) {
            // Lorsque l'appel Ajax s'est terminé correctement
            $("#js-ajax-display").append("<p> ID: "+data.id+" Name : "+data.name+"</p>")
            console.log("done", data);
            console.log("done", status);
            console.log("done", xhr);
        })
        .fail(function(xhr, status, errorThrown) {
            // Lorsque l'appel Ajax s'est terminé en erreur
            console.error("fail", xhr);
            console.error("fail", status);
            console.error("fail", errorThrown);
        })
}
