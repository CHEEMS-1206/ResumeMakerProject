import React from "react";
import { useState } from "react";

// importing css styles
import "../../StyleSheets/MainFrame.css";

// importing useNavigate for naivigating across pages
import { useNavigate } from "react-router-dom";

// importing components
import Button from "./Button";
import Preview from "./Preview";
import TemplateImage from "./TemplateImage";
import ImageArray from "../Utilities/ImageImports/ImageImports";
import Header from "./Header";
import Footer from "./Footer";

// importing constants
import Constants from "../Utilities/Constants/Constants";

function MainFrame(props) {
  const navigateToNewPath = useNavigate();

  // state defining
  const [preview, setPreview] = useState(ImageArray.preview);

  // rendering multiple times the templates
  let templates = []; // created an array to render the templates one by one and pushing it inn the array
  for (let i = 0; i < props.mainFrameDetails.imageSubTitle.length; i++) {
    templates.push(
      <TemplateImage
        imageSubtitle={props.mainFrameDetails.imageSubTitle[i]}
        imageSrc={props.mainFrameDetails.imageSrc[i]}
        onClick={clickHandler}
        onMouseEnter={hoverHandler}
        onMouseLeave={hoverOverHandler}
        className={""}
        key={"image" + i}
        id={"image" + i}
      />
    );
  }

  // changing the state of the preview image on template clicks
  function clickHandler(event) {
    // this fn stores the value of id of currently selected template in the Constants that we can use further
    templates.forEach((element) => {
      if (element.props.id === event.target.id) {
        Constants.selectedTemplate.id = event.target.id;
        Constants.selectedTemplate.imageSrc = event.target.src;
        Constants.selectedTemplate.imageSubtitle = event.target.alt;
      }
    });
    for (let i = 0; i < props.mainFrameDetails.imageSubTitle.length; i++) {
      if (event.target.id === "image" + i) {
        setPreview(
          (prevData) => (prevData = props.mainFrameDetails.imageSrc[i])
        );
      }
    }
  }

  // changing the style of the image on template hover
  function hoverHandler(event) {
    event.target.classList.add("imageHover");
  }

  // changing the style of the image on template hoverOver
  function hoverOverHandler(event) {
    event.target.classList.remove("imageHover");
  }

  // button click handler to move back and forth
  function btnClickHandler(event) {
    let path = "";
    // if button is for returning purpose
    if (event.target.id === "BACK") {
      path = "/";

      // when returning back .. removing the selected image item
      Constants.selectedTemplate.id = "";
      Constants.selectedTemplate.imageSrc = "";
      Constants.selectedTemplate.imageSubtitle = "";

    // if button is for proceeding purpose
    } else if (event.target.id === "PROCEED") {
      // if proceeding from resumeTemplates
      if (props.locationPath === "/ResumeTemplates") {
        path = "/ResumeForm";

      }
      // if procceding from coverLetterTemplates
      else if (props.locationPath === "/CoverLetterTemplates") {
        console.log("is");
        path = "/CoverLetterForm";
      }
    }
    navigateToNewPath(path);
  }

  console.log(props.locationPath);
  // btn hover handler if any
  function btnHoverHandler() {}

  // here we have selected template printed on the console
  console.log(Constants.selectedTemplate);

  return (
    <>
      <Header className="header" headerValue={props.headerValue} />
      <div className="mainFrame">
        <div className="previewHolder">
          <Preview className="previewSelection" previewSrc={preview} />
          <h1>Preview</h1>
        </div>
        <div className="templateHolder">
          <div className="templatesBlock">
            {templates}
            {/* the array is placed further to render the templates */}
          </div>
          <div className="buttonBlock">
            <Button
              onMouseEnter={btnHoverHandler}
              onClick={btnClickHandler}
              buttonValue={Constants.buttonValues.back}
              className="selectChoice"
              id="BACK"
            />
            <Button
              onMouseEnter={btnHoverHandler}
              onClick={btnClickHandler}
              buttonValue={Constants.buttonValues.proceed}
              className="selectChoice"
              id="PROCEED"
            />
          </div>
        </div>
      </div>
      <Footer
        className="footer"
        footerValue={props.footerValue + " " + Constants.creator}
      />
    </>
  );
}

export default MainFrame;
