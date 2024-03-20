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
          <button className="purple">ON</button>

          <button>ON</button>
          <button>ON</button>
          <button>OFF</button>
          <button>OFF</button>
          <button>OFF</button>
        </div>
        <div className="red">NO WAY !</div>
      </div>
    </>
  );
}

export default App;
