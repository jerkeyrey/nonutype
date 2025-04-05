import React from "react";

type DisplayWordsProps = {
  words: string[];
  currentWordIndex: number;
  input: string;
  wordStatus: ("pending" | "correct" | "incorrect")[];
};

const DisplayWords = ({
  words,
  currentWordIndex,
  input,
  wordStatus,
}: DisplayWordsProps) => {
  const inputLetters = input.split("");

  return (
    <div className="flex flex-wrap gap-2 text-xl">
      {words.map((word, wordIdx) => {
        const isActive = wordIdx === currentWordIndex;
        const status = wordStatus[wordIdx];

        if (!isActive) {
          const color =
            status === "correct"
              ? "text-green-500"
              : status === "incorrect"
              ? "text-red-500"
              : "text-gray-500";
          return (
            <span key={wordIdx} className={`${color}`}>
              {word}
            </span>
          );
        }
        
        return (
          <span key={wordIdx} className="flex gap-0.5">
            {word.split("").map((char, charIdx) => {
              const inputChar = inputLetters[charIdx];
              const isCorrect = inputChar === char;
              const isIncorrect = inputChar && inputChar !== char;

              return (
                <span
                  key={charIdx}
                  className={`${
                    isCorrect
                      ? "text-white"
                      : isIncorrect
                      ? "text-red-500"
                      : "text-gray-600"
                  } ${
                    charIdx === inputLetters.length
                      ? "border-l-2 border-purple-500 animate-pulse"
                      : ""
                  }`}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
    </div>
  );
};

export default DisplayWords;
