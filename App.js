import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

// import { useFonts, oswald_400Regular } from "@expo-google-font/inter";

import { theme } from "./src/infrastructure/theme";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
