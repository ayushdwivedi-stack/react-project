import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";
import SearchBar from "./SearchBar";
import Stats from "./Stats";

function Todo() {

  const todos = useSelector(
    (state) => state.todos.todos
  );

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredTodos = todos.filter((todo) => {

    const matchesSearch = todo.text
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "Completed") {
      return matchesSearch && todo.completed;
    }

    if (filter === "Pending") {
      return matchesSearch && !todo.completed;
    }

    return matchesSearch;
  });

  return (
    <>

      <SearchBar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <Stats todos={todos} />

      <div className="mt-8">

        {filteredTodos.length === 0 ? (
          <h2 className="text-center text-gray-400">
            No Tasks Found
          </h2>
        ) : (
          filteredTodos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
            />
          ))
        )}

      </div>

    </>
  );
}

export default Todo;