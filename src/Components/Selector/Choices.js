import React, { useState } from "react";

// importing styles
import "../../StyleSheets/Choices.css";

// importing useNavigate for naivigating across pages
import { useNavigate } from "react-router-dom";

// importing Constants
import Constants from "../Utilities/Constants/Constants";

// Importing Images
import ImageArray from "../Utilities/ImageImports/ImageImports";

// importing components
import Button from "../CommonComponents/Button";
import Header from "../CommonComponents/Header";
import Footer from "../CommonComponents/Footer";

const Choices = () => {
  let navigateToNewPath = useNavigate();

  // state defining
  const [paraContent, setParaContent] = useState(Constants.aboutApp); // state of the para content
  const [imageContent, setImageContent] = useState(ImageArray.logo); // state of the image
  const [titleContent, setTitleContent] = useState("Resume Maker"); // state of the para title

  // to dynamically change the data on display on hovers
  function hoverHandler(event) {
    // change content on hover at resume button
    if (event.target.id === "RESUME") {
      setTitleContent((prevdata) => (prevdata = "Resume"));
      setImageContent((prevdata) => (prevdata = ImageArray.resume));
      setParaContent((prevdata) => (prevdata = Constants.resumeDefinition));
    }
    // change content on hover at coverletter button
    else if (event.target.id === "COVERLETTER") {
      setTitleContent((prevdata) => (prevdata = "Cover Letter"));
      setImageContent((prevdata) => (prevdata = ImageArray.coverLetter));
      setParaContent(
        (prevdata) => (prevdata = Constants.coverLetterDefinition)
      );
    }
    // change content on hover at about me button
    else if (event.target.id === "ABOUTME") {
      setTitleContent((prevdata) => (prevdata = "About Me"));
      setImageContent((prevdata) => (prevdata = ImageArray.myPic));
      setParaContent((prevdata) => (prevdata = Constants.aboutMe));
    }
  }

  // function clickHandler to handle click for visiting pages
  // we define path depending on the button clicked and jump to that page using navigate
  function clickHandler(event) {
    let path = "";
    if (event.target.id === "RESUME") {
      path = "ResumeTemplates";
    } else if (event.target.id === "COVERLETTER") {
      path = "CoverLetterTemplates";
    } else if (event.target.id === "ABOUTME") {
      path = "AboutMe";
    }
    navigateToNewPath(path);
  }

  function hoverOverHandler() {
    // change content on hover at resume maker header
    setTitleContent((prevdata) => (prevdata = "Resume Maker"));
    setImageContent((prevdata) => (prevdata = ImageArray.logo));
    setParaContent((prevdata) => (prevdata = Constants.aboutApp));
  }

  return (
    <div className="chooseOptPage">
      <Header
        className="header"
        onMouseEnter={hoverOverHandler}
        headerValue={Constants.headerValues.choicePageHeader}
      />
      <div className="choiceHolder">
        <div className="definitionBox">
          <h1 className="title">{titleContent}</h1>
          <img className="choiceImage" src={imageContent} alt="im" />
          <p className="choiceDefinition">{paraContent}</p>
        </div>
        <div className="buttonHolder">
          <Button
            className="selectChoice"
            id="RESUME"
            onMouseEnter={hoverHandler}
            onClick={clickHandler}
            buttonValue={Constants.buttonValues.resume}
          />
          <Button
            className="selectChoice"
            id="COVERLETTER"
            onMouseEnter={hoverHandler}
            onClick={clickHandler}
            buttonValue={Constants.buttonValues.coverLetter}
          />
          {/* <Button
            className="selectChoice"
            id="ABOUTME"
            onMouseEnter={hoverHandler}
            onClick={clickHandler}
            buttonValue={Constants.buttonValues.aboutMe}
          /> */}
        </div>
      </div>
      <Footer
        className="footer"
        footerValue={Constants.footerValues.footer + `${Constants.creator}`}
      />
    </div>
  );
};

export default Choices;
