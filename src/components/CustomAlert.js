import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { isMobileDevice } from "../utils/general";

const DURATION = 2000;

function CustomAlert({ open, handleClose, message, severity }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={DURATION}
      onClose={handleClose}
      anchorOrigin={{
        vertical: isMobileDevice() ? "top" : "bottom",
        horizontal: isMobileDevice() ? "right" : "left",
      }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default CustomAlert;
