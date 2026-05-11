"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import {
  AngleLeft,
  AngleRight,
  BlueInfoIcon,
  YellowWarningIcon,
} from "./icons";
import { BrandButton } from "./BrandButton";

export interface SearchResultRecord {
  surname: string;
  firstName: string;
  middleName: string;
  dateOfBirth: string;
  gender: string;
  phoneNumber: string;
  clientId: string;
  clientStatus: string;
  verificationStatus: "Unverified" | "Verified" | "Pending";
}

// ── No Record Found ───────────────────────────────────────────────────────────
export function NoRecordFound() {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: "8px",
        border: "1px solid #E5E7EB",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 6,
        px: 3,
        textAlign: "center",
        minHeight: 160,
      }}
    >
      <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#242424" }}>
        No record found
      </Typography>
      <Typography sx={{ fontSize: 13, color: "#333333" }}>
        The client may not exist on the system yet.
      </Typography>
    </Box>
  );
}

// ── Field ─────────────────────────────────────────────────────────────────────
const FIELD_LABEL_SX = {
  fontSize: 11,
  color: "#9A9A9A",
  mb: 0.3,
  lineHeight: 1.3,
};
const FIELD_VALUE_SX = {
  fontSize: 13,
  fontWeight: 600,
  color: "#1A1A1A",
  lineHeight: 1.4,
};

function RecordField({
  label,
  value,
  valueColor,
}: {
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <Box>
      <Typography sx={FIELD_LABEL_SX}>{label}</Typography>
      <Typography sx={{ ...FIELD_VALUE_SX, color: valueColor ?? "#1A1A1A" }}>
        {value}
      </Typography>
    </Box>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────
interface SearchResultStepProps {
  record: SearchResultRecord | null;
  /**
   * true  → record card + "Update Record" button
   * false → NoRecordFound + "Create New Client" button
   */
  hasRecord?: boolean;
  totalRecords?: number;
  currentRecord?: number;
  onBack: () => void;
  onCancel: () => void;
  onUpdateRecord: () => void;
  onCreateNew: () => void;
}

// ── Component ─────────────────────────────────────────────────────────────────
export function SearchResultStep({
  record,
  hasRecord,
  totalRecords = 1,
  currentRecord = 1,
  onBack,
  onCancel,
  onUpdateRecord,
  onCreateNew,
}: SearchResultStepProps) {
  const showRecord = hasRecord ?? record !== null;

  // Policyholder unverified → swap blue banner for orange "You can verify the client's identity."
  const isPoliceholderUnverified =
    record?.clientStatus === "Policyholder" &&
    record?.verificationStatus === "Unverified";

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Heading */}
      <Box sx={{ mb: 3 }}>
        <Typography fontWeight={700} sx={{ fontSize: 22, color: "#242424" }}>
          Search Result
        </Typography>
        <Typography sx={{ fontSize: 13, color: "#898E99" }}>
          Details of the client on the platform
        </Typography>
      </Box>

      {showRecord && record ? (
        <>
          {/* Records found bar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 0.5,
            }}
          >
            <Typography
              sx={{ fontSize: 12, color: "#084534", fontWeight: 600 }}
            >
              {currentRecord} / {totalRecords} record(s) found
            </Typography>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              {[<AngleLeft key="l" />, <AngleRight key="r" />].map(
                (arrow, i) => (
                  <ButtonBase
                    key={i}
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": { bgcolor: "#FFF0E9" },
                    }}
                  >
                    {arrow}
                  </ButtonBase>
                ),
              )}
            </Box>
          </Box>

          {/* Record card */}
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              p: 3,
              mb: 1,
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "14px 16px",
              }}
            >
              <RecordField label="Surname" value={record.surname} />
              <RecordField label="Date of Birth" value={record.dateOfBirth} />
              <RecordField label="Client ID" value={record.clientId} />
              <RecordField label="First Name" value={record.firstName} />
              <RecordField label="Gender" value={record.gender} />
              <RecordField label="Client Status" value={record.clientStatus} />
              <RecordField label="Middle Name" value={record.middleName} />
              <RecordField label="Phone Number" value={record.phoneNumber} />
              <RecordField
                label="Verification status"
                value={record.verificationStatus}
                valueColor={
                  record.verificationStatus === "Unverified"
                    ? "#E57912"
                    : record.verificationStatus === "Verified"
                      ? "#16A34A"
                      : "#D97706"
                }
              />
            </Box>
          </Box>

          {/* Banner — orange for policyholder unverified, blue for everyone else */}
          {isPoliceholderUnverified ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.8,
                bgcolor: "#FFF0E9",
                border: "1px solid #FF6B22",
                borderRadius: "4px",
                px: 2,
                py: 0.8,
                mb: 3,
              }}
            >
                <YellowWarningIcon />
              <Typography sx={{ fontSize: 12, color: "#333333" }}>
                You can verify the client&apos;s identity.
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.8,
                bgcolor: "#EDEFFC",
                border: "1px solid #4A61E3",
                borderRadius: "4px",
                px: 2,
                py: 0.8,
                mb: 3,
              }}
            >
              <BlueInfoIcon />
              <Typography sx={{ fontSize: 12, color: "#333333" }}>
                Proceeding with the client creation will use these details found
                on the system
              </Typography>
            </Box>
          )}
        </>
      ) : (
        <Box sx={{ mb: 3 }}>
          <NoRecordFound />
        </Box>
      )}

      {/* Footer */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "auto",
          pt: 2,
        }}
      >
        <BrandButton
          onClick={onBack}
          variant="outline"
          className="!px-[28px] !font-normal"
        >
          Back
        </BrandButton>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <BrandButton
            variant="ghost"
            size="sm"
            onClick={onCancel}
            className="!text-[#f97316] !font-normal !px-4 hover:!bg-[#FFF0E9]"
          >
            Cancel
          </BrandButton>

          {showRecord ? (
            <BrandButton
              onClick={onUpdateRecord}
              className="!py-[4px] !px-[36px]"
              size="sm"
            >
              Update Record
            </BrandButton>
          ) : (
            <BrandButton
              onClick={onCreateNew}
              className="!py-[4px] !px-[36px]"
              size="sm"
            >
              Create New Client
            </BrandButton>
          )}
        </Box>
      </Box>
    </Box>
  );
}
