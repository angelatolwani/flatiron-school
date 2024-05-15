export default function Card({currentCard, changeFunction, borderColor}) {
    return (
        <h2 style={{ padding: "1rem",
                     display: "flex", flexDirection: "column", gap: "12px", alignItems: "center",
                     border: `solid ${borderColor}`, borderRadius: "10px"
        }}>
            {currentCard}
            <button onClick={changeFunction}>Nah.</button>
        </h2>
    )
  }