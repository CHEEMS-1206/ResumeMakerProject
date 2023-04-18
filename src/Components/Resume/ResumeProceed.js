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
let numOfClicks = 12;

// object for data for all form on the formConatiner page
let resumeFormData = {
  FillingInstructions: {
    step1: {},
    step2: {},
    step3: {},
    step4: {},
    step5: {},
  },
  FormData: {
    personalInformation: {
      name: "Priyanshu Singh",
      jobrole: "Software Development Engineer",
      email: "Priyanshusingh9291@gmail.com",
      MobileNum: "8448783842",
      address: "New Delhi, India",
    },
    socialLinks: {
      linkedIn: "https://www.linkedin.com/in/priyanshu-singh-5a74a6211/",
      gitHub: "https://github.com/CHEEMS-1206",
      socialLinks1: "",
      socialLinks2: "",
      socialLinks3: "",
    },
    education: {
      instituteName1: "Maharaja Surajmal Institute of Technology",
      fieldOfStudy1: "B-tech ECE",
      gradePercentage1: "9.32 GPA",
      tenure1: "Nov/2020 - Aug/2024",
      instituteName2: "Govt Boys Sr Sec School",
      fieldOfStudy2: "Sr Sec Education",
      gradePercentage2: "82.2 %",
      tenure2: "Sep/2018 - Mar/2020",
    },
    skills: [
      "Serious towards my works.",
      "Opportunity seeker ",
      "Hardworking and deligent",
      "Professionalism and perfectness in workstyles.",
      "Morally and ethically strong.",
      "",
    ],
    techStack: [
      "Html",
      "Css",
      "Javascript",
      "React",
      "MongoDB",
      "Aws",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    technicalSkills: [
      "Full Stack Web Developer",
      "Coding problems solving using DSA.",
      "Ai and Ml integration engineer",
      "Database analysis and optimisation",
      "Operating software expert.",
      "",
    ],
    careerObjective: "",
    experience: {
      companyName: ["Bell and T Associates", "Larsen And Turbo", "", ""],
      jobRole: ["Senior Software Developer", "Junior Business analyst", "", ""],
      tenure: ["Aug/2020 - Apr/2023", "Aug/2020 - Apr/2023", "", ""],
      explanation: [
        "Lorem Ipsum is simply dummy text of the printing ",
        "Lorem Ipsum is simply dummy text of the printing ",
        "",
        "",
      ],
    },
    projects: {
      projectTitle: [
        "Resume - Cover Letter Maker",
        "Rhochambeau",
        "Quiz App",
        "",
        "",
      ],
      techStack: [
        "React, Javascript",
        "Html,Css,JavaScript",
        "React MongodB",
        "",
        "",
      ],
      explanation1: [
        "Lorem Ipsum is simply dummy text of the printing ",
        "Lorem Ipsum is simply dummy text of the printing ",
        "Lorem Ipsum is simply dummy text of the printing ",
        "Lorem Ipsum is simply dummy text of the printing ",
        "",
      ],
      explanation2: [
        "Lorem Ipsum is simply dummy text of the printing ",
        "Lorem Ipsum is simply dummy text of the printing ",
        "Lorem Ipsum is simply dummy text of the printing ",
        "Lorem Ipsum is simply dummy text of the printing ",
        "",
      ],
      explanation3: [
        "Lorem Ipsum is simply dummy text of the printing ",
        "Lorem Ipsum is simply dummy text of the printing ",
        "Lorem Ipsum is simply dummy text of the printing ",
        "Lorem Ipsum is simply dummy text of the printing ",
        "",
      ],
    },
    awards: {
      awardTitle: [
        "Award of Excellence",
        "Best Performer Of the Year",
        "",
        "",
        "",
      ],
      explanation: [
        "Lorem Ipsum is simply dummy text of the printing ",
        "Lorem Ipsum is simply dummy text of the printing ",
        "",
        "",
        "",
      ],
      awardMonthAndYear: ["Nov/2021", "Nov/2021", "", "", ""],
    },
    certificates: {
      certificatesTitle: [
        "Cloud Computing",
        "Amazon AWS",
        "Python - AI, ML",
        "",
        "",
        "",
      ],
      certificatesexplanation: [
        "Lorem Ipsum is simply dummy text of the printing",
        "Lorem Ipsum is simply dummy text of the printing",
        "Lorem Ipsum is simply dummy text of the printing",
        "",
        "",
        "",
      ],
      certificatesMonthAndYear: [
        "Nov/2020",
        "Nov/2020",
        "Nov/2020",
        "",
        "",
        "",
      ],
    },
  },
};

function ResumeProceed() {
  return (
    <>
      <Header
        className="header"
        headerValue={Constants.selectedTemplate.imageSubtitle}
      />
      <div className="proceedPageContainer">
        <PageMarker
          locationPath={"/ResumeForm"}
          numOfSteps={numOfClicks}
          numOfLevels={numOfClicks - 1}
          formData={resumeFormData}
        />
      </div>
      <Footer
        className="footer"
        footerValue={Constants.footerValues.footer + " " + Constants.creator}
      />
    </>
  );
}

export default ResumeProceed;
export { resumeFormData };