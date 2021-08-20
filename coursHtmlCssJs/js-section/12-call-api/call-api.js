'use strict';

/**
 * https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
 */
function callAPIByFetch() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log("fetch", json))
    .catch((error) => console.error(error) );

    console.log('toto');
}

