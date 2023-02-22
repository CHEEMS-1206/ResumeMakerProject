import React from "react";
import '../../StyleSheets/Choices.css'
import resume from '../Images/resume.jpg'

const Choices = () =>{
    const creator = "Priyanhsu Singh ";
    // const Rights = "  All rights reserved priyanshuSingh@2023 ";
    return (
      <div className="chooseOptPage">
        <div className="header">Resume Maker</div>
        <div className="choiceHolder">
          <div className="definitionBox">
            <h1 className="title">Resume</h1>
            <img className="choiceImage" src={resume} alt="im" />
            <p className="choiceDefinition">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="buttonHolder">
            <button className="selectChoice" id="RESUME">
              Resume
            </button>
            <button className="selectChoice" id="COVERLETTER">
              Cover Letters
            </button>
            <button className="selectChoice" id="ABOUTME">
              About me
            </button>
          </div>
        </div>
        <div className="footer">Created by {creator}</div>
      </div>
    );}

export default Choices;