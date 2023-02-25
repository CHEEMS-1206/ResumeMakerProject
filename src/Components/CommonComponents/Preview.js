import React from "react";

const previewStyle = {
  imageBorder: {
    border: "5px solid #2f58cd",
  },
};

function Preview(props) {
  return (
      <img alt="templateImage" src={props.previewSrc} className={props.className} style={previewStyle.imageBorder}/>
  );
}

export default Preview;
