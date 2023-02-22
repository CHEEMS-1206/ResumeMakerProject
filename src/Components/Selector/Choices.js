import React from "react";

const Choices = () =>{
    return (
      <div className="chooseOptPage">
        <div className="header">ResumeMaker</div>
        <div className="choiceHolder">
          <div className="definitionBox">
            <h1 className="title"></h1>
            <img className="choiceImage" />
            <p className="choiceDefinition"></p>
          </div>
          <div>
            <button className="selectChoice" id="RESUME"></button>
            <button className="selectChoice" id="COVERLETTER"></button>
            <button className="selectChoice" id="ABOUTME"></button>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );}

export default Choices;