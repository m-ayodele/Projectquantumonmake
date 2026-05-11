"use client";

import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { HomeCubeIcon } from "./icons";
import successGif from "../../../../public/images/successGif.gif";
import partyGif from "../../../../public/images/partyGif.gif";

function StatusPill({ label, color = "green" }: { label: string; color?: "green" | "orange" }) {
  const colors = { green: { bg: "#E7F6F2", text: "#15803D" }, orange: { bg: "#FFF0E5", text: "#FF6B22" } };
  const { bg, text } = colors[color];
  return (
    <Box component="span" sx={{ display: "inline-flex", alignItems: "center", px: 2.4, py: 0.8, borderRadius: "20px", bgcolor: bg, fontSize: 12, fontWeight: 600, color: text, lineHeight: 1 }}>
      {label}
    </Box>
  );
}

function NextActionCard({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick?: () => void }) {
  return (
    <ButtonBase onClick={onClick} sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5, px: 2, py: 2.5, flex: "1 1 0", borderRadius: "16px", bgcolor: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", transition: "border-color 0.18s, box-shadow 0.18s, transform 0.15s", "&:hover": { boxShadow: "0 4px 14px rgba(255,107,34,0.12)", transform: "translateY(-2px)" } }}>
      <Box sx={{ width: 44, height: 44, borderRadius: "8px", border: "1px solid #FF6B22", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF6B22" }}>{icon}</Box>
      <Typography sx={{ fontSize: 13, fontWeight: 500, color: "#242424", textAlign: "center" }}>{label}</Typography>
    </ButtonBase>
  );
}

export interface InsuranceSuccessRecord {
  clientId: string;
  type: string;
  verificationStatus: string;
}

interface OnboardingInsuranceSuccessStepProps {
  record?: InsuranceSuccessRecord;
  onFinishOnboarding?: () => void;
  onBack?: () => void;
}

export function OnboardingInsuranceSuccessStep({
  record = { clientId: "IB/0021/25", type: "Broker", verificationStatus: "Verified" },
  onFinishOnboarding,
  onBack,
}: OnboardingInsuranceSuccessStepProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box sx={{ mb: 4, flexShrink: 0 }}>
        <Typography fontWeight={700} sx={{ fontSize: 22, color: "#111827" }}>Policyholder&apos;s Information</Typography>
        <Typography sx={{ fontSize: 13, color: "#6B7280" }}>Here are the details of the policyholder as newly created</Typography>
      </Box>

      {/* Celebration */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", mb: 2, flexShrink: 0 }}>
        <Image src={partyGif} alt="" width={150} height={150} unoptimized style={{ position: "absolute", objectFit: "cover", pointerEvents: "none", zIndex: 0 }} />
        <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5 }}>
          <Image src={successGif} alt="Success" unoptimized style={{ objectFit: "contain", marginBottom: -28 }} />
          <Typography sx={{ fontSize: 20, fontWeight: 700, color: "#0A0A0A", letterSpacing: "-0.01em", animation: "fadeUp 0.5s ease 0.3s both", "@keyframes fadeUp": { "0%": { opacity: 0, transform: "translateY(8px)" }, "100%": { opacity: 1, transform: "translateY(0)" } } }}>
            Insurance Company Registered
          </Typography>
        </Box>
      </Box>

      {/* Info card */}
      <Box sx={{ bgcolor: "#fff", borderRadius: "8px", border: "1px solid #BBBEC5", p: 2.5, mx: 6, mb: 4, flexShrink: 0, animation: "fadeUp 0.5s ease 0.45s both", "@keyframes fadeUp": { "0%": { opacity: 0, transform: "translateY(8px)" }, "100%": { opacity: 1, transform: "translateY(0)" } } }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2 }}>
          <Box>
            <Typography sx={{ fontSize: 14, color: "#898E99", mb: 0.2 }}>Client ID</Typography>
            <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>{record.clientId}</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 14, color: "#898E99", mb: 0.2 }}>Type</Typography>
            <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>{record.type}</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 14, color: "#898E99", mb: 0.2 }}>Verification status</Typography>
            <StatusPill label={record.verificationStatus} color={record.verificationStatus === "Verified" ? "green" : "orange"} />
          </Box>
        </Box>
      </Box>

      {/* Next action — single "Finish Onboarding" card */}
      <Box sx={{ mx: 6, animation: "fadeUp 0.5s ease 0.6s both", "@keyframes fadeUp": { "0%": { opacity: 0, transform: "translateY(8px)" }, "100%": { opacity: 1, transform: "translateY(0)" } } }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <NextActionCard icon={<HomeCubeIcon />} label="Finish Onboarding" onClick={onFinishOnboarding} />
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-start", mt: "auto", pt: 3, pb: 2 }}>
        <ButtonBase onClick={onBack} sx={{ px: 3, py: 1.2, borderRadius: "6px", border: "1px solid #242424", fontSize: 13, fontWeight: 500, color: "#242424", "&:hover": { bgcolor: "#F9FAFB" } }}>Back</ButtonBase>
      </Box>
    </Box>
  );
}