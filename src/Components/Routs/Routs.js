import React from "react";
import { createBrowserRouter } from "react-router-dom";

// importing all the components for rendering 
import Choices from '../Selector/Choices';
import ResumeTemplates from '../Resume/ResumeTemplates';
import RTemplate1 from '../Resume/Templates/RTemplate1';
import RTemplate2 from '../Resume/Templates/RTemplate2';
import RTemplate3 from '../Resume/Templates/RTemplate3';
import ResumePreview from "../Resume/ResumePreview";

import CoverLetterTemplates from '../CoverLetters/CoverLetterTemplate';
import CLTemplate1 from "../CoverLetters/Templates/CLTemplate1";
import CLTemplate2 from "../CoverLetters/Templates/CLTemplate2";
import CoverLetterPreview from "../CoverLetters/CoverLetterPreview";

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
    path: "/Resume1",
    element: <RTemplate1 />,
  },
  {
    path: "/Resume2",
    element: <RTemplate2 />,
  },
  {
    path: "/Resume3",
    element: <RTemplate3 />,
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
    path: "/CoverLetter1",
    element: <CLTemplate1 />,
  },
  {
    path: "/CoverLetter2",
    element: <CLTemplate2 />,
  },
  {
    path: "/CoverLetterPreview",
    element: <CoverLetterPreview />,
  },
]);

export default routerName;