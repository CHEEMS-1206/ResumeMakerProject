import React from "react";
import { createBrowserRouter } from "react-router-dom";

// importing all the components for rendering
import Choices from "../Selector/Choices";

import ResumeTemplates from "../Resume/ResumeTemplates";
import ResumePreview from "../Resume/ResumePreview";
import ResumeProceed from "../Resume/ResumeProceed"

import CoverLetterTemplates from "../CoverLetters/CoverLetterTemplate";
import CoverLetterPreview from "../CoverLetters/CoverLetterPreview";
import CoverLetterProceed from "../CoverLetters/CoverLetterProceed";

import AboutMe from "../AboutMe/AboutMe";

const routerName = createBrowserRouter([
  {
    path: "/",
    element: <Choices />,
  },
  {
    path: "/ResumeTemplates",
    element: <ResumeTemplates />,
  },
  {
    path: "/ResumePreview",
    element: <ResumePreview />,
  },
  {
    path: "/CoverLetterTemplates",
    element: <CoverLetterTemplates />,
  },
  {
    path: "/CoverLetterPreview",
    element: <CoverLetterPreview />,
  },
  {
    path: "AboutMe",
    element: <AboutMe />,
  },
  {
    path: "/ResumeForm",
    element: <ResumeProceed />,
  },
  {
    path: "/CoverLetterForm",
    element: <CoverLetterProceed/>,
  },
]);

export default routerName;
