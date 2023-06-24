import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  document.body.style.backgroundColor = mode === "dark" ? "#3e3e42" : "white";
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <div>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About-TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyse, below!"
                mode={mode}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
