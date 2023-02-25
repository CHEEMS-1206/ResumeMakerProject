import React from "react";

// styling for the current component 
const styleForTemplateImageComponent = {
  thisDiv: {
    display: "flex",
    width: "max-content",
    height: "max-content",
    flexDirection: "column",
  },
  thisH4: {
    textAlign: "center",
    color: "#2f58cd",
    fontSize: "18px",
    marginBottom: "12px",
  },
  templateImage: {
    height: "250px",
    width: "190px",
    margin: "10px 30px",
    border: "3px solid #2f58cd",
  },
  selected: {
    border: "5px solid crimson",
  },
};

function TemplateImage(props) {
  return (
    <div style={styleForTemplateImageComponent.thisDiv}>
      <h4 style={styleForTemplateImageComponent.thisH4}>
        {props.imageSubtitle}
      </h4>
      <img
        alt={props.imageSubtitle}
        style={styleForTemplateImageComponent.templateImage}
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        src={props.imageSrc}
        id={props.id}
        className={props.className}
      />
    </div>
  );
}

export default TemplateImage;
