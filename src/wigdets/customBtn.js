import React from "react";
import { Button } from "@mui/material";
import * as customColors from "../../theme/customColors";

const CustomBtn = (props) => {
  const color = customColors[props.color] || customColors.white;
  const background = customColors[props.background] || customColors.lightGreen;

  const jsonStyle = { background, color, borderRadius: "10px", height: "42px" };

  if (props.width) jsonStyle.width = props.width;
  if (props.maxWidth) jsonStyle.maxWidth = props.maxWidth;
  if (props.border) jsonStyle.border = "1px solid black";
  return (
    <Button
      type={props.type ? props.type : ""}
      id={props.id}
      fullWidth={props.fullWidth ? true : false}
      onClick={props.onClick}
      disabled={props.disabled}
      variant="contained"
      style={jsonStyle}
    >
      {props.bold ? <b>{props.txt || props.children}</b> : <span>{props.txt || props.children}</span>}
    </Button>
  );
};

export default CustomBtn;
