import React from "react";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";

// importing style for preview page
import "../../StyleSheets/PreviewPageStyle.css";
import "../../StyleSheets/downloadPage.css";

// importing constants
import Constants from "../Utilities/Constants/Constants";

// defining inline style
let downloadPageStyle = {
  container: {
    height: "max-content",
    width: "70%",
    display: "flex",
    margin: "auto",
  },
  body: {
    height: "100%",
    width: "100%",
    margin: "20px 0px",
    display: "flex",
    flexDirection: "column",
    outline: "2px double black",
    padding: "25px 15px 80px 15px",
    textAlign: "justify",
    fontStyle: "italic",
  },
  specialKeywords: {
    fontWeight: "600",
    color: "black",
  },
};
let tempalteStyles = {
  coverLetterTemplate0: {
    step1Div: {
      display: "flex",
      flexDirection: "row",
      borderBottom: "5px solid #2f58cd",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  coverLetterTemplate1: {
    borderBottom: "5px solid #1abc9c",
    marginBottom: "20px",
  },
  coverLetterTemplate2: {
    step1Div: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  resumeTemplate0: {
    // first block styles "personal informations"
    headContainer: {
      display: "flex",
      marginBottom: "18px",
      // name and designation styles
      headDiv: {
        display: "flex",
        width: "65%",
        flexFlow: "column",
        justifyContent: "center",
        paddingLeft: "10%",
      },
      // contact details style
      contactDiv: {
        display: "flex",
        marginLeft: "15%",
        width: "20%",
        flexFlow: "column",
      },
    },
    rootContainer: {
      textAlign: "left",
      display: "flex",
      flexFlow: "row",
      leftHalf: {
        height: "max-content",
        width: "30%",
        marginRight: "1%",
      },
      lineDiv: {
        display: "flex",
        border: "2px solid black",
        marginRight: "1%",
      },
      rightHalf: {
        height: "80px",
        width: "68.5%",
      },
    },
  },
};

//function for creating docs file
function printDocument() {
  const resumeOrCoverLetterData = document.getElementById("DOWNLOADTHISPAGE");
  var opt = {
    margin: 0.2,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };
  html2pdf().from(resumeOrCoverLetterData).set(opt).save();
}

function DownLoadPage(props) {
  // rendering elements inside the download page
  let renderElements = [];

  // if coming from resumeForm page
  if (props.locationPath === "/ResumePreview") {
    // storing all the data for the template and how it will be represented on the screen
    const resumeTemplates = {
      resumeTemplate0: (
        <div id="rt0">
          {/* // first div for having the head and the contact details */}
          <div style={tempalteStyles.resumeTemplate0.headContainer}>
            {/* name and jobrole div */}
            <div style={tempalteStyles.resumeTemplate0.headContainer.headDiv}>
              <h1>{props.content.personalInformation.name}</h1>
              <p>{props.content.personalInformation.jobrole}</p>
            </div>
            {/* contact details div  */}
            <div
              style={tempalteStyles.resumeTemplate0.headContainer.contactDiv}
            >
              <p>{props.content.personalInformation.MobileNum}</p>
              <p>
                <a href={props.content.personalInformation.email}>
                  Email Address
                </a>
              </p>
              <p>{props.content.personalInformation.address}</p>
              <p>
                <a href={props.content.socialLinks.github}>Github</a>
                {" , "}
                <a href={props.content.socialLinks.linkedIn}>LinkedIn</a>
              </p>
            </div>
          </div>
          {/* // second div for having the rest of the body */}
          <div style={tempalteStyles.resumeTemplate0.rootContainer}>
            {/* left half of the resume body  */}
            <div style={tempalteStyles.resumeTemplate0.rootContainer.leftHalf}>
              {/* education div */}
              <div>
                <h4>Education</h4>
                <p>
                  {props.content.education.instituteName1} <br />
                  {props.content.education.fieldOfStudy1} <br />
                  {props.content.education.tenure1} <br />
                  {props.content.education.gradePercentage1}
                </p>
                <p>
                  {props.content.education.instituteName2} <br />
                  {props.content.education.fieldOfStudy2} <br />
                  {props.content.education.tenure2} <br />
                  {props.content.education.gradePercentage2}
                </p>
              </div>
              {/*personal skills div  */}
              <div>
                <h4>Personal Skills</h4>
                <ul>
                  <li>{props.content.skills[0]}</li>
                  <li>{props.content.skills[1]}</li>
                  <li>{props.content.skills[2]}</li>
                  <li>{props.content.skills[3]}</li>
                  <li>{props.content.skills[4]}</li>
                </ul>
              </div>
              {/*technical skills div  */}
              <div>
                <h4>Technical Skills</h4>
                <ul>
                  <li>{props.content.technicalSkills[0]}</li>
                  <li>{props.content.technicalSkills[1]}</li>
                  <li>{props.content.technicalSkills[2]}</li>
                  <li>{props.content.technicalSkills[3]}</li>
                  <li>{props.content.technicalSkills[4]}</li>
                </ul>
              </div>
              {/* awards div  */}
              <div>
                <h4>Awards </h4>
                <p>
                  {props.content.awards.awardTitle[0]} <br />
                  {props.content.awards.awardMonthAndYear[0]} <br />
                  {props.content.awards.explanation[0]} <br />
                </p>
              </div>
              {/* certificates div  */}
              <div>
                <h4>Certificates </h4>
                <p>
                  {props.content.certificates.certificatesTitle[0]} <br />
                  {props.content.certificates.certificatesMonthAndYear[0]}
                  <br />
                  {props.content.certificates.certificatesexplanation[0]} <br />
                </p>
                <br />
              </div>
            </div>
            {/* div for the center line  */}
            <div
              style={tempalteStyles.resumeTemplate0.rootContainer.lineDiv}
            ></div>
            {/* right part of the resume body  */}
            <div style={tempalteStyles.resumeTemplate0.rootContainer.rightHalf}>
              {/* carrer objectives div  */}
              <div>
                <h4>Carrer Objective </h4>
                <p>{props.content.careerObjective}</p>
              </div>
              <br />
              {/* experiences div  */}
              <div>
                <h4>Experiences</h4>
                <h5>
                  {props.content.experience.jobRole[0]} {" || "}
                  {props.content.experience.companyName[0]}
                </h5>
                <ul>
                  <li>{props.content.experience.tenure[0]}</li>
                  <li>{props.content.experience.explanation[0]}</li>
                </ul>
                <br />
                <h5>
                  {props.content.experience.jobRole[1]} {" || "}
                  {props.content.experience.companyName[1]}
                </h5>
                <ul>
                  <li>{props.content.experience.tenure[1]}</li>
                  <li>{props.content.experience.explanation[1]}</li>
                </ul>
              </div>
              <br />
              {/* projects div  */}
              <div>
                <h4>Projects </h4>
                <h5>{props.content.projects.projectTitle[0]}</h5>
                <p>{props.content.projects.techStack[0]}</p>
                <ul>
                  <li>{props.content.projects.explanation1[0]}</li>
                  <li>{props.content.projects.explanation2[0]}</li>
                  <li>{props.content.projects.explanation3[0]}</li>
                </ul>
                <br />
                <h5>{props.content.projects.projectTitle[0]}</h5>
                <p>{props.content.projects.techStack[0]}</p>
                <ul>
                  <li>{props.content.projects.explanation1[0]}</li>
                  <li>{props.content.projects.explanation2[0]}</li>
                  <li>{props.content.projects.explanation3[0]}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    };
    if (Constants.selectedTemplate.id === "image0") {
      renderElements.push(resumeTemplates.resumeTemplate0);
    } else if (Constants.selectedTemplate.id === "image1") {
      console.log("image1");
      renderElements.push(
        <div>
          <div>
            <p>{props.content.personalInformation.name}</p>
            <p>{props.content.personalInformation.jobrole}</p>
            <p>{props.content.personalInformation.email}</p>
            <p>{props.content.personalInformation.MobileNum}</p>
            <p>{props.content.personalInformation.address}</p>
            <br />
          </div>
          <div>
            <p>{props.content.socialLinks.linkedIn}</p>
            <p>{props.content.socialLinks.github}</p>
            <p>{props.content.socialLinks.socialLinks1}</p>
            <p>{props.content.socialLinks.socialLinks2}</p>
            <p>{props.content.socialLinks.socialLinks3}</p>
            <br />
          </div>
          <div>
            <p>{props.content.education.instituteName1}</p>
            <p>{props.content.education.fieldOfStudy1}</p>
            <p>{props.content.education.tenure1}</p>
            <p>{props.content.education.gradePercentage1}</p>
            <br />
          </div>
          <div>
            <p>{props.content.education.instituteName2}</p>
            <p>{props.content.education.fieldOfStudy2}</p>
            <p>{props.content.education.tenure2}</p>
            <p>{props.content.education.gradePercentage2}</p>
            <br />
          </div>
        </div>
      );
    } else if (Constants.selectedTemplate.id === "image2") {
      console.log("image2");
      renderElements.push(
        <div>
          <p> kaka {props.content.personalInformation.name}</p>
        </div>
      );
    }
  }

  // if coming from coverLetterForm page
  else if (props.locationPath === "/CoverLetterPreview") {
    // storing all the data for the template and how it will be represented on the screen
    const coverLetterTemplates = {
      coverLetterTemplate0: (
        <div id="clt0">
          {/* // step1 rendered */}
          <div
            className="sendersDetailsBlock"
            style={tempalteStyles.coverLetterTemplate0.step1Div}
          >
            <div>
              <h2 style={{ color: "#2f58cd", fontSize: "36px" }}>
                {props.content.step1.senderName}
              </h2>
              <p style={downloadPageStyle.specialKeywords}>
                {props.content.step1.senderDesignation}
              </p>
              <br />
            </div>
            <div style={downloadPageStyle.specialKeywords}>
              <p>{props.content.step1.senderMobileNum}</p>
              <p>{props.content.step1.senderEmail}</p>
              <p>{props.content.step1.senderAddress}</p>
              <a href={props.content.step1.senderLinkedIn}>LinkedIn</a>
              <br />
            </div>
          </div>
          {/* // step2 rendered */}
          <div className="receiversDetailsBlock">
            <div style={downloadPageStyle.specialKeywords}>
              <br />
              <p>{props.content.step2.date}</p>
              <br />
              <p>{props.content.step2.receipentName}</p>
              <p>{props.content.step2.receipentDesignation}</p>
              <p>{props.content.step2.receipentAddress}</p>
              <p>{props.content.step2.receipentMobileNum}</p>
              <p>{props.content.step2.receipentEmail}</p>
              <br />
            </div>
          </div>
          {/* // step3 rendered */}
          <div>
            <div>
              <p style={downloadPageStyle.specialKeywords}>
                {props.content.step3.salutation}
              </p>
              <br />
              <p>{props.content.step3.introductoryPassage}</p>
              <br />
            </div>
          </div>
          {/* // step4 rendered */}
          <div>
            <div>
              <p>{props.content.step4.body1}</p>
              <br />
              <p>&#x2022; {props.content.step4.experienceAndProjects}</p>
              <br />
              <p>{props.content.step4.body2}</p>
              <br />
            </div>
          </div>
          {/* // step5 rendered */}
          <div>
            <div>
              <p>{props.content.step5.conclusivePassages}</p>
              <br />
              <p style={downloadPageStyle.specialKeywords}>
                {props.content.step5.complimentaryEndKeyword}
              </p>
              <p style={downloadPageStyle.specialKeywords}>
                {props.content.step1.senderName}
              </p>
            </div>
          </div>
        </div>
      ),
      coverLetterTemplate1: (
        <div id="clt1">
          {/* // step1 rendered */}
          <div
            className="sendersDetailsBlock"
            style={tempalteStyles.coverLetterTemplate1}
          >
            <h2
              style={{
                color: "#1abc9c",
                fontSize: "32px",
                marginBottom: "10px",
              }}
            >
              {props.content.step1.senderName}
            </h2>
            <p style={downloadPageStyle.specialKeywords}>
              {props.content.step1.senderDesignation}
              {" | "}
              {props.content.step1.senderMobileNum}
              {" | "}
              {props.content.step1.senderEmail}
              {" | "}
              {props.content.step1.senderAddress}
              {" | "}
              <a href={props.content.step1.senderLinkedIn}>LinkedIn</a>
            </p>
            <br />
          </div>
          {/* )// step2 rendered */}
          <div
            style={downloadPageStyle.specialKeywords}
            className="receiversDetailsBlock"
          >
            <p>{props.content.step2.date}</p>
            <br />
            <p>{props.content.step2.receipentName}</p>
            <p>{props.content.step2.receipentDesignation}</p>
            <p>{props.content.step2.receipentAddress}</p>
            <p>{props.content.step2.receipentMobileNum}</p>
            <p>{props.content.step2.receipentEmail}</p>
            <br />
          </div>
          {/* // step3 rendered */}
          <div>
            <p style={downloadPageStyle.specialKeywords}>
              {props.content.step3.salutation}
            </p>
            <br />
            <p>{props.content.step3.introductoryPassage}</p>
            <br />
          </div>
          {/* // step4 rendered */}
          <div>
            <p>{props.content.step4.body1}</p>
            <br />
            <p>{props.content.step4.experienceAndProjects}</p>
            <br />
            <p>{props.content.step4.body2}</p>
            <br />
          </div>
          {/* // step5 rendered */}
          <div>
            <p>{props.content.step5.conclusivePassages}</p>
            <br />
            <p style={downloadPageStyle.specialKeywords}>
              {props.content.step5.complimentaryEndKeyword}
            </p>
            <p style={downloadPageStyle.specialKeywords}>
              {props.content.step1.senderName}
            </p>
          </div>
        </div>
      ),
      coverLetterTemplate2: (
        <div id="clt2">
          {/* // step1 rendered */}
          <div
            className="sendersDetailsBlock"
            style={tempalteStyles.coverLetterTemplate2.step1Div}
          >
            <div style={downloadPageStyle.specialKeywords}>
              <h2 style={{ color: "crimson", fontSize: "32px" }}>
                {props.content.step1.senderName}
              </h2>
              <p>{props.content.step1.senderDesignation}</p>
              <br />
              <br />
              <p style={{ fontWeight: "100" }}>To,</p>
              <br />
              <p>{props.content.step2.receipentName}</p>
              <p>{props.content.step2.receipentDesignation}</p>
              <p>{props.content.step2.receipentAddress}</p>
              <p>{props.content.step2.receipentMobileNum}</p>
              <p>{props.content.step2.receipentEmail}</p>
              <br />
            </div>
            <div style={downloadPageStyle.specialKeywords}>
              <p>{props.content.step1.senderMobileNum}</p>
              <p>{props.content.step1.senderEmail}</p>
              <p>{props.content.step1.senderAddress}</p>
              <a href={props.content.step1.senderLinkedIn}>LinkedIn</a>
              <br />
              <p style={{ textAlign: "right", margin: "30px" }}>
                {props.content.step2.date}
              </p>
            </div>
          </div>
          {/* // step2 rendered */}
          <div className="receiversDetailsBlock">
            <p style={downloadPageStyle.specialKeywords}>
              {props.content.step3.salutation}
            </p>
            <br />
            <p>{props.content.step3.introductoryPassage}</p>
            <br />
          </div>
          {/* // step3 rendered */}
          <div>
            <p>{props.content.step4.body1}</p>
            <br />
            <p>&#9675; {props.content.step4.experienceAndProjects}</p>
            <br />
            <p>{props.content.step4.body2}</p>
            <br />
          </div>
          {/* // step4 rendered */}
          <div>
            <p>{props.content.step5.conclusivePassages}</p>
            <br />
            <p style={downloadPageStyle.specialKeywords}>
              {props.content.step5.complimentaryEndKeyword}
            </p>
            <p style={downloadPageStyle.specialKeywords}>
              {props.content.step1.senderName}
            </p>
          </div>
        </div>
      ),
    };
    if (Constants.selectedTemplate.id === "image0") {
      renderElements.push(coverLetterTemplates.coverLetterTemplate0);
    } else if (Constants.selectedTemplate.id === "image1") {
      renderElements.push(coverLetterTemplates.coverLetterTemplate1);
    } else if (Constants.selectedTemplate.id === "image2") {
      renderElements.push(coverLetterTemplates.coverLetterTemplate2);
    }
  }
  return (
    <>
      <div style={downloadPageStyle.container}>
        <div id="DOWNLOADTHISPAGE" style={downloadPageStyle.body}>
          {renderElements}
        </div>
      </div>
    </>
  );
}
export { printDocument };
export default DownLoadPage;
