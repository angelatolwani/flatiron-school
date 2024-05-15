/*

Phase 2 -> Controlled Components
Sakib Rasul | Created January 31, 2024

Core Deliverables
1. Write a function `randomize` that generates a random card string, e.g. "6 of Clubs".
2. Call `randomize` when `Nah.` is clicked in `Card`.
3. Display the current card string in `Card`.
4. (Bonus) Make the card's border "solid red" when the current suit is diamond or hearts
           and "solid black" when the current suit is clubs or spades.

*/

// To make `Card` a child of `App`, we need to import it (and render it) inside `App`.
import Card from "./Card";
import { useState } from "react"; // any function starting with "use" isn't given by default in React


export default function App() {
  const [cardValue, setCardValue] = useState("Ace of Spades");
  const [borderColor, setBorderColor] = useState("black");
  function randomize () {
    const suit = ["Spades", "Clubs", "Hearts", "Diamonds"];
    const cardNumber = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    const randomSuit = suit[Math.floor(Math.random() * suit.length)];
    const randomCardNumber = cardNumber[Math.floor(Math.random() * cardNumber.length)];
    setCardValue(`${randomCardNumber} of ${randomSuit}`);
    randomSuit==="Hearts" || randomSuit==="Diamonds" ? setBorderColor("red") : setBorderColor("black");
  };
  return (
    <div style={{ minHeight: "100vh",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center" }}>
      <h1>Is This Your Card?</h1>
      <Card currentCard = {cardValue} changeFunction = {randomize} borderColor={borderColor}/>
      <footer>&copy; 2023 Sakib Rasul</footer>
    </div>
  );
}