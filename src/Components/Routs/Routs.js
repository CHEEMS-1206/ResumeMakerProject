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
    path: "/ResumeForm",
    element: <ResumeProceed />,
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
    path: "/CoverLetterForm",
    element: <CoverLetterProceed />,
  },
]);

export default routerName;
