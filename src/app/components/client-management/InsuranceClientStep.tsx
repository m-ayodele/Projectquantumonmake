"use client";

import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Collapse from "@mui/material/Collapse";
import { BrandButton } from "./BrandButton";
import { LocalInsuranceIcon } from "./icons";

function CheckBadge() {
  return (
    <div style={{ position: "absolute", top: 2, right: 2, zIndex: 2 }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#FF6B22" />
      </svg>
    </div>
  );
}

function FileUploadField({ label }: { label: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  return (
    <Box sx={{ display: "flex", alignItems: "stretch", width: "100%", minWidth: 0 }}>
      <input ref={inputRef} type="file" hidden onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} />
      <Box sx={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", p: 0.2, border: "1px solid #767676", borderRadius: "4px", overflow: "hidden" }}>
        <ButtonBase onClick={() => inputRef.current?.click()} sx={{ height: 28, px: "10px", borderRadius: "4px", bgcolor: "#242424", color: "#fff", fontSize: 11, flexShrink: 0 }}>
          Choose file
        </ButtonBase>
        <p className="ml-1 truncate text-[11px]" style={{ flex: 1, minWidth: 0, color: fileName ? "#222" : "#9A9A9A" }} title={fileName}>
          {fileName || label}<span className="text-red-500 ml-[2px]">{!fileName && "*"}</span>
        </p>
      </Box>
    </Box>
  );
}

// ── Company type card ─────────────────────────────────────────────────────────
function CompanyTypeCard({ type, selected, onSelect }: { type: "local" | "foreign"; selected: boolean; onSelect: () => void }) {
  const isLocal = type === "local";
  return (
    <ButtonBase
      onClick={onSelect}
      sx={{
        position: "relative", flex: 1, width: "100%", display: "flex",
        justifyContent: "flex-start", alignItems: "flex-start", gap: 1,
        px: 2, py: 1.5, borderRadius: "8px", border: "1px solid",
        borderColor: selected ? "#FF6B22" : "#E9E9E9",
        bgcolor: selected ? "#FFEAEA" : "#fff", textAlign: "left",
        "&:hover": { borderColor: "#FF6B22", bgcolor: "#FFF7F3" },
      }}
    >
      {selected && <CheckBadge />}
      <Box sx={{ width: 24, height: 24, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px", border: "1px solid #FF6B22", bgcolor: selected ? "#FF6B22" : "#fff" }}>
        <Box sx={{ display: "flex", filter: selected ? "brightness(0) invert(1)" : "none", "& svg": { width: 16, height: 16 } }}>
          <LocalInsuranceIcon />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#242424", lineHeight: "14px" }}>
          {isLocal ? "Local Company" : "Foreign Company"}
        </Typography>
        <Typography sx={{ fontSize: 11, color: "#6B7280", lineHeight: "16px" }}>
          {isLocal ? "Corporate entity verified via CAC" : "International entity verified via relevant authorities"}
        </Typography>
      </Box>
    </ButtonBase>
  );
}

// ── Search form (same for local and foreign — upload only) ────────────────────
function InsuranceSearchForm({ onCancel, onSearch }: { onCancel: () => void; onSearch: () => void }) {
  return (
    <Box sx={{ mt: 2.5 }}>
      <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#2A2A2A", mb: 1.5 }}>Check for Existing Client</Typography>
      <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#2A2A2A", mb: 0.25 }}>Upload Proposal/KYC form</Typography>
      <Typography sx={{ fontSize: 10.5, color: "#9A9A9A", mb: 1 }}>The system will scan and extract the client details automatically</Typography>
      <FileUploadField label="Proposal form" />
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 1, pt: 2, pb: 4, mt: 4 }}>
        <BrandButton variant="ghost" size="sm" onClick={onCancel} className="!text-[#f97316] !font-normal !px-4 !py-[6px] hover:!bg-[#FFF0E9]">Cancel</BrandButton>
        <BrandButton className="!py-[4px] !px-[36px]" size="sm" onClick={onSearch}>Search</BrandButton>
      </Box>
    </Box>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────
interface InsuranceClientStepProps {
  onSearch: (subType: "local" | "foreign") => void;
  onCancel: () => void;
}

export function InsuranceClientStep({ onSearch, onCancel }: InsuranceClientStepProps) {
  const [companyType, setCompanyType] = useState<"local" | "foreign" | null>(null);

  return (
    <Box sx={{ mt: 2.5 }}>
      <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#2A2A2A", mb: 0.5 }}>Choose Company type</Typography>
      <Typography sx={{ fontSize: 10.5, color: "#9A9A9A", mb: 1.5 }}>Select the company type to apply the correct onboarding workflow</Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5 }}>
        <CompanyTypeCard type="local" selected={companyType === "local"} onSelect={() => setCompanyType(companyType === "local" ? null : "local")} />
        <CompanyTypeCard type="foreign" selected={companyType === "foreign"} onSelect={() => setCompanyType(companyType === "foreign" ? null : "foreign")} />
      </Box>

      <Collapse in={companyType !== null} unmountOnExit>
        <InsuranceSearchForm onCancel={onCancel} onSearch={() => onSearch(companyType!)} />
      </Collapse>

      {companyType === null && (
        <Box sx={{ display: "flex", justifyContent: "flex-end", pt: 2, pb: 4, mt: 4 }}>
          <BrandButton variant="ghost" size="sm" onClick={onCancel} className="!text-[#f97316] !font-normal !px-4 !py-[6px] hover:!bg-[#FFF0E9]">Cancel</BrandButton>
        </Box>
      )}
    </Box>
  );
}