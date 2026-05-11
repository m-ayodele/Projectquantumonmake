"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { AngleLeft, AngleRight, BlueInfoIcon } from "./icons";
import { BrandButton } from "./BrandButton";

export interface CorporateSearchRecord {
  businessName: string;
  clientId: string;
  verificationStatus: "Unverified" | "Verified" | "Pending";
  rcNumber: string;
  clientStatus: string;
}

// ── Verification pill ─────────────────────────────────────────────────────────
function VerificationPill({ status }: { status: "Unverified" | "Verified" | "Pending" }) {
  const map = {
    Unverified: { bg: "#FFF3E0", text: "#E57912", border: "#E57912" },
    Verified:   { bg: "#DCFCE7", text: "#16A34A", border: "#16A34A" },
    Pending:    { bg: "#FFF0E9", text: "#E57912", border: "#FF6B22" },
  };
  const { bg, text, border } = map[status];
  return (
    <Box component="span" sx={{ display: "inline-flex", alignItems: "center", px: "8px", py: "4px", borderRadius: "24px", bgcolor: bg, border: `1px solid ${border}`, fontSize: 12, fontWeight: 600, color: text, lineHeight: 1 }}>
      {status}
    </Box>
  );
}

// ── Field ─────────────────────────────────────────────────────────────────────
function Field({ label, value, children }: { label: string; value?: string; children?: React.ReactNode }) {
  return (
    <Box>
      <Typography sx={{ fontSize: 11, color: "#9A9A9A", mb: 0.3, lineHeight: 1.3 }}>{label}</Typography>
      {children ?? <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#242424", lineHeight: 1.4 }}>{value || "-"}</Typography>}
    </Box>
  );
}

// ── No record found ───────────────────────────────────────────────────────────
function NoRecord() {
  return (
    <Box sx={{ bgcolor: "#fff", borderRadius: "8px", border: "1px solid #E5E7EB", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", py: 6, px: 3, textAlign: "center", minHeight: 160, mb: 3 }}>
      <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#242424" }}>No record found</Typography>
      <Typography sx={{ fontSize: 13, color: "#333333" }}>The client may not exist on the system yet.</Typography>
    </Box>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────
interface CorporateSearchResultStepProps {
  record: CorporateSearchRecord | null;
  hasRecord?: boolean;
  totalRecords?: number;
  currentRecord?: number;
  onBack: () => void;
  onCancel: () => void;
  onUpdateRecord: () => void;
  onCreateNew: () => void;
}

// ── Component ─────────────────────────────────────────────────────────────────
export function CorporateSearchResultStep({
  record,
  hasRecord,
  totalRecords = 1,
  currentRecord = 1,
  onBack,
  onCancel,
  onUpdateRecord,
  onCreateNew,
}: CorporateSearchResultStepProps) {
  const showRecord = hasRecord ?? record !== null;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>

      {/* Heading */}
      <Box sx={{ mb: 3 }}>
        <Typography fontWeight={700} sx={{ fontSize: 22, color: "#242424" }}>Search Result</Typography>
        <Typography sx={{ fontSize: 13, color: "#898E99" }}>Details of the client on the System</Typography>
      </Box>

      {showRecord && record ? (
        <>
          {/* Records found bar */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 0.5 }}>
            <Typography sx={{ fontSize: 12, color: "#084534", fontWeight: 600 }}>
              {currentRecord} / {totalRecords} record(s) found
            </Typography>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              {[<AngleLeft key="l" />, <AngleRight key="r" />].map((arrow, i) => (
                <ButtonBase key={i} sx={{ width: 20, height: 20, borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", "&:hover": { bgcolor: "#FFF0E9" } }}>
                  {arrow}
                </ButtonBase>
              ))}
            </Box>
          </Box>

          {/* Record card — green border matching Image 2 */}
          <Box sx={{ bgcolor: "#E7F6F2", borderRadius: "8px", border: "1.5px solid #13A47C", p: 3, mb: 1 }}>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "14px 16px" }}>
              <Field label="Business Name"      value={record.businessName} />
              <Field label="Client ID"          value={record.clientId} />
              <Field label="Verification status">
                <VerificationPill status={record.verificationStatus} />
              </Field>
              <Field label="RC Number"          value={record.rcNumber} />
              <Field label="Client Status"      value={record.clientStatus} />
            </Box>
          </Box>

          {/* Blue info banner */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, bgcolor: "#EDEFFC", border: "1px solid #4A61E3", borderRadius: "4px", px: 2, py: 0.8, mb: 3 }}>
            <BlueInfoIcon />
            <Typography sx={{ fontSize: 12, color: "#333333" }}>
              Proceeding with the client creation will use these details found on the system
            </Typography>
          </Box>
        </>
      ) : (
        <NoRecord />
      )}

      {/* Footer */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: "auto", pt: 2 }}>
        <BrandButton onClick={onBack} variant="outline" className="!px-[28px] !font-normal">Back</BrandButton>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <BrandButton variant="ghost" size="sm" onClick={onCancel} className="!text-[#f97316] !font-normal !px-4 hover:!bg-[#FFF0E9]">Cancel</BrandButton>
          {showRecord ? (
            <BrandButton onClick={onUpdateRecord} className="!py-[4px] !px-[24px]" size="sm">Update Client&apos;s Record</BrandButton>
          ) : (
            <BrandButton onClick={onCreateNew} className="!py-[4px] !px-[36px]" size="sm">Create New Client</BrandButton>
          )}
        </Box>
      </Box>
    </Box>
  );
}