import { theme } from "antd";

export const darkTheme = {
  token: {
    colorPrimaryBrand: "#C6C7F8",
    colorPrimaryLight: "rgba(255, 255, 255, 0.05)",
    colorPrimary: "#FFF", // Primary/Purple (light for dark mode)
    colorBgBase: "#1C1C1C", // Black 100%
    colorBgLayout: "#23262C", // Darker layout bg
    searchColor: "rgba(255, 255, 255, 0.1)",
    colorBgContainer: "#23262C",

    colorInfo: "#59A8D4",
    colorSuccess: "#4AA785",
    colorWarning: "#FFC555",
    colorError: "#8A8CD9",

    colorSecondary: "#A8C5DA",
    colorMint: "#BAEDBD",
    colorIndigo: "#95A4FC",
    colorBlueLight: "#B1E3FF",

    borderRightColor: "rgba(255, 255, 255, 0.10)",
    borderWidthBase: "1px",

    layoutFixedWidth: "13.25rem",
    paddingXSmall: ".25rem",
    paddingXSmall2: ".5rem",
    paddingXSmall3: ".75rem",
    paddingSmall: "1rem",
    paddingLarge: "1.25rem",
    padding15: "1.5rem",
    paddingXL: "1.75rem",

    gapXs: "0.25rem",
    gap: "0.5rem",
    gapLarge: "1rem",
    gapXlarge: "1.5rem",

    radiusSmall: ".5rem",
    radius: "1rem",

    card1Color: "#E3F5FF",
    card2Color: "rgba(255, 255, 255, 0.05)",
    card3Color: "#E5ECF6",

    chartBackground: "rgba(255, 255, 255, 0.05)",
    cityFill: "rgba(198, 199, 248, 1)",
    cityStroke: "rgba(255, 255, 255, 1)",
    mapColor: "#1C1C1C",
    tableActionsBarColor: "rgba(255, 255, 255, 0.05)",
    searchBackground: "rgba(28, 28, 28, 0.4)",
    checkBoxTickColor: "black",

    black05: "rgba(255, 255, 255, 0.05)",
    black10: "rgba(255, 255, 255, 0.10)",
    black15: "rgba(255, 255, 255, 0.15)",
    black20: "rgba(255, 255, 255, 0.20)",
    black25: "rgba(255, 255, 255, 0.25)",
    black30: "rgba(255, 255, 255, 0.30)",
    black35: "rgba(255, 255, 255, 0.35)",
    black40: "rgba(255, 255, 255, 0.40)",
    black45: "rgba(255, 255, 255, 0.45)",
    black50: "rgba(255, 255, 255, 0.50)",
    black55: "rgba(255, 255, 255, 0.55)",
    black60: "rgba(255, 255, 255, 0.60)",
    black65: "rgba(255, 255, 255, 0.65)",
    black70: "rgba(255, 255, 255, 0.70)",
    black75: "rgba(255, 255, 255, 0.75)",
    black80: "rgba(255, 255, 255, 0.80)",
    black85: "rgba(255, 255, 255, 0.85)",
    black90: "rgba(255, 255, 255, 0.90)",
    black95: "rgba(255, 255, 255, 0.95)",
    black100: "#FFFFFF",
  },
  components: {
    Typography: {
      fontSize: 14,
      fontSizeHeading1: 32,
      fontSizeHeading2: 28,
      fontWeightStrong: 400,
      colorText: "#FFFFFF",
      colorTextSecondary: "white",
      // ...other tokens
    },
    Timeline: {
      tailColor: "rgba(255, 255, 255, 0.10)",
      itemPaddingBottom: 10,
    },
  },
  algorithm: theme.darkAlgorithm, // Enable dark mode algorithm
};
