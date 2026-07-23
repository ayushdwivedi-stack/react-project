import React, { useEffect, useState } from "react";

function EditTodoModal({
  isOpen,
  onClose,
  onSave,
  currentTodo,
}) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (currentTodo) {
      setText(currentTodo.text);
    }
  }, [currentTodo]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    onSave(text);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="bg-slate-900 p-6 rounded-2xl w-[400px] border border-white/10">

        <h2 className="text-white text-2xl font-bold mb-5">
          Edit Task
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-600"
          />

          <div className="flex gap-3 mt-6">

            <button
              type="submit"
              className="flex-1 bg-green-600 py-3 rounded-xl text-white"
            >
              Save
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-red-600 py-3 rounded-xl text-white"
            >
              Cancel
            </button>
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

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditTodoModal;