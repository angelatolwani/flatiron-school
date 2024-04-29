/*

Phase 1 -> GET
Updated April 25, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/

// fetch is an API that works with external URLs

// A synchronous request to https://dog-api.kinduff.com/api/facts?number=1.
// Make a GET request for dog facts
fetch("https://dog-api.kinduff.com/api/facts?number=1")
// Convert JSON response into JS
// .then is a method that takes a promise's successful condition & execute a function
.then((response) => { return response.json() })
// If you use {} in the first then (), you NEED to return. Removing {} automatically returns.
// .then requires a returned promise to execute
// Use the resulting JS
.then((data) => {
    const span = document.querySelector("#dog");;
    span.textContent = data.facts[0];
    // Is the element I'm working with already in the DOM?
    // (Yes) Select & modify the element
    // (No) Create, modify, and append the element
})
// Log any errors that occur.
// .catch handles things when there's an unsuccessful event
.catch((error) => {console.log(error)});

// A synchronous request to https://anapioficeandfire.com/api/books.
fetch("https://anapioficeandfire.com/api/books")
.then( response => response.json() )
.then(books => {
    const got = document.querySelector("#got");
    books.forEach((book) => {
        const listItem = document.createElement("li");
        listItem.textContent = book.name;
        got.append(listItem);
    })
})
.catch((error) => {console.log(error)});

// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"
// Asynchronous requests used at a later point in time
// A way to delay the execution of promises (e.g., reloading a data when hitting a button)
async function getPokemon(name) {
    // you can't use "await" unless it's inside an "async" function
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
    const pokemon = await response.json();
    console.log(pokemon);
    document.querySelector("#pokemon").textContent = 
        pokemon.name[0].toUpperCase() + pokemon.name.slice(1) + " (" + pokemon.id + ")";
}
getPokemon("ditto");

// ~ Challenge: Make a GET request to an API of your choice!
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini")
.then( response => response.json() )
.then( martinis => {
    const newHeader = document.createElement("h2");
    newHeader.textContent = "Martinis";
    document.body.append(newHeader);
    const drinkList = document.createElement("ul");
    document.body.append(drinkList);
    // console.log(martinis.drinks);
    const martiniArray = martinis.drinks;
    martiniArray.forEach((drinkName) => {
        const martini = document.createElement("li");
        martini.textContent = drinkName.strDrink;
        drinkList.append(martini);
    })
})
.catch((error) => {console.log(error)});