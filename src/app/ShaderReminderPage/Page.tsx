// app/page.tsx
"use client";

import { ShaderCanvas } from "../components/ShaderCanvas";
import { SheetReminderInput } from "../components/SheetReminderInput";
import { CenterReminderDisplay } from "../components/CenterReminderDisplay";
import { useReminderManager } from "../components/ReminderManager";

export default function ShaderReminderPage() { // <-- renamed here
  const { reminders, addReminder, removeReminder } = useReminderManager();

  return (
    <div className="min-h-screen bg-[#121315] flex flex-col items-center justify-start pt-16">
      <h1 className="text-white text-4xl font-bold mb-6">Shader Reminder</h1>
      <ShaderCanvas />
      <SheetReminderInput addReminder={addReminder} />
      <CenterReminderDisplay reminders={reminders} removeReminder={removeReminder} />
    </div>
  );
}
