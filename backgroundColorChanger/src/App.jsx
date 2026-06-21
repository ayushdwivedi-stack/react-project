import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-0 left-0 right-0 flex justify-center mb-5">
  <div className="flex flex-wrap gap-3 bg-white px-4 py-3 rounded-3xl shadow-lg">
    {/* Buttons */}
   

          <button
  onClick={() => setColor("red")}
  className="
  px-6 py-2
  rounded-full
  text-white
  font-bold
  shadow-lg
  hover:-translate-y-1
  hover:shadow-xl
  transition-all
  duration-300
  "
  style={{ backgroundColor: "red" }}
>
  🔴 Red
</button>

          <button
            onClick={() => setColor("black")}
            className="
px-5 py-2
rounded-full
text-white
font-semibold
shadow-lg
hover:scale-110
active:scale-95
transition-all
duration-200
cursor-pointer
"
            style={{ backgroundColor: "black" }}
          >
            ⚫ Black
          </button>

          <button
            onClick={() => setColor("white")}
            className="
px-5 py-2
rounded-full
text-white
font-semibold
shadow-lg
hover:scale-110
active:scale-95
transition-all
duration-200
cursor-pointer
"
            style={{ backgroundColor: "white" }}
          >
            🟦 White
          </button>

          <button
            onClick={() => setColor("orange")}
           className="
px-5 py-2
rounded-full
text-white
font-semibold
shadow-lg
hover:scale-110
active:scale-95
transition-all
duration-200
cursor-pointer
"
            style={{ backgroundColor: "orange" }}
          >
            🟧 Orange
          </button>

          <button
            onClick={() => setColor("grey")}
           className="
px-5 py-2
rounded-full
text-white
font-semibold
shadow-lg
hover:scale-110
active:scale-95
transition-all
duration-200
cursor-pointer
"
            style={{ backgroundColor: "grey" }}
          >
            🟫  Grey
          </button>

        </div>
        </div>
        </div>
      
  );
}

export default App;