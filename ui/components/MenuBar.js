import React from "react";
import { AppBar, Box, Container, IconButton } from "@mui/material";
import { Home } from "@mui/icons-material";

export default function MenuBar() {
  return (
    <AppBar position="sticky">
        <Container maxWidth="xl" >
        <Box>
          <IconButton edge="start" color="inherit">
            <Home/>
            
          </IconButton>
        </Box>
    </Container>
      </AppBar>
  );
}
