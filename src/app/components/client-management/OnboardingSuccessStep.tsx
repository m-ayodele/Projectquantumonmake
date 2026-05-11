  "use client";

  import React from "react";
  import Image from "next/image";
  import Box from "@mui/material/Box";
  import Typography from "@mui/material/Typography";
  import ButtonBase from "@mui/material/ButtonBase";
  import { HomeCubeIcon, ArrowRight } from "./icons";
  import successGif from "../../../../public/images/successGif.gif";
  import partyGif from "../../../../public/images/partyGif.gif";

  // ── Status pill ───────────────────────────────────────────────────────────────
  function StatusPill({
    label,
    color = "green",
  }: {
    label: string;
    color?: "green" | "orange" | "blue";
  }) {
    const colors = {
      green: { bg: "#E7F6F2", text: "#15803D" },
      orange: { bg: "#FFF0E5", text: "#FF6B22" },
      blue: { bg: "#DBEAFE", text: "#1D4ED8" },
    };
    const { bg, text } = colors[color];
    return (
      <Box
        component="span"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          px: 2.4,
          py: 0.8,
          borderRadius: "20px",
          bgcolor: bg,
          fontSize: 12,
          fontWeight: 600,
          color: text,
          lineHeight: 1,
        }}
      >
        {label}
      </Box>
    );
  }

  // ── Next action card ──────────────────────────────────────────────────────────
  function NextActionCard({
    icon,
    label,
    onClick,
  }: {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
  }) {
    return (
      <ButtonBase
        onClick={onClick}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1.5,
          px: 2,
          py: 2.5,
          flex: "1 1 0",
          borderRadius: "16px",
          bgcolor: "#fff",
          // border: "1px solid #E5E7EB",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          transition: "border-color 0.18s, box-shadow 0.18s, transform 0.15s",
          "&:hover": {
            borderColor: "#FF6B22",
            boxShadow: "0 4px 14px rgba(255,107,34,0.12)",
            transform: "translateY(-2px)",
          },
        }}
      >
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: "8px",
            border: "1px solid #FF6B22",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FF6B22",
          }}
        >
          {icon}
        </Box>
        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 500,
            color: "#242424",
            textAlign: "center",
          }}
        >
          {label}
        </Typography>
      </ButtonBase>
    );
  }

  const UserIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );

  // ── Props ─────────────────────────────────────────────────────────────────────
  export interface PolicyholderRecord {
    clientId: string;
    clientName: string;
    clientStatus: string;
    verificationStatus: string;
    amlCftScreening: string;
  }

  interface OnboardingSuccessStepProps {
    record?: PolicyholderRecord;
    onBackToHome?: () => void;
    onProceedToInception?: () => void;
    onViewClientDetails?: () => void;
  }

  // ── Component ─────────────────────────────────────────────────────────────────
  export function OnboardingSuccessStep({
    record = {
      clientId: "PO/7657/09",
      clientName: "Opeyemi Pascal",
      clientStatus: "Policyholder",
      verificationStatus: "Verified",
      amlCftScreening: "Passed",
    },
    onBackToHome,
    onProceedToInception,
    onViewClientDetails,
  }: OnboardingSuccessStepProps) {
    return (
      <Box className="flex flex-col  h-full">
        {/* Heading */}
        <Box className="mb-6 flex-shrink-0">
          <Typography fontWeight={700} sx={{ fontSize: 22, color: "#111827" }}>
            Policyholder's Information
          </Typography>
          <Typography sx={{ fontSize: 13, color: "#6B7280" }}>
            Here are the details of the policyholder as newly created
          </Typography>
        </Box>

        {/* Celebration area */}
        <Box
          className="relative flex flex-col items-center justify-center mb-6 flex-shrink-0"
          sx={{ overflow: "hidden" }}
        >
          {/* Party GIF — absolutely wraps the successGif */}
          <Image
            src={partyGif}
            alt=""
            //   fill
            width={150}
            height={150}
            unoptimized
            className="absolute"
            style={{ objectFit: "cover", pointerEvents: "none", zIndex: 0 }}
          />

          <Box className="relative z-10 flex flex-col items-center gap-3">
            <Image
              src={successGif}
              alt="Success"
              // width={100}
              // height={100}
              unoptimized
              style={{ objectFit: "contain", marginBottom: -38 }}
            />
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 700,
                color: "#0A0A0A",
                letterSpacing: "-0.01em",
                animation: "fadeUp 0.5s ease 0.3s both",

                "@keyframes fadeUp": {
                  "0%": { opacity: 0, transform: "translateY(8px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              Policyholder Created.
            </Typography>
          </Box>
        </Box>

        {/* Info card */}
        <Box
          className="flex-shrink-0 mb-6"
          sx={{
            bgcolor: "#fff",
            borderRadius: "8px",
            border: "1px solid #BBBEC5",
            p: 2.5,
            mx: 6,
            animation: "fadeUp 0.5s ease 0.45s both",
            "@keyframes fadeUp": {
              "0%": { opacity: 0, transform: "translateY(8px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          {/* Row 1 */}
          <Box className="grid grid-cols-3  gap-4 mb-4">
            {[
              { label: "Client ID", value: record.clientId },
              { label: "Client Name", value: record.clientName },
              { label: "Client Status", value: record.clientStatus },
            ].map(({ label, value }) => (
              <Box key={label}>
                <Typography sx={{ fontSize: 14, color: "#898E99", mb: 0.2 }}>
                  {label}
                </Typography>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 700, color: "#111827" }}
                >
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Divider */}

          {/* Row 2 — pills */}
          <Box className="grid grid-cols-3 gap-4">
            <Box>
              <Typography sx={{ fontSize: 14, color: "#898E99", mb: 0.2 }}>
                Verification Status
              </Typography>
              <StatusPill label={record.verificationStatus} color="green" />
            </Box>
            <Box>
              <Typography sx={{ fontSize: 14, color: "#898E99", mb: 0.2 }}>
                AML/CFT Screening
              </Typography>
              <StatusPill label={record.amlCftScreening} color="green" />
            </Box>
          </Box>
        </Box>

        {/* Next actions */}
        <Box
          sx={{
            animation: "fadeUp 0.5s ease 0.6s both",
            "@keyframes fadeUp": {
              "0%": { opacity: 0, transform: "translateY(8px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
            pb: 4,
            mx: 6,
          }}
        >
          <Typography
            sx={{ fontSize: 14, fontWeight: 700, color: "#111827", mb: 1.5 }}
          >
            Next:
          </Typography>
          <Box className="flex gap-4 ">
            <NextActionCard
              icon={<HomeCubeIcon />}
              label="Back to Home"
              onClick={onBackToHome}
            />
            <NextActionCard
              icon={<ArrowRight />}
              label="Proceed to Inception"
              onClick={onProceedToInception}
            />
            <NextActionCard
              icon={<ArrowRight />}
              label="View Client Details"
              onClick={onViewClientDetails}
            />
          </Box>
        </Box>
      </Box>
    );
  }
