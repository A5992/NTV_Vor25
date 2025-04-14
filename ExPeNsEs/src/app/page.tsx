"use client";

import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";


export type Expense = {
  id: string;
  title: string;
  amount: number;
  date: string;
};

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Omit<Expense, "id">) => {
    const newExpense = { ...expense, id: crypto.randomUUID() };
    setExpenses((prev) => [newExpense, ...prev]);
  };

  const removeExpense = (id: string) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  
  const editExpense = (id: string, updated: Omit<Expense, "id">) => {
    setExpenses((prev) =>
      prev.map((e) => (e.id === id ? { ...e, ...updated } : e))
    );
  };
  
  return (
    <main className="min-h-screen bg-gray-900 text-white flex p-10 gap-12">
    {/* Left Column */}
    <div className="flex flex-col gap-8 w-1/2">
      <h1 className="text-4xl font-bold text-green-400">Add Expense</h1>
      <ExpenseForm onAdd={addExpense} />
      <div>
        <h2 className="text-3xl font-semibold text-green-400 mt-10">Stats</h2>
        <p className="mt-2">Sum: ${total.toFixed(2)}</p>
        <p>Count: {expenses.length}</p>
      </div>
    </div>
  
    {/* Right Column */}
    <div className="w-1/2">
      <ExpenseList expenses={expenses} onRemove={removeExpense} onEdit={editExpense} />
    </div>
  </main>
  
  );
}
