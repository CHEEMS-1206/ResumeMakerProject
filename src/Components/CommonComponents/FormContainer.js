import React from "react";

//importing styles
import "../../StyleSheets/formRelatedStyles.css";
function FormContainer(props) {
  // console.log(props.check);
  return <>{props.formElements}</>;
}
export default FormContainer;