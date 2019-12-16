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

import RecreationTitlePage from "./components/RecreationTitlePage/RecreationTitlePage";
import RecreationTextBlock from "./components/RecreationTextBlock/RecreationTextBlock";
import RecreationFullScreenMedia from "./components/RecreationFullScreenMedia/RecreationFullScreenMedia";
import RecreationTwoColumnsText from "./components/RecreationTwoColumnsText/RecreationTwoColumnsText";
import RecreationPactAnalysis from "./components/RecreationPactAnalysis/RecreationPactAnalysis";
import RecreationVisualDesign from "./components/RecreationVisualDesign/RecreationVisualDesign";

import imageSoruce from "./globalAssets/images/imageAsset1.svg";
import imageSoruce2 from "./globalAssets/images/imageAsset2.svg";
import HomeAbout from "./components/HomeAbout/HomeAbout";

import ExplorationTitle from "./components/ExplorationTitle/ExplorationTitle";
import Vimeo from "./components/Vimeo/Vimeo";

import header from "./globalAssets/images/exploration/3d-header.jpg";
import image1 from "./globalAssets/images/exploration/3d-image1.jpg";
import image2 from "./globalAssets/images/exploration/3d-image2.jpg";
import image3 from "./globalAssets/images/exploration/3d-image3.jpg";
import image4 from "./globalAssets/images/exploration/3d-image4.jpg";
import image5 from "./globalAssets/images/exploration/3d-image5.jpg";
import image6 from "./globalAssets/images/exploration/3d-image6.jpg";

import { connect } from "react-redux";
import { setLoadingSpinner } from "./actions";

const PageOne = () => {
  return (
    <div className="HomePage">
      <Toolbar theme="dark" />
      <Home />
      <HomeAbout />
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

const Exploration3d = () => {
  return (
    <div className="Exploration">
      <Toolbar theme="dark" />
      <FullScreenMedia imageProp={header} />
      <ExplorationTitle />
      <RecreationFullScreenMedia imageProp={image1} />
      <RecreationFullScreenMedia imageProp={image2} />{" "}
      <Vimeo URL="https://player.vimeo.com/video/265523385" />
      <RecreationFullScreenMedia imageProp={image3} />
      <RecreationFullScreenMedia imageProp={image4} />
      <Vimeo URL="https://player.vimeo.com/video/379862200" />
      <RecreationFullScreenMedia imageProp={image5} />
      <RecreationFullScreenMedia imageProp={image6} />
      <NextCaseStudy />
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
      this.props.setLoadingSpinner(true);
    }, 2000);
  }

  render() {
    if (this.props.currentSpinnerMode) {
      return (
        <div>
          <BrowserRouter>
            <div className="App">
              <Route path="/" exact component={PageOne} />
              <Route path="/storytale" exact component={Storytale} />
              <Route path="/recreation" exact component={RecreationCaseStudy} />
              <Route path="/exploration" exact component={Exploration3d} />
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

const mapStateToProps = state => {
  return {
    currentSpinnerMode: state.currentSpinnerMode
  };
};

export default connect(mapStateToProps, { setLoadingSpinner })(App);
