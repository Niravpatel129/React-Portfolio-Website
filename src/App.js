import React from "react";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import FullScreenMedia from "./components/FullScreenMedia/FullScreenMedia";
import QuoteSection from "./components/QuoteSection/QuoteSection";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <FullScreenMedia />
      <QuoteSection />
    </div>
  );
}

export default App;
