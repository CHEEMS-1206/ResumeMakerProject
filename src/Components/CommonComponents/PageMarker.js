import React, { useState } from "react";

// importing style
import "../../StyleSheets/PageMarker.css";

let currStep = 1;
let curreLevel = 0;

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
  const [PageMarker, setPageMarker] = useState(stylingPageMarker); // state for button colors

  // all number of circular blobs - steps
  let steps = document.getElementsByClassName("num");
  // all number of horizontal levels
  let levels = document.getElementsByClassName("empty");

  // adding levDone class to steps and levels on nextBtn click
  function setStepsAndLevels() {
    steps[currStep - 1].classList.add("stepDone");
    levels[curreLevel - 1].classList.add("levDone");
  }
  // removing levDone class from buttons on prevBtn click
  function unSetStepsAndLevels() {
    steps[currStep].classList.remove("stepDone");
    levels[curreLevel].classList.remove("levDone");
  }

  // on clicking previous button
  function prevBtnClickHandler(event) {
    // changing counts and button colors
    if (currStep === 1) {
    } else if (currStep === 2) {
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
      currStep--;
      curreLevel--;
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
      currStep--;
      curreLevel--;
    }
    unSetStepsAndLevels();
    console.log(currStep, "prev", curreLevel);
  }

  //on clicking next button
  function nextBtnClickHandler(event) {
    // changing counts and button colors
    if (currStep === props.numOfSteps) {
    } else if (currStep === props.numOfSteps - 1) {
      setPageMarker(
        (prevData) =>
          (prevData = {
            prevBtn: {
              backgroundColor: "#2f58cd",
            },
            nextBtn: {
              backgroundColor: "#7f8c8d",
            },
          })
      );
      currStep++;
      curreLevel++;
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
      currStep++;
      curreLevel++;
    }
    setStepsAndLevels();
    console.log(currStep, "next", curreLevel);
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

  return (
    <div className="container">
      <div className="steps">
        {renderedElements}
        {/* rendering steps and levels in the page  */}
      </div>
      <div className="btnContainer">
        <button
          id="prev"
          style={PageMarker.prevBtn}
          onClick={prevBtnClickHandler}
        >
          Prev
        </button>
        <button
          id="next"
          style={PageMarker.nextBtn}
          onClick={nextBtnClickHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default PageMarker;
