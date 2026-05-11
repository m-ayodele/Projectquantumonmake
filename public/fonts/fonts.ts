import localFont from "next/font/local";

export const leadwayFont = localFont({
  src: [
    {
      path: "./LeadwayHeavy-Regular.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./LeadwayHeavyItalic-Italic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./LeadwayBlack-Regular.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./LeadwayBold-Regular.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./LeadwayBoldItalic-Italic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./LeadwayBook.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./LeadwayBookItalic-Italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./LeadwayRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./LeadwayRegularItalic-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./LeadwayThin-Regular.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./LeadwayThinItalic-Italic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./LeadwayLight-Regular.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./LeadwayLightItalic-Italic.otf",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-leadway", // exposes CSS variable
  display: "swap",
});
