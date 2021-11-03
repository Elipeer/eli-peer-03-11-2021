import { createTheme } from "@mui/material";
import * as customColors from "./customColors";

const theme = createTheme({
  palette: {
    primary: {
      main: customColors.lightBlue
    },
    // secondary: {
    //   main: customColors.black
    // },
    text: {
      primary: customColors.black
      // secondary: customColors.black
    },
    action: {
      active: customColors.gray,
      disabled: customColors.gray
    },
    cssInputLabel: {
      color: "#d3d3d3"
    }
  }
});

export default theme;
