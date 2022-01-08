import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Theme from "../../Theme";

function Copyright() {
  return (
    <Typography variant="body2" color="text.footer">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Lyons Law Firm, PLC
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  const theme = Theme();
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: theme.palette.background.footer,
        color: theme.palette.text.footer,
      }}
    >
      <Container
        maxWidth="md"
        sx={{ alignContent: "center", textAlign: "center" }}
      >
        <Typography variant="h5">
          Schedule a free consultation{" "}
          <Link color="inherit" href="tel:5555551212">
            555-555-1212
          </Link>
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
