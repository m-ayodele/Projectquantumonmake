"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import ButtonBase from "@mui/material/ButtonBase";
import { AccordionSection } from "./AccordionSection";
import { BrandButton } from "./BrandButton";
import { CircularTimes, PolygonWarningIcon, RetryIcon } from "./icons";
import { QuantumDateField } from "./QuantumDateField";
import { Dayjs } from "dayjs";
import { QuantumRadioGroup } from "./QuantumRadioGroup";

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

const dateSx = {
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
    },
    "& fieldset": {
      borderColor: "#242424",
      borderWidth: "1px",
      "& legend": { fontSize: "0.72em" },
    },
    "&:hover fieldset": { borderColor: "#4B5563" },
    "&.Mui-focused fieldset": { borderColor: "#FF6B22", borderWidth: "1px" },
    backgroundColor: "transparent",
  },
  "& .MuiSvgIcon-root": { color: "#6B7280", fontSize: 18 },
};

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

function StyledDateField({
  label,
  value,
  onChange,
}: {
  label: string;
  value?: Dayjs | null;
  onChange?: (v: Dayjs | null) => void;
}) {
  return (
    <Box sx={dateSx}>
      <QuantumDateField
        label={label}
        value={value ?? null}
        onChange={onChange}
      />
    </Box>
  );
}

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

function IntermediaryInformationSection() {
  const [vals, setVals] = useState({
    intermediaryType: "Agent",
    nim: "",
    naicomLicenseNumber: "",
    licenseIssuingDate: null as Dayjs | null,
    licenseExpiryDate: null as Dayjs | null,
  });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setVals((v) => ({ ...v, [k]: e.target.value }));

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 0.8fr 1.45fr",
          gap: 1.5,
          mt: 2,
        }}
      >
        <OutlinedSelect
          label="Intermediary Type"
          value={vals.intermediaryType}
          onChange={(v) => setVals((s) => ({ ...s, intermediaryType: v }))}
          options={["Agent"]}
        />
        <TextField
          label="NIN"
          value={vals.nim}
          onChange={set("nim")}
          size="small"
          sx={fieldSx}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <TextField
          label="NAICOM License Number"
          value={vals.naicomLicenseNumber}
          onChange={set("naicomLicenseNumber")}
          size="small"
          sx={fieldSx}
        />
      </Box>

      <Grid2>
        <StyledDateField
          label="License Issuing Date"
          value={vals.licenseIssuingDate}
          onChange={(v) => setVals((s) => ({ ...s, licenseIssuingDate: v }))}
        />
        <StyledDateField
          label="License Expiry Date"
          value={vals.licenseExpiryDate}
          onChange={(v) => setVals((s) => ({ ...s, licenseExpiryDate: v }))}
        />
      </Grid2>
    </>
  );
}

function PersonalDetailsSection() {
  const [vals, setVals] = useState({
    firstName: "",
    lastName: "",
    otherNames: "",
    gender: "",
    maritalStatus: "",
    dateOfBirth: null as Dayjs | null,
    employmentDate: null as Dayjs | null,
    stateOfOrigin: "",
    nationality: "",
    residentialAddress: "",
    country: "",
    state: "",
    city: "",
  });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setVals((v) => ({ ...v, [k]: e.target.value }));

  return (
    <>
      <Grid3>
        <TextField
          label="First Name"
          value={vals.firstName}
          onChange={set("firstName")}
          size="small"
          sx={fieldSx}
        />
        <TextField
          label="Last Name"
          value={vals.lastName}
          onChange={set("lastName")}
          size="small"
          sx={fieldSx}
        />
        <TextField
          label="Other Names"
          value={vals.otherNames}
          onChange={set("otherNames")}
          size="small"
          sx={fieldSx}
        />
        <OutlinedSelect
          label="Gender"
          value={vals.gender}
          onChange={(v) => setVals((s) => ({ ...s, gender: v }))}
          options={["Male", "Female"]}
        />
        <OutlinedSelect
          label="Marital Status"
          value={vals.maritalStatus}
          onChange={(v) => setVals((s) => ({ ...s, maritalStatus: v }))}
          options={["Single", "Married", "Divorced", "Widowed"]}
        />
        <StyledDateField
          label="Date of Birth"
          value={vals.dateOfBirth}
          onChange={(v) => setVals((s) => ({ ...s, dateOfBirth: v }))}
        />
        <StyledDateField
          label="Employment Date"
          value={vals.employmentDate}
          onChange={(v) => setVals((s) => ({ ...s, employmentDate: v }))}
        />
        <OutlinedSelect
          label="State of Origin"
          value={vals.stateOfOrigin}
          onChange={(v) => setVals((s) => ({ ...s, stateOfOrigin: v }))}
          options={["Lagos", "Oyo", "Abuja", "Kano", "Rivers"]}
        />
        <OutlinedSelect
          label="Nationality"
          value={vals.nationality}
          onChange={(v) => setVals((s) => ({ ...s, nationality: v }))}
          options={["Nigerian"]}
        />
      </Grid3>

      <FullRow>
        <TextField
          label="Residential Address"
          value={vals.residentialAddress}
          onChange={set("residentialAddress")}
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
          label="City / Town"
          value={vals.city}
          onChange={(v) => setVals((s) => ({ ...s, city: v }))}
          options={["Ikeja", "Victoria Island", "Lekki"]}
        />
      </Grid3>
    </>
  );
}

