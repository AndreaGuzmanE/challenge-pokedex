import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function Loading(props) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress className="prueba" />
    </Box>
  );
}

export default Loading;

/* import React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

const Loading = (props) => {
  return (
    <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack>
  );
}

export default Loading;
*/
