"use client";

import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BrandButton } from "./BrandButton";
import { PolygonWarningIcon } from "./icons";

function HexWarningIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 4L58 18.5V45.5L32 60L6 45.5V18.5L32 4Z"
        stroke="#FF6B22"
        strokeWidth="2.5"
        fill="none"
      />
      <text
        x="32"
        y="42"
        textAnchor="middle"
        fontSize="26"
        fontWeight="700"
        fill="#FF6B22"
        fontFamily="sans-serif"
      >
        !
      </text>
    </svg>
  );
}

interface CaseCreatedSuccessModalProps {
  open: boolean;
  onContinue: () => void;
}

export function CaseCreatedSuccessModal({
  open,
  onContinue,
}: CaseCreatedSuccessModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onContinue}
      maxWidth={false}
      PaperProps={{
        sx: {
          borderRadius: "16px",
          width: 400,
          maxWidth: "92vw",
          p: 0,
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
          py: 6,
          textAlign: "center",
        }}
      >
        <PolygonWarningIcon width="48px" height="48px" />

        <Typography
          sx={{ fontSize: 20, fontWeight: 700, color: "#0A0A0A", mt: 1, }}
        >
          Case Created Successfully
        </Typography>

        <Typography sx={{ fontSize: 14, color: "#333333", mt:1.5 }}>
          The client record creation is pending
        </Typography>

        <Typography sx={{ fontSize: 13, color: "#333333", mt: 0.5 }}>
          The onboarding process is on hold pending the compliance team&apos;s decision.
        </Typography>

        <Box sx={{ width: "100%", mt: 4 }}>
          <BrandButton
            onClick={onContinue}
            className="!w-full  !text-[15px] !rounded-[8px]"
          >
            Continue
          </BrandButton>
        </Box>
      </Box>
    </Dialog>
  );
}
