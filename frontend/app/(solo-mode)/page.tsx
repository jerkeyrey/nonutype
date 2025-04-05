import DisplayWords from "@/components/DisplayWords"
import { initializeTest } from "@/lib/testFunctions"
import { TestState } from "@/types"
import { useState } from "react"



const Page = () => {
  const [isTestStarted, setIsTestStarted] = useState(false)
  const [duration, setDuration] = useState(60)
  const [testState, setTestState] = useState<TestState>(()=>initializeTest(pokemon, duration))
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-purple-500">Solo Typing Test</h1>

      <div className="w-full max-w-3xl p-4 border border-purple-600 rounded-lg">
        <DisplayWords
          words={testState.words}
          currentIndex={testState.currentWordIndex}
        />
      </div>
    </main>

  )
}

export default Page