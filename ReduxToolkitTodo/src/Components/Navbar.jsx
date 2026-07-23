import React from "react";

function ProgressBar({ todos }) {
  const total = todos.length;

  const completed = todos.filter(
    (todo) => todo.completed
  ).length;

  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 mt-8 border border-white/10">

      <div className="flex justify-between mb-3">
        <h2 className="text-white font-semibold">
          Progress
        </h2>

        <span className="text-green-400 font-bold">
          {percentage}%
        </span>
      </div>

      <div className="w-full bg-slate-700 rounded-full h-4">

        <div
          style={{ width: `${percentage}%` }}
          className="bg-green-500 h-4 rounded-full transition-all duration-500"
        />

      </div>

      <p className="text-gray-400 mt-3">
        {completed} of {total} tasks completed
      </p>

    </div>
  );
}

export default ProgressBar;