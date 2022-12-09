import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

//color design tokens
export const tokens =(mode) => ({  
  ...(mode === 'dark'
  ? {
    grey: {
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
},
primary: {
    100: "#d0d1d5",
    200: "#a1a4ab",
    300: "#727681",
    400: "#434957",
    500: "#141b2d",
    600: "#101624",
    700: "#0c101b",
    800: "#080b12",
    900: "#040509",
},
greenAccent: {
},
          900: "#dbf5ee",
          800: "#b7ebde",
          700: "#94e2cd",
          600: "#70d8bd",
          500: "#4cceac",
          400: "#3da58a",
          300: "#2e7c67",
          200: "#1e5245",
          100: "#0f2922",
redAccent: {
},
    900: "#f8dcdb",
    800: "#f1b9b7",
    700: "#e99592",
    600: "#e2726e",
    500: "#db4f4a",
    400: "#af3f3b",
    300: "#832f2c",
    200: "#58201e",
    100: "#2c100f",
blueAccent: {
     },
       900: "#e1e2fe",
       800: "#c3c6fd",
       700: "#a4a9fc",
       600: "#868dfb",
       500: "#6870fa",
       400: "#535ac8",
       300: "#3e4396",
       200: "#2a2d64",
       100: "#151632",
   } 
: { grey:{
},
    900: "#e0e0e0",
    800: "#c2c2c2",
    700: "#a3a3a3",
    600: "#858585",
    500: "#666666",
    400: "#525252",
    300: "#3d3d3d",
    200: "#292929",
    100: "#141414",
primary: {
    900: "#d0d1d5",
    800: "#a1a4ab",
    700: "#727681",
    600: "#434957",
    500: "#141b2d",
    400: "#f2f0f0",
    300: "#0c101b",
    200: "#080b12",
    100: "#040509",
},
greenAccent: {
          900: "#dbf5ee",
          800: "#b7ebde",
          700: "#94e2cd",
          600: "#70d8bd",
          500: "#4cceac",
          400: "#3da58a",
          300: "#2e7c67",
          200: "#1e5245",
          100: "#0f2922",
},
redAccent: {
    100: "#2c100f",
    200: "#58201e",
    300: "#832f2c",
    400: "#af3f3b",
    500: "#db4f4a",
    600: "#e2726e",
    700: "#e99592",
    800: "#f1b9b7",
    900: "#f8dcdb",
},
blueAccent: {
       100: "#151632",
       200: "#2a2d64",
       300: "#3e4396",
       400: "#535ac8",
       500: "#6870fa",
       600: "#868dfb",
       700: "#a4a9fc",
       800: "#c3c6fd",
       900: "#e1e2fe",
     },
    }), 
});

// mui theme settings 
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode=== 'dark'
            ? {
                primary: {
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.greenAccent[500],
                },
                neutral: {
                  dark: colors.grey[700],
                  main: colors.grey[500],
                  light: colors.grey[100]
                },
                background: {
                    default: colors.primary[500],
                }
            } : {

            }
            )
        }
    }
}