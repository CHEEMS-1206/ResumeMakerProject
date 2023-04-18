import React from "react";

// importing styles
import "../../StyleSheets/ProceedPageStyle.css";

// importing constants
import Constants from "../Utilities/Constants/Constants";

// importing components
import Header from "../CommonComponents/Header";
import Footer from "../CommonComponents/Footer";
import PageMarker from "../CommonComponents/PageMarker";

// number of steps
let numOfClicks = 5;

// object for data for all form on the formConatiner page
let coverLetterFormData = {
  FillingInstructions: {
    step1: {},
    step2: {},
    step3: {},
    step4: {},
    step5: {},
  },
  FormData: {
    step1: {
      senderName: "",
      senderDesignation: "",
      senderEmail: "",
      senderMobileNum: "",
      senderLinkedIn: "",
      senderAddress: "",
    },
    step2: {
      date: "",
      receipentName: "",
      receipentDesignation: "",
      receipentEmail: "",
      receipentMobileNum: "",
      receipentAddressLine: [],
    },
    step3: {
      genderSender: "Male",
      genderReceiver: "Male",
      salutation: "",
      introductoryPassage: "",
    },
    step4: {
      body1: "",
      experienceAndProjects: "",
      body2: "",
    },
    step5: {
      conclusivePassages: "",
      complimentaryEndKeyword: "",
    },
  },
};

function CoverLetterProceed(props) {
  return (
    <>
      <Header
        className="header"
        headerValue={Constants.selectedTemplate.imageSubtitle}
      />
      <div className="proceedPageContainer">
        <PageMarker
          locationPath={"/CoverLetterForm"}
          numOfSteps={numOfClicks}
          numOfLevels={numOfClicks - 1}
          formData={coverLetterFormData}
        />
      </div>
      <Footer
        className="footer"
        footerValue={Constants.footerValues.footer + " " + Constants.creator}
      />
    </>
  );
}

export default CoverLetterProceed;
export { coverLetterFormData };