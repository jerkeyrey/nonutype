export type WordStatus = 'pending' | 'correct' | 'incorrect'

export type TestState = {
  words: string[];
  currentWordIndex: number;
  correctWords: number;
  incorrectWords: number;
  input: string;
  startTime: number | null;
  WordStatus: WordStatus[];

}
