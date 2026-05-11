"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { AccordionSection } from "./AccordionSection";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import ButtonBase from "@mui/material/ButtonBase";
import { BrandButton } from "./BrandButton";
import { Check } from "lucide-react";
import { CircularTimes, PolygonWarningIcon, RetryIcon } from "./icons";

// ── Checkbox ──────────────────────────────────────────────────────────────────
function Checkbox({
  checked,
  onChange,
  id,
}: {
  checked: boolean;
  onChange: () => void;
  id?: string;
}) {
  return (
    <IconButton
      onClick={onChange}
      size="small"
      sx={{
        p: 1,
        "&:hover": { backgroundColor: "#FFF0E9" },
        "&:active": { transform: "scale(0.96)" },
      }}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{
          position: "absolute",
          opacity: 0,
          width: 0,
          height: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          width: 20,
          height: 20,
          borderRadius: "4px",
          border: "1px solid",
          borderColor: checked ? "#FF6B22" : "#5C5C5C",
          backgroundColor: checked ? "#FF6B22" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition:
            "background-color 0.15s ease, border-color 0.15s ease, transform 0.15s ease",
        }}
      >
        <Check
          size={14}
          strokeWidth={3}
          color="#fff"
          style={{
            opacity: checked ? 1 : 0,
            transform: checked ? "scale(1)" : "scale(0.7)",
            transition: "opacity 0.15s ease, transform 0.15s ease",
          }}
        />
      </Box>
    </IconButton>
  );
}

function CheckboxField({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.25 }}>
      <Checkbox checked={checked} onChange={onChange} />
      <Typography
        onClick={onChange}
        sx={{
          fontSize: 13,
          color: "#374151",
          lineHeight: 1,
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

// ── Field styles ──────────────────────────────────────────────────────────────
const fieldSx = {
  width: "100%",
  "& .MuiInputLabel-root": {
    fontSize: 11,
    color: "#242424",
    transform: "translate(12px, 12px) scale(1)",
    transition:
      "color 200ms cubic-bezier(0,0,0.2,1), transform 200ms cubic-bezier(0,0,0.2,1)",
    "&.Mui-focused": { color: "#FF6B22" },
    "&.MuiInputLabel-shrink": {
      transform: "translate(12px, -7px) scale(0.82)",
    },
  },
  "& .MuiOutlinedInput-root": {
    height: 44,
    fontSize: 13,
    fontWeight: 600,
    borderRadius: "4px",
    "& input": {
      padding: "12px 11px 10px 12px",
      fontSize: 13,
      fontWeight: 600,
      color: "#242424",
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
    },
    "& fieldset": {
      borderColor: "#242424",
      borderWidth: "1px",
      "& legend": { fontSize: "0.72em" },
    },
    "&:hover fieldset": { borderColor: "#4B5563" },
    "&.Mui-focused fieldset": { borderColor: "#FF6B22", borderWidth: "1px" },
    backgroundColor: "transparent",
    "&:hover": { backgroundColor: "transparent" },
    "&.Mui-focused": { backgroundColor: "transparent" },
  },
};

const selectSx = {
  width: "100%",
  "& .MuiInputLabel-root": {
    fontSize: 11,
    color: "#242424",
    transform: "translate(12px, 12px) scale(1)",
    transition:
      "color 200ms cubic-bezier(0,0,0.2,1), transform 200ms cubic-bezier(0,0,0.2,1)",
    "&.Mui-focused": { color: "#FF6B22" },
    "&.MuiInputLabel-shrink": {
      transform: "translate(12px, -7px) scale(0.82)",
    },
  },
  "& .MuiOutlinedInput-root": {
    height: 44,
    fontSize: 13,
    fontWeight: 600,
    borderRadius: "4px",
    "& fieldset": {
      borderColor: "#242424",
      borderWidth: "1px",
      "& legend": { fontSize: "0.72em" },
    },
    "&:hover fieldset": { borderColor: "#4B5563" },
    "&.Mui-focused fieldset": { borderColor: "#FF6B22", borderWidth: "1px" },
    backgroundColor: "transparent",
    "&:hover": { backgroundColor: "transparent" },
    "&.Mui-focused": { backgroundColor: "transparent" },
  },
  "& .MuiSelect-select": {
    padding: "12px 11px 10px 12px !important",
    fontSize: 13,
    fontWeight: 600,
    color: "#242424",
    display: "flex",
    alignItems: "center",
    height: "100%",
    boxSizing: "border-box",
  },
  "& .MuiSelect-icon": { right: 10, color: "#6B7280" },
};

// ── Grid helpers ──────────────────────────────────────────────────────────────
function Grid3({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 1.5,
        mt: 2,
      }}
    >
      {children}
    </Box>
  );
}
function Grid2({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 1.5,
        mt: 1.5,
      }}
    >
      {children}
    </Box>
  );
}
function FullRow({ children }: { children: React.ReactNode }) {
  return <Box sx={{ mt: 1.5 }}>{children}</Box>;
}

function OutlinedSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <FormControl sx={selectSx} size="small" fullWidth>
      <InputLabel
        sx={{
          fontSize: 11,
          color: "#9A9A9A",
          "&.Mui-focused": { color: "#FF6B22" },
        }}
      >
        {label}
      </InputLabel>
      <Select
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
        sx={{
          height: 44,
          fontSize: 13,
          fontWeight: 600,
          borderRadius: "4px",
          color: "#242424",
          backgroundColor: "transparent",
          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            padding: "0 12px",
            height: "44px !important",
            minHeight: "unset !important",
            fontSize: 13,
            fontWeight: 600,
            color: "#242424",
          },
          "& fieldset": { borderColor: "#242424", borderWidth: "1px" },
          "&:hover fieldset": { borderColor: "#4B5563" },
          "&.Mui-focused fieldset": {
            borderColor: "#FF6B22",
            borderWidth: "1px",
          },
        }}
      >
        {options.map((o) => (
          <MenuItem key={o} value={o} sx={{ fontSize: 13, color: "#242424" }}>
            {o}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

// ── Sections ──────────────────────────────────────────────────────────────────
function PersonalInformationSection({
  data,
}: {
  data: Record<string, string>;
}) {
  const [vals, setVals] = useState(data);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setVals((v) => ({ ...v, [k]: e.target.value }));
  return (
    <>
      <Grid3>
        <TextField
          label="Surname"
          value={vals.surname ?? ""}
          onChange={set("surname")}
          size="small"
          sx={fieldSx}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <TextField
          label="First name"
          value={vals.firstName ?? ""}
          onChange={set("firstName")}
          size="small"
          sx={fieldSx}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <TextField
          label="Middle Name"
          value={vals.middleName ?? ""}
          onChange={set("middleName")}
          size="small"
          sx={fieldSx}
          slotProps={{ inputLabel: { shrink: true } }}
        />
      </Grid3>
      <Grid3>
        <OutlinedSelect
          label="Title"
          value={vals.title ?? ""}
          onChange={(v) => setVals((s) => ({ ...s, title: v }))}
          options={["Mr", "Mrs", "Miss", "Dr", "Prof"]}
        />
        <TextField
          label="Maiden Name"
          value={vals.maidenName ?? ""}
          onChange={set("maidenName")}
          size="small"
          sx={fieldSx}
        />
        <TextField
          label="Former Names"
          value={vals.formerNames ?? ""}
          onChange={set("formerNames")}
          size="small"
          sx={fieldSx}
        />
      </Grid3>
      <Grid3>
        <OutlinedSelect
          label="Gender"
          value={vals.gender ?? ""}
          onChange={(v) => setVals((s) => ({ ...s, gender: v }))}
          options={["M", "F"]}
        />
        <TextField
          label="Date of Birth"
          value={vals.dob ?? ""}
          onChange={set("dob")}
          size="small"
          sx={fieldSx}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <OutlinedSelect
          label="Country of Birth"
          value={vals.countryOfBirth ?? ""}
          onChange={(v) => setVals((s) => ({ ...s, countryOfBirth: v }))}
          options={["Nigeria", "Ghana", "Kenya", "South Africa"]}
        />
      </Grid3>
      <Grid3>
        <OutlinedSelect
          label="Marital Status"
          value={vals.maritalStatus ?? ""}
          onChange={(v) => setVals((s) => ({ ...s, maritalStatus: v }))}
          options={["Single", "Married", "Divorced", "Widowed"]}
        />
        <TextField
          label="Phone Number"
          value={vals.phoneNumber ?? ""}
          onChange={set("phoneNumber")}
          size="small"
          sx={fieldSx}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <TextField
          label="Work Phone Number"
          value={vals.workPhone ?? ""}
          onChange={set("workPhone")}
          size="small"
          sx={fieldSx}
        />
      </Grid3>
      <Grid3>
        <TextField
          label="Email"
          value={vals.email ?? ""}
          onChange={set("email")}
          size="small"
          sx={fieldSx}
        />
        <TextField
          label="State of Origin"
          value={vals.stateOfOrigin ?? ""}
          onChange={set("stateOfOrigin")}
          size="small"
          sx={fieldSx}
        />
        <TextField
          label="Nationality"
          value={vals.nationality ?? ""}
          onChange={set("nationality")}
          size="small"
          sx={fieldSx}
        />
      </Grid3>
      <Grid3>
        <TextField
          label="BVN"
          value={vals.bvn ?? "0033445566"}
          onChange={set("bvn")}
          size="small"
          sx={fieldSx}
        />
        <TextField
          label="NIN"
          value={vals.nin ?? "0033445566"}
          onChange={set("nin")}
          size="small"
          sx={fieldSx}
        />
        <TextField
          select
          label="Preference"
          value={vals.preference ?? ""}
          onChange={set("preference")}
          size="small"
          sx={selectSx}
        >
          <MenuItem value="PREF">PREF</MenuItem>
          <MenuItem value="COMM">COMM</MenuItem>
          <MenuItem value="MEAN">MEAN</MenuItem>
        </TextField>
      </Grid3>
    </>
  );
}

function AddressInformationSection() {
  const [vals, setVals] = useState({
    address: "",
    country: "",
    state: "",
    city: "",
  });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setVals((v) => ({ ...v, [k]: e.target.value }));
  return (
    <>
      <FullRow>
        <TextField
          label="Residential Address"
          value={vals.address}
          onChange={set("address")}
          size="small"
          sx={{ ...fieldSx, width: "100%" }}
        />
      </FullRow>
      <Grid3>
        <OutlinedSelect
          label="Country"
          value={vals.country}
          onChange={(v) => setVals((s) => ({ ...s, country: v }))}
          options={["Nigeria", "Ghana", "Kenya"]}
        />
        <OutlinedSelect
          label="State"
          value={vals.state}
          onChange={(v) => setVals((s) => ({ ...s, state: v }))}
          options={["Lagos", "Abuja", "Rivers", "Kano"]}
        />
        <OutlinedSelect
          label="City"
          value={vals.city}
          onChange={(v) => setVals((s) => ({ ...s, city: v }))}
          options={["Ikeja", "Victoria Island", "Lekki"]}
        />
      </Grid3>
    </>
  );
}

function EmploymentInformationSection() {
  const [vals, setVals] = useState({
    status: "",
    occupation: "",
    employerName: "",
    incomeBand: "",
    employerAddress: "",
    country: "",
    state: "",
    city: "",
  });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setVals((v) => ({ ...v, [k]: e.target.value }));
  return (
    <>
      <Grid2>
        <OutlinedSelect
          label="Employment Status"
          value={vals.status}
          onChange={(v) => setVals((s) => ({ ...s, status: v }))}
          options={["Employed", "Self-employed", "Unemployed", "Retired"]}
        />
        <TextField
          label="Occupation"
          value={vals.occupation}
          onChange={set("occupation")}
          size="small"
          sx={fieldSx}
        />
      </Grid2>
      <Grid2>
        <TextField
          label="Employer's Name"
          value={vals.employerName}
          onChange={set("employerName")}
          size="small"
          sx={fieldSx}
        />
        <OutlinedSelect
          label="Annual Income Band"
          value={vals.incomeBand}
          onChange={(v) => setVals((s) => ({ ...s, incomeBand: v }))}
          options={["Below ₦1M", "₦1M–₦5M", "₦5M–₦10M", "Above ₦10M"]}
        />
      </Grid2>
      <FullRow>
        <TextField
          label="Employer's Address"
          value={vals.employerAddress}
          onChange={set("employerAddress")}
          size="small"
          sx={{ ...fieldSx, width: "100%" }}
        />
      </FullRow>
      <Grid3>
        <OutlinedSelect
          label="Country"
          value={vals.country}
          onChange={(v) => setVals((s) => ({ ...s, country: v }))}
          options={["Nigeria", "Ghana"]}
        />
        <OutlinedSelect
          label="State"
          value={vals.state}
          onChange={(v) => setVals((s) => ({ ...s, state: v }))}
          options={["Lagos", "Abuja"]}
        />
        <OutlinedSelect
          label="City"
          value={vals.city}
          onChange={(v) => setVals((s) => ({ ...s, city: v }))}
          options={["Ikeja", "VI"]}
        />
      </Grid3>
    </>
  );
}

function CitizenshipInformationSection() {
  const [isResident, setIsResident] = useState<"yes" | "no" | null>(null);
  const [vals, setVals] = useState({
    country: "",
    idType: "",
    issuingAuthority: "",
    taxId: "",
  });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setVals((v) => ({ ...v, [k]: e.target.value }));
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Typography sx={{ fontSize: 13, color: "#374151", maxWidth: 380 }}>
          Are you a citizen or permanent resident of another country?
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {(["yes", "no"] as const).map((opt) => (
            <CheckboxField
              key={opt}
              label={opt === "yes" ? "Yes" : "No"}
              checked={isResident === opt}
              onChange={() => setIsResident(isResident === opt ? null : opt)}
            />
          ))}
        </Box>
      </Box>
      <Collapse
        in={isResident === "yes"}
        timeout={420}
        easing={{
          enter: "cubic-bezier(0.22, 1, 0.36, 1)",
          exit: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        unmountOnExit
      >
        <Box sx={{ overflow: "hidden", pt: 0.5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mt: 1.5,
              mb: 1.5,
              opacity: isResident === "yes" ? 1 : 0,
              transform:
                isResident === "yes" ? "translateY(0)" : "translateY(-8px)",
              transition:
                "opacity 320ms ease, transform 420ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 700,
                color: "#FF6B22",
                whiteSpace: "nowrap",
              }}
            >
              If Yes, Kindly select
            </Typography>
            <Box sx={{ flex: 1, height: "1.5px", bgcolor: "#FF6B22" }} />
          </Box>
          <Box
            sx={{
              opacity: isResident === "yes" ? 1 : 0,
              transform:
                isResident === "yes" ? "translateY(0)" : "translateY(-8px)",
              transition:
                "opacity 320ms ease 40ms, transform 420ms cubic-bezier(0.22, 1, 0.36, 1) 40ms",
            }}
          >
            <FullRow>
              <OutlinedSelect
                label="Country of Citizen"
                value={vals.country}
                onChange={(v) => setVals((s) => ({ ...s, country: v }))}
                options={["Nigeria", "USA", "UK", "Canada"]}
              />
            </FullRow>
            <Grid2>
              <OutlinedSelect
                label="ID Type"
                value={vals.idType}
                onChange={(v) => setVals((s) => ({ ...s, idType: v }))}
                options={["Passport", "National ID", "Driver's License"]}
              />
              <TextField
                label="Issuing Authority"
                value={vals.issuingAuthority}
                onChange={set("issuingAuthority")}
                size="small"
                sx={fieldSx}
              />
            </Grid2>
          </Box>
        </Box>
      </Collapse>
      <Box sx={{ mt: 1.5, width: "50%", pr: 0.75 }}>
        <TextField
          label="Tax Identification No"
          value={vals.taxId}
          onChange={set("taxId")}
          size="small"
          sx={fieldSx}
        />
      </Box>
    </>
  );
}

function BankDetailsSection() {
  const [vals, setVals] = useState({
    bank: "",
    accountNumber: "",
    bvn: "",
    dateCreated: "",
  });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setVals((v) => ({ ...v, [k]: e.target.value }));
  return (
    <>
      <Grid2>
        <OutlinedSelect
          label="Bank's Name"
          value={vals.bank}
          onChange={(v) => setVals((s) => ({ ...s, bank: v }))}
          options={[
            "First Bank",
            "GTBank",
            "Zenith Bank",
            "Access Bank",
            "UBA",
          ]}
        />
        <TextField
          label="Account Number"
          value={vals.accountNumber}
          onChange={set("accountNumber")}
          size="small"
          sx={fieldSx}
        />
      </Grid2>
      <Grid2>
        <TextField
          label="BVN"
          value={vals.bvn}
          onChange={set("bvn")}
          size="small"
          sx={fieldSx}
        />
        <TextField
          label="Date Created"
          value={vals.dateCreated}
          onChange={set("dateCreated")}
          size="small"
          sx={fieldSx}
        />
      </Grid2>
    </>
  );
}

const HEAR_OPTIONS = [
  "Social Media",
  "Google Search",
  "Email Marketing",
  "Website",
  "Exhibition",
  "Family/Friend",
  "Agent/Marketer",
  "TV/Radio",
  "Print",
  "Seminar",
];

function HowDidYouHearSection() {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (opt: string) =>
    setSelected((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt],
    );
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "14px 8px",
        mt: 2,
      }}
    >
      {HEAR_OPTIONS.map((opt) => (
        <CheckboxField
          key={opt}
          label={opt}
          checked={selected.includes(opt)}
          onChange={() => toggle(opt)}
        />
      ))}
    </Box>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────
interface ClientInformationStepProps {
  prefillData?: Record<string, string>;
  hasComplianceIssue?: boolean;
  hasIntegrationDowntime?: boolean;
  hasDisparity?: boolean;
  /** When true: shows invalid NIN banner, Retry NIN Search, "Request for additional document" button */
  hasInvalidNin?: boolean;
  onBack: () => void;
  onCancel: () => void;
  onFinish: () => void;
  onViewDisparity?: () => void;
  /** Called when hasInvalidNin=true and user clicks "Request for additional document" */
  onRequestAdditionalDocument?: () => void;
}

// ── Main component ────────────────────────────────────────────────────────────
export function ClientInformationStep({
  prefillData = {},
  hasComplianceIssue = false,
  hasIntegrationDowntime = false,
  hasDisparity = false,
  hasInvalidNin = false,
  onBack,
  onCancel,
  onFinish,
  onViewDisparity,
  onRequestAdditionalDocument,
}: ClientInformationStepProps) {
  const [bannerDismissed, setBannerDismissed] = useState(false);
  // Tracks whether retry was attempted — clears the downtime banner and enables Continue
  const [retried, setRetried] = useState(false);
  const [retrying, setRetrying] = useState(false);

  const showDowntimeBanner =
    hasIntegrationDowntime && !bannerDismissed && !retried;
  // Continue disabled for downtime until retry. Invalid NIN has its own button so never needs Continue.
  const continueDisabled = hasIntegrationDowntime && !retried;

  const handleRetry = () => {
    setRetrying(true);
    // Simulate a 1.5s retry then succeed
    setTimeout(() => {
      setRetrying(false);
      setRetried(true);
    }, 1500);
  };

  const defaultData = {
    surname: "OLUGOKE",
    firstName: "MOHAMMED",
    middleName: "CHIJIOKE",
    title: "Mr",
    dob: "20/03/1986",
    phoneNumber: "08123456789",
    gender: "M",
    ...prefillData,
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Heading */}
      <Box sx={{ mb: 2.5, flexShrink: 0 }}>
        <Typography fontWeight={700} sx={{ fontSize: 22, color: "#111827" }}>
          Client&apos;s Information
        </Typography>
        <Typography sx={{ fontSize: 13, color: "#6B7280" }}>
          Below is the client&apos;s detail as currently present on the system
        </Typography>
      </Box>

      {/* Integration downtime banner */}
      {showDowntimeBanner && (
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 0.8,
            bgcolor: "#FFF0E9",
            border: "1.5px solid #FF6B22",
            borderRadius: "6px",
            px: 2,
            py: 0.8,
            mb: 1,
            flexShrink: 0,
          }}
        >
          <Box sx={{ flexShrink: 0, mt: "2px", color: "#FF6B22" }}>
            <PolygonWarningIcon />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{ fontSize: 13, fontWeight: 700, color: "#242424", mb: 0.3 }}
            >
              Verification could not be completed due to Integration Downtime
            </Typography>
            <Typography
              sx={{ fontSize: 12, color: "#333333", lineHeight: 1.6 }}
            >
              The client would be marked as unverified on the system if proceed
            </Typography>
          </Box>
          <IconButton
            onClick={() => setBannerDismissed(true)}
            size="small"
            sx={{
              mt: -0.5,
              "&:hover": { bgcolor: "#FFF0E9", color: "#374151" },
            }}
          >
            <CircularTimes />
          </IconButton>
        </Box>
      )}

      {/* Compliance issue banner */}
      {hasComplianceIssue && !hasIntegrationDowntime && (
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 0.8,
            bgcolor: "#FFF0E9",
            border: "1.5px solid #FF6B22",
            borderRadius: "6px",
            px: 2,
            py: 0.8,
            mb: 1,
            flexShrink: 0,
          }}
        >
          <Box sx={{ flexShrink: 0, mt: "2px", color: "#FF6B22" }}>
            <PolygonWarningIcon />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{ fontSize: 13, fontWeight: 700, color: "#242424", mb: 0.3 }}
            >
              Compliance Issue found
            </Typography>
            <Typography
              sx={{ fontSize: 12, color: "#333333", lineHeight: 1.6 }}
            >
              The client would be forwarded to the compliance team for final
              approval.
            </Typography>
          </Box>
          <IconButton
            onClick={() => setBannerDismissed(true)}
            size="small"
            sx={{
              mt: -0.5,
              "&:hover": { bgcolor: "#FFF0E9", color: "#374151" },
            }}
          >
            <CircularTimes />
          </IconButton>
        </Box>
      )}

      {/* Disparity found banner */}
      {hasDisparity && !bannerDismissed && (
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 0.8,
            bgcolor: "#FFF0E9",
            border: "1.5px solid #FF6B22",
            borderRadius: "6px",
            px: 2,
            py: 0.8,
            mb: 1,
            flexShrink: 0,
          }}
        >
          <Box sx={{ flexShrink: 0, mt: "2px", color: "#FF6B22" }}>
            <PolygonWarningIcon />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{ fontSize: 13, fontWeight: 700, color: "#242424", mb: 0.3 }}
            >
              Disparities found!
            </Typography>
            <Typography
              sx={{ fontSize: 12, color: "#333333", lineHeight: 1.6 }}
            >
              There is a disparity between NIN info and Proposal form.
            </Typography>
          </Box>
          <IconButton
            onClick={() => setBannerDismissed(true)}
            size="small"
            sx={{
              mt: -0.5,
              "&:hover": { bgcolor: "#FFF0E9", color: "#374151" },
            }}
          >
            <CircularTimes />
          </IconButton>
        </Box>
      )}

      {/* Invalid NIN banner */}
      {hasInvalidNin && !bannerDismissed && (
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 0.8,
            bgcolor: "#FFF0E9",
            border: "1.5px solid #FF6B22",
            borderRadius: "6px",
            px: 2,
            py: 0.8,
            mb: 1,
            flexShrink: 0,
          }}
        >
          <Box sx={{ flexShrink: 0, mt: "2px", color: "#FF6B22" }}>
            <PolygonWarningIcon />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{ fontSize: 13, fontWeight: 700, color: "#242424", mb: 0.3 }}
            >
              Verification could not be completed due to Invalid NIN
            </Typography>
            <Typography
              sx={{ fontSize: 12, color: "#333333", lineHeight: 1.6 }}
            >
              Additional verification document is required to continue.
            </Typography>
          </Box>
          <IconButton
            onClick={() => setBannerDismissed(true)}
            size="small"
            sx={{
              mt: -0.5,
              "&:hover": { bgcolor: "#FFF0E9", color: "#374151" },
            }}
          >
            <CircularTimes />
          </IconButton>
        </Box>
      )}

      {/* Scrollable accordion area */}
      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          pr: 0.5,
          "&::-webkit-scrollbar": { width: 4 },
          "&::-webkit-scrollbar-track": {
            bgcolor: "#F3F4F6",
            borderRadius: 9999,
          },
          "&::-webkit-scrollbar-thumb": {
            bgcolor: "#FF6B22",
            borderRadius: 9999,
          },
          scrollbarWidth: "thin",
          scrollbarColor: "#FF6B22 #F3F4F6",
        }}
      >
        <AccordionSection title="Personal Information" defaultOpen={false}>
          <PersonalInformationSection data={defaultData} />
        </AccordionSection>
        <AccordionSection title="Address Information" defaultOpen={false}>
          <AddressInformationSection />
        </AccordionSection>
        <AccordionSection title="Employment Information" defaultOpen={false}>
          <EmploymentInformationSection />
        </AccordionSection>
        <AccordionSection title="Citizenship Information" defaultOpen={false}>
          <CitizenshipInformationSection />
        </AccordionSection>
        <AccordionSection title="Bank Details" defaultOpen={false}>
          <BankDetailsSection />
        </AccordionSection>
        <AccordionSection
          title="How did you hear about us?"
          defaultOpen={false}
        >
          <HowDidYouHearSection />
        </AccordionSection>
        {/* Retry NIN Search — shown for both downtime and invalid NIN, not yet retried */}
        {(hasIntegrationDowntime || hasInvalidNin) && !retried && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mb: 0.5,
              flexShrink: 0,
            }}
          >
            <ButtonBase
              onClick={handleRetry}
              disabled={retrying}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                fontSize: 12,
                fontWeight: 600,
                color: retrying ? "#9CA3AF" : "#FF6B22",
                px: 1,
                py: 0.5,
                borderRadius: "4px",
                transition: "opacity 0.15s",
                "&:hover": { opacity: 0.75 },
                "&:disabled": { cursor: "not-allowed" },
              }}
            >
              {/* Retry icon */}
              <Box
                sx={{
                  display: "flex",
                  animation: retrying ? "spin 0.9s linear infinite" : "none",
                  "@keyframes spin": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                  },
                }}
              >
                <RetryIcon />
              </Box>
              {retrying ? "Retrying..." : "Retry NIN Search"}
            </ButtonBase>
          </Box>
        )}
      </Box>

      {/* Footer */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pt: 2.5,
          flexShrink: 0,
        }}
      >
        <BrandButton onClick={onBack} variant="outline" className="!px-[28px]">
          Back
        </BrandButton>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Cancel hidden when disparity or invalid NIN is active */}
          {!hasDisparity && !hasInvalidNin && (
            <BrandButton
              variant="ghost"
              size="sm"
              onClick={onCancel}
              className="!text-[#f97316] !font-normal !px-4 hover:!bg-[#FFF0E9]"
            >
              Cancel
            </BrandButton>
          )}

          {hasInvalidNin ? (
            /* Invalid NIN — primary button opens Request for Additional Document modal */
            <BrandButton
              onClick={onRequestAdditionalDocument}
              className="!py-[4px] !px-[20px]"
              size="sm"
            >
              Request for additional document
            </BrandButton>
          ) : hasDisparity ? (
            <BrandButton
              onClick={onViewDisparity}
              className="!py-[4px] !px-[36px]"
              size="sm"
            >
              View Disparity
            </BrandButton>
          ) : (
            <BrandButton
              onClick={continueDisabled ? undefined : onFinish}
              className={`!py-[4px] !px-[36px] ${continueDisabled ? "!opacity-40 !cursor-not-allowed !pointer-events-none" : ""}`}
              size="sm"
            >
              {hasIntegrationDowntime
                ? retried
                  ? "Finish Onboarding"
                  : "Continue"
                : hasComplianceIssue
                  ? "Continue"
                  : "Finish Onboarding"}
            </BrandButton>
          )}
        </Box>
      </Box>
    </Box>
  );
}
