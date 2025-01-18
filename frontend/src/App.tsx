import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";
import { Main } from "./components/Main";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Todo App
            </Typography>
            <Button
              sx={{ bgcolor: "#74c7ec", color: "black" }}
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                setCount((v) => v + 1);
              }}
              onContextMenu={(e) => {
                e.preventDefault();
                setCount((v) => v - 1);
              }}
            >
              Water counter: {count}
            </Button>
          </Toolbar>
        </AppBar>
        <Main />
      </Box>
    </>
  );
}
