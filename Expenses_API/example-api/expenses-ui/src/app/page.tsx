"use client";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

interface Expense {
  id: number;
  name: string;
  cost: number;
}

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/expenses")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setExpenses(data.response);
      });
  }, []);

  const handleAddExpense = async () => {
    if (!name || !cost) return;
    const res = await fetch("http://localhost:3001/api/create-expense", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, cost: Number(cost) })
    });
    const data = await res.json();
    if (data.success) {
      setExpenses((prev) => [...prev, data.response]);
      setName("");
      setCost("");
    }
  };

  const handleDelete = async (id: number) => {
    const res = await fetch(`http://localhost:3001/api/expense/${id}`, {
      method: "DELETE"
    });
    const data = await res.json();
    if (data.success) setExpenses(data.response);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Expense Tracker</h1>

      <div className={styles.card}>
        <h2>Add New Expense</h2>
        <input
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Cost"
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>

      <h2 className={styles.subheading}>Your Expenses</h2>
      <div className={styles.expenseList}>
        {expenses.map((e) => (
          <div key={e.id} className={styles.expenseItem}>
            <span>
              {e.name} - ${e.cost.toFixed(2)}
            </span>
            <button onClick={() => handleDelete(e.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}