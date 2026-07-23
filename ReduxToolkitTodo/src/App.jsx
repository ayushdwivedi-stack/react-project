import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-white mb-2">
          📝 Task Manager
        </h1>

        <p className="text-center text-slate-300 mb-8">
          Stay organized. Stay productive.
        </p>

        <AddTodo />

        <Todo />
      </div>
    </div>
  );
}

export default App;