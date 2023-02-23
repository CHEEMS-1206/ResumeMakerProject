import React, { useState } from "react";
import '../../StyleSheets/Choices.css'

// importing useNavigate for naivigating across pages
import { useNavigate } from "react-router-dom";

// IMPORTED IMAGES
import resume from '../Images/resume.jpg'
import myPic from "../Images/logo.png";
import logo from "../Images/logo.png";
import coverLetter from "../Images/coverLetter.jpg";

const Choices = () =>{
  //used constants
  const creator = "Priyanhsu Singh ";
  // const Rights = "  All rights reserved priyanshuSingh@2023 ";
  const resumeDefinition =
    "A resume (or “CV” outside of the US) is a formal document that provides an overview of your professional qualifications, including your relevant work experience, skills, education, and notable accomplishments. Usually paired with a cover letter, a resume helps you demonstrate your abilities and convince employers you’re qualified and hireable.";
  const coverLetterDefinition =
    "A cover letter is a one-page document that you include with your resume as part of your application for a job. A good cover letter grabs a Hiring Manager’s attention and gets you to the next step of the hiring process. Cover letters are not mandatory but can help in standing out from others when applying for jobs.";
  const aboutMe =
    "Priyanshu Singh || Junior, B-tech ECE at MSIT || Full Stack Web developer || MERN || DSA - C++ || Expert @ Codestudio || OOP in JS, PHP, C++ || Linux Web development enthusiast, have a Solid foundational grip in front end technologies and frameworks. React developer, prefer Mysql as the database with Php as the backend language. Have made several fronted projects (can be found in my github repos).";
  const aboutApp =
    "Resume Maker is a handy tool that can be used to make a resume or a cover letter by just filling inthe details directly into the input fields. It is easy to use and versatile, just chose among multiple templates fill in the details and get your resume downloaded in a single click. Choose your option from the list to the right and get started.";

  let navigateToNewPath = useNavigate();

  // state defining
  const [paraContent, setParaContent] = useState(aboutApp); // state of the para content
  const [imageContent, setImageContent] = useState(logo); // state of the image
  const [titleContent, setTitleContent] = useState("Resume Maker"); // state of the para title

  function hoverHandler(event) {
    // change content on hover at resume button
    if (event.target.id === "RESUME") {
      setTitleContent((prevdata) => (prevdata = "Resume"));
      setImageContent((prevdata) => (prevdata = resume));
      setParaContent((prevdata) => (prevdata = resumeDefinition));
    }
    // change content on hover at coverletter button
    else if (event.target.id === "COVERLETTER") {
      setTitleContent((prevdata) => (prevdata = "Cover Letter"));
      setImageContent((prevdata) => (prevdata = coverLetter));
      setParaContent((prevdata) => (prevdata = coverLetterDefinition));
    }
    // change content on hover at about me button
    else if (event.target.id === "ABOUTME") {
      setTitleContent((prevdata) => (prevdata = "About Me"));
      setImageContent((prevdata) => (prevdata = myPic));
      setParaContent((prevdata) => (prevdata = aboutMe));
    }
  }
  // function clickHandler to handle click for visiting pages
  // we define path depending on the button clicked and jump to that page using navigate
  function clickHandler(event){
    let path = ""
    if(event.target.id === "RESUME"){
      path = "ResumeTemplates";
    }
    else if (event.target.id === "COVERLETTER"){
      path = "CoverLetterTemplates";
    }
    else if (event.target.id === "ABOUTME") {
      path = "AboutMe";
    }
    navigateToNewPath(path)
  }

  function hoverOverHandler() {
    // change content on hover at resume maker header
    setTitleContent((prevdata) => (prevdata = "Resume Maker"));
    setImageContent((prevdata) => (prevdata = logo));
    setParaContent((prevdata) => (prevdata = aboutApp));
  }

  return (
    <div className="chooseOptPage">
      <div className="header" onMouseEnter={hoverOverHandler}>
        Resume Maker
      </div>
      <div className="choiceHolder">
        <div className="definitionBox">
          <h1 className="title">{titleContent}</h1>
          <img className="choiceImage" src={imageContent} alt="im" />
          <p className="choiceDefinition">{paraContent}</p>
        </div>
        <div className="buttonHolder">
          <button
            className="selectChoice"
            id="RESUME"
            onMouseEnter={hoverHandler}
            onClick={clickHandler}
          >
            Resume
          </button>
          <button
            className="selectChoice"
            id="COVERLETTER"
            onMouseEnter={hoverHandler}
            onClick={clickHandler}
          >
            Cover Letters
          </button>
          <button
            className="selectChoice"
            id="ABOUTME"
            onMouseEnter={hoverHandler}
            onClick={clickHandler}
          >
            About me
          </button>
        </div>
      </div>
      <div className="footer">Created by {creator}</div>
    </div>
  );
}

export default Choices;