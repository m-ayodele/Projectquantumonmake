"use client";

import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BrandButton } from "./BrandButton";
import successGif from "../../../../public/images/successGif.gif";
import Image from "next/image";

// ── Green check circle ────────────────────────────────────────────────────────
function GreenCheckCircle() {
  return (
    <Box
      sx={{
        width: 64,
        height: 64,
        borderRadius: "50%",
        bgcolor: "#16A34A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2.5,
        boxShadow: "0 4px 16px rgba(22,163,74,0.28)",
      }}
    >
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
          d="M6 15.5L11.5 21L24 9"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────
interface RequestSentSuccessModalProps {
  open: boolean;
  onContinue: () => void;
}

// ── Component ─────────────────────────────────────────────────────────────────
export function RequestSentSuccessModal({
  open,
  onContinue,
}: RequestSentSuccessModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onContinue}
      maxWidth={false}
      PaperProps={{
        sx: {
          borderRadius: "16px",
          width: 380,
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
        <Image
          src={successGif}
          alt="Success"
          // width={100}
          // height={100}
          unoptimized
          style={{ objectFit: "contain", marginBottom: -38 }}
        />

        <Typography
          fontWeight={700}
          sx={{ fontSize: 20, color: "#242424", my: 1 }}
        >
          Request sent Successfully
        </Typography>

        <Typography sx={{ fontSize: 13, color: "#333333", mb: 0.5 }}>
          Request Email sent to the client.
        </Typography>

        <Typography
          sx={{ fontSize: 13, color: "#333333", mb: 4, lineHeight: 1.6 }}
        >
          The onboarding will terminate while we wait for the supporting
          document
        </Typography>

        <BrandButton
          onClick={onContinue}
          className="!w-full !text-[15px] !rounded-[8px]"
        >
          Continue
        </BrandButton>
      </Box>
    </Dialog>
  );
}
