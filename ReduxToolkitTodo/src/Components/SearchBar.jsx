import React from "react";

function SearchBar({
  search,
  setSearch,
  filter,
  setFilter,
  priorityFilter,
  setPriorityFilter,
}) {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 mt-8 border border-white/10">

      {/* Search Input */}
      <input
        type="text"
        placeholder="🔍 Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 outline-none"
      />

      {/* Priority Filter */}
      <select
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
        className="w-full mt-4 p-3 rounded-xl bg-slate-800 text-white border border-slate-700 outline-none"
      >
        <option value="All Priority">All Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      {/* Status Filter */}
      <div className="flex gap-3 mt-5 flex-wrap">

        <button
          onClick={() => setFilter("All")}
          className={`px-5 py-2 rounded-lg transition ${
            filter === "All"
              ? "bg-indigo-600 text-white"
              : "bg-slate-700 text-gray-300"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("Pending")}
          className={`px-5 py-2 rounded-lg transition ${
            filter === "Pending"
              ? "bg-yellow-500 text-black"
              : "bg-slate-700 text-gray-300"
          }`}
        >
          Pending
        </button>

        <button
          onClick={() => setFilter("Completed")}
          className={`px-5 py-2 rounded-lg transition ${
            filter === "Completed"
              ? "bg-green-600 text-white"
              : "bg-slate-700 text-gray-300"
          }`}
        >
          Completed
        </button>

      </div>
    </div>
  );
}

export default SearchBar;