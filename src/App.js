import React from "react";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import FullScreenMedia from "./components/FullScreenMedia/FullScreenMedia";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toolbar />
        <FullScreenMedia />
      </header>
    </div>
  );
}

export default App;
