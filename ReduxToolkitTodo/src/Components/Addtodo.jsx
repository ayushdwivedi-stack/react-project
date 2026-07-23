import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../Features/Todo/todoSlice";

function AddTodo() {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Study");
  const [dueDate, setDueDate] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    dispatch(
      addTodos({
        text,
        priority,
        category,
        dueDate,
      })
    );

    setText("");
    setPriority("Medium");
    setCategory("Study");
    setDueDate("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 mt-8 shadow-xl"
    >
      <h2 className="text-2xl font-bold text-white mb-6">
        Add New Task
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          type="text"
          placeholder="Enter your task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="col-span-2 p-3 rounded-xl bg-slate-800 text-white outline-none border border-slate-600 focus:border-indigo-500"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-3 rounded-xl bg-slate-800 text-white border border-slate-600"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 rounded-xl bg-slate-800 text-white border border-slate-600"
        >
          <option>Study</option>
          <option>Work</option>
          <option>Shopping</option>
          <option>Personal</option>
          <option>Fitness</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="col-span-2 p-3 rounded-xl bg-slate-800 text-white border border-slate-600"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white py-3 rounded-xl text-lg font-semibold"
      >
        ➕ Add Task
      </button>
    </form>
  );
}

export default AddTodo;