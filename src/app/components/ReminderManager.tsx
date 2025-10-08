// components/ReminderManager.tsx
"use client";

import { useState } from "react";

export const useReminderManager = () => {
  const [reminders, setReminders] = useState<string[]>([]);

  const addReminder = (text: string) => {
    if (text.trim()) setReminders((prev) => [...prev, text]);
  };

  const removeReminder = (index: number) => {
    setReminders((prev) => prev.filter((_, i) => i !== index));
  };

  return { reminders, addReminder, removeReminder };
};
