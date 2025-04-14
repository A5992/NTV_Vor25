"use client";

import { useState } from "react";
import { Expense } from "../app/page";

type Props = {
  expenses: Expense[];
  onRemove: (id: string) => void;
  onEdit: (id: string, updated: Omit<Expense, "id">) => void;
};

export default function ExpenseList({ expenses, onRemove, onEdit }: Props) {
  const [editId, setEditId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const [editDate, setEditDate] = useState("");


  const startEdit = (expense: Expense) => {
    setEditId(expense.id);
    setEditTitle(expense.title);
    setEditAmount(expense.amount.toString());
    setEditDate(expense.date || "");

  };

  const saveEdit = (id: string) => {
    if (!editTitle || !editAmount) return;
    onEdit(id, {
      title: editTitle,
      amount: parseFloat(editAmount),
      date: editDate,
    });
    setEditId(null);
  };

  return (
    <div className="space-y-4">
      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="p-4 border-2 border-green-500 rounded fadein flex justify-between items-start"
        >
          {editId === expense.id ? (
            <div className="flex flex-col gap-2 w-full">
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="bg-gray-800 p-1 rounded"
              />
              <input
                value={editAmount}
                type="number"
                onChange={(e) => setEditAmount(e.target.value)}
                className="bg-gray-800 p-1 rounded"
              />
              <input
              type="date"
              value={editDate}
              onChange={(e) => setEditDate(e.target.value)}
              className="bg-gray-800 p-1 rounded"
              />
              <button
                onClick={() => saveEdit(expense.id)}
                className="text-green-400 text-sm hover:underline self-start"
              >
                💾 Save
              </button>
            </div>
          ) : (
            <div>
            <p><strong>Name:</strong> {expense.title}</p>
            <p><strong>Cost:</strong> ${expense.amount}</p>
            {expense.date && (
  <p className="text-sm text-gray-400">
    📅 {new Date(expense.date).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    })}
  </p>
)}

          </div>
          )}
          <div className="flex gap-2">
            {editId !== expense.id && (
              <button onClick={() => startEdit(expense)} className="text-blue-400 hover:underline">
                ✏️
              </button>
            )}
            <button onClick={() => onRemove(expense.id)} className="text-red-500 hover:underline">
              ❌
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
