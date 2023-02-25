import React from "react";

// importiong components
import MainFrame from "../CommonComponents/MainFrame";

//importing the rseume template images
import coverLetter1 from "../Images/coverLetterTemplates/coverLetter1.webp";
import coverLetter2 from "../Images/coverLetterTemplates/coverLetter2.jpg";
import coverLetter3 from "../Images/coverLetterTemplates/coverLetter3.jpg";
import Constants from "../Utilities/Constants/Constants";

// array of images and titles for every resume template
const coverLetterDetails = {
  imageSrc: [coverLetter1, coverLetter2, coverLetter3],
  imageSubTitle: ["The Rookie", "The Samurai", "Talented Perzi"],
};

function CoverLetterTemplates(){
    return (
      <MainFrame
        locationPath={"/CoverLetterTemplates"}
        mainFrameDetails={coverLetterDetails}
        headerValue={Constants.headerValues.coverLetterHeader}
        footerValue={Constants.footerValues.footer}
      />
    );
}

export default CoverLetterTemplates