function ContactInformationSection() {
  const [vals, setVals] = useState({
    countryCode: "+234 🇳🇬",
    phoneNumber: "",
    alternativePhone: "",
    email: "",
    alternativeEmail: "",
    preferredCommunication: "",
  });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setVals((v) => ({ ...v, [k]: e.target.value }));

  return (
    <>
      {/* Row 1: country code dropdown (narrow) + phone number (wide) */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "150px 1fr",
          gap: 1.5,
          mt: 2,
        }}
      >
        <OutlinedSelect
          label="Code"
          value={vals.countryCode}
          onChange={(v) => setVals((s) => ({ ...s, countryCode: v }))}
          options={[
            "+234 🇳🇬",
            "+233 🇬🇭",
            "+254 🇰🇪",
            "+27  🇿🇦",
            "+225 🇨🇮",
            "+221 🇸🇳",
            "+237 🇨🇲",
            "+241 🇬🇦",
            "+242 🇨🇬",
            "+243 🇨🇩",
            "+228 🇹🇬",
            "+229 🇧🇯",
            "+226 🇧🇫",
            "+223 🇲🇱",
            "+227 🇳🇪",
            "+245 🇬🇼",
            "+235 🇹🇩",
            "+236 🇨🇫",
            "+240 🇬🇶",
          ]}
        />
        <TextField
          label="Phone Number"
          value={vals.phoneNumber}
          onChange={set("phoneNumber")}
          size="small"
          sx={fieldSx}
        />
      </Box>

      {/* Row 2: alternative phone + email */}
      <Grid2>
        <TextField
          label="Alternative Phone Number"
          value={vals.alternativePhone}
          onChange={set("alternativePhone")}
          size="small"
          sx={fieldSx}
        />
        <TextField
          label="Email Address"
          value={vals.email}
          onChange={set("email")}
          size="small"
          sx={fieldSx}
        />
      </Grid2>

      {/* Row 3: alternative email + preferred communication */}
      <Grid2>
        <TextField
          label="Alternative Email Address"
          value={vals.alternativeEmail}
          onChange={set("alternativeEmail")}
          size="small"
          sx={fieldSx}
        />
        <OutlinedSelect
          label="Preferred Communication"
          value={vals.preferredCommunication}
          onChange={(v) =>
            setVals((s) => ({ ...s, preferredCommunication: v }))
          }
          options={["Email", "SMS", "Phone Call"]}
        />
      </Grid2>
    </>
  );
}

function NextOfKinSection() {
  const [vals, setVals] = useState({
    name: "",
    relationship: "",
    address: "",
    country: "",
    state: "",
    city: "",
    phone: "",
    idType: "",
    idNumber: "",
    issuingDate: null as Dayjs | null,
    expiryDate: null as Dayjs | null,
    issuingAuthority: "",
    issuingCountry: "",
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setVals((v) => ({ ...v, [k]: e.target.value }));

  return (
    <Grid3>
      <Box sx={{ gridColumn: "span 2" }}>
        <TextField
          label="Name of Next of Kin"
          value={vals.name}
          onChange={set("name")}
          size="small"
          sx={fieldSx}
        />
      </Box>

      <OutlinedSelect
        label="Relationship"
        value={vals.relationship}
        onChange={(v) => setVals((s) => ({ ...s, relationship: v }))}
        options={["Brother", "Sister", "Spouse", "Parent", "Child"]}
      />

      <Box sx={{ gridColumn: "span 3" }}>
        <TextField
          label="Residential Address"
          value={vals.address}
          onChange={set("address")}
          size="small"
          sx={fieldSx}
        />
      </Box>

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

      <Box sx={{ gridColumn: "span 3" }}>
        <TextField
          label="Phone Number"
          value={vals.phone}
          onChange={set("phone")}
          size="small"
          sx={fieldSx}
        />
      </Box>

      <OutlinedSelect
        label="ID Type"
        value={vals.idType}
        onChange={(v) => setVals((s) => ({ ...s, idType: v }))}
        options={["NIN", "Passport", "Driver's License", "Voter's Card"]}
      />
      <TextField
        label="ID Number"
        value={vals.idNumber}
        onChange={set("idNumber")}
        size="small"
        sx={fieldSx}
      />
      <StyledDateField
        label="Issuing Date"
        value={vals.issuingDate}
        onChange={(v) => setVals((s) => ({ ...s, issuingDate: v }))}
      />

      <StyledDateField
        label="Expiry Date"
        value={vals.expiryDate}
        onChange={(v) => setVals((s) => ({ ...s, expiryDate: v }))}
      />
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
    </Grid3>
  );
}
function GuarantorBlock({ title }: { title: string }) {
  const [vals, setVals] = useState({
    name: "",
    country: "",
    address: "",
    state: "",
    city: "",
    phone: "",
    idType: "",
    idNumber: "",
    issuingDate: null as Dayjs | null,
    expiryDate: null as Dayjs | null,
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
            color: "#FF6B22",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Typography>
        <Box sx={{ flex: 1, height: "1px", bgcolor: "#FF6B22" }} />
      </Box>

      <Grid3>
        <Box sx={{ gridColumn: "span 3" }}>
          <TextField
            label="Name"
            value={vals.name}
            onChange={set("name")}
            size="small"
            sx={fieldSx}
          />
        </Box>

        <Box sx={{ gridColumn: "span 3" }}>
          <TextField
            label="Residential Address"
            value={vals.address}
            onChange={set("address")}
            size="small"
            sx={fieldSx}
          />
        </Box>

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

        <Box sx={{ gridColumn: "span 3" }}>
          <TextField
            label="Phone Number"
            value={vals.phone}
            onChange={set("phone")}
            size="small"
            sx={fieldSx}
          />
        </Box>

        <OutlinedSelect
          label="ID Type"
          value={vals.idType}
          onChange={(v) => setVals((s) => ({ ...s, idType: v }))}
          options={["NIN", "Passport", "Driver's License", "Voter's Card"]}
        />
        <TextField
          label="ID Number"
          value={vals.idNumber}
          onChange={set("idNumber")}
          size="small"
          sx={fieldSx}
        />
        <StyledDateField
          label="Issuing Date"
          value={vals.issuingDate}
          onChange={(v) => setVals((s) => ({ ...s, issuingDate: v }))}
        />

        <StyledDateField
          label="Expiry Date"
          value={vals.expiryDate}
          onChange={(v) => setVals((s) => ({ ...s, expiryDate: v }))}
        />
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
      </Grid3>
    </Box>
  );
}
function GuarantorSection() {
  return (
    <>
      <GuarantorBlock title="Guarantor 1" />
      <GuarantorBlock title="Guarantor 2" />
    </>
  );
}

function BankDetailsSection() {
  const [vals, setVals] = useState({
    bank: "",
    accountNumber: "",
    bankAddress: "",
    sortCode: "",
  });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setVals((v) => ({ ...v, [k]: e.target.value }));

  return (
    <Grid2>
      <OutlinedSelect
        label="Bank's Name"
        value={vals.bank}
        onChange={(v) => setVals((s) => ({ ...s, bank: v }))}
        options={["First Bank", "GTBank", "Zenith Bank", "Access Bank", "UBA"]}
      />
      <TextField
        label="Account Number"
        value={vals.accountNumber}
        onChange={set("accountNumber")}
        size="small"
        sx={fieldSx}
      />
      <TextField
        label="Bank Address"
        value={vals.bankAddress}
        onChange={set("bankAddress")}
        size="small"
        sx={fieldSx}
      />
      <TextField
        label="Sort Code"
        value={vals.sortCode}
        onChange={set("sortCode")}
        size="small"
        sx={fieldSx}
      />
    </Grid2>
  );
}

function SectionDividerTitle({ title }: { title: string }) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5, mt: 1 }}
    >
      <Typography
        sx={{
          fontSize: 11,
          fontWeight: 700,
          color: "#111",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </Typography>
      <Box sx={{ flex: 1, height: "1px", bgcolor: "#D1D5DB" }} />
    </Box>
  );
}

function CommissionFinanceSection() {
  const [vals, setVals] = useState({
    commissionPayable: "",
    overrideCommission: "",
    minCommissionPayable: "N2,000.00",
    agentType: "SM - Sales Manager",
    agentNumber: "N0.00",
    newBusiness: "4.5",
    renewal: "4.5",
    currency: "NGN",
    vatApplicable: "",
    whtApplicable: "",
    taxRateVat: "7.5%",
    taxRateWht: "5.0%",
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setVals((v) => ({ ...v, [k]: e.target.value }));

  return (
    <Box>
      <SectionDividerTitle title="Commission Settings" />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "14px 18px",
          mt: 1.5,
        }}
      >
        <QuantumRadioGroup
          label="Commission Payable?"
          value={vals.commissionPayable}
          onChange={(value) =>
            setVals((v) => ({ ...v, commissionPayable: value }))
          }
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />

        <TextField
          label="Min. Commission Payable"
          value={vals.minCommissionPayable}
          onChange={set("minCommissionPayable")}
          size="small"
          sx={fieldSx}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <QuantumRadioGroup
          label="Override Commission by Agent?"
          value={vals.overrideCommission}
          onChange={(value) =>
            setVals((v) => ({ ...v, overrideCommission: value }))
          }
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />

        <OutlinedSelect
          label="Agent Type"
          value={vals.agentType}
          onChange={(value) => setVals((v) => ({ ...v, agentType: value }))}
          options={["SM - Sales Manager", "Agent", "Broker"]}
        />

        <TextField
          label="Agent Number"
          value={vals.agentNumber}
          onChange={set("agentNumber")}
          size="small"
          sx={fieldSx}
          slotProps={{ inputLabel: { shrink: true } }}
        />

        <OutlinedSelect
          label="% of New Business"
          value={vals.newBusiness}
          onChange={(value) => setVals((v) => ({ ...v, newBusiness: value }))}
          options={["4.5", "5", "7.5", "10"]}
        />

        <OutlinedSelect
          label="% at Renewal"
          value={vals.renewal}
          onChange={(value) => setVals((v) => ({ ...v, renewal: value }))}
          options={["4.5", "5", "7.5", "10"]}
        />

        <OutlinedSelect
          label="Currency"
          value={vals.currency}
          onChange={(value) => setVals((v) => ({ ...v, currency: value }))}
          options={["NGN", "USD", "GHS", "KES"]}
        />
      </Box>

      <SectionDividerTitle title="Tax Settings" />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "14px 18px",
          mt: 1.5,
        }}
      >
        <QuantumRadioGroup
          label="VAT Applicable?"
          value={vals.vatApplicable}
          onChange={(value) => setVals((v) => ({ ...v, vatApplicable: value }))}
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />

        <QuantumRadioGroup
          label="WHT Applicable?"
          value={vals.whtApplicable}
          onChange={(value) => setVals((v) => ({ ...v, whtApplicable: value }))}
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />

        <TextField
          label="Tax Rate (VAT)"
          value={vals.taxRateVat}
          onChange={set("taxRateVat")}
          size="small"
          sx={fieldSx}
          slotProps={{ inputLabel: { shrink: true } }}
        />

        <OutlinedSelect
          label="Tax Rate (WHT)"
          value={vals.taxRateWht}
          onChange={(value) => setVals((v) => ({ ...v, taxRateWht: value }))}
          options={["5.0%", "7.5%", "10%"]}
        />
      </Box>
    </Box>
  );
}

