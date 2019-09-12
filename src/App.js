import React from "react";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import FullScreenMedia from "./components/FullScreenMedia/FullScreenMedia";
import QuoteSection from "./components/QuoteSection/QuoteSection";
import VideoSection from "./components/VideoSection/VideoSection";
import InformationComponent from "./components/InformationComponent/InformationComponent";
import Userflow from "./components/Userflow/Userflow";
import HexComponent from "./components/HexComponent/HexComponent";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageBoxes from "./components/ImageBoxes/ImageBoxes";
function App() {
  return (
    <div className="App">
      <Toolbar />
      <FullScreenMedia />
      <QuoteSection />
      <VideoSection />
      <InformationComponent />
      <Userflow />
      <HexComponent />
      <ImageGallery />
      <ImageBoxes />
    </div>
  );
}

export default App;
