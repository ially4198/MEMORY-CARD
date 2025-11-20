import React from "react";

const Cards = ({
  card,
  cards,
  setCards,
  index = { index },
  flippedCards,
  setFlippedCards,
  point,
  setPoint,
  boardLocked,
  setBoardLocked,
}) => {
  const handleFlip = () => {
    if (boardLocked) return;
    const newCards = [...cards];
    if (newCards[index].matched || newCards[index].flipped) return;

    newCards[index].flipped = true;
    setCards(newCards);

    // Add to flipped list
    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    // If two cards are flipped, check match
    if (newFlipped.length === 2) {
      setBoardLocked(true);
      const [first, second] = newFlipped;

      if (newCards[first].emoji === newCards[second].emoji) {
        // MATCH
        setTimeout(() => {
          newCards[first].matched = true;
          newCards[second].matched = true;
          setCards([...newCards]);
          setFlippedCards([]);
          setBoardLocked(false);
        }, 500);
        setPoint((prevPoint) => prevPoint + 10);
       
      } else {
        // NO MATCH → flip back
        setTimeout(() => {
          newCards[first].flipped = false;
          newCards[second].flipped = false;
          setCards([...newCards]);
          setFlippedCards([]);
          setBoardLocked(false);
        }, 800);
      }
    }
  };
  return (
    <div
      className="card-wrapper w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] mx-auto"
      onClick={handleFlip}
      style={{
        visibility: card.matched ? "hidden" : "visible",
      }}
    >
      <div className={`card-inner ${card.flipped ? "is-flipped" : ""}`}>
        <div className="card-face card-front bg-amber-700 rounded-xl flex items-center justify-center text-xl sm:text-2xl md:text-3xl">
          🤔
        </div>
        <div className="card-face card-back bg-amber-700 rounded-xl flex items-center justify-center text-xl sm:text-2xl md:text-3xl">
          {card.emoji}
        </div>
      </div>
    </div>
  );
};

export default Cards;
