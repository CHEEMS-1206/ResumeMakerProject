import React from "react";

// importing styles
import '../../StyleSheets/ProceedPageStyle.css'

// importing constants
import Constants from "../Utilities/Constants/Constants";

// importing components
import Header from "../CommonComponents/Header"
import Footer from "../CommonComponents/Footer";
import PageMarker from "../CommonComponents/PageMarker";

let numOfClicks = 9;

function ResumeProceed() {
  return (
    <>
      <Header
        className="header"
        headerValue={Constants.selectedTemplate.imageSubtitle}
      />
      <div className="proceedPageContainer">
        <PageMarker numOfSteps={numOfClicks} numOfLevels={numOfClicks - 1} />
      </div>
      <Footer
        className="footer"
        footerValue={Constants.footerValues.footer + " " + Constants.creator}
      />
    </>
  );
}

export default ResumeProceed;
