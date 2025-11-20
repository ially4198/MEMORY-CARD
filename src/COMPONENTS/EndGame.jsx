import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineReplay } from "react-icons/md";
const EndGame = ({ endGame, point, timeLeft, goHome, replay }) => {
  const totalTime = 60;
  const timeUsed = totalTime - timeLeft;
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  return (
    <div
      className="absolute z-20 bg-black w-[85%] max-w-[320px] h-auto min-h-[320px] rounded-2xl mt-[20px] sm:mt-[40px] border-4 border-amber-950 flex flex-col gap-6 sm:gap-8 items-center justify-center text-amber-200 px-4 py-6"
      style={{
        visibility: endGame ? "visible" : "hidden",
      }}
    >
      <div className="flex flex-col gap-3 sm:gap-5 items-center">
        <span className="bg-amber-700 py-1.5 px-3 border-4 border-amber-950 w-[90px] sm:w-[110px] text-center font-bold text-sm sm:text-base">
          TIMER
        </span>
        <span className="bg-amber-700 py-1 px-3 border-4 border-amber-950 w-[70px] sm:w-[90px] min-h-[40px] text-center font-bold text-lg">
          {formatTime(timeUsed)}
        </span>
      </div>
      <div className="flex flex-col gap-3 sm:gap-5 items-center">
        <span className="bg-amber-700 py-1.5 px-3 border-4 border-amber-950 w-[90px] sm:w-[110px] text-center font-bold text-sm sm:text-base">
          POINT
        </span>
        <span className="bg-amber-700 py-1 px-3 border-4 border-amber-950 w-[70px] sm:w-[90px] min-h-[40px] text-center font-bold text-lg">
          {point}
        </span>
      </div>

      <div className="flex gap-2 sm:gap-3">
        <button onClick={goHome} className="bg-amber-700 p-2 rounded-lg text-xl">
          <CgMenuGridO />
        </button>
        <button onClick={replay} className="bg-amber-700 p-2 rounded-lg text-xl">
          <MdOutlineReplay />
        </button>
      </div>
    </div>
  );
};

export default EndGame;
