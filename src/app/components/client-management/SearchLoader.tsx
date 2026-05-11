"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface SearchLoaderProps {
  label?: string;
  clientType?: "individual" | "corporate" | "intermediaries" | "insurance" | null;
  intermediarySubType?: "agent" | "broker" | null;
  insuranceSubType?: "local" | "foreign" | null;
}

export function SearchLoader({ label, clientType, intermediarySubType, insuranceSubType }: SearchLoaderProps) {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setDots((n) => (n + 1) % 4), 450);
    return () => clearInterval(id);
  }, []);

  const loaderLabel =
    label ??
    (clientType === "insurance"
      ? "Searching for Insurance Company"
      : clientType === "intermediaries"
        ? intermediarySubType === "broker"
          ? "Searching for Brokers"
          : "Searching for Agent"
        : "Extracting information");

  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(235, 235, 235, 0.92)",
        backdropFilter: "blur(6px)",
      }}
    >
      <Box
        sx={{
          width: 64,
          height: 64,
          mb: 3,
          "@keyframes loaderSpin": {
            from: { transform: "rotate(0deg)" },
            to: { transform: "rotate(360deg)" },
          },
          animation: "loaderSpin 1s linear infinite",
        }}
      >
        <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#loader_ring_clip)">
            <g transform="matrix(0 0.024 -0.024 0 24 24)">
              <foreignObject x="-1020" y="-1020" width="2040" height="2040">
                <div
                  style={{
                    background: "conic-gradient(from 90deg, rgba(232,97,31,1) 0deg, rgba(232,97,31,1) 63.243deg, rgba(255,255,255,0) 360deg)",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </foreignObject>
            </g>
          </g>
          <circle cx="24.2406" cy="44.3998" r="3.6" fill="#E8611F" />
          <defs>
            <clipPath id="loader_ring_clip">
              <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM7.17664 24C7.17664 33.2913 14.7087 40.8234 24 40.8234C33.2913 40.8234 40.8234 33.2913 40.8234 24C40.8234 14.7087 33.2913 7.17664 24 7.17664C14.7087 7.17664 7.17664 14.7087 7.17664 24Z" />
            </clipPath>
          </defs>
        </svg>
      </Box>

      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 600,
          color: "#1C1C1C",
          letterSpacing: 0.3,
          textAlign: "center",
        }}
      >
        {loaderLabel}
        <Box component="span" sx={{ display: "inline-block", width: "1.8ch", textAlign: "left" }}>
          {".".repeat(dots)}
        </Box>
      </Typography>
    </Box>
  );
}