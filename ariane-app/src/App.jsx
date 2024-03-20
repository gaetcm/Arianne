import { useState } from "react";
import Logo from "../src/assets/components/Logo";
import Pic from "../src/assets/img/purplerocket.webp";
import Footer from "./assets/components/Footer";
import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <header>
        <div className="logo">
          <Logo src={Pic} />
        </div>
        <h1 className="offside-regular">Ready To Go</h1>
      </header>

      <div className="container">
        <div className="launcher">
          <div className="bouttons">
            <button
              onClick={() => {
                setSwitch1(!switch1);
              }}
              className={
                switch1 === true
                  ? "purple offside-regular"
                  : "gray offside-regular"
              }
            >
              ON
            </button>

            <button
              onClick={() => {
                setSwitch2(!switch2);
              }}
              className={
                switch2 === true
                  ? "purple offside-regular"
                  : "gray offside-regular"
              }
            >
              ON
            </button>
            <button
              onClick={() => {
                setSwitch3(!switch3);
              }}
              className={
                switch3 === true
                  ? "purple offside-regular"
                  : "gray offside-regular"
              }
            >
              ON
            </button>

            <button
              onClick={() => {
                setSwitch1(!switch1);
              }}
              className={
                switch1 === false
                  ? "purple offside-regular"
                  : "gray offside-regular"
              }
            >
              OFF
            </button>
            <button
              onClick={() => {
                setSwitch2(!switch2);
              }}
              className={
                switch2 === false
                  ? "purple offside-regular"
                  : "gray offside-regular"
              }
            >
              OFF
            </button>
            <button
              onClick={() => {
                setSwitch3(!switch3);
              }}
              className={
                switch3 === false
                  ? "purple offside-regular"
                  : "gray offside-regular"
              }
            >
              OFF
            </button>
          </div>

          <div
            className={
              switch3 && switch2 && switch1 === true
                ? "green offside-regular"
                : "red offside-regular"
            }
          >
            {switch3 && switch2 && switch1 === true
              ? "GO !!! 🚀"
              : "NO WAY ! ✋"}
          </div>
        </div>
        <div className="reset offside-regular">
          {" "}
          <button
            className="blue offside-regular"
            onClick={() => {
              setSwitch1(false);
              setSwitch2(false);
              setSwitch3(false);
            }}
          >
            RESET
          </button>
        </div>
      </div>
      <footer className="offside-regular">
        <Footer text=" Made at Le Reacteur by Gaëtan (ꈍᴗꈍ) 🚀" />
      </footer>
    </>
  );
}

export default App;
