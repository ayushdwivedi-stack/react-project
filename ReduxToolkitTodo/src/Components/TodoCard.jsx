import React, { useState } from "react";
import { useDispatch } from "react-redux";
import EditTodoModel from "./EditTodoModel";
// If you renamed the file, use:
// import EditTodoModal from "./EditTodoModal";

import {
  removeTodos,
  toggleComplete,
  updateTodos,
} from "../Features/Todo/todoSlice";

function TodoCard({ todo }) {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const priorityColor = {
    High: "bg-red-500",
    Medium: "bg-yellow-500 text-black",
    Low: "bg-green-500",
  };

  return (
    <>
      <div
        className="
          bg-white/10
          backdrop-blur-xl
          border
          border-white/10
          rounded-2xl
          p-5
          mt-5
          shadow-xl
          hover:scale-[1.02]
          transition-all
          duration-300
        "
      >
        {/* Header */}
        <div className="flex justify-between items-start">

          <div className="flex-1">

            <h2
              className={`text-xl font-semibold text-white ${
                todo.completed ? "line-through opacity-50" : ""
              }`}
            >
              {todo.text}
            </h2>

            <p className="text-gray-400 mt-2">
              📅 {todo.dueDate || "No Due Date"}
            </p>

          </div>

          {/* Complete Checkbox */}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleComplete(todo.id))}
            className="w-6 h-6 accent-green-500 cursor-pointer"
          />

        </div>

        {/* Priority & Category */}
        <div className="flex gap-3 mt-5 flex-wrap">

          <span
            className={`${priorityColor[todo.priority]} px-3 py-1 rounded-full text-sm font-semibold`}
          >
            🚩 {todo.priority}
          </span>

          <span className="bg-blue-600 px-3 py-1 rounded-full text-white text-sm font-semibold">
            📂 {todo.category}
          </span>

        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">

          <button
            onClick={() => setIsOpen(true)}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 py-2 rounded-xl text-white transition"
          >
            ✏ Edit
          </button>

          <button
            onClick={() => dispatch(removeTodos(todo.id))}
            className="flex-1 bg-red-600 hover:bg-red-700 py-2 rounded-xl text-white transition"
          >
            🗑 Delete
          </button>

        </div>
      </div>

      {/* Edit Modal */}
      <EditTodoModel
        isOpen={isOpen}
        currentTodo={todo}
        onClose={() => setIsOpen(false)}
        onSave={(newText) =>
          dispatch(
            updateTodos({
              id: todo.id,
              text: newText,
            })
          )
        }
      />

      {/* If you renamed the file to EditTodoModal.jsx, use:
      <EditTodoModal
        isOpen={isOpen}
        currentTodo={todo}
        onClose={() => setIsOpen(false)}
        onSave={(newText) =>
          dispatch(
            updateTodos({
              id: todo.id,
              text: newText,
            })
          )
        }
      />
      */}
    </>
  );
}

export default TodoCard;