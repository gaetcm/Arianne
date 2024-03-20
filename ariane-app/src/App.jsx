import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <div className="container">
        <div className="bouttons">
          <button
            onClick={() => {
              setSwitch1(!switch1);
            }}
            className={switch1 === true ? "purple" : "gray"}
          >
            ON
          </button>

          <button
            onClick={() => {
              setSwitch2(!switch2);
            }}
            className={switch2 === true ? "purple" : "gray"}
          >
            ON
          </button>
          <button
            onClick={() => {
              setSwitch3(!switch3);
            }}
            className={switch3 === true ? "purple" : "gray"}
          >
            ON
          </button>

          <button
            onClick={() => {
              setSwitch1(!switch1);
            }}
            className={switch1 === false ? "purple" : "gray"}
          >
            OFF
          </button>
          <button
            onClick={() => {
              setSwitch2(!switch2);
            }}
            className={switch2 === false ? "purple" : "gray"}
          >
            OFF
          </button>
          <button
            onClick={() => {
              setSwitch3(!switch3);
            }}
            className={switch3 === false ? "purple" : "gray"}
          >
            OFF
          </button>
        </div>
        <div className="red">NO WAY !</div>
      </div>
    </>
  );
}

export default App;
