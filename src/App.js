import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert(`Dark mode activated`, `success`);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(`Light mode activated`, `success`);
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route exact path="/" element={<TextForm
                heading={<h3><strong>Text-Utils - Word counter, characters counter</strong></h3>}
                mode={mode}
                showAlert={showAlert}
              />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
