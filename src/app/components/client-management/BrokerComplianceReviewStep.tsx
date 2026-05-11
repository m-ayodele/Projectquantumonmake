"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { BrandButton } from "./BrandButton";
import { CircularTimes, PolygonWarningIcon } from "./icons";

// ── Verification status pill ──────────────────────────────────────────────────
function PendingReviewPill() {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        px: 1.8,
        py: 0.6,
        borderRadius: "20px",
        bgcolor: "#EDEFFC",
        fontSize: 12,
        fontWeight: 600,
        color: "#4A61E3",
        lineHeight: 1,
      }}
    >
      Pending Review
    </Box>
  );
}

// ── Field ─────────────────────────────────────────────────────────────────────
function CaseField({ label, value, children }: { label: string; value?: string; children?: React.ReactNode }) {
  return (
    <Box>
      <Typography sx={{ fontSize: 13, color: "#9A9A9A", mb: 0.3, whiteSpace: "nowrap" }}>{label}</Typography>
      {children ?? (
        <Typography sx={{ fontSize: 13, fontWeight: 700, color: "#111827", whiteSpace: "nowrap" }}>{value}</Typography>
      )}
    </Box>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────
interface BrokerComplianceReviewStepProps {
  caseReference?: string;
  brokerName?: string;
  naicomNo?: string;
  onBack: () => void;
  onFinish: () => void;
}

// ── Component ─────────────────────────────────────────────────────────────────
export function BrokerComplianceReviewStep({
  caseReference = "CR/0041/25",
  brokerName = "APEKS BROKERS NIG. LTD",
  naicomNo = "NB/00421/2022",
  onBack,
  onFinish,
}: BrokerComplianceReviewStepProps) {
  const [bannerDismissed, setBannerDismissed] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: 0,
        overflowY: "auto",
        pr: 0.5,
        "&::-webkit-scrollbar": { width: 4 },
        "&::-webkit-scrollbar-track": { bgcolor: "#F3F4F6", borderRadius: 9999 },
        "&::-webkit-scrollbar-thumb": { bgcolor: "#FF6B22", borderRadius: 9999 },
        scrollbarWidth: "thin",
        scrollbarColor: "#FF6B22 #F3F4F6",
      }}
    >
      {/* Heading */}
      <Box sx={{ mb: 3, flexShrink: 0 }}>
        <Typography fontWeight={700} sx={{ fontSize: 22, color: "#111827" }}>
          Compliance Review
        </Typography>
        <Typography sx={{ fontSize: 13, color: "#6B7280" }}>
          Review the discrepancy between the result and proposal form data
        </Typography>
      </Box>

      {/* Orange escalation banner */}
      {!bannerDismissed && (
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 0.8,
            bgcolor: "#FFF8F5",
            border: "1px solid #FF6B22",
            borderRadius: "6px",
            px: 2,
            py: 1,
            mb: 2,
            flexShrink: 0,
          }}
        >
          <Box sx={{ flexShrink: 0, mt: "2px", color: "#FF6B22" }}>
            <PolygonWarningIcon />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography sx={{ fontSize: 13, fontWeight: 700, color: "#242424", mb: 0.3 }}>
              Escalation for Compliance Review
            </Typography>
            <Typography sx={{ fontSize: 12, color: "#333333", lineHeight: 1.6 }}>
              NAICOM licence verification failed. This case has been escalated to the compliance team.
            </Typography>
          </Box>
          <IconButton
            onClick={() => setBannerDismissed(true)}
            size="small"
            sx={{ mt: -0.5, "&:hover": { bgcolor: "#FFF0E9", color: "#374151" } }}
          >
            <CircularTimes />
          </IconButton>
        </Box>
      )}

      {/* Case summary card */}
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: "8px",
          border: "1px solid #E5E7EB",
          px: 2.5,
          py: 2,
          mb: 2,
          flexShrink: 0,
        }}
      >
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1.6fr 1fr 1fr", gap: "12px 20px" }}>
          <CaseField label="Case Reference" value={caseReference} />
          <CaseField label="Broker Name" value={brokerName} />
          <CaseField label="NAICOM No." value={naicomNo} />
          <CaseField label="Verification Status">
            <PendingReviewPill />
          </CaseField>
        </Box>
      </Box>

      {/* What happens next */}
      <Box
        sx={{
          bgcolor: "#EDEFFC",
          border: "1px solid #4A61E3",
          borderRadius: "8px",
          p: 2,
          mb: 4,
          flexShrink: 0,
        }}
      >
        <Typography sx={{ fontSize: 13, fontWeight: 800, color: "#4358CF", mb: 1 }}>
          What happens next?
        </Typography>
        <Box
          component="ol"
          sx={{
            pl: 2,
            m: 0,
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            listStyleType: "decimal",
            listStylePosition: "outside",
          }}
        >
          {[
            "The compliance team will review the NAICOM licence against the official NAICOM registry.",
            "You will receive a notification once the review is complete (typically 1–3 business days).",
            "If cleared, you can resume this onboarding from where it paused.",
            "If rejected, the broker will need to provide an updated NAICOM licence before onboarding can continue.",
          ].map((item, i) => (
            <Box
              component="li"
              key={i}
              sx={{ display: "list-item", fontSize: 12, color: "#374151", lineHeight: 1.6, pl: 0.5 }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", pt: 1, mt: "auto", flexShrink: 0 }}>
        <BrandButton onClick={onBack} variant="outline" className="!px-[28px] !font-normal">
          Back
        </BrandButton>
        <BrandButton onClick={onFinish} className="!py-[4px] !px-[28px]" size="sm">
          Finish Onboarding
        </BrandButton>
      </Box>
    </Box>
  );
}