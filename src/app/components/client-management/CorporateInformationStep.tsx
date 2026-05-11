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
import ButtonBase from "@mui/material/ButtonBase";
import { BrandButton } from "./BrandButton";
import { Check } from "lucide-react";
import { CircularTimes, PolygonWarningIcon, RetryIcon } from "./icons";

// ── Checkbox ──────────────────────────────────────────────────────────────────
function Checkbox({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
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
function CompanyInformationSection({ data }: { data: Record<string, string> }) {
  const [vals, setVals] = useState({
    clientCategory: "Employer",
    businessName: "NNPC Ltd",
    rcNumber: "",
    incorporationDate: "20/03/1986",
    countryOfIncorporation: "",
    sector: "",
    industry: "",
    companyPhoneNo: "",
    tin: "",
    website: "",
    isSubsidiaryYes: false,
    isSubsidiaryNo: false,
    parentCompany: "",
    ...data,
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setVals((v) => ({ ...v, [k]: e.target.value }));

  return (
    <>
      <Grid3>
        <OutlinedSelect
          label="Client Category"
          value={vals.clientCategory}
          onChange={(v) => setVals((s) => ({ ...s, clientCategory: v }))}
          options={["Employer", "Corporate", "Association", "Union", "Club"]}
        />

        <TextField
          label="Business Name"
          value={vals.businessName}
          onChange={set("businessName")}
          size="small"
          sx={fieldSx}
          slotProps={{ inputLabel: { shrink: true } }}
        />
      </Grid3>

      <Grid3>
        <TextField
          label="RC Number"
          value={vals.rcNumber}
          onChange={set("rcNumber")}
          size="small"
          sx={fieldSx}
        />

        <TextField
          label="Date of Incorporation"
          value={vals.incorporationDate}
          onChange={set("incorporationDate")}
          size="small"
          sx={fieldSx}
          slotProps={{ inputLabel: { shrink: true } }}
        />

        <OutlinedSelect
          label="Country of Incorporation"
          value={vals.countryOfIncorporation}
          onChange={(v) =>
            setVals((s) => ({ ...s, countryOfIncorporation: v }))
          }
          options={["Nigeria", "Ghana", "Kenya", "South Africa"]}
        />
      </Grid3>

      <Grid3>
        <OutlinedSelect
          label="Sector"
          value={vals.sector}
          onChange={(v) => setVals((s) => ({ ...s, sector: v }))}
          options={["Public", "Private", "Government", "NGO"]}
        />

        <OutlinedSelect
          label="Industry"
          value={vals.industry}
          onChange={(v) => setVals((s) => ({ ...s, industry: v }))}
          options={[
            "Oil & Gas",
            "Insurance",
            "Banking",
            "Technology",
            "Healthcare",
          ]}
        />

        <TextField
          label="Company Phone No"
          value={vals.companyPhoneNo}
          onChange={set("companyPhoneNo")}
          size="small"
          sx={fieldSx}
        />
      </Grid3>

      <Grid2>
        <TextField
          label="Tax Identification Number"
          value={vals.tin}
          onChange={set("tin")}
          size="small"
          sx={fieldSx}
        />

        <TextField
          label="Website"
          value={vals.website}
          onChange={set("website")}
          size="small"
          sx={fieldSx}
        />
      </Grid2>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1.5 }}>
        <Typography sx={{ fontSize: 12, color: "#242424" }}>
          Is this a subsidiary company?
        </Typography>

        <CheckboxField
          label="Yes"
          checked={vals.isSubsidiaryYes}
          onChange={() =>
            setVals((s) => ({
              ...s,
              isSubsidiaryYes: !s.isSubsidiaryYes,
              isSubsidiaryNo: false,
            }))
          }
        />

        <CheckboxField
          label="No"
          checked={vals.isSubsidiaryNo}
          onChange={() =>
            setVals((s) => ({
              ...s,
              isSubsidiaryNo: !s.isSubsidiaryNo,
              isSubsidiaryYes: false,
            }))
          }
        />
      </Box>

      <FullRow>
        <TextField
          label="If yes, Specify Parent’s Company"
          value={vals.parentCompany}
          onChange={set("parentCompany")}
          size="small"
          sx={{ ...fieldSx, width: "100%" }}
        />
      </FullRow>
    </>
  );
}

function AddressInformationSection() {
  const [vals, setVals] = useState({
    officeAddress: "",
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
          label="Office Address"
          value={vals.officeAddress}
          onChange={set("officeAddress")}
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

function ContactPersonSection() {
  const [vals, setVals] = useState({
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setVals((v) => ({ ...v, [k]: e.target.value }));

  return (
    <>
      <FullRow>
        <TextField
          label="Contact Person’s Name"
          value={vals.contactName}
          onChange={set("contactName")}
          size="small"
          sx={{ ...fieldSx, width: "100%" }}
        />
      </FullRow>

      <Grid2>
        <TextField
          label="Contact Person’s Email"
          value={vals.contactEmail}
          onChange={set("contactEmail")}
          size="small"
          sx={fieldSx}
        />

        <TextField
          label="Contact Person’s Phone Number"
          value={vals.contactPhone}
          onChange={set("contactPhone")}
          size="small"
          sx={fieldSx}
        />
      </Grid2>
    </>
  );
}

function DirectorRow({ index }: { index: number }) {
  const [vals, setVals] = useState({
    name: "",
    role: "",
    bvn: "",
    phone: "",
  });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setVals((v) => ({ ...v, [k]: e.target.value }));
  return (
    <Box
      sx={{
        border: "1px solid #E5E7EB",
        borderRadius: "6px",
        p: 1.5,
        mt: index === 0 ? 2 : 1.5,
      }}
    >
      <Typography
        sx={{ fontSize: 12, fontWeight: 700, color: "#6B7280", mb: 1 }}
      >
        Director / Beneficial Owner {index + 1}
      </Typography>
      <Grid2>
        <TextField
          label="Full Name"
          value={vals.name}
          onChange={set("name")}
          size="small"
          sx={fieldSx}
        />
        <OutlinedSelect
          label="Role"
          value={vals.role}
          onChange={(v) => setVals((s) => ({ ...s, role: v }))}
          options={[
            "Chairman",
            "CEO / MD",
            "Director",
            "Company Secretary",
            "Beneficial Owner",
          ]}
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
          label="Phone Number"
          value={vals.phone}
          onChange={set("phone")}
          size="small"
          sx={fieldSx}
        />
      </Grid2>
    </Box>
  );
}

function DirectorBlock({ title }: { title: string }) {
  const [vals, setVals] = useState({
    title: "",
    surname: "",
    lastNames: "",
    gender: "",
    dob: "",
    nationality: "",
    address: "",
    country: "",
    state: "",
    city: "",
    occupation: "",
    phoneNumber: "",
    email: "",
    idType: "",
    idNumber: "",
    issuingDate: "",
    issuingAuthority: "",
    issuingCountry: "",
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setVals((v) => ({ ...v, [k]: e.target.value }));

  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 700,
            color: "#242424",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Typography>
        <Box sx={{ flex: 1, height: "1px", bgcolor: "#767676" }} />
      </Box>

      <Grid3>
        <OutlinedSelect
          label="Title"
          value={vals.title}
          onChange={(v) => setVals((s) => ({ ...s, title: v }))}
          options={["Mr", "Mrs", "Miss", "Dr", "Prof"]}
        />

        <TextField
          label="Surname"
          value={vals.surname}
          onChange={set("surname")}
          size="small"
          sx={fieldSx}
        />

        <TextField
          label="Last Names"
          value={vals.lastNames}
          onChange={set("lastNames")}
          size="small"
          sx={fieldSx}
        />
      </Grid3>

      <Grid3>
        <OutlinedSelect
          label="Gender"
          value={vals.gender}
          onChange={(v) => setVals((s) => ({ ...s, gender: v }))}
          options={["Male", "Female"]}
        />

        <TextField
          label="Date of Birth"
          value={vals.dob}
          onChange={set("dob")}
          size="small"
          placeholder="Select Date"
          sx={fieldSx}
        />

        <OutlinedSelect
          label="Nationality"
          value={vals.nationality}
          onChange={(v) => setVals((s) => ({ ...s, nationality: v }))}
          options={["Nigeria", "Ghana", "Kenya", "South Africa"]}
        />
      </Grid3>

      <FullRow>
        <TextField
          label="Address"
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

      <Grid3>
        <TextField
          label="Occupation"
          value={vals.occupation}
          onChange={set("occupation")}
          size="small"
          sx={fieldSx}
        />

        <TextField
          label="Phone Number"
          value={vals.phoneNumber}
          onChange={set("phoneNumber")}
          size="small"
          sx={fieldSx}
        />

        <TextField
          label="Email"
          value={vals.email}
          onChange={set("email")}
          size="small"
          sx={fieldSx}
        />
      </Grid3>

      <Grid3>
        <OutlinedSelect
          label="ID Type"
          value={vals.idType}
          onChange={(v) => setVals((s) => ({ ...s, idType: v }))}
          options={[
            "National ID",
            "Passport",
            "Driver's License",
            "Voter's Card",
          ]}
        />

        <TextField
          label="ID Number"
          value={vals.idNumber}
          onChange={set("idNumber")}
          size="small"
          sx={fieldSx}
        />

        <TextField
          label="Issuing Date"
          value={vals.issuingDate}
          onChange={set("issuingDate")}
          size="small"
          placeholder="Select Date"
          sx={fieldSx}
        />
      </Grid3>

      <Grid3>
        <TextField
          label="Issuing Authority"
          value={vals.issuingAuthority}
          onChange={set("issuingAuthority")}
          size="small"
          sx={fieldSx}
        />

        <TextField
          label="Issuing Country"
          value={vals.issuingCountry}
          onChange={set("issuingCountry")}
          size="small"
          sx={fieldSx}
        />

        <Box />
      </Grid3>
    </Box>
  );
}

function DirectorsSection() {
  return (
    <>
      <DirectorBlock title="Director 1" />
      <DirectorBlock title="Director 2" />
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
interface CorporateInformationStepProps {
  prefillData?: Record<string, string>;
  hasComplianceIssue?: boolean;
  hasIntegrationDowntime?: boolean;
  hasDisparity?: boolean;
  hasInvalidRc?: boolean;
  onBack: () => void;
  onCancel: () => void;
  onFinish: () => void;
  onViewDisparity?: () => void;
  onRequestAdditionalDocument?: () => void;
}

// ── Main component ────────────────────────────────────────────────────────────
export function CorporateInformationStep({
  prefillData = {},
  hasComplianceIssue = false,
  hasIntegrationDowntime = false,
  hasDisparity = false,
  hasInvalidRc = false,
  onBack,
  onCancel,
  onFinish,
  onViewDisparity,
  onRequestAdditionalDocument,
}: CorporateInformationStepProps) {
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [retried, setRetried] = useState(false);
  const [retrying, setRetrying] = useState(false);

  const showDowntimeBanner =
    hasIntegrationDowntime && !bannerDismissed && !retried;
  const continueDisabled = hasIntegrationDowntime && !retried;

  const handleRetry = () => {
    setRetrying(true);
    setTimeout(() => {
      setRetrying(false);
      setRetried(true);
    }, 1500);
  };

  const defaultData = {
    businessName: "LEADWAY ASSURANCE CO. LTD",
    rcNumber: "RC-0033445566",
    tin: "0033445566",
    incorporationDate: "15/06/2001",
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
              The client would be marked as unverified on the system if you
              proceed
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

      {/* Disparity banner */}
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
              There is a disparity between CAC info and Proposal form.
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

      {/* Invalid RC banner */}
      {hasInvalidRc && !bannerDismissed && (
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
              Verification could not be completed due to Invalid RC Number
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
        <AccordionSection title="Corporate Information" defaultOpen={false}>
          <CompanyInformationSection data={defaultData} />
        </AccordionSection>

        <AccordionSection title="Address Information" defaultOpen={false}>
          <AddressInformationSection />
        </AccordionSection>

        <AccordionSection title="Contact Person" defaultOpen={false}>
          <ContactPersonSection />
        </AccordionSection>

        <AccordionSection title="Director Information" defaultOpen={false}>
          <DirectorsSection />
        </AccordionSection>

        <AccordionSection
          title="How did you hear about us?"
          defaultOpen={false}
        >
          <HowDidYouHearSection />
        </AccordionSection>

        {/* Retry CAC/RC Search */}
        {(hasIntegrationDowntime || hasInvalidRc) && !retried && (
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
             {retrying
  ? "Retrying..."
  : hasInvalidRc
    ? "Retry RC Number Search"
    : "Retry NIN Search"}
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
          {!hasDisparity && !hasInvalidRc && (
            <BrandButton
              variant="ghost"
              size="sm"
              onClick={onCancel}
              className="!text-[#f97316] !font-normal !px-4 hover:!bg-[#FFF0E9]"
            >
              Cancel
            </BrandButton>
          )}

          {hasInvalidRc ? (
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
    className={`!py-[4px] !px-[36px] ${
      continueDisabled ? "!opacity-40 !cursor-not-allowed !pointer-events-none" : ""
    }`}
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