function HierarchySection() {
  const [vals, setVals] = useState({
    managersCode: "019967",
    managersName: "John Doe",
    managersBranch: "Lekki",
    productClassification: [] as string[],
  });

  const handleRemoveTag = (tagToRemove: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setVals((s) => ({
      ...s,
      productClassification: s.productClassification.filter(
        (t) => t !== tagToRemove,
      ),
    }));
  };

  return (
    <>
      <Grid3>
        <TextField
          label="Manager's Code"
          value={vals.managersCode}
          onChange={(e) =>
            setVals((s) => ({ ...s, managersCode: e.target.value }))
          }
          size="small"
          sx={fieldSx}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <TextField
          label="Manager's Name"
          value={vals.managersName}
          onChange={(e) =>
            setVals((s) => ({ ...s, managersName: e.target.value }))
          }
          size="small"
          sx={fieldSx}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <TextField
          label="Manager's Branch"
          value={vals.managersBranch}
          onChange={(e) =>
            setVals((s) => ({ ...s, managersBranch: e.target.value }))
          }
          size="small"
          sx={fieldSx}
          slotProps={{ inputLabel: { shrink: true } }}
        />
      </Grid3>

      <FullRow>
        <FormControl fullWidth size="small">
          <InputLabel
            sx={{
              fontSize: 11,
              color: "#242424",
              transform: "translate(12px, 12px) scale(1)",
              transition:
                "color 200ms cubic-bezier(0,0,0.2,1), transform 200ms cubic-bezier(0,0,0.2,1)",
              "&.Mui-focused": { color: "#FF6B22" },
              "&.MuiInputLabel-shrink": {
                transform: "translate(12px, -7px) scale(0.82)",
              },
            }}
          >
            Product Classification
          </InputLabel>
          <Select
            multiple
            value={vals.productClassification}
            label="Product Classification"
            onChange={(e) =>
              setVals((s) => ({
                ...s,
                productClassification:
                  typeof e.target.value === "string"
                    ? e.target.value.split(",")
                    : (e.target.value as string[]),
              }))
            }
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6 }}>
                {(selected as string[]).map((v) => (
                  <Box
                    key={v}
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.3,
                      border: "1px solid #1C1C1C",
                      borderRadius: "999px",
                      pl: 1.2,
                      pr: 0.5,
                      py: 0.3,
                      bgcolor: "transparent",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: "#1C1C1C",
                        lineHeight: 1,
                      }}
                    >
                      {v}
                    </Typography>
                    {/* × button inside the tag */}
                    <IconButton
                      size="small"
                      sx={{
                        p: "4px",
                        borderRadius: "50%",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          bgcolor: "#FFF0E9",
                        },
                        "&:active": {
                          bgcolor: "#FFE0D2",
                        },
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00065 1.33325C4.32732 1.33325 1.33398 4.32659 1.33398 7.99992C1.33398 11.6733 4.32732 14.6666 8.00065 14.6666C11.674 14.6666 14.6673 11.6733 14.6673 7.99992C14.6673 4.32659 11.674 1.33325 8.00065 1.33325ZM10.2407 9.53325C10.434 9.72658 10.434 10.0466 10.2407 10.2399C10.1407 10.3399 10.014 10.3866 9.88732 10.3866C9.76065 10.3866 9.63398 10.3399 9.53398 10.2399L8.00065 8.70658L6.46732 10.2399C6.36732 10.3399 6.24065 10.3866 6.11398 10.3866C5.98732 10.3866 5.86065 10.3399 5.76065 10.2399C5.56732 10.0466 5.56732 9.72658 5.76065 9.53325L7.29398 7.99992L5.76065 6.46658C5.56732 6.27325 5.56732 5.95325 5.76065 5.75992C5.95398 5.56659 6.27398 5.56659 6.46732 5.75992L8.00065 7.29325L9.53398 5.75992C9.72732 5.56659 10.0473 5.56659 10.2407 5.75992C10.434 5.95325 10.434 6.27325 10.2407 6.46658L8.70732 7.99992L10.2407 9.53325Z"
                          fill="#A1A1A1"
                        />
                      </svg>
                    </IconButton>
                  </Box>
                ))}
              </Box>
            )}
            sx={{
              minHeight: 44,
              fontSize: 13,
              fontWeight: 600,
              borderRadius: "4px",
              color: "#242424",
              backgroundColor: "transparent",
              "& .MuiSelect-select": {
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                padding: "6px 12px !important",
                minHeight: "44px !important",
                gap: "4px",
                boxSizing: "border-box",
              },
              "& fieldset": {
                borderColor: "#242424",
                borderWidth: "1px",
                "& legend": { fontSize: "0.72em" },
              },
              "&:hover fieldset": { borderColor: "#4B5563" },
              "&.Mui-focused fieldset": {
                borderColor: "#FF6B22",
                borderWidth: "1px",
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  borderRadius: "4px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  border: "1px solid #E5E7EB",
                  mt: 0.5,
                  "& .MuiMenuItem-root": {
                    fontSize: 13,
                    color: "#1C1C1C",
                    px: 1.5,
                    py: 1,
                    "&:hover": { bgcolor: "#FFF0E9" },
                    "&.Mui-selected": {
                      bgcolor: "#FFF0E9",
                      fontWeight: 600,
                      "&:hover": { bgcolor: "#FFF0E9" },
                    },
                  },
                },
              },
            }}
          >
            {[
              "Term Life",
              "Whole Life",
              "Endowment",
              "Group Life",
              "Annuity",
              "Credit Life",
            ].map((option) => (
              <MenuItem key={option} value={option}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "inherit",
                      fontWeight: vals.productClassification.includes(option)
                        ? 600
                        : 400,
                    }}
                  >
                    {option}
                  </Typography>
                  {vals.productClassification.includes(option) && (
                    <Box
                      sx={{
                        color: "#FF6B22",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                  )}
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FullRow>
    </>
  );
}

interface IntermediaryAgentInformationStepProps {
  onBack: () => void;
  onCancel: () => void;
  onFinish: () => void;
  hasIntegrationDowntime?: boolean;
  hasDisparity?: boolean;
  hasInvalidNin?: boolean;
  onViewDisparity?: () => void;
  onRequestAdditionalDocument?: () => void;
}

export function IntermediaryAgentInformationStep({
  onBack,
  onCancel,
  onFinish,
  hasIntegrationDowntime = false,
  hasDisparity = false,
  hasInvalidNin = false,
  onViewDisparity,
  onRequestAdditionalDocument,
}: IntermediaryAgentInformationStepProps) {
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: 0,
      }}
    >
      <Box sx={{ mb: 2.5, flexShrink: 0 }}>
        <Typography fontWeight={700} sx={{ fontSize: 22, color: "#111827" }}>
          Agent Information
        </Typography>
        <Typography sx={{ fontSize: 13, color: "#6B7280" }}>
          Review and complete the agent&apos;s information below.
        </Typography>
      </Box>

      {showDowntimeBanner && (
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
              NIMC integration failure
            </Typography>
            <Typography
              sx={{ fontSize: 12, color: "#333333", lineHeight: 1.6 }}
            >
              The system could not retrieve a result for this NIN due to maybe
              an integration outage.
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

      {hasInvalidNin && !bannerDismissed && (
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
              "&:hover": { bgcolor: "#FFF8F5", color: "#374151" },
            }}
          >
            <CircularTimes />
          </IconButton>
        </Box>
      )}
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
              A data mismatch was found between the NIMC record and the proposal
              form. Highlighted fields do not match.
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
        <AccordionSection title="Intermediary Information" defaultOpen={false}>
          <IntermediaryInformationSection />
        </AccordionSection>

        <AccordionSection title="Personal Details" defaultOpen={false}>
          <PersonalDetailsSection />
        </AccordionSection>

        <AccordionSection title="Contact Information" defaultOpen={false}>
          <ContactInformationSection />
        </AccordionSection>

        <AccordionSection title="Next of Kin" defaultOpen={false}>
          <NextOfKinSection />
        </AccordionSection>

        <AccordionSection title="Guarantor" defaultOpen={false}>
          <GuarantorSection />
        </AccordionSection>

        <AccordionSection title="Bank Details" defaultOpen={false}>
          <BankDetailsSection />
        </AccordionSection>

        <AccordionSection title="Commission & Finance" defaultOpen={false}>
          <CommissionFinanceSection />
        </AccordionSection>
        <AccordionSection title="Hierarchy & Operations" defaultOpen={false}>
          <HierarchySection />
        </AccordionSection>

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

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pt: 2.5,
          flexShrink: 0,
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
                : "Finish Onboarding"}
            </BrandButton>
          )}
        </Box>
      </Box>
    </Box>
  );
}
