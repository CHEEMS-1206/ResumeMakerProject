import React from "react";
import MainFrame from "../CommonComponents/MainFrame";

//importing the rseume template images
import resume1 from "../Images/resumeTemplates/resume1.png";
import resume2 from "../Images/resumeTemplates/resume2.png";
import resume3 from "../Images/resumeTemplates/resume3.jpg";
import Constants from "../Utilities/Constants/Constants";

// object for passing down as props
const resumeDetails = {
  imageSrc: [resume1,resume2,resume3],
  imageSubTitle: ["The Rookie", "Curriculum Vitae", "Experienced Resume"]
};

function ResumeTemplates() {
  return (
    <MainFrame
      locationPath={"/ResumeTemplates"}
      mainFrameDetails={resumeDetails}
      headerValue={Constants.headerValues.resumePageHeader}
      footerValue={Constants.footerValues.footer}
    />
  );
}

export default ResumeTemplates;
