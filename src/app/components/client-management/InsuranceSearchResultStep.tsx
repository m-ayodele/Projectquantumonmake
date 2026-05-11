"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { AngleLeft, AngleRight, PolygonWarningIcon } from "./icons";
import { BrandButton } from "./BrandButton";

export interface InsuranceSearchRecord {
  companyName: string;
  clientId: string;
  verificationStatus: "Unverified" | "Verified" | "Pending";
  // local: RC Number + NAICOM No.; foreign: License Number only
  rcNumber?: string;
  naicomNo?: string;
  licenseNumber?: string;
  clientStatus: string;
  isLocal: boolean;
}

function NoRecordFound() {
  return (
    <Box sx={{ bgcolor: "#fff", borderRadius: "8px", border: "1px solid #E5E7EB", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", py: 6, px: 3, textAlign: "center", minHeight: 160, mb: 3 }}>
      <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#242424" }}>No record found</Typography>
      <Typography sx={{ fontSize: 13, color: "#333333" }}>The insurance company may not exist on the system yet.</Typography>
    </Box>
  );
}

const FIELD_LABEL_SX = { fontSize: 11, color: "#9A9A9A", mb: 0.3, lineHeight: 1.3 };
const FIELD_VALUE_SX = { fontSize: 13, fontWeight: 600, color: "#1A1A1A", lineHeight: 1.4 };

function RecordField({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography sx={FIELD_LABEL_SX}>{label}</Typography>
      <Typography sx={FIELD_VALUE_SX}>{value || "—"}</Typography>
    </Box>
  );
}

function VerificationPill({ status }: { status: "Unverified" | "Verified" | "Pending" }) {
  const map = {
    Unverified: { bg: "#FFF0E9", text: "#FF6B22", border: "#FF6B22" },
    Verified: { bg: "#E7F6F2", text: "#13A47C", border: "#13A47C" },
    Pending: { bg: "#FFF0E9", text: "#E57912", border: "#FF6B22" },
  };
  const { bg, text, border } = map[status];
  return (
    <Box>
      <Typography sx={FIELD_LABEL_SX}>Verification Status</Typography>
      <Box sx={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 84, height: 24, px: 1.6, borderRadius: "999px", bgcolor: bg, border: `1px solid ${border}`, color: text, fontSize: 10, fontWeight: 600, lineHeight: 1 }}>
        {status}
      </Box>
    </Box>
  );
}

interface InsuranceSearchResultStepProps {
  record: InsuranceSearchRecord | null;
  hasRecord?: boolean;
  totalRecords?: number;
  currentRecord?: number;
  onBack: () => void;
  onCancel: () => void;
  onUpdateRecord: () => void;
  onCreateNew: () => void;
}

export function InsuranceSearchResultStep({
  record,
  hasRecord,
  totalRecords = 1,
  currentRecord = 1,
  onBack,
  onCancel,
  onUpdateRecord,
  onCreateNew,
}: InsuranceSearchResultStepProps) {
  const showRecord = hasRecord ?? record !== null;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box sx={{ mb: 3 }}>
        <Typography fontWeight={700} sx={{ fontSize: 22, color: "#242424" }}>Search Result</Typography>
        <Typography sx={{ fontSize: 13, color: "#898E99" }}>Details of the client on the System</Typography>
      </Box>

      {showRecord && record ? (
        <>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 0.5 }}>
            <Typography sx={{ fontSize: 12, color: "#084534", fontWeight: 600 }}>{currentRecord} / {totalRecords} record(s) found</Typography>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              {[<AngleLeft key="l" />, <AngleRight key="r" />].map((arrow, i) => (
                <ButtonBase key={i} sx={{ width: 20, height: 20, borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", "&:hover": { bgcolor: "#FFF0E9" } }}>{arrow}</ButtonBase>
              ))}
            </Box>
          </Box>

          <Box sx={{ bgcolor: "#fff", borderRadius: "8px", border: "1px solid #E5E7EB", px: 1.5, py: 1.4, mb: 1 }}>
            <Box sx={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "14px 16px" }}>
              <RecordField label="CompanyName" value={record.companyName} />
              {record.isLocal ? (
                <RecordField label="RC Number" value={record.rcNumber ?? ""} />
              ) : (
                <RecordField label="License Number" value={record.licenseNumber ?? ""} />
              )}
              <VerificationPill status={record.verificationStatus} />
              <RecordField label="Client Status" value={record.clientStatus} />
              {record.isLocal && record.naicomNo && (
                <RecordField label="NAICOM No." value={record.naicomNo} />
              )}
            </Box>
          </Box>

          {/* Warning banner — local only */}
          {record.isLocal && (
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 0.8, bgcolor: "#FFF0E9", border: "1px solid #FF6B22", borderRadius: "4px", px: 2, py: 0.8, mb: 3 }}>
              <Box sx={{ flexShrink: 0, mt: 0.2 }}><PolygonWarningIcon /></Box>
              <Typography sx={{ fontSize: 12, color: "#333333", lineHeight: "16px", mt: 0.3 }}>
                This insurance company record exists but has not been verified. Verification will proceed via CAC and NAICOM licence check.
              </Typography>
            </Box>
          )}
        </>
      ) : (
        <NoRecordFound />
      )}

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