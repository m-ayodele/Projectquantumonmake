"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import {
  AngleLeft,
  AngleRight,
  PolygonWarningIcon,
  YellowWarningIcon,
} from "./icons";
import { BrandButton } from "./BrandButton";
import { NoRecordFound, SearchResultRecord } from "./SearchResultStep";

interface IntermediarySearchResultStepProps {
  record: SearchResultRecord | null;
  hasRecord?: boolean;
  totalRecords?: number;
  currentRecord?: number;
  scenarioId?: string;
  onBack: () => void;
  onCancel: () => void;
  onUpdateRecord: () => void;
  onCreateNew: () => void;
}

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

function RecordField({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography sx={FIELD_LABEL_SX}>{label}</Typography>
      <Typography sx={FIELD_VALUE_SX}>{value}</Typography>
    </Box>
  );
}

function StatusPill({
  label,
  variant,
}: {
  label: string;
  variant: "warning" | "success";
}) {
  const isWarning = variant === "warning";

  return (
    <Box>
      <Typography sx={FIELD_LABEL_SX}>{label}</Typography>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 84,
          height: 24,
          px: 1.6,
          borderRadius: "999px",
          bgcolor: isWarning ? "#FFF0E9" : "#E7F6F2",
          border: `1px solid ${isWarning ? "#FF6B22" : "#13A47C"}`,
          color: isWarning ? "#FF6B22" : "#13A47C",
          fontSize: 10,
          fontWeight: 600,
          lineHeight: 1,
        }}
      >
        {isWarning ? "Unverified" : "Active"}
      </Box>
    </Box>
  );
}

export function IntermediarySearchResultStep({
  record,
  hasRecord,
  totalRecords = 1,
  currentRecord = 1,
  scenarioId,
  onBack,
  onCancel,
  onUpdateRecord,
  onCreateNew,
}: IntermediarySearchResultStepProps) {
  const showRecord = hasRecord ?? record !== null;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box sx={{ mb: 3 }}>
        <Typography fontWeight={700} sx={{ fontSize: 22, color: "#242424" }}>
          Search Result
        </Typography>
        <Typography sx={{ fontSize: 13, color: "#898E99" }}>
          Details of the client on the System
        </Typography>
      </Box>

      {showRecord && record ? (
        <>
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

          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              px: 1.5,
              py: 1.4,
              mb: 1,
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1.3fr 0.9fr 0.9fr",
                gap: "14px 16px",
              }}
            >
              <RecordField
                label="Full Name"
                value={`${record.surname} ${record.firstName} ${record.middleName}`}
              />
              <RecordField
                label="NIN"
                value={record.phoneNumber ?? "98765432101"}
              />
              <StatusPill label="Verification Status" variant="warning" />
              <RecordField label="Date of Birth" value={record.dateOfBirth} />
              <RecordField label="Client Status" value="Agent" />
             {scenarioId !== "agent-2" &&
  scenarioId !== "agent-3" &&
  scenarioId !== "agent-4" &&
  scenarioId !== "agent-5" && (
    <StatusPill label="Active Status" variant="success" />
  )}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 0.8,
              bgcolor: "#FFF0E9",
              border: "1px solid #FF6B22",
              borderRadius: "4px",
              px: 2,
              py: 0.8,
              mb: 3,
            }}
          >
            <Box>
              <PolygonWarningIcon />
            </Box>

            <Typography
              sx={{
                fontSize: 12,
                color: "#333333",
                lineHeight: "16px",
                marginTop: 0.3,
              }}
            >
              This agent record exists on the system but has not been verified.
              Verification will be completed in the next step via NIN validation
              through NIMC.
            </Typography>
          </Box>
        </>
      ) : (
        <Box sx={{ mb: 3 }}>
          <NoRecordFound />
        </Box>
      )}

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
              Update Client’s Record
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
