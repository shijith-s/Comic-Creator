import { Alert, Snackbar } from "@mui/material";
import React from "react";
const DURATION = 3000;

function CustomAlert({ open, handleClose, message, severity }) {
  return (
    <Snackbar open={open} autoHideDuration={DURATION} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default CustomAlert;
