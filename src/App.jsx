import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const intiaColor = localStorage.getItem("backgroundColor" || "gold");
  const [color, setColor] = useState(intiaColor);

  const handleColorChanger = (newColor) => {
    setColor(newColor);
    localStorage.setItem("backgroundColor", newColor);
  };

  useEffect(() => {
    // Set the background color on initial render
    document.body.style.backgroundColor = color;

    // Cleanup function to reset the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [color]);

  return (
    <div className=" w-full h-screen duration-200  ">
      <div className=" flex flex-wrap justify-center fixed  inset-x-0 px-2 bottom-12 ">
        <div className="flex flex-wrap justify-center gap-6 shadow-lg bg-white px-4 py-3  rounded-3xl">
          <button
            className="rounded-3xl px-3 shadow-xl py-1 "
            style={{ backgroundColor: "Green" }}
            onClick={() => handleColorChanger("green")}
          >
            Green
          </button>
          <button
            className=" rounded-3xl px-3 shadow-xl py-1"
            style={{ backgroundColor: "red" }}
            onClick={() => handleColorChanger("red")}
          >
            Red
          </button>
          <button
            className=" rounded-3xl px-3 shadow-xl py-1"
            style={{ backgroundColor: "lavender" }}
            onClick={() => handleColorChanger("lavender")}
          >
            Lavendedr
          </button>
          <button
            className=" rounded-3xl px-3 shadow-xl py-1"
            style={{ backgroundColor: "lightpink" }}
            onClick={() => handleColorChanger("lightpink")}
          >
            Lightpink
          </button>
          <button
            className=" rounded-3xl px-3 shadow-xl py-1"
            style={{ backgroundColor: "blue" }}
            onClick={() => handleColorChanger("blue")}
          >
            Blue
          </button>
          <button
            className=" rounded-3xl px-3 shadow-xl py-1"
            style={{ backgroundColor: "olive" }}
            onClick={() => handleColorChanger("olive")}
          >
            Olive
          </button>
          <button
            className=" rounded-3xl px-3 shadow-xl py-1"
            style={{ backgroundColor: "grey" }}
            onClick={() => handleColorChanger("grey")}
          >
            Grey
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
