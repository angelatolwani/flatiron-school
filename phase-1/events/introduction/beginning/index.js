/*

Phase 1 -> DOM Events
by Sakib Rasul
Updated April 24, 2024
Created September 13, 2023

// AT recap notes:
// DOM: tree with nodes
// javascript uses it to manipulate the page
// DOM events are things that are occurring on the tree

Objectives
1. Do something when an event fires on an element.
2. Handle a form submission by reading its input.

Takeaways
- "click" and "submit" events
- `event.preventDefault()`
- `[form].[input].value`

*/

// ~ the "click" event
const today = document.querySelector("#today");
today.addEventListener("click", (event) => { // Can remove 'event' as an argument bc it's not being used in the function
    console.log("Today was clicked!");
    console.log(event);
    console.log(event.target); // An event's target is the element the event fired on
});

// ~ the "submit" event
document.querySelector("form").addEventListener("submit", (event) => {
    // Since the default behavior of "submit" is to redirect the page to a backend app, let's prebent that
    event.preventDefault();
    // Take the date that was inputted by the user,
    //      and set it as the text of #sometime.
    // console.log(event.target["date"]); // dot notation can be used instead: event.target.date
    const date = event.target["date"].value;
    const sometime = document.querySelector("#sometime");
    sometime.textContent = date;
})

// ~ challenges
// 1. [easy] Add another click event handler.
// 2. [medium] Add some non-click, non-submit event listener to the page.

// document.querySelector("body").addEventListener("keydown", (event) => {
//     const dateToday = document.createElement("p");
//     dateToday.textContent = "04-25-24";
//     document.querySelector("p#today").append(dateToday);

//     const dateTomorrow = document.createElement("p");
//     dateTomorrow.textContent = "04-26-24";
//     document.querySelector("p#tomorrow").append(dateTomorrow);

//     const dateForever = document.createElement("p");
//     dateForever.textContent = "~~~~~~~~";
//     document.querySelector("p#forever").append(dateForever);
// })

// 3. [hard] Add an image, and a form with one text input to the page.
//    On submit, have the image change to the URL specified in the text input.

document.querySelector("div#imgDisplay").addEventListener("submit", (event) => {
    event.preventDefault();
    const imageURL = event.target["url"].value;
    const image = document.querySelector("img");
    image.src = imageURL;
});

// 4. [bonus] Add an event handler to #today so that whenever some or all of its text is copied,
//    that text is set as the content of #sometime.