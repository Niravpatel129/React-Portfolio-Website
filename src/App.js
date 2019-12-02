import React, { Component } from "react";

import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import FullScreenMedia from "./components/FullScreenMedia/FullScreenMedia";
import QuoteSection from "./components/QuoteSection/QuoteSection";
import VideoSection from "./components/VideoSection/VideoSection";
import InformationComponent from "./components/InformationComponent/InformationComponent";
import HexComponent from "./components/HexComponent/HexComponent";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageBoxes from "./components/ImageBoxes/ImageBoxes";
import HomeGroup from "./components/HomeGroup/HomeGroup";
import HomeConclusion from "./components/HomeConclusion/HomeConclusion";
import Home from "./components/Home/Home";
import NextCaseStudy from "./nextCaseStudy/nextCaseStudy";
import UpdatedUserFlow from "./components/UpdatedUserFlow/UpdatedUserFlow";

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
      <Toolbar theme="dark" />
      <FullScreenMedia />
      <QuoteSection />
      <VideoSection />
      <InformationComponent />
      <UpdatedUserFlow />
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
      <NextCaseStudy theme="dark" />
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Loaded: false
    };
  }

  componentDidMount() {
    // fake loading here
    this.Loaded();
  }

  Loaded() {
    setTimeout(() => {
      this.setState({ Loaded: true });
    }, 2000);
  }

  render() {
    if (this.state.Loaded) {
      return (
        <div>
          <BrowserRouter>
            <div className="App">
              <Route path="/" exact component={PageOne} />
              <Route path="/storytale" exact component={Storytale} />
              <Route path="/recreation" exact component={RecreationCaseStudy} />
            </div>
          </BrowserRouter>
        </div>
      );
    } else {
      return (
        <div className="LoadingSpinner">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>{" "}
        </div>
      );
    }
  }
}

export default App;
