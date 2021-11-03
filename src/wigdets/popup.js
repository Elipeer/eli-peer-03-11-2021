import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const Popup = (props) => {
  return (
    <div>
      <Dialog open={props.isOpen} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle className="success-color">{props.title}</DialogTitle>
        <DialogContent>{props.children}</DialogContent>
        <DialogActions>
          <Button onClick={props.closePopup} color="primary">
            Cancel and close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Popup;
