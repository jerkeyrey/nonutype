'use client'

import { useState } from 'react'
import TypingInput from '@/components/TypingInput'
import TestConfig from '@/components/TestConfig'
import { getRandomWords } from '@/lib/testFunctions'
import { pokemon } from '@/constants/words'
import DisplayWords from '@/components/DisplayWords'

export default function SoloTestPage() {
  const [hasStarted, setHasStarted] = useState(false)
  const [duration, setDuration] = useState(60)
  const [wordList, setWordList] = useState<string[]>([])
  const [input, setInput] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [wordStatus, setWordStatus] = useState<string[]>([])

  const handleStart = (selectedDuration: number) => {
    const newWords = getRandomWords(pokemon, 50)
    setDuration(selectedDuration)
    setHasStarted(true)
    setInput('')
    setCurrentWordIndex(0)
    setWordList(newWords)
    setWordStatus(Array(newWords.length).fill('pending'))
  }

  const handleInputChange = (value: string) => {
    if (value.endsWith(' ')) {
      const trimmed = value.trim()
      const currentWord = wordList[currentWordIndex]
      const isCorrect = trimmed === currentWord

      const updatedStatus = [...wordStatus]
      updatedStatus[currentWordIndex] = isCorrect ? 'correct' : 'incorrect'
      setWordStatus(updatedStatus)

      setInput('')
      setCurrentWordIndex((prev) => prev + 1)
    } else {
      setInput(value)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-8 gap-8">
      <h1 className="text-3xl font-bold text-purple-500">Solo Typing Test</h1>

      <TestConfig onStart={handleStart} />

      <div className="max-w-4xl w-full p-4 rounded border border-purple-600">
        <DisplayWords
          words={wordList}
          input={input}
          currentWordIndex={currentWordIndex}
          wordStatus={wordStatus}
        />
      </div>

      {hasStarted && (
        <TypingInput input={input} onInputChange={handleInputChange} />
      )}
    </main>
  )
}
