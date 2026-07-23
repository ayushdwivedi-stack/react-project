import React from "react";

function Stats({ todos }) {

  const total = todos.length;

  const completed = todos.filter(
    (todo) => todo.completed
  ).length;

  const pending = total - completed;

  return (
    <div className="grid md:grid-cols-3 gap-5 mt-8">

      <div className="bg-blue-600 rounded-2xl p-6 text-white">

        <h3>Total Tasks</h3>

        <h1 className="text-4xl font-bold">
          {total}
        </h1>

      </div>

      <div className="bg-green-600 rounded-2xl p-6 text-white">

        <h3>Completed</h3>

        <h1 className="text-4xl font-bold">
          {completed}
        </h1>

      </div>

      <div className="bg-yellow-500 rounded-2xl p-6">

        <h3>Pending</h3>

        <h1 className="text-4xl font-bold">
          {pending}
        </h1>

      </div>

    </div>
  );
}

export default Stats;