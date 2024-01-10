"use client";

import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ec4899",
    },
    secondary: {
      main: "#c084fc",
    },
    action: {},
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
        bar1Determinate: {
          borderRadius: 16,
          background: "linear-gradient(to right, #662d8c 20%, #ed1e79 40%, #ed1e79 60%, #662d8c 80%)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
  },
});
