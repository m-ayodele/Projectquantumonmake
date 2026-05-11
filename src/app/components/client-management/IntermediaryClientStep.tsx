"use client";

import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ButtonBase from "@mui/material/ButtonBase";
import Collapse from "@mui/material/Collapse";
import { BrandButton } from "./BrandButton";
import { IntermediaryIcon, LocalInsuranceIcon } from "./icons";

function CheckBadge() {
  return (
    <div style={{ position: "absolute", top: 2, right: 2, zIndex: 2 }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
          fill="#FF6B22"
        />
      </svg>
    </div>
  );
}

interface FileFieldConfig {
  key: string;
  label: string;
  required?: boolean;
}

function FileUploadField({ config }: { config: FileFieldConfig }) {
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
          {fileName || config.label}
          {config.required && !fileName && <span className="text-red-500 ml-[2px]">*</span>}
        </p>
      </Box>
    </Box>
  );
}

const fieldSx = {
  width: "100%",
  "& .MuiInputLabel-root": {
    fontSize: 12, color: "#333333", fontWeight: 600,
    transform: "translate(10px, 10px) scale(1)",
    transition: "color 200ms cubic-bezier(0,0,0.2,1), transform 200ms cubic-bezier(0,0,0.2,1)",
    "&.Mui-focused": { color: "#FF6B22" },
    "&.MuiInputLabel-shrink": { transform: "translate(10px, -8px) scale(0.85)" },
  },
  "& .MuiOutlinedInput-root": {
    height: 36, fontSize: 12, borderRadius: "4px", backgroundColor: "transparent",
    "& input": { padding: "12px 10px 4px 10px", fontSize: 12, color: "#2B2B2B", height: "auto", boxSizing: "border-box" },
    "& fieldset": { borderColor: "#333333", borderWidth: "1px", "& legend": { fontSize: "0.75em" } },
    "&:hover fieldset": { borderColor: "#8B8B8B" },
    "&.Mui-focused fieldset": { borderColor: "#FF6B22", borderWidth: "1px" },
  },
};

// ── Intermediary type card ─────────────────────────────────────────────────────
interface IntermediaryTypeCardProps {
  type: "agent" | "broker";
  selected: boolean;
  onSelect: () => void;
}

function IntermediaryTypeCard({ type, selected, onSelect }: IntermediaryTypeCardProps) {
  const isAgent = type === "agent";
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
          {isAgent ? <IntermediaryIcon /> : <LocalInsuranceIcon />}
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#242424", lineHeight: "14px" }}>
          {isAgent ? "Agent" : "Broker"}
        </Typography>
        <Typography sx={{ fontSize: 11, color: "#6B7280", lineHeight: "16px" }}>
          {isAgent ? "Verified via NIMC" : "Verified via CAC & NAICOM"}
        </Typography>
      </Box>
    </ButtonBase>
  );
}

// ── Agent search form ─────────────────────────────────────────────────────────
// hideManual: true for agent-2/3/4/5 (upload only), false for agent-1 (shows manual fields)
function AgentSearchForm({
  onCancel,
  onSearch,
  hideManual = false,
}: {
  onCancel: () => void;
  onSearch: () => void;
  hideManual?: boolean;
}) {
  const [manualOpen, setManualOpen] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [nin, setNin] = useState("");

  return (
    <Box sx={{ mt: 2.5 }}>
      <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#2A2A2A", mb: 1.5 }}>
        Check for Existing Client
      </Typography>
      <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#2A2A2A", mb: 0.25 }}>
        {hideManual ? "Upload Proposal form" : "Upload KYC form"}
      </Typography>
      <Typography sx={{ fontSize: 10.5, color: "#9A9A9A", mb: 1 }}>
        The system will scan and extract the client details automatically
      </Typography>
      <FileUploadField
        config={{ key: hideManual ? "proposal" : "kyc", label: hideManual ? "Proposal Form" : "KYC Form", required: true }}
      />

      {/* Manual section only for agent-1 */}
      {!hideManual && (
        <>
          <Box sx={{ mt: 1.5, mb: 1.5, display: "flex", alignItems: "center", gap: 1.2 }}>
            <Box sx={{ flex: 1, height: "1px", bgcolor: "#BBBEC5" }} />
            <ButtonBase
              onClick={() => setManualOpen((v) => !v)}
              sx={{ color: "#E57912", fontSize: 11, fontWeight: 400, whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: 0.5 }}
            >
              or enter details manually
              <Box component="span" sx={{ fontSize: 10, color: "#7A7A7A", transform: manualOpen ? "rotate(0deg)" : "rotate(180deg)", transition: "transform 0.2s ease", lineHeight: 1, display: "inline-flex", alignItems: "center" }}>
                <svg width="9" height="5" viewBox="0 0 9 5" fill="none">
                  <path d="M4.33422 7.82993e-05C4.68422 7.83299e-05 5.03422 0.135078 5.29922 0.400078L8.55922 3.66008C8.70422 3.80508 8.70422 4.04508 8.55922 4.19008C8.41422 4.33508 8.17422 4.33508 8.02922 4.19008L4.76922 0.930078C4.52922 0.690078 4.13922 0.690078 3.89922 0.930078L0.639219 4.19008C0.494219 4.33508 0.254219 4.33508 0.109219 4.19008C-0.0357818 4.04508 -0.0357818 3.80508 0.109219 3.66008L3.36922 0.400078C3.63422 0.135078 3.98422 7.82687e-05 4.33422 7.82993e-05Z" fill="#242424" />
                </svg>
              </Box>
            </ButtonBase>
            <Box sx={{ flex: 1, height: "1px", bgcolor: "#BBBEC5" }} />
          </Box>
          <Collapse in={manualOpen} unmountOnExit>
            <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#242424", mb: 1 }}>
              Enter search criteria manually
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5, mb: 1.5 }}>
              <TextField label="Full Name" size="small" value={fullName} onChange={(e) => setFullName(e.target.value)} sx={fieldSx} />
              <TextField label="Email" size="small" value={email} onChange={(e) => setEmail(e.target.value)} sx={fieldSx} />
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1.5 }}>
              <TextField label="Date of Birth" size="small" value={dob} onChange={(e) => setDob(e.target.value)} placeholder="DD/MM/YYYY" sx={fieldSx} />
              <TextField label="Phone Number" size="small" value={phone} onChange={(e) => setPhone(e.target.value)} sx={fieldSx} />
              <TextField label="NIN" size="small" value={nin} onChange={(e) => setNin(e.target.value)} sx={fieldSx} />
            </Box>
          </Collapse>
        </>
      )}

      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 1, pt: 2, pb: 4, mt: 4 }}>
        <BrandButton variant="ghost" size="sm" onClick={onCancel} className="!text-[#f97316] !font-normal !px-4 !py-[6px] hover:!bg-[#FFF0E9]">Cancel</BrandButton>
        <BrandButton className="!py-[4px] !px-[36px]" size="sm" onClick={onSearch}>Search</BrandButton>
      </Box>
    </Box>
  );
}

