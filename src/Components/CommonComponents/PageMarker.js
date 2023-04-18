import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  addNewBtnHolder: {
    display: "flex",
    justifyContent: "right",
    paddingRight: "15px",
  },
  addNewBtn: {
    border: "none",
    outline: "none",
    backgroundColor: "#2f58cd",
    padding: "10px 20px",
    borderRadius: "5px",
    color: "white",
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
    // console.log("set");
  }
  // removing levDone class from buttons on prevBtn click
  function unSetStepsAndLevels() {
    steps[currStep - 1].classList.remove("stepDone");
    levels[curreLevel - 1].classList.remove("levDone");
    // console.log("unset");
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
      // console.log(currStep, "prev", curreLevel);
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
      // console.log(currStep, "next", curreLevel);
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

  //////    form data recieve and set   //////

  // path navigation
  const navigateToNewPath = useNavigate();

  // button click handler to move back and forth
  function btnClickHandler(event) {
    let path = "";
    // if button is for returning purpose
    if (event.target.id === "PREVIOUS") {
      // if proceeding to resumeTemplates
      if (props.locationPath === "/ResumeForm") {
        path = "/ResumeTemplates ";
      }
      // if procceding to coverLetterTemplates
      else if (props.locationPath === "/CoverLetterForm") {
        path = "/CoverLetterTemplates";
      }
    } else if (
      event.target.id === "PREVIEW" &&
      curreLevel === props.numOfLevels
    ) {
      // if proceeding to resumeTemplates
      if (props.locationPath === "/ResumeForm") {
        path = "/ResumePreview ";
      }
      // if procceding to coverLetterTemplates
      else if (props.locationPath === "/CoverLetterForm") {
        path = "/CoverLetterPreview";
      }
    }
    navigateToNewPath(path);
  }

  // for all form renders on basis of currstep
  let formElements = [];

  // if coming from coverLetterForm
  if (props.locationPath === "/CoverLetterForm") {
    // elements for 1st step
    formElements.push(
      <form className="formContainer">
        <fieldset className="headerArea">
          <legend>Filling Guidelines </legend>
        </fieldset>
        <fieldset className="formArea">
          <legend>Sender's Information </legend>
          <div>
            <label>Sender's Name</label>
            <input
              type="text"
              maxlegth="20"
              defaultValue={props.formData.FormData.step1.senderName}
              id="SNAME"
              onChange={(e) => {
                props.formData.FormData.step1.senderName = e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Sender's Designation</label>
            <input
              type="text"
              maxlegth="30"
              defaultValue={props.formData.FormData.step1.senderDesignation}
              id="SDESIGNATION"
              onChange={(e) => {
                props.formData.FormData.step1.senderDesignation =
                  e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Sender's Email</label>
            <input
              type="email"
              maxlegth="30"
              defaultValue={props.formData.FormData.step1.senderEmail}
              id="SEMAIL"
              onChange={(e) => {
                props.formData.FormData.step1.senderEmail = e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Sender's Contact</label>
            <input
              type="number"
              maxlegth="10"
              defaultValue={props.formData.FormData.step1.senderMobileNum}
              id="SCONTACT"
              onChange={(e) => {
                props.formData.FormData.step1.senderMobileNum = e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Sender's LinkedIn</label>
            <input
              type="url"
              maxlegth="50"
              defaultValue={props.formData.FormData.step1.senderLinkedIn}
              id="SLINKEDIN"
              onChange={(e) => {
                props.formData.FormData.step1.senderLinkedIn = e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Sender's Address</label>
            <input
              type="text"
              maxlegth="30"
              defaultValue={props.formData.FormData.step1.senderAddress}
              id="SADDRESS"
              onChange={(e) => {
                props.formData.FormData.step1.senderAddress = e.target.value;
              }}
            ></input>
          </div>
        </fieldset>
      </form>
    );
    // elements for step 2
    formElements.push(
      <div className="formContainer">
        <fieldset className="headerArea">
          <legend>Filling Guidelines </legend>
        </fieldset>
        <fieldset className="formArea">
          <legend>Receiver's Information </legend>
          <div>
            <label>Date</label>
            <input
              type="date"
              defaultValue={props.formData.FormData.step2.date}
              id="DATE"
              onChange={(e) => {
                props.formData.FormData.step2.date = e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Receiver's Name</label>
            <input
              type="text"
              maxlegth="20"
              defaultValue={props.formData.FormData.step2.receipentName}
              id="RNAME"
              onChange={(e) => {
                props.formData.FormData.step2.receipentName = e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Receiver's Designation</label>
            <input
              type="text"
              maxlegth="30"
              id="RDESIGNATION"
              defaultValue={props.formData.FormData.step2.receipentDesignation}
              onChange={(e) => {
                props.formData.FormData.step2.receipentDesignation =
                  e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Receiver's Email</label>
            <input
              type="email"
              maxlegth="30"
              defaultValue={props.formData.FormData.step2.receipentEmail}
              id="REMAIL"
              onChange={(e) => {
                props.formData.FormData.step2.receipentEmail = e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Receiver's Contact</label>
            <input
              type="number"
              maxlegth="10"
              // defaultValue={props.formData.FormData.step2.receipentMobileNum}
              id="RCONTACT"
              onChange={(e) => {
                props.formData.FormData.step2.receipentMobileNum =
                  e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Receiver's Address</label>
            <input
              type="text"
              maxlegth="30"
              defaultValue={props.formData.FormData.step2.receipentAddress}
              id="RADDRESS"
              onChange={(e) => {
                props.formData.FormData.step2.receipentAddress = e.target.value;
              }}
            ></input>
          </div>
        </fieldset>
      </div>
    );
    // elements for step 3
    formElements.push(
      <form className="formContainer">
        <fieldset className="headerArea">
          <legend>Filling Guidelines </legend>
        </fieldset>
        <fieldset className="formArea">
          <legend>Introduction </legend>
          <div>
            <label>Sender's Gender </label>
            <select
              defaultValue={props.formData.FormData.step3.genderSender}
              id="SGENDER"
              onChange={(e) => {
                props.formData.FormData.step3.genderSender = e.target.value;
              }}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>
          </div>
          <div>
            <label>Receiver's Gender </label>
            <select
              defaultValue={props.formData.FormData.step3.genderReceiver}
              id="RGENDER"
              onChange={(e) => {
                props.formData.FormData.step3.genderReceiver = e.target.value;
              }}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>
          </div>
          <div>
            <label>Salutation</label>
            <input
              type="text"
              maxlegth="12"
              defaultValue={props.formData.FormData.step3.salutation}
              id="SALUTATION"
              onChange={(e) => {
                props.formData.FormData.step3.salutation = e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Introductory paragraph</label>
            <textarea
              defaultValue={props.formData.FormData.step3.introductoryPassage}
              id="INTRO"
              onChange={(e) => {
                props.formData.FormData.step3.introductoryPassage =
                  e.target.value;
              }}
            ></textarea>
          </div>
        </fieldset>
      </form>
    );
    // elements for step 4
    formElements.push(
      <div className="formContainer">
        <fieldset className="headerArea">
          <legend>Filling Guidelines </legend>
        </fieldset>
        <fieldset className="formArea">
          <legend>Content Body </legend>
          <div>
            <label>Content paragraph</label>
            <textarea
              defaultValue={props.formData.FormData.step4.body1}
              id="BODY1"
              onChange={(e) => {
                props.formData.FormData.step4.body1 = e.target.value;
              }}
            ></textarea>
          </div>
          <div>
            <label>Experinces and Projects</label>
            <input
              type="text"
              maxlegth="200"
              defaultValue={props.formData.FormData.step4.experienceAndProjects}
              id="EXP-PRO"
              onChange={(e) => {
                props.formData.FormData.step4.experienceAndProjects =
                  e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Content paragraph</label>
            <textarea
              defaultValue={props.formData.FormData.step4.body2}
              id="BODY2"
              onChange={(e) => {
                props.formData.FormData.step4.body2 = e.target.value;
              }}
            ></textarea>
          </div>
        </fieldset>
      </div>
    );
    // elements for step 5
    formElements.push(
      <form className="formContainer">
        <fieldset className="headerArea">
          <legend>Filling Guidelines </legend>
        </fieldset>
        <fieldset className="formArea">
          <legend>Conclusion </legend>
          <div>
            <label>Conclusive paragraph</label>
            <textarea
              defaultValue={props.formData.FormData.step5.conclusivePassages}
              id="CP"
              onChange={(e) => {
                props.formData.FormData.step5.conclusivePassages =
                  e.target.value;
              }}
            ></textarea>
          </div>
          <div>
            <label>End With</label>
            <input
              type="text"
              maxlegth="20"
              defaultValue={
                props.formData.FormData.step5.complimentaryEndKeyword
              }
              id="END"
              onChange={(e) => {
                props.formData.FormData.step5.complimentaryEndKeyword =
                  e.target.value;
              }}
            ></input>
          </div>
        </fieldset>
      </form>
    );
  } else if (props.locationPath === "/ResumeForm") {
    // getting personal Informations in a form
    formElements.push(
      <form className="formContainer">
        <fieldset className="headerArea">
          <legend>Filling Guidelines </legend>
        </fieldset>
        <fieldset className="formArea">
          <legend>Personal Information </legend>
          <div>
            <label>Name</label>
            <input
              type="text"
              maxlegth="20"
              defaultValue={props.formData.FormData.personalInformation.name}
              onChange={(e) => {
                props.formData.FormData.personalInformation.name =
                  e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Job Role</label>
            <input
              type="text"
              maxlegth="20"
              defaultValue={props.formData.FormData.personalInformation.jobrole}
              onChange={(e) => {
                props.formData.FormData.personalInformation.jobrole =
                  e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Email Address</label>
            <input
              type="email"
              maxlegth="30"
              defaultValue={props.formData.FormData.personalInformation.email}
              onChange={(e) => {
                props.formData.FormData.personalInformation.email =
                  e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Contact no.</label>
            <input
              type="number"
              maxlegth="10"
              defaultValue={
                props.formData.FormData.personalInformation.MobileNum
              }
              onChange={(e) => {
                props.formData.FormData.personalInformation.MobileNum =
                  e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              maxlegth="30"
              defaultValue={props.formData.FormData.personalInformation.address}
              onChange={(e) => {
                props.formData.FormData.personalInformation.address =
                  e.target.value;
              }}
            ></input>
          </div>
        </fieldset>
      </form>
    );

    // getting social links in div
    formElements.push(
      <div className="formContainer">
        <fieldset className="headerArea">
          <legend>Filling Guidelines </legend>
        </fieldset>
        <fieldset className="formArea">
          <legend>Professional Work Links </legend>
          <div>
            <label>LinkedIn</label>
            <input
              type="url"
              maxlegth="50"
              defaultValue={props.formData.FormData.socialLinks.linkedIn}
              onChange={(e) => {
                props.formData.FormData.socialLinks.linkedIn = e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>GitHub</label>
            <input
              type="url"
              maxlegth="50"
              defaultValue={props.formData.FormData.socialLinks.github}
              onChange={(e) => {
                props.formData.FormData.socialLinks.github = e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Other Link 1</label>
            <input
              type="url"
              maxlegth="50"
              defaultValue={props.formData.FormData.socialLinks.socialLinks1}
              onChange={(e) => {
                props.formData.FormData.socialLinks.socialLinks1 =
                  e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Other Link 2</label>
            <input
              type="url"
              maxlegth="50"
              defaultValue={props.formData.FormData.socialLinks.socialLinks2}
              onChange={(e) => {
                props.formData.FormData.socialLinks.socialLinks2 =
                  e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Other Link 3</label>
            <input
              type="url"
              maxlegth="50"
              defaultValue={props.formData.FormData.socialLinks.socialLinks3}
              onChange={(e) => {
                props.formData.FormData.socialLinks.socialLinks3 =
                  e.target.value;
              }}
            ></input>
          </div>
        </fieldset>
      </div>
    );

    // getting educational informations 1
    formElements.push(
      <form className="formContainer">
        <fieldset className="headerArea">
          <legend>Filling Guidelines </legend>
        </fieldset>
        <fieldset className="formArea">
          <legend>Education 1 </legend>
          <div>
            <label>Institute Name </label>
            <input
              type="text"
              maxlegth="30"
              defaultValue={props.formData.FormData.education.instituteName1}
              onChange={(e) => {
                props.formData.FormData.education.instituteName1 =
                  e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Course/Field </label>
            <input
              type="text"
              maxlegth="30"
              defaultValue={props.formData.FormData.education.fieldOfStudy1}
              onChange={(e) => {
                props.formData.FormData.education.fieldOfStudy1 =
                  e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Tenure </label>
            <input
              type="text"
              maxlegth="20"
              defaultValue={props.formData.FormData.education.tenure1}
              onChange={(e) => {
                props.formData.FormData.education.tenure1 = e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Grade/Percentage </label>
            <input
              type="text"
              maxlegth="10"
              defaultValue={props.formData.FormData.education.gradePercentage1}
              onChange={(e) => {
                props.formData.FormData.education.gradePercentage1 =
                  e.target.value;
              }}
            ></input>
          </div>
        </fieldset>
      </form>
    );

    // getting educational informations 2
    formElements.push(
      <div className="formContainer">
        <fieldset className="headerArea">
          <legend>Filling Guidelines </legend>
        </fieldset>
        <fieldset className="formArea">
          <legend>Education 2 </legend>
          <div>
            <label>Institute Name </label>
            <input
              type="text"
              maxlegth="30"
              defaultValue={props.formData.FormData.education.instituteName2}
              onChange={(e) => {
                props.formData.FormData.education.instituteName2 =
                  e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Course/Field </label>
            <input
              type="text"
              maxlegth="30"
              defaultValue={props.formData.FormData.education.fieldOfStudy2}
              onChange={(e) => {
                props.formData.FormData.education.fieldOfStudy2 =
                  e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Tenure </label>
            <input
              type="text"
              maxlegth="20"
              defaultValue={props.formData.FormData.education.tenure2}
              onChange={(e) => {
                props.formData.FormData.education.tenure2 = e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label>Grade/Percentage </label>
            <input
              type="text"
              maxlegth="10"
              defaultValue={props.formData.FormData.education.gradePercentage2}
              onChange={(e) => {
                props.formData.FormData.education.gradePercentage2 =
                  e.target.value;
              }}
            ></input>
          </div>
        </fieldset>
      </div>
    );

    // getting the objectives
    formElements.push(
      <form className="formContainer">
        <fieldset className="headerArea">
          <legend>Filling Guidelines </legend>
        </fieldset>
        <fieldset className="formArea">
          <legend>Carrer Objectives </legend>
          <div>
            <label>Carrer Objective</label>
            <textarea
              defaultValue={props.formData.FormData.careerObjective}
              onChange={(e) => {
                props.formData.FormData.careerObjective = e.target.value;
              }}
            ></textarea>
          </div>
        </fieldset>
      </form>
    );

    // getting skills
    // fetching values from all skills
    let skillNum = 0;
    function fetchSkills() {
      let allSkills = document.getElementsByClassName("skills");
      for (let i = 0; i < allSkills.length; i++) {
        allSkills[i].onchange = function (e) {
          props.formData.FormData.skills[i] = e.target.value;
          console.log(props.formData.FormData.skills);
        };
        allSkills[i].defaultValue = props.formData.FormData.skills[i];
      }
    }
    formElements.push(
      <div className="formContainer">
        <fieldset className="headerArea">
          <legend>Filling Guidelines </legend>
        </fieldset>
        <fieldset className="formArea" id="SKILLS">
          <legend>Skills </legend>
          <div style={stylingPageMarker.addNewBtnHolder}>
            <button
              style={stylingPageMarker.addNewBtn}
              onClick={() => {
                // adding elements
                if (skillNum <= 4) {
                  const creation = {
                    interior: `
                    <label>Skill ${skillNum + 1} </label>
                    <input
                      type="text"
                      maxlegth="100"
                      class="skills"
                    ></input>
                  `,
                  };
                  const value = document.createElement("div");
                  value.innerHTML = creation.interior;
                  const parentDiv = document.getElementById("SKILLS");
                  parentDiv.append(value);
                  skillNum++;
                  // storing data from values
                  fetchSkills();
                } else {
                  alert("You have already filled 5 skills");
                }
              }}
            >
              Add New
            </button>
          </div>
        </fieldset>
      </div>
    );

    // getting techStacks
    // fetching values from all skills
    let techNum = 0;
    function fetchTechstacks() {
      let allTechstacks = document.getElementsByClassName("techStacks");
      for (let i = 0; i < allTechstacks.length; i++) {
        allTechstacks[i].onchange = function (e) {
          props.formData.FormData.techStack[i] = e.target.value;
          console.log(props.formData.FormData.techStack);
        };
        allTechstacks[i].defaultValue = props.formData.FormData.techStack[i];
      }
    }
    formElements.push(
      <section className="formContainer" nosubmit="true">
        <fieldset className="headerArea">
          <legend>Filling Guidelines </legend>
        </fieldset>
        <fieldset className="formArea" id="TECHSTACK">
          <legend>Tech Stack </legend>
          <div style={stylingPageMarker.addNewBtnHolder}>
            <button
              style={stylingPageMarker.addNewBtn}
              onClick={() => {
                // adding elements
                const creation = {
                  interior: `
                    <label>Tech Stack ${techNum + 1} </label>
                    <input
                      type="text"
                      maxlegth="100"
                      class="techStacks"
                    ></input>
                  `,
                };
                const value = document.createElement("div");
                value.innerHTML = creation.interior;
                const parentDiv = document.getElementById("TECHSTACK");
                parentDiv.append(value);
                techNum++;
                // storing data from values
                fetchTechstacks();
              }}
            >
              Add New
            </button>
          </div>
        </fieldset>
      </section>
    );

    // getting technicalSkills
    // fetching values from all skills
    let techSkillNum = 0;
    function fetchTechSkills() {
      let allTechSkills = document.getElementsByClassName("techSkills");
      for (let i = 0; i < allTechSkills.length; i++) {
        allTechSkills[i].onchange = function (e) {
          props.formData.FormData.technicalSkills[i] = e.target.value;
          console.log(props.formData.FormData.technicalSkills);
        };
        allTechSkills[i].defaultValue =
          props.formData.FormData.technicalSkills[i];
      }
    }
    formElements.push(
      <div className="formContainer">
        <fieldset className="headerArea">
          <legend>Filling Guidelines </legend>
        </fieldset>
        <fieldset className="formArea" id="TECHSKILLS">
          <legend>Technical Skills </legend>
          <div style={stylingPageMarker.addNewBtnHolder}>
            <button
              style={stylingPageMarker.addNewBtn}
              onClick={() => {
                if (techSkillNum <= 4) {
                  // adding elements
                  const creation = {
                    interior: `
                    <label>Technical Skill ${techSkillNum + 1} </label>
                    <input
                      type="text"
                      maxlegth="100"
                      class="techSkills"
                    ></input>
                  `,
                  };
                  const value = document.createElement("div");
                  value.innerHTML = creation.interior;
                  const parentDiv = document.getElementById("TECHSKILLS");
                  parentDiv.append(value);
                  techSkillNum++;
                  // storing data from values
                  fetchTechSkills();
                } else {
                  alert("You have already filled 5 technical skills.");
                }
              }}
            >
              Add New
            </button>
          </div>
        </fieldset>
      </div>
    );

    // getting experience
    let expNum = 0;
    // fetching values from all experiences
    function fetchExperience() {
      let allExperiences = document.getElementsByClassName("experience");
      let allCompanyNames = document.getElementsByClassName("cname");
      let allJobRoles = document.getElementsByClassName("cpost");
      let allTenures = document.getElementsByClassName("ctenure");
      let allWorkExplanations = document.getElementsByClassName("cwork");

      for (let i = 0; i < allCompanyNames.length; i++) {
        allCompanyNames[i].onchange = function (e) {
          props.formData.FormData.experience.companyName[i] = e.target.value;
          console.log(props.formData.FormData.experience.companyName[i]);
        };
        allCompanyNames[i].defaultValue =
          props.formData.FormData.experience.companyName[i];

        allJobRoles[i].onchange = function (e) {
          props.formData.FormData.experience.jobRole[i] = e.target.value;
          console.log(props.formData.FormData.experience.jobRole[i]);
        };
        allJobRoles[i].defaultValue =
          props.formData.FormData.experience.jobRole[i];

        allTenures[i].onchange = function (e) {
          props.formData.FormData.experience.tenure[i] = e.target.value;
          console.log(props.formData.FormData.experience.tenure[i]);
        };
        allTenures[i].defaultValue =
          props.formData.FormData.experience.tenure[i];

        allWorkExplanations[i].onchange = function (e) {
          props.formData.FormData.experience.explanation[i] = e.target.value;
          console.log(props.formData.FormData.experience.explanation[i]);
        };
        allWorkExplanations[i].value =
          props.formData.FormData.experience.explanation[i];

        console.log(allExperiences[i]);
      }
    }
    formElements.push(
      <section className="formContainer">
        <fieldset className="headerArea">
          <legend>Filling Guidelines </legend>
        </fieldset>
        <fieldset className="formArea" id="EXPERIENCE">
          <legend>Experiences Fields</legend>
          <div style={stylingPageMarker.addNewBtnHolder}>
            <button
              style={stylingPageMarker.addNewBtn}
              onClick={() => {
                if (expNum <= 2) {
                  // adding elements
                  const value = document.createElement("fieldset");
                  value.setAttribute("class", "formArea experience");
                  value.innerHTML = `<legend>Experiences Field ${
                    expNum + 1
                  }</legend>
                    <div>
                      <label>Company name</label>
                      <input
                        type="text"
                        maxlegth="100"
                        class="cname"
                      ></input>
                    </div>
                    <div>
                      <label>Job Position </label>
                      <input
                        type="text"
                        maxlegth="100"
                        class="cpost"
                      ></input>
                    </div>
                    <div>
                      <label>Tenure </label>
                      <input
                        type="text"
                        maxlegth="100"
                        class="ctenure"
                      ></input>
                    </div>
                    <div>
                      <label>Work</label>
                      <textarea
                        class="cwork"
                      ></textarea>
                    </div>`;
                  const parentDiv = document.getElementById("EXPERIENCE");
                  parentDiv.append(value);
                  expNum++;
                  // storing data from values
                  fetchExperience();
                } else {
                  alert("Fill upto a maximum of 3 recent work experiences.");
                }
              }}
            >
              Add New
            </button>
          </div>
        </fieldset>
      </section>
    );

    // getting projects
    // fetching values from all projects
    let proNum = 0;
    function fetchProjects() {
      let allProjects = document.getElementsByClassName("projects");
      let allProjectTitle = document.getElementsByClassName("pTitle");
      let allTechStack = document.getElementsByClassName("pTechStack");
      let allExplanation1 = document.getElementsByClassName("explanation1");
      let allExplanation2 = document.getElementsByClassName("explanation2");
      let allExplanation3 = document.getElementsByClassName("explanation3");

      for (let i = 0; i < allProjects.length; i++) {
        allProjectTitle[i].onchange = function (e) {
          props.formData.FormData.projects.projectTitle[i] = e.target.value;
          console.log(props.formData.FormData.projects.projectTitle[i]);
        };
        allProjectTitle[i].defaultValue =
          props.formData.FormData.projects.projectTitle[i];

        allTechStack[i].onchange = function (e) {
          props.formData.FormData.projects.techStack[i] = e.target.value;
          console.log(props.formData.FormData.projects.techStack[i]);
        };
        allTechStack[i].defaultValue =
          props.formData.FormData.projects.techStack[i];

        allExplanation1[i].onchange = function (e) {
          props.formData.FormData.projects.explanation1[i] = e.target.value;
          console.log(props.formData.FormData.projects.explanation1[i]);
        };
        allExplanation1[i].defaultValue =
          props.formData.FormData.projects.explanation1[i];

        allExplanation2[i].onchange = function (e) {
          props.formData.FormData.projects.explanation2[i] = e.target.value;
          console.log(props.formData.FormData.projects.explanation2[i]);
        };
        allExplanation2[i].defaultValue =
          props.formData.FormData.projects.explanation2[i];

        allExplanation3[i].onchange = function (e) {
          props.formData.FormData.projects.explanation3[i] = e.target.value;
          console.log(props.formData.FormData.projects.explanation3[i]);
        };
        allExplanation3[i].defaultValue =
          props.formData.FormData.projects.explanation3[i];
        console.log(allProjects[i]);
      }
    }
    formElements.push(
      <div className="formContainer">
        <fieldset className="headerArea">
          <legend>Filling Guidelines </legend>
        </fieldset>
        <fieldset className="formArea" id="PROJECTS">
          <legend>Project Fields</legend>
          <div style={stylingPageMarker.addNewBtnHolder}>
            <button
              style={stylingPageMarker.addNewBtn}
              onClick={() => {
                if (proNum <= 4) {
                  // adding elements
                  const value = document.createElement("fieldset");
                  value.setAttribute("class", "formArea projects");
                  value.innerHTML = `<legend>Project Field ${
                    proNum + 1
                  }</legend>
                    <div>
                      <label>Project Title </label>
                      <input
                        type="text"
                        maxlegth="100"
                        defaultValue=" "
                        class="pTitle"
                      ></input>
                    </div>
                    <div>
                      <label>Technologies Used </label>
                      <input
                        type="text"
                        maxlegth="100"
                        defaultValue=" "
                        class="pTechStack"
                      ></input>
                    </div>
                    <div>
                      <label>Explanatory Passage 1</label>
                      <textarea
                        defaultValue=" "
                        class="explanation1"
                      ></textarea>
                    </div>
                    <div>
                      <label>Explanatory Passage 2</label>
                      <textarea
                        defaultValue=" "
                        class="explanation2"
                      ></textarea>
                    </div>
                    <div>
                      <label>Explanatory Passage 3</label>
                      <textarea
                        defaultValue=" "
                        class="explanation3"
                      ></textarea>
                    </div>`;
                  const parentDiv = document.getElementById("PROJECTS");
                  parentDiv.append(value);
                  proNum++;
                  // storing data from values
                  fetchProjects();
                } else {
                  alert("You have filled 5 project details already.");
                }
              }}
            >
              Add New
            </button>
          </div>
        </fieldset>
      </div>
    );

    // getting awards
    // fetching values from all awards
    let awaNum = 0;
    function fetchAwards() {
      let allAwards = document.getElementsByClassName("awards");
      let allAwardTitle = document.getElementsByClassName("aTitle");
      let allAwardMonthAndYear =
        document.getElementsByClassName("aMonthAndYear");
      let allExplanation = document.getElementsByClassName("explanation");

      for (let i = 0; i < allAwards.length; i++) {
        allAwardTitle[i].onchange = function (e) {
          props.formData.FormData.awards.awardTitle[i] = e.target.value;
          console.log(props.formData.FormData.awards.awardTitle[i]);
        };
        allAwardTitle[i].defaultValue =
          props.formData.FormData.awards.awardTitle[i];

        allAwardMonthAndYear[i].onchange = function (e) {
          props.formData.FormData.awards.awardMonthAndYear[i] = e.target.value;
          console.log(props.formData.FormData.awards.awardMonthAndYear[i]);
        };
        allAwardMonthAndYear[i].defaultValue =
          props.formData.FormData.awards.awardMonthAndYear[i];

        allExplanation[i].onchange = function (e) {
          props.formData.FormData.awards.explanation[i] = e.target.value;
          console.log(props.formData.FormData.awards.explanation[i]);
        };
        allExplanation[i].defaultValue =
          props.formData.FormData.awards.explanation[i];

        console.log(allAwards[i]);
      }
    }
    formElements.push(
      <section className="formContainer">
        <fieldset className="headerArea">
          <legend>Filling Guidelines </legend>
        </fieldset>
        <fieldset className="formArea" id="AWARDS">
          <legend>Awards Fields</legend>
          <div style={stylingPageMarker.addNewBtnHolder}>
            <button
              style={stylingPageMarker.addNewBtn}
              onClick={() => {
                // adding elements
                if (awaNum <= 2) {
                  const value = document.createElement("fieldset");
                  value.setAttribute("class", "formArea awards");
                  value.innerHTML = `<legend> Award Field ${awaNum + 1}</legend>
                    <div>
                      <label>Award Title </label>
                      <input
                        type="text"
                        maxlegth="30"
                        defaultValue=" "
                        class="aTitle"
                      ></input>
                    </div>
                    <div>
                      <label>Month/Year</label>
                      <input
                        type="text"
                        maxlegth="20"
                        defaultValue=" "
                        class="aMonthAndYear"
                      ></input>
                    </div>
                    <div>
                      <label>Awarded For</label>
                      <textarea
                        defaultValue=" "
                        class="explanation"
                      ></textarea>
                    </div>`;
                  const parentDiv = document.getElementById("AWARDS");
                  parentDiv.append(value);
                  awaNum++;
                  // storing data from values
                  fetchAwards();
                } else {
                  alert("you have already filled 3 awards.");
                }
              }}
            >
              Add New
            </button>
          </div>
        </fieldset>
      </section>
    );

    // getting certificates
    // fetching values from all certificates
    let cerNum = 0;
    function fetchCertificates() {
      let allCertificates = document.getElementsByClassName("certificate");
      let allCertificateTitle = document.getElementsByClassName("cerTitle");
      let allCertificateMonthAndYear =
        document.getElementsByClassName("cerMonthAndYear");
      let allCertificateExplanation =
        document.getElementsByClassName("explanationCer");

      for (let i = 0; i < allCertificates.length; i++) {
        allCertificateTitle[i].onchange = function (e) {
          props.formData.FormData.certificates.certificatesTitle[i] =
            e.target.value;
          console.log(
            props.formData.FormData.certificates.certificatesTitle[i]
          );
        };
        allCertificateTitle[i].defaultValue =
          props.formData.FormData.certificates.certificatesTitle[i];

        allCertificateMonthAndYear[i].onchange = function (e) {
          props.formData.FormData.certificates.certificatesMonthAndYear[i] =
            e.target.value;
          console.log(
            props.formData.FormData.certificates.certificatesMonthAndYear[i]
          );
        };
        allCertificateMonthAndYear[i].defaultValue =
          props.formData.FormData.certificates.certificatesMonthAndYear[i];

        allCertificateExplanation[i].onchange = function (e) {
          props.formData.FormData.certificates.certificatesexplanation[i] =
            e.target.value;
          console.log(
            props.formData.FormData.certificates.certificatesexplanation[i]
          );
        };
        allCertificateExplanation[i].defaultValue =
          props.formData.FormData.certificates.certificatesexplanation[i];

        console.log(allCertificates[i]);
      }
    }
    formElements.push(
      <div className="formContainer">
        <fieldset className="headerArea">
          <legend>Filling Guidelines </legend>
        </fieldset>
        <fieldset className="formArea" id="CERTIFICATES">
          <legend>Certificates Fields</legend>
          <div style={stylingPageMarker.addNewBtnHolder}>
            <button
              style={stylingPageMarker.addNewBtn}
              onClick={() => {
                // adding elements
                if (cerNum <= 4) {
                  const value = document.createElement("fieldset");
                  value.setAttribute("class", "formArea certificate");
                  value.innerHTML = `<legend> Certificate Field ${
                    cerNum + 1
                  }</legend>
                    <div>
                      <label>Certificate Title </label>
                      <input
                        type="text"
                        maxlegth="30"
                        defaultValue=" "
                        class="cerTitle"
                      ></input>
                    </div>
                    <div>
                      <label>Month/Year</label>
                      <input
                        type="text"
                        maxlegth="20"
                        defaultValue=" "
                        class="cerMonthAndYear"
                      ></input>
                    </div>
                    <div>
                      <label>Certificate Briefing </label>
                      <textarea
                        defaultValue=" "
                        class="explanationCer"
                      ></textarea>
                    </div>`;
                  const parentDiv = document.getElementById("CERTIFICATES");
                  parentDiv.append(value);
                  cerNum++;
                  // storing data from values
                  fetchCertificates();
                } else {
                  alert("You have filled 5 certificates details already.");
                }
              }}
            >
              Add New
            </button>
          </div>
        </fieldset>
      </div>
    );
  }

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
      <FormContainer
        rulesForFormFilling={props.formData.FillingInstructions}
        correspondingForm={props.formData.FormData}
        formElements={formElements[curreLevel]}
        check={props.formData.FormData}
      />
      <div className="ProceedPageButtonContainer">
        <Button
          onClick={btnClickHandler}
          buttonValue={Constants.buttonValues.back}
          className="ProceedPageButtons"
          id="PREVIOUS"
        />
        <Button
          onClick={btnClickHandler}
          buttonValue={Constants.buttonValues.preview}
          className="ProceedPageButtons"
          id="PREVIEW"
        />
      </div>
    </>
  );
}
export default PageMarker;