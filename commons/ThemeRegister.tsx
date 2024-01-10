"use client";

import { theme } from "@/share/themes/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

function ThemeRegister({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <CssBaseline />
    </ThemeProvider>
  );
}

export default ThemeRegister;