// ── Broker search form — upload only, no manual section ───────────────────────
function BrokerSearchForm({
  onCancel,
  onSearch,
}: {
  onCancel: () => void;
  onSearch: () => void;
}) {
  return (
    <Box sx={{ mt: 2.5 }}>
      <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#2A2A2A", mb: 1.5 }}>
        Check for Existing Client
      </Typography>
      <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#2A2A2A", mb: 0.25 }}>
        Upload Proposal/KYC form
      </Typography>
      <Typography sx={{ fontSize: 10.5, color: "#9A9A9A", mb: 1 }}>
        The system will scan and extract the client details automatically
      </Typography>
      <FileUploadField config={{ key: "kyc", label: "KYC Form", required: true }} />

      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 1, pt: 2, pb: 4, mt: 4 }}>
        <BrandButton variant="ghost" size="sm" onClick={onCancel} className="!text-[#f97316] !font-normal !px-4 !py-[6px] hover:!bg-[#FFF0E9]">Cancel</BrandButton>
        <BrandButton className="!py-[4px] !px-[36px]" size="sm" onClick={onSearch}>Search</BrandButton>
      </Box>
    </Box>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────
interface IntermediaryClientStepProps {
  onSearch: (subType: "agent" | "broker") => void;
  onCancel: () => void;
  scenarioId?: string;
}

// NOTE: No local loading state here — the parent (AddNewClientModal) owns
// loading via triggerSearch(). This eliminates the competing loader flash.
export function IntermediaryClientStep({ onSearch, onCancel, scenarioId }: IntermediaryClientStepProps) {
  const [intermediaryType, setIntermediaryType] = useState<"agent" | "broker" | null>(null);

  return (
    <Box sx={{ mt: 2.5 }}>
      <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#2A2A2A", mb: 0.5 }}>
        Choose intermediary type
      </Typography>
      <Typography sx={{ fontSize: 10.5, color: "#9A9A9A", mb: 1.5 }}>
        Select the intermediary type to apply the correct onboarding workflow
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5, mb: 0 }}>
        <IntermediaryTypeCard
          type="agent"
          selected={intermediaryType === "agent"}
          onSelect={() => setIntermediaryType(intermediaryType === "agent" ? null : "agent")}
        />
        <IntermediaryTypeCard
          type="broker"
          selected={intermediaryType === "broker"}
          onSelect={() => setIntermediaryType(intermediaryType === "broker" ? null : "broker")}
        />
      </Box>

      <Collapse in={intermediaryType === "agent"} unmountOnExit>
        <AgentSearchForm
          onCancel={onCancel}
          onSearch={() => onSearch("agent")}
          hideManual={
            scenarioId === "agent-2" ||
            scenarioId === "agent-3" ||
            scenarioId === "agent-4" ||
            scenarioId === "agent-5"
          }
        />
      </Collapse>

      <Collapse in={intermediaryType === "broker"} unmountOnExit>
        <BrokerSearchForm onCancel={onCancel} onSearch={() => onSearch("broker")} />
      </Collapse>

      {intermediaryType === null && (
        <Box sx={{ display: "flex", justifyContent: "flex-end", pt: 2, pb: 4, mt: 4 }}>
          <BrandButton variant="ghost" size="sm" onClick={onCancel} className="!text-[#f97316] !font-normal !px-4 !py-[6px] hover:!bg-[#FFF0E9]">Cancel</BrandButton>
        </Box>
      )}
    </Box>
  );
}