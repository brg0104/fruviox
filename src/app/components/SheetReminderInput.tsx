// components/SheetReminderInput.tsx
"use client";

import { useState } from "react";

interface Props {
  addReminder: (text: string) => void;
}

export const SheetReminderInput = ({ addReminder }: Props) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addReminder(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a reminder..."
        className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <button
        type="submit"
        className="bg-yellow-500 text-black px-4 rounded hover:scale-105 transition-transform"
      >
        Add
      </button>
    </form>
  );
};
