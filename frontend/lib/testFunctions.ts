import { TestState } from "@/types";

export const getRandomWords = (wordList: string[], count: number): string[] => {
  const shuffled = [...wordList];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
};


export const initializeTest = (wordList: string[],  count : number) : TestState =>{
  return {
    words: getRandomWords(wordList, count),
    currentWordIndex: 0,
    correctWords: 0,
    incorrectWords: 0,
    input: '',
    startTime: null,
    WordStatus: Array(count).fill('pending'),
  }

}