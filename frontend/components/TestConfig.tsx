"use client";
import { useState } from "react";
import React from "react";

type TestConfigProps = {
  onStart: (duration: number) => void;
};

const TestConfig = ({ onStart }: TestConfigProps) => {
  const [duration, setDuration] = useState(15);
  return (
    <section className="flex flex-col gap-4 items-center">
      <label className="flex flex-col items-center">
        <span className="mb-1 text-sm">Select Duration (seconds)</span>
        <select
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="bg-black border border-purple-500 text-white px-3 py-2 rounded"
        >
          <option value={30}>15</option>
          <option value={60}>30</option>
          <option value={90}>60</option>
        </select>
      </label>

      <button
        onClick={() => onStart(duration)}
        className="bg-purple-600 hover:bg-purple-700 transition text-white px-4 py-2 rounded"
      >
        Start Test
      </button>
    </section>
  );
};

export default TestConfig;
