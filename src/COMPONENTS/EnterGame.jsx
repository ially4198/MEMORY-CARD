import React from "react";

const EnterGame = ({playGame}) => {
  return (
    <div className="bg-black w-[90%] sm:w-[85%] md:w-[600px] h-auto min-h-[360px] sm:min-h-[400px] md:h-[420px] rounded-2xl shadow-xl mt-[60px] sm:mt-[80px] md:mt-[100px] mx-auto flex flex-col items-center justify-center px-4 py-8 sm:py-10">
      <h1 className="text-amber-700 text-3xl sm:text-4xl flex flex-col mb-7 font-extrabold text-center leading-tight breathe">
        <span>MEMORY</span> <span className="sm:ml-[40px]">MASTER</span>
      </h1>
      <button onClick={playGame} className="bg-amber-700 w-[180px] sm:w-[200px] h-[48px] sm:h-[50px] text-xl sm:text-2xl rounded-2xl text-center p-2 text-amber-200">
        PLAY GAME
      </button>
    </div>
  );
};

export default EnterGame;
