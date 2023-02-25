import React from "react";
import { createBrowserRouter } from "react-router-dom";

// importing all the components for rendering 
import Choices from '../Selector/Choices';
import ResumeTemplates from '../Resume/ResumeTemplates';
import ResumePreview from "../Resume/ResumePreview";

import CoverLetterTemplates from '../CoverLetters/CoverLetterTemplate';
import CoverLetterPreview from "../CoverLetters/CoverLetterPreview";

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
    element: <AboutMe/>
  }
]);

export default routerName;