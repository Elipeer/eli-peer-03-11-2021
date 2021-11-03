import React from "react";

const CustomCard = (props) => {
  //   const color = customColors[props.color] || customColors.white;
  return (
    <div
      onClick={props.onClick ? props.onClick : null}
      className={`card-shadow ${props.className ? props.className : ""}
      ${props.bordered ? " green-full-border" : props.borderGray ? " gray-full-border" : "invisible-border"}
      `}
      style={{
        background: props.background ? props.background : "initial",
        width: props.width ? props.width : "initial",
        height: props.height ? props.height : "initial",
        margin: props.preventMargin ? "0" : props.noSideMargin ? "8px 0 " : "8px",
        padding: props.preventPadding ? "0" : "10px"
      }}
    >
      {props.children}
      {props.bottomBorder ? <div className="green-border-bottom" /> : ""}
    </div>
  );
};

export default CustomCard;
