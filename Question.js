import { useState } from "react";

const Question = ({ imageSrc, questionText, onYes }) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const handleNoMouseEnter = () => {
    // Generate random position within viewport bounds
    const maxX = window.innerWidth - 200; // button width margin
    const maxY = window.innerHeight - 100; // button height margin
    
    const randomX = Math.random() * maxX - maxX / 2;
    const randomY = Math.random() * maxY - maxY / 2;
    
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="flex flex-col items-center">
      <img src={imageSrc} alt="Hjerte" width={200} />
      <span
        className="font-bold mb-6 text-2xl text-center px-4"
        style={{
          textShadow: "2px 2px white",
          textWrap: "balance",
        }}
      >
        {questionText}
      </span>

      <div className="flex justify-center gap-4 relative">
        <button
          onClick={onYes}
          className="px-6 py-3 bg-green-400 text-white font-bold rounded-full hover:bg-green-600 transition duration-300"
          style={{ fontFamily: "'Comic Neue', cursive" }}
        >
          JA! 💕
        </button>
        
        <button
          onMouseEnter={handleNoMouseEnter}
          className="px-6 py-3 bg-red-400 text-white font-bold rounded-full hover:bg-red-600 transition-all duration-200"
          style={{
            fontFamily: "'Comic Neue', cursive",
            transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
            position: noButtonPosition.x !== 0 ? 'fixed' : 'relative',
          }}
        >
          Nei
        </button>
      </div>
    </div>
  );
};

export default Question;
