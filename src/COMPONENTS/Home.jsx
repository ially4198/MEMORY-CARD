import React, { useState, useEffect } from "react";
import GameHeader from "./GameHeader";
import Cards from "./Cards";
import EnterGame from "./EnterGame";
import EndGame from "./EndGame";

const Home = () => {
  const shuffleArray = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const initialCards = () => {
    const baseCards = [
      { id: 5, emoji: "🍋‍🟩", flipped: false, matched: false },
      { id: 1, emoji: "🍎", flipped: false, matched: false },
      { id: 12, emoji: "🍊", flipped: false, matched: false },
      { id: 7, emoji: "🍉", flipped: false, matched: false },
      { id: 3, emoji: "🍐", flipped: false, matched: false },
      { id: 14, emoji: "🍌", flipped: false, matched: false },
      { id: 10, emoji: "🍏", flipped: false, matched: false },
      { id: 16, emoji: "🍇", flipped: false, matched: false },
      { id: 2, emoji: "🍏", flipped: false, matched: false },
      { id: 13, emoji: "🍋‍🟩", flipped: false, matched: false },
      { id: 4, emoji: "🍊", flipped: false, matched: false },
      { id: 11, emoji: "🍐", flipped: false, matched: false },
      { id: 9, emoji: "🍎", flipped: false, matched: false },
      { id: 6, emoji: "🍌", flipped: false, matched: false },
      { id: 15, emoji: "🍉", flipped: false, matched: false },
      { id: 8, emoji: "🍇", flipped: false, matched: false },
    ];

    return shuffleArray(baseCards); // ← shuffle before returning
  };

  const [cards, setCards] = useState(initialCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [boardLocked, setBoardLocked] = useState(false);
  const [point, setPoint] = useState(0);
  const [playGames, setPlayGames] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds countdown
  const [isRunning, setIsRunning] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const endGames = () => {
    setEndGame(true);
  };
  const playGame = () => {
    setPlayGames(true);
    setIsRunning(true);
    setCards(initialCards()); // reset cards
    setFlippedCards([]); // reset flipped cards
    setPoint(0); // reset score
    setTimeLeft(60); // reset timer
    setEndGame(false); // hide modal
  };
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    if (timeLeft === 0) {
      setIsRunning(false);
      endGames();
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);
  useEffect(() => {
    if (cards.length === 16 && cards.every((card) => card.matched)) {
      endGames();
      setIsRunning(false);
    }
  });
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const goHome = () => {
    setPlayGames(false);
  };

  const replay = () => {
    setCards(initialCards()); // reset cards
    setFlippedCards([]); // reset flipped cards
    setPoint(0); // reset score
    setTimeLeft(60); // reset timer
    setEndGame(false); // hide modal
    setIsRunning(true); // restart timer
  };
  return (
    <>
      {!playGames ? (
        <EnterGame playGame={playGame} />
      ) : (
        <div className="relative bg-black w-[90%] sm:w-[85%] md:w-[600px] h-auto min-h-[380px] sm:min-h-[400px] md:h-[420px] rounded-2xl shadow-xl mt-[50px] sm:mt-[80px] md:mt-[100px] mx-auto flex flex-col items-center pb-4 sm:pb-5">
          {endGame && (
            <div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm 
                  flex items-center justify-center"
            >
              <EndGame
                endGame={endGame}
                point={point}
                timeLeft={timeLeft}
                goHome={goHome}
                replay={replay}
              />
            </div>
          )}
          <GameHeader
            point={point}
            setPoint={setPoint}
            time={formatTime(timeLeft)}
          />

          <div className="bg-amber-200 w-[95%] h-[280px] sm:h-[300px] md:h-[310px] mx-auto rounded-2xl p-2 sm:p-3 md:p-5 grid grid-cols-4 gap-1 sm:gap-2">
            {cards.map((card, index) => (
              <Cards
                key={card.id}
                card={card}
                cards={cards}
                setCards={setCards}
                index={index}
                flippedCards={flippedCards}
                setFlippedCards={setFlippedCards}
                point={point}
                setPoint={setPoint}
                boardLocked={boardLocked}
                setBoardLocked={setBoardLocked}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
