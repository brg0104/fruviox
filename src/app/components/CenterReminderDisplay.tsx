// components/CenterReminderDisplay.tsx
"use client";

interface Props {
  reminders: string[];
  removeReminder: (index: number) => void;
}

export const CenterReminderDisplay = ({ reminders, removeReminder }: Props) => (
  <div className="mt-6 flex flex-col items-center gap-2">
    {reminders.map((reminder, i) => (
      <div
        key={i}
        className="bg-white text-black px-4 py-2 rounded w-64 flex justify-between items-center"
      >
        {reminder}
        <button
          className="text-red-500 font-bold"
          onClick={() => removeReminder(i)}
        >
          ✕
        </button>
      </div>
    ))}
  </div>
);
