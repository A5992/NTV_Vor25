"use client";

import { useState } from "react";
import { Expense } from "../app/page";


type Props = {
  onAdd: (expense: Omit<Expense, "id">) => void;
};

export default function ExpenseForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [useDate, setUseDate] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount || (useDate && !date)) return;


    onAdd({
      title,
      amount: parseFloat(amount),
      date: useDate ? date : "",
    });

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-[35%] min-w-[250px]">
      <input
        type="text"
        placeholder="Expense Title"
        className="w-full p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        className="w-full p-2 border rounded"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label className="flex items-center gap-2 text-sm">
  <input
    type="checkbox"
    checked={useDate}
    onChange={(e) => setUseDate(e.target.checked)}
  />
  Use Date
</label>
      {useDate && (
        <input
          type="date"
          className="w-full p-2 border rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      )}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Add Expense
      </button>
    </form>
  );
}
