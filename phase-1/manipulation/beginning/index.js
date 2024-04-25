/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`
// An Application Programming Interface (API) is a "bridge" between us and a data source.
// APIs let us (C)reate, (R)ead, (U)pdate, and (D)elete data in such external sources.
document // An API for communication between JS (this file) and HTML (index.html)

/* 

HTML
<body>
    <p>Some text.</p>
    <div>
        <a href = "google.com">G</a>
    </div>
</body>

DOM
                body
        | -      |      -|
        p               div
                        |
                        a
                        
*/

// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.
console.log(document.querySelector("h1")); // read tag by name
console.log(document.querySelector("p"));
console.log(document.querySelector("#forever")); // Use # to access id attibute
console.log(document.querySelector("p#forever"));
console.log(document.querySelector(".address")); // Use . to access class attribute
console.log(document.querySelectorAll("p")); // read multiple elements

console.log(document.querySelector("#today").textContent); // reading the text of a text element 
// textcontent doesn't need () because it is a property, not a function
// Sahib's tip: in general, functions/methods have a verb vs properties/attributes that don't

const p = document.querySelector("#tomorrow"); // save a node to variable
console.log(p.textContent); // using a node variable


// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation
document.querySelector("#forever").textContent = "April 24, 2024";
// Any attribute/property can be modified (eg textContent, src, href)


// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.
document.querySelector("#tomorrow").remove();
console.log(document.querySelectorAll("p"));

// ~ Create + Append a node
// -> createElement(), append()
const newH2 = document.createElement("h2");
// parent.append(child); // append the element "child" as a child of the element "parent"
newH2.textContent = "Sometime in the future...";
document.body.append(newH2);

/*
DOM
    div
     |
    element
     |
    newElement
*/

// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining
displayList("Books", ["The Shining", "Eragon"]); // create a list and append it to the doc

function displayList(listName, listItems) {
    const parentElement = document.querySelector("div#dates");
    
    const newList = document.createElement("ul");
    newList.textContent = listName;
    parentElement.append(newList);

    listItems.forEach(listItem => {
        let newItem = document.createElement("li");
        newItem.textContent = listItem;
        newList.append(newItem);
    }) 
}

// 2. Replace the <strong> element with a newly created one.

// remove <strong> element
document.querySelector("strong").remove(); 

// create new element
modifiedElement = document.createElement("u");
modifiedElement.textContent = "Angela Tolwani";

// append new element
parentElement = document.querySelector("address.address");
parentElement.append(modifiedElement);