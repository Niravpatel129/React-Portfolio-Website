import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import FullScreenMedia from "./components/FullScreenMedia/FullScreenMedia";
import QuoteSection from "./components/QuoteSection/QuoteSection";
import VideoSection from "./components/VideoSection/VideoSection";
import InformationComponent from "./components/InformationComponent/InformationComponent";
import Userflow from "./components/Userflow/Userflow";
import HexComponent from "./components/HexComponent/HexComponent";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageBoxes from "./components/ImageBoxes/ImageBoxes";
import HomeGroup from "./components/HomeGroup/HomeGroup";
import HomeConclusion from "./components/HomeConclusion/HomeConclusion";
import Home from "./components/Home/Home";
import NextCaseStudy from "./nextCaseStudy/nextCaseStudy";

import RecreationTitlePage from "./components/RecreationTitlePage/RecreationTitlePage"; // todo
import RecreationTextBlock from "./components/RecreationTextBlock/RecreationTextBlock"; // todo
import RecreationFullScreenMedia from "./components/RecreationFullScreenMedia/RecreationFullScreenMedia"; // todo
import RecreationTwoColumnsText from "./components/RecreationTwoColumnsText/RecreationTwoColumnsText"; // todo
import RecreationPactAnalysis from "./components/RecreationPactAnalysis/RecreationPactAnalysis"; // todo
import RecreationVisualDesign from "./components/RecreationVisualDesign/RecreationVisualDesign"; // todo

import imageSoruce from "./globalAssets/images/imageAsset1.svg";
import imageSoruce2 from "./globalAssets/images/imageAsset2.svg";

const PageOne = () => {
  return (
    <div className="HomePage">
      <Toolbar theme="dark" />
      <Home />
      <HomeGroup />
      <HomeConclusion />
    </div>
  );
};

const Storytale = () => {
  return (
    <div className="Storytale">
      <Toolbar theme="light" />
      <FullScreenMedia />
      <QuoteSection />
      <VideoSection />
      <InformationComponent />
      <Userflow />
      <HexComponent />
      <ImageGallery />
      <ImageBoxes />
      <NextCaseStudy />
    </div>
  );
};

const RecreationCaseStudy = () => {
  return (
    <div className="PageThree">
      <Toolbar theme="dark" />
      <RecreationTitlePage />
      <RecreationTextBlock />
      <RecreationFullScreenMedia image={imageSoruce} />
      <RecreationTwoColumnsText />
      <RecreationFullScreenMedia image={imageSoruce2} />
      <RecreationPactAnalysis />
      <RecreationVisualDesign />
    </div>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/storytale" exact component={Storytale} />
        <Route path="/recreation" exact component={RecreationCaseStudy} />
      </BrowserRouter>
    </div>
  );
}

export default App;
