import "./App.css";
import React from "react";
import Button from "./components/Button";
import ball from "./images/ball.png";

function App() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={ball} /> <span>_dpak</span>
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
        </ul>
      </div>
      <Button
        title="LEARN REACT FOR THE FRONTEND!"
        bgColor="#0652DD"
        btnText="Learn React Js"
      ></Button>
      <Button
        title="LEARN LARAVEL FOR THE BACKEND!"
        bgColor="#c23616"
        btnText="Learn Laravel"
      ></Button>
    </> 
  );
}

export default App;
