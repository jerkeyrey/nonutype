import { TestState } from "@/types";

export const getRandomWords = (wordList: string[], count: number): string[] => {
  return [...wordList].sort(() => Math.random() - 0.5).slice(0, count);
};

export const initializeTest = (wordList: string[],  count : number) : TestState =>{
  return {
    words: getRandomWords(wordList, count),
    currentWordIndex: 0,
    correctWords: 0,
    incorrectWords: 0,
    input: '',
    startTime: null,
  }

}