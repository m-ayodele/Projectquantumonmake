"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import ButtonBase from "@mui/material/ButtonBase";
import { KeyAngleDown } from "./icons";

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionSection({
  title,
  children,
  defaultOpen = true,
}: AccordionSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Box
      sx={{
        border: "1px solid #E5E7EB",
        borderBottom: "1px solid #6B7280",
        overflow: "hidden",
        mb: 0.5,
      }}
    >
      <ButtonBase
        onClick={() => setOpen((v) => !v)}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2.5,
          py: 1.2,
          textAlign: "left",
          backgroundColor: "#FFFFFF",

          "&:hover": { bgcolor: "rgba(0,0,0,0.06)" },
        }}
      >
        <Typography sx={{ fontSize: 13, fontWeight: 800, color: "#242424" }}>
          {title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            transition: "transform 0.2s ease",
            transform: open ? "rotate(0deg)" : "rotate(180deg)",
          }}
        >
          <KeyAngleDown />
        </Box>
      </ButtonBase>

      <Collapse in={open} unmountOnExit>
        <Box sx={{ px: 2.5, pb: 2.5 }}>{children}</Box>
      </Collapse>
    </Box>
  );
}
