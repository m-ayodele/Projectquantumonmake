"use client";

import React from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BrandButton } from "./BrandButton";
import successGif from "../../../../public/images/successGif.gif";
import Image from "next/image";



// ── Props ─────────────────────────────────────────────────────────────────────
interface EscalationSentModalProps {
  open: boolean;
  caseReference?: string;
  onBackToClientOverview: () => void;
}

// ── Component ─────────────────────────────────────────────────────────────────
export function EscalationSentModal({
  open,
  caseReference = "CR/0041/25",
  onBackToClientOverview,
}: EscalationSentModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onBackToClientOverview}
      maxWidth={false}
      PaperProps={{
        sx: {
          borderRadius: "16px",
          width: 360,
          maxWidth: "92vw",
          overflow: "hidden",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 4,
          py: 5,
          textAlign: "center",
        }}
      >
        {/* Success gif sits above the check circle for visual depth */}
        <Image
          src={successGif}
          alt=""
          unoptimized
          style={{ objectFit: "contain", marginBottom: -20, pointerEvents: "none" }}
        />

        {/* <GreenCheckCircle /> */}

        <Typography fontWeight={700} sx={{ fontSize: 20, color: "#242424", mb: 1 }}>
          Escalation sent!
        </Typography>

        <Typography sx={{ fontSize: 13, color: "#555555", lineHeight: 1.6, mb: 3.5 }}>
          A new Compliance ref ID{" "}
          <Box component="span" sx={{ fontWeight: 700, color: "#242424" }}>
            {caseReference}
          </Box>{" "}
          has been successfully created for this case.
        </Typography>

        <BrandButton
          onClick={onBackToClientOverview}
          className="!w-full !text-[14px] !rounded-[8px]"
        >
          Back to Client&apos;s Overview
        </BrandButton>
      </Box>
    </Dialog>
  );
}