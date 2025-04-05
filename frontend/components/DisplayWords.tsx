import React from 'react'

type DisplayWordsProps = {
  words: string[]
  currentIndex: number
}

const DisplayWords = ({words, currentIndex} : DisplayWordsProps) => {
  return (
    <div>
      <div className="text-xl text-purple-400 flex flex-wrap gap-2 mb-4">
      {words.map((word, id) => (
        <span
          key={id}
          className={
            id === currentIndex
              ? 'text-white underline font-bold'
              : 'text-purple-400'
          }
        >
          {word}
        </span>
      ))}
    </div>
    </div>
  )
}

export default DisplayWords