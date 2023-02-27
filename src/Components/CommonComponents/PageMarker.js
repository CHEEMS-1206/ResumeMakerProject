import React, { useState } from "react";

// importing style
import "../../StyleSheets/PageMarker.css";

// importing constatnts
import Constants from "../Utilities/Constants/Constants";

// importing components
import Button from "./Button";
import FormContainer from "./FormContainer";

// inbuilt style
let stylingPageMarker = {
  prevBtn: {
    backgroundColor: "#7f8c8d",
  },
  nextBtn: {
    border: "3px solid  #2f58cd",
  },
};

function PageMarker(props) {
  // defining states
  let [PageMarker, setPageMarker] = useState(stylingPageMarker); // state for button colors
  let [currStep, setCurrStep] = useState(1);
  let [curreLevel, setCurrLevel] = useState(0);

  // all number of circular blobs - steps
  let steps = document.getElementsByClassName("num");
  // all number of horizontal levels
  let levels = document.getElementsByClassName("empty");

  // adding levDone class to steps and levels on nextBtn click
  function setStepsAndLevels() {
    steps[currStep].classList.add("stepDone");
    levels[curreLevel].classList.add("levDone");
    console.log("set");
  }
  // removing levDone class from buttons on prevBtn click
  function unSetStepsAndLevels() {
    steps[currStep - 1].classList.remove("stepDone");
    levels[curreLevel - 1].classList.remove("levDone");
    console.log("unset");
  }

  // on clicking previous button
  function prevBtnClickHandler(event) {
    // changing counts and button colors
    if (currStep > 1) {
      if (currStep === 2) {
        setPageMarker(
          (prevData) =>
            (prevData = {
              prevBtn: {
                backgroundColor: "#7f8c8d",
              },
              nextBtn: {
                backgroundColor: "#2f58cd",
              },
            })
        );
        setCurrLevel((prev) => (prev = prev - 1));
        setCurrStep((prev) => (prev = prev - 1));
      } else {
        setPageMarker(
          (prevData) =>
            (prevData = {
              prevBtn: {
                backgroundColor: "#2f58cd",
              },
              nextBtn: {
                backgroundColor: "#2f58cd",
              },
            })
        );
        setCurrLevel((prev) => (prev = prev - 1));
        setCurrStep((prev) => (prev = prev - 1));
      }
      unSetStepsAndLevels();
      console.log(currStep, "prev", curreLevel);
    }
  }

  //on clicking next button
  function nextBtnClickHandler(event) {
    // changing counts and button colors
    if (currStep < props.numOfSteps) {
      if (currStep === props.numOfSteps - 1) {
        setPageMarker(
          (prevData) =>
            (prevData = {
              prevBtn: { backgroundColor: "#2f58cd" },
              nextBtn: { backgroundColor: "#7f8c8d" },
            })
        );
        setCurrLevel((prev) => (prev = prev + 1));
        setCurrStep((prev) => (prev = prev + 1));
      } else {
        setPageMarker(
          (prevData) =>
            (prevData = {
              prevBtn: { backgroundColor: "#2f58cd" },
              nextBtn: { backgroundColor: "#2f58cd" },
            })
        );
        setCurrLevel((prev) => (prev = prev + 1));
        setCurrStep((prev) => (prev = prev + 1));
      }
      setStepsAndLevels();
      console.log(currStep, "next", curreLevel);
    }
  }

  // logic for number of steps
  let renderedElements = []; // rendering all the steps in the step array
  for (let i = 1; i <= props.numOfSteps; i++) {
    if (i === 1) {
      renderedElements.push(
        <span className="num stepDone" id={"num-" + i} key={"s" + i}>
          {i}
        </span>
      );
    } else {
      renderedElements.push(
        <span className="num" id={"num-" + i} key={"s" + i}>
          {i}
        </span>
      );
    }
    if (i <= props.numOfLevels) {
      renderedElements.push(
        <span className="empty" id="" key={"k" + i}></span>
      );
    }
  }

  console.log(currStep, curreLevel);

  return (
    <>
      <div className="container">
        <div className="steps">
          {renderedElements}
          {/* rendering steps and levels in the page  */}
        </div>
        <div className="btnContainer">
          <button
            id="prev"
            className="pageMarkerButtons"
            style={PageMarker.prevBtn}
            onClick={prevBtnClickHandler}
          >
            Prev
          </button>
          <button
            id="next"
            className="pageMarkerButtons"
            style={PageMarker.nextBtn}
            onClick={nextBtnClickHandler}
          >
            Next
          </button>
        </div>
      </div>
      <FormContainer className="formContainer" />
      <div className="ProceedPageButtonContainer">
        <Button
          // onMouseEnter={btnHoverHandler}
          // onClick={btnClickHandler}
          buttonValue={Constants.buttonValues.back}
          className="ProceedPageButtons"
          id="PREVIOUS"
        />
        <Button
          // onMouseEnter={btnHoverHandler}
          // onClick={btnClickHandler}
          buttonValue={Constants.buttonValues.preview}
          className="ProceedPageButtons"
          id="PREVIEW"
        />
      </div>
    </>
  );
}
export default PageMarker;
