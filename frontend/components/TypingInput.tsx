import React, { useEffect, useRef } from "react";

type TypingInputProps = {
  input: string;
  onInputChange: (value: string) => void;
};

const TypingInput = ({ input, onInputChange }: TypingInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      value={input}
      onChange={(e) => onInputChange(e.target.value)}
      className="absolute opacity-0 pointer-events-none"
      autoFocus
    />
  );
};

export default TypingInput;
