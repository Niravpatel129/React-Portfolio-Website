import React from "react";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import FullScreenMedia from "./components/FullScreenMedia/FullScreenMedia";
import QuoteSection from "./components/QuoteSection/QuoteSection";
import VideoSection from "./components/VideoSection/VideoSection";

function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}
function App() {
  if (!isMobileDevice) {
    console.log("mo");
    return <h1>Site is not made for mobile yet! Check back soon :)</h1>;
  } else {
    return (
      <div className="App">
        <Toolbar />
        <FullScreenMedia />
        <QuoteSection />
        <VideoSection />
      </div>
    );
  }
}

export default App;
