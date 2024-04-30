/*

Phase 1 -> Creating data with JSON Server and POST requests
Updated March 15, 2024
Created May 26, 2023
by Sakib Rasul

Objectives
1. Run an instance of JSON Server that hosts a dataset.
1. Make a GET request to display a dataset.
2. Make a POST request to add to that dataset.

*/

// GET --> Read (usually the only fetch request you can actually do with public APIs)
// POST --> Create
// PATCH --> Update
// DELETE --> Delete

// Let's try making a GET request to display existing data on the page.
// fetch("http://localhost:3000/dogs")
// .then(response => response.json())
// .then(dogs => {
//     dogs.forEach(dog => {
//         addPet("dogs", dog);
//     });
// });

// Now, let's trigger a POST request when the user submits the form,
// so that they can add data to the database! Remember to think about
// the event, the target, and the handler when planning a listener.
// document.querySelector("form").addEventListener("submit", event => {
//     event.preventDefault();
//     const dogName = event.target.name.value;
//     const dogAge = event.target.age.value;
//     console.log(dogName+ dogAge);
//     fetch("http://localhost:3000/dogs", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             name: dogName,
//             age: dogAge,
//             isGoodDog: true
//         })
//     })
//     .then(response => response.json())
//     .then(newDog => {
//         addDog(newDog);
//     });
// });

// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests. Try abstracting them
//    into a function!
// 2. Try writing your own POST request.
// 2.5. Replace the forms with an "Add a Pet" form where you can add a dog or a cat.

// Adds a new pet to the HTML page 
function addPet(animalType, appendPet) {
    const ul = document.querySelector("#"+animalType);
    const li = document.createElement("li");
    li.textContent = `${appendPet.name} (${appendPet.age})`;
    ul.append(li);
};

// Creates a new JS object to be posted into a json
function newPetObj(animalType, petName, petAge) {
    const newPet = {};
    newPet.name = petName;
    newPet.age = petAge;
    if (animalType==="cats") {
        newPet.isGoodCat = true;
    } else if (animalType==="dogs") {
        newPet.isGoodDog = true;
    };
    return newPet;
};

// Adds all the animals from the json to the html page
const animals = ["dogs", "cats"]
animals.forEach(animalGroup => {
    fetch("http://localhost:3000/"+animalGroup)
    .then(response => response.json())
    .then(animalArray => {
        animalArray.forEach(animal => {
            addPet(animalGroup, animal);
        })
    });
});

// Adds a new animal to json and html page based on user input
document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    const animalType = event.target.animal.value;
    const petName = event.target.name.value;
    const petAge = event.target.age.value;
    fetch("http://localhost:3000/"+animalType, {
        method: "POST",
        headers: {
            "Content-Type": "applications/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newPetObj(animalType, petName, petAge))
    })
    .then(response => response.json())
    .then(newPet => {
        addPet(animalType, newPet);
    })
});

// 3. Try writing PATCH and DELETE requests!