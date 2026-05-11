"use client";

import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ButtonBase from "@mui/material/ButtonBase";
import Collapse from "@mui/material/Collapse";
import { BrandButton } from "./BrandButton";
import { SearchLoader } from "./SearchLoader";

interface FileFieldConfig {
  key: string;
  label: string;
  required?: boolean;
}

const FILE_ROWS: FileFieldConfig[][] = [
  [
    { key: "proposal", label: "Proposal form", required: true },
    { key: "cacCertificate", label: "CAC Certificate" },
  ],
];

function FileUploadField({ config }: { config: FileFieldConfig }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        minWidth: 0,
      }}
    >
      <input
        ref={inputRef}
        type="file"
        hidden
        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
      />

      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          alignItems: "center",
          p: 0.2,
          border: "1px solid #767676",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <ButtonBase
          onClick={() => inputRef.current?.click()}
          sx={{
            height: 28,
            px: "10px",
            borderRadius: "4px",
            bgcolor: "#242424",
            color: "#fff",
            fontSize: 11,
            flexShrink: 0,
            "&:hover": { bgcolor: "#2A2A2A" },
          }}
        >
          Choose file
        </ButtonBase>

        <p
          className="ml-1 truncate text-[11px]"
          style={{
            flex: 1,
            minWidth: 0,
            color: fileName ? "#222" : "#9A9A9A",
          }}
          title={fileName}
        >
          {fileName || config.label}
          {config.required && !fileName && (
            <span className="text-red-500 ml-[2px]">*</span>
          )}
        </p>
      </Box>
    </Box>
  );
}

const fieldSx = {
  width: "100%",
  "& .MuiInputLabel-root": {
    fontSize: 12,
    color: "#333333",
    fontWeight: 600,
    transform: "translate(10px, 10px) scale(1)",
    transition:
      "color 200ms cubic-bezier(0,0,0.2,1), transform 200ms cubic-bezier(0,0,0.2,1)",
    "&.Mui-focused": { color: "#FF6B22" },
    "&.MuiInputLabel-shrink": {
      transform: "translate(10px, -8px) scale(0.85)",
    },
  },
  "& .MuiOutlinedInput-root": {
    height: 36,
    fontSize: 12,
    borderRadius: "4px",
    backgroundColor: "transparent",
    "& input": {
      padding: "12px 10px 4px 10px",
      fontSize: 12,
      color: "#2B2B2B",
      height: "auto",
      boxSizing: "border-box",
    },
    "& fieldset": {
      borderColor: "#333333",
      borderWidth: "1px",
      "& legend": { fontSize: "0.75em" },
    },
    "&:hover fieldset": { borderColor: "#8B8B8B" },
    "&.Mui-focused fieldset": { borderColor: "#FF6B22", borderWidth: "1px" },
  },
};

export interface CorporateSearchData {
  businessName: string;
  rcNumber: string;
  tin: string;
  email: string;
}

interface CorporateClientStepProps {
  onSearch: (data: CorporateSearchData) => void;
  onCancel: () => void;
}

export function CorporateClientStep({
  onSearch,
  onCancel,
}: CorporateClientStepProps) {
  const [manualOpen, setManualOpen] = useState(true);
  const [businessName, setBusinessName] = useState("");
  const [rcNumber, setRcNumber] = useState("");
  const [tin, setTin] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    onSearch({ businessName, rcNumber, tin, email });
    setTimeout(() => setLoading(false), 5000);
  };

  return (
    <>
     {loading && <SearchLoader label="Searching for client" />}

      <Box sx={{ mt: 2.5 }}>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 700,
            color: "#2A2A2A",
            mb: 1.5,
          }}
        >
          Check for Existing Corporate Client
        </Typography>

        <Typography
          sx={{
            fontSize: 11,
            fontWeight: 700,
            color: "#2A2A2A",
            mb: 0.25,
          }}
        >
          Upload Proposal/KYC form
        </Typography>

        <Typography sx={{ fontSize: 10.5, color: "#9A9A9A", mb: 1 }}>
          The system will scan and extract the corporate client details
          automatically
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.9 }}>
          {FILE_ROWS.map((row, i) => (
            <Box
              key={i}
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 0.8,
              }}
            >
              {row.map((field) => (
                <FileUploadField key={field.key} config={field} />
              ))}
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            mt: 1.5,
            mb: 1.5,
            display: "flex",
            alignItems: "center",
            gap: 1.2,
          }}
        >
          <Box sx={{ flex: 1, height: "1px", bgcolor: "#BBBEC5" }} />

          <ButtonBase
            onClick={() => setManualOpen((v) => !v)}
            sx={{
              color: "#E57912",
              fontSize: 11,
              fontWeight: 400,
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            or enter details manually
            <Box
              component="span"
              sx={{
                fontSize: 10,
                color: "#7A7A7A",
                transform: manualOpen ? "rotate(0deg)" : "rotate(180deg)",
                transition: "transform 0.2s ease",
                lineHeight: 1,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <svg width="9" height="5" viewBox="0 0 9 5" fill="none">
                <path
                  d="M4.33422 7.82993e-05C4.68422 7.83299e-05 5.03422 0.135078 5.29922 0.400078L8.55922 3.66008C8.70422 3.80508 8.70422 4.04508 8.55922 4.19008C8.41422 4.33508 8.17422 4.33508 8.02922 4.19008L4.76922 0.930078C4.52922 0.690078 4.13922 0.690078 3.89922 0.930078L0.639219 4.19008C0.494219 4.33508 0.254219 4.33508 0.109219 4.19008C-0.0357818 4.04508 -0.0357818 3.80508 0.109219 3.66008L3.36922 0.400078C3.63422 0.135078 3.98422 7.82687e-05 4.33422 7.82993e-05Z"
                  fill="#242424"
                />
              </svg>
            </Box>
          </ButtonBase>

          <Box sx={{ flex: 1, height: "1px", bgcolor: "#BBBEC5" }} />
        </Box>

        <Collapse in={manualOpen} unmountOnExit>
          <Typography
            sx={{ fontSize: 11, fontWeight: 700, color: "#242424", mb: 1 }}
          >
            Enter search criteria manually
          </Typography>

          <Box
            sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5 }}
          >
            <TextField
              label="Business Name"
              size="small"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              sx={fieldSx}
            />

            <TextField
              label="RC Number"
              size="small"
              value={rcNumber}
              onChange={(e) => setRcNumber(e.target.value)}
              sx={fieldSx}
            />
          </Box>
        </Collapse>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 1,
            pt: 2,
            pb: 4,
            mt: 4,
          }}
        >
          <BrandButton
            variant="ghost"
            size="sm"
            onClick={onCancel}
            className="!text-[#f97316] !font-normal  !py-[6px] !px-[14px] hover:!bg-[#FFF0E9]"
          >
            Cancel
          </BrandButton>

          <BrandButton
            className="!py-[4px] !px-[36px]"
            size="sm"
            onClick={handleSearch}
          >
            Search
          </BrandButton>
        </Box>
      </Box>
    </>
  );
}
