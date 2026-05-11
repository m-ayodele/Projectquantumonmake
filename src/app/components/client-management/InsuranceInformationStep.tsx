"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AccordionSection } from "./AccordionSection";
import { BrandButton } from "./BrandButton";
import { QuantumDateField } from "./QuantumDateField";
import { Dayjs } from "dayjs";

const fieldSx = {
  width: "100%",
  "& .MuiInputLabel-root": { fontSize: 11, color: "#242424", transform: "translate(12px, 12px) scale(1)", transition: "color 200ms cubic-bezier(0,0,0.2,1), transform 200ms cubic-bezier(0,0,0.2,1)", "&.Mui-focused": { color: "#FF6B22" }, "&.MuiInputLabel-shrink": { transform: "translate(12px, -7px) scale(0.82)" } },
  "& .MuiOutlinedInput-root": { height: 44, fontSize: 13, fontWeight: 600, borderRadius: "4px", "& input": { padding: "12px 11px 10px 12px", fontSize: 13, fontWeight: 600, color: "#242424", height: "100%", boxSizing: "border-box" }, "& fieldset": { borderColor: "#242424", borderWidth: "1px", "& legend": { fontSize: "0.72em" } }, "&:hover fieldset": { borderColor: "#4B5563" }, "&.Mui-focused fieldset": { borderColor: "#FF6B22", borderWidth: "1px" }, backgroundColor: "transparent", "&:hover": { backgroundColor: "transparent" }, "&.Mui-focused": { backgroundColor: "transparent" } },
};
const selectSx = {
  width: "100%",
  "& .MuiInputLabel-root": { fontSize: 11, color: "#242424", transform: "translate(12px, 12px) scale(1)", transition: "color 200ms cubic-bezier(0,0,0.2,1), transform 200ms cubic-bezier(0,0,0.2,1)", "&.Mui-focused": { color: "#FF6B22" }, "&.MuiInputLabel-shrink": { transform: "translate(12px, -7px) scale(0.82)" } },
  "& .MuiOutlinedInput-root": { height: 44, fontSize: 13, fontWeight: 600, borderRadius: "4px", "& fieldset": { borderColor: "#242424", borderWidth: "1px", "& legend": { fontSize: "0.72em" } }, "&:hover fieldset": { borderColor: "#4B5563" }, "&.Mui-focused fieldset": { borderColor: "#FF6B22", borderWidth: "1px" }, backgroundColor: "transparent", "&:hover": { backgroundColor: "transparent" }, "&.Mui-focused": { backgroundColor: "transparent" } },
  "& .MuiSelect-select": { padding: "12px 11px 10px 12px !important", fontSize: 13, fontWeight: 600, color: "#242424", display: "flex", alignItems: "center", height: "100%", boxSizing: "border-box" },
  "& .MuiSelect-icon": { right: 10, color: "#6B7280" },
};
const dateSx = {
  width: "100%",
  "& .MuiInputLabel-root": { fontSize: 11, color: "#242424", transform: "translate(12px, 12px) scale(1)", transition: "color 200ms cubic-bezier(0,0,0.2,1), transform 200ms cubic-bezier(0,0,0.2,1)", "&.Mui-focused": { color: "#FF6B22" }, "&.MuiInputLabel-shrink": { transform: "translate(12px, -7px) scale(0.82)" } },
  "& .MuiOutlinedInput-root": { height: 44, fontSize: 13, fontWeight: 600, borderRadius: "4px", "& input": { padding: "12px 11px 10px 12px", fontSize: 13, fontWeight: 600, color: "#242424", height: "100%", boxSizing: "border-box" }, "& fieldset": { borderColor: "#242424", borderWidth: "1px", "& legend": { fontSize: "0.72em" } }, "&:hover fieldset": { borderColor: "#4B5563" }, "&.Mui-focused fieldset": { borderColor: "#FF6B22", borderWidth: "1px" }, backgroundColor: "transparent" },
  "& .MuiSvgIcon-root": { color: "#6B7280", fontSize: 18 },
};

function OutlinedSelect({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <FormControl sx={selectSx} size="small" fullWidth>
      <InputLabel sx={{ fontSize: 11, color: "#9A9A9A", "&.Mui-focused": { color: "#FF6B22" } }}>{label}</InputLabel>
      <Select value={value} label={label} onChange={(e) => onChange(e.target.value)} sx={{ height: 44, fontSize: 13, fontWeight: 600, borderRadius: "4px", color: "#242424", backgroundColor: "transparent", "& .MuiSelect-select": { display: "flex", alignItems: "center", padding: "0 12px", height: "44px !important", minHeight: "unset !important", fontSize: 13, fontWeight: 600, color: "#242424" }, "& fieldset": { borderColor: "#242424", borderWidth: "1px" }, "&:hover fieldset": { borderColor: "#4B5563" }, "&.Mui-focused fieldset": { borderColor: "#FF6B22", borderWidth: "1px" } }}>
        {options.map((o) => (<MenuItem key={o} value={o} sx={{ fontSize: 13, color: "#242424" }}>{o}</MenuItem>))}
      </Select>
    </FormControl>
  );
}
function StyledDate({ label, value, onChange }: { label: string; value?: Dayjs | null; onChange?: (v: Dayjs | null) => void }) {
  return <Box sx={dateSx}><QuantumDateField label={label} value={value ?? null} onChange={onChange} /></Box>;
}
function Grid2({ children }: { children: React.ReactNode }) { return <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5, mt: 1.5 }}>{children}</Box>; }
function Grid3({ children }: { children: React.ReactNode }) { return <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1.5, mt: 1.5 }}>{children}</Box>; }
function FullRow({ children }: { children: React.ReactNode }) { return <Box sx={{ mt: 1.5 }}>{children}</Box>; }

// ── Local: Company Information ────────────────────────────────────────────────
function LocalCompanyInfoSection() {
  const [vals, setVals] = useState({ companyName: "", rcNumber: "", stateOfInc: "", countryOfInc: "", naicomLicense: "", licenseIssuingDate: null as Dayjs | null, licenseExpiryDate: null as Dayjs | null, dateOfInc: null as Dayjs | null });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => setVals((v) => ({ ...v, [k]: e.target.value }));
  return (
    <>
      <FullRow><TextField label="Insurance Company Name" value={vals.companyName} onChange={set("companyName")} size="small" sx={fieldSx} /></FullRow>
      <Grid2>
        <TextField label="RC Number" value={vals.rcNumber} onChange={set("rcNumber")} size="small" sx={fieldSx} />
        <StyledDate label="Date of Incorporation" value={vals.dateOfInc} onChange={(v) => setVals((s) => ({ ...s, dateOfInc: v }))} />
      </Grid2>
      <Grid2>
        <OutlinedSelect label="State of Incorporation" value={vals.stateOfInc} onChange={(v) => setVals((s) => ({ ...s, stateOfInc: v }))} options={["Lagos", "Abuja", "Rivers", "Kano"]} />
        <OutlinedSelect label="Country of Incorporation" value={vals.countryOfInc} onChange={(v) => setVals((s) => ({ ...s, countryOfInc: v }))} options={["Nigeria", "Ghana", "Kenya"]} />
      </Grid2>
      <Grid2>
        <TextField label="NAICOM License Number" value={vals.naicomLicense} onChange={set("naicomLicense")} size="small" sx={fieldSx} />
        <StyledDate label="License Issuing Date" value={vals.licenseIssuingDate} onChange={(v) => setVals((s) => ({ ...s, licenseIssuingDate: v }))} />
      </Grid2>
      <Box sx={{ mt: 1.5, maxWidth: "50%" }}>
        <StyledDate label="License Expiry Date" value={vals.licenseExpiryDate} onChange={(v) => setVals((s) => ({ ...s, licenseExpiryDate: v }))} />
      </Box>
    </>
  );
}

// ── Foreign: Company Information ──────────────────────────────────────────────
function ForeignCompanyInfoSection() {
  const [vals, setVals] = useState({ companyName: "", licenseNumber: "", issuingAuthority: "", companyRegNo: "", registrationCompany: "", stateOfInc: "", countryOfInc: "", licenseIssuingDate: null as Dayjs | null, licenseExpiryDate: null as Dayjs | null, dateOfInc: null as Dayjs | null });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => setVals((v) => ({ ...v, [k]: e.target.value }));
  return (
    <>
      <FullRow><TextField label="Insurance Company Name" value={vals.companyName} onChange={set("companyName")} size="small" sx={fieldSx} /></FullRow>
      <Grid2>
        <TextField label="License Number" value={vals.licenseNumber} onChange={set("licenseNumber")} size="small" sx={fieldSx} />
        <StyledDate label="License Issuing Date" value={vals.licenseIssuingDate} onChange={(v) => setVals((s) => ({ ...s, licenseIssuingDate: v }))} />
      </Grid2>
      <Grid2>
        <TextField label="Issuing Authority" value={vals.issuingAuthority} onChange={set("issuingAuthority")} size="small" sx={fieldSx} />
        <StyledDate label="License Expiry Date" value={vals.licenseExpiryDate} onChange={(v) => setVals((s) => ({ ...s, licenseExpiryDate: v }))} />
      </Grid2>
      <Grid2>
        <TextField label="Company Registration No" value={vals.companyRegNo} onChange={set("companyRegNo")} size="small" sx={fieldSx} />
        <TextField label="Registration company" value={vals.registrationCompany} onChange={set("registrationCompany")} size="small" sx={fieldSx} />
      </Grid2>
      <Grid3>
        <StyledDate label="Date of Incorporation" value={vals.dateOfInc} onChange={(v) => setVals((s) => ({ ...s, dateOfInc: v }))} />
        <OutlinedSelect label="State of Incorporation" value={vals.stateOfInc} onChange={(v) => setVals((s) => ({ ...s, stateOfInc: v }))} options={["Lagos", "Abuja", "Rivers", "Kano"]} />
        <OutlinedSelect label="Country of Incorporation" value={vals.countryOfInc} onChange={(v) => setVals((s) => ({ ...s, countryOfInc: v }))} options={["Nigeria", "Ghana", "Kenya", "UK", "USA"]} />
      </Grid3>
    </>
  );
}

// ── Contact Information ───────────────────────────────────────────────────────
// Local: no Contact Name field; Foreign: has Contact Name
function ContactInformationSection({ isLocal }: { isLocal: boolean }) {
  const [vals, setVals] = useState({ contactName: "", countryCode: "+234", phone: "", altPhone: "", email: "", altEmail: "", preferredCommunication: "Email" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => setVals((v) => ({ ...v, [k]: e.target.value }));
  return (
    <>
      {!isLocal && (
        <FullRow><TextField label="Contact Name" value={vals.contactName} onChange={set("contactName")} size="small" sx={{ ...fieldSx, mt: 2 }} /></FullRow>
      )}
      <Box sx={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr", gap: 1.5, mt: isLocal ? 2 : 1.5 }}>
        <OutlinedSelect label="Country Code" value={vals.countryCode} onChange={(v) => setVals((s) => ({ ...s, countryCode: v }))} options={["+234", "+233", "+254", "+27", "+44", "+1"]} />
        <TextField label="Phone Number" value={vals.phone} onChange={set("phone")} size="small" sx={fieldSx} />
        <TextField label="Alternative Phone Number" value={vals.altPhone} onChange={set("altPhone")} size="small" sx={fieldSx} />
      </Box>
      <Grid3>
        <TextField label={isLocal ? "Contact Email Address" : "Email Address"} value={vals.email} onChange={set("email")} size="small" sx={fieldSx} />
        <TextField label="Alternative Email Address" value={vals.altEmail} onChange={set("altEmail")} size="small" sx={fieldSx} />
        <OutlinedSelect label="Preferred Communication" value={vals.preferredCommunication} onChange={(v) => setVals((s) => ({ ...s, preferredCommunication: v }))} options={["Email", "SMS", "Phone Call"]} />
      </Grid3>
    </>
  );
}

// ── Address Information ───────────────────────────────────────────────────────
function AddressInformationSection() {
  const [vals, setVals] = useState({ address: "", country: "", state: "", city: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => setVals((v) => ({ ...v, [k]: e.target.value }));
  return (
    <>
      <FullRow><TextField label="Registered Address" value={vals.address} onChange={set("address")} size="small" sx={{ ...fieldSx, mt: 2 }} /></FullRow>
      <Grid3>
        <OutlinedSelect label="Country" value={vals.country} onChange={(v) => setVals((s) => ({ ...s, country: v }))} options={["Nigeria", "Ghana", "Kenya", "UK", "USA"]} />
        <OutlinedSelect label="State" value={vals.state} onChange={(v) => setVals((s) => ({ ...s, state: v }))} options={["Lagos", "Abuja", "Rivers", "Kano"]} />
        <OutlinedSelect label="City" value={vals.city} onChange={(v) => setVals((s) => ({ ...s, city: v }))} options={["Ikeja", "Victoria Island", "Lekki"]} />
      </Grid3>
    </>
  );
}

// ── Local: Director Information (2 directors) ─────────────────────────────────
function DirectorBlock({ label }: { label: string }) {
  const [vals, setVals] = useState({ title: "Mr", surname: "", lastName: "", gender: "", dob: null as Dayjs | null, nationality: "", address: "", occupation: "", phone: "", email: "", idType: "", idNumber: "", issuedDate: null as Dayjs | null, issuingAuthority: "", issuingCountry: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => setVals((v) => ({ ...v, [k]: e.target.value }));
  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5, mt: 1 }}>
        <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#FF6B22", textTransform: "uppercase", whiteSpace: "nowrap" }}>{label}</Typography>
        <Box sx={{ flex: 1, height: "1px", bgcolor: "#FF6B22", opacity: 0.3 }} />
      </Box>
      <Grid3>
        <OutlinedSelect label="Title" value={vals.title} onChange={(v) => setVals((s) => ({ ...s, title: v }))} options={["Mr", "Mrs", "Ms", "Dr", "Prof"]} />
        <TextField label="Surname" value={vals.surname} onChange={set("surname")} size="small" sx={fieldSx} />
        <TextField label="Last Name" value={vals.lastName} onChange={set("lastName")} size="small" sx={fieldSx} />
      </Grid3>
      <Grid3>
        <OutlinedSelect label="Gender" value={vals.gender} onChange={(v) => setVals((s) => ({ ...s, gender: v }))} options={["Male", "Female", "Other"]} />
        <StyledDate label="Date of Birth" value={vals.dob} onChange={(v) => setVals((s) => ({ ...s, dob: v }))} />
        <OutlinedSelect label="Nationality" value={vals.nationality} onChange={(v) => setVals((s) => ({ ...s, nationality: v }))} options={["Nigerian", "Ghanaian", "Kenyan", "British", "American"]} />
      </Grid3>
      <FullRow><TextField label="Address" value={vals.address} onChange={set("address")} size="small" sx={fieldSx} /></FullRow>
      <Grid3>
        <TextField label="Occupation" value={vals.occupation} onChange={set("occupation")} size="small" sx={fieldSx} />
        <TextField label="Phone Number" value={vals.phone} onChange={set("phone")} size="small" sx={fieldSx} />
        <TextField label="Email" value={vals.email} onChange={set("email")} size="small" sx={fieldSx} />
      </Grid3>
      <Grid3>
        <OutlinedSelect label="ID Type" value={vals.idType} onChange={(v) => setVals((s) => ({ ...s, idType: v }))} options={["NIN", "Passport", "Driver's Licence", "Voter's Card"]} />
        <TextField label="ID Number" value={vals.idNumber} onChange={set("idNumber")} size="small" sx={fieldSx} />
        <StyledDate label="Issued Date" value={vals.issuedDate} onChange={(v) => setVals((s) => ({ ...s, issuedDate: v }))} />
      </Grid3>
      <Grid2>
        <TextField label="Issuing Authority" value={vals.issuingAuthority} onChange={set("issuingAuthority")} size="small" sx={fieldSx} />
        <TextField label="Issuing Country" value={vals.issuingCountry} onChange={set("issuingCountry")} size="small" sx={fieldSx} />
      </Grid2>
    </Box>
  );
}

function DirectorInformationSection() {
  return (
    <Box sx={{ mt: 1 }}>
      <DirectorBlock label="Director 1" />
      <DirectorBlock label="Director 2" />
    </Box>
  );
}

// ── Bank Details ──────────────────────────────────────────────────────────────
// Foreign has Swift Code; local does not
function BankDetailsSection({ isForeign = false }: { isForeign?: boolean }) {
  const [vals, setVals] = useState({ bank: "Select Bank", accountNumber: "", bankAddress: "", sortCode: "", swiftCode: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => setVals((v) => ({ ...v, [k]: e.target.value }));
  return (
    <>
      {isForeign ? (
        <>
          <Grid2>
            <OutlinedSelect label="Bank's Name" value={vals.bank} onChange={(v) => setVals((s) => ({ ...s, bank: v }))} options={["Select Bank", "First Bank", "GTBank", "Zenith Bank", "Barclays", "HSBC"]} />
            <TextField label="Bank Address" value={vals.bankAddress} onChange={set("bankAddress")} size="small" sx={fieldSx} />
          </Grid2>
          <Grid3>
            <TextField label="Account Number" value={vals.accountNumber} onChange={set("accountNumber")} size="small" sx={fieldSx} />
            <TextField label="Sort Code" value={vals.sortCode} onChange={set("sortCode")} size="small" sx={fieldSx} />
            <OutlinedSelect label="Swift Code" value={vals.swiftCode} onChange={(v) => setVals((s) => ({ ...s, swiftCode: v }))} options={["SWIFT001", "SWIFT002"]} />
          </Grid3>
        </>
      ) : (
        <>
          <Grid2>
            <OutlinedSelect label="Bank's Name" value={vals.bank} onChange={(v) => setVals((s) => ({ ...s, bank: v }))} options={["Select Bank", "First Bank", "GTBank", "Zenith Bank", "Access Bank", "UBA"]} />
            <TextField label="Account Number" value={vals.accountNumber} onChange={set("accountNumber")} size="small" sx={fieldSx} />
          </Grid2>
          <Grid2>
            <TextField label="Bank Address" value={vals.bankAddress} onChange={set("bankAddress")} size="small" sx={fieldSx} />
            <TextField label="Sort Code" value={vals.sortCode} onChange={set("sortCode")} size="small" sx={fieldSx} />
          </Grid2>
        </>
      )}
    </>
  );
}

// ── Risk & Financial Assessment ───────────────────────────────────────────────
function RiskFinancialSection() {
  const [vals, setVals] = useState({ ratingAgency: "", globalCreditRating: "", companySummary: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => setVals((v) => ({ ...v, [k]: e.target.value }));
  return (
    <>
      <Grid2>
        <TextField label="Rating Agency" value={vals.ratingAgency} onChange={set("ratingAgency")} size="small" sx={{ ...fieldSx, mt: 2 }} />
        <TextField label="Global Credit Rating" value={vals.globalCreditRating} onChange={set("globalCreditRating")} size="small" sx={{ ...fieldSx, mt: 2 }} />
      </Grid2>
      <FullRow>
        <TextField label="Company Profile Summary" value={vals.companySummary} onChange={set("companySummary")} size="small" sx={fieldSx} multiline minRows={2} InputProps={{ sx: { height: "auto !important" } }} />
      </FullRow>
    </>
  );
}

// ── How did you hear about us ─────────────────────────────────────────────────
const HOW_OPTIONS = ["Social Media", "Google Search", "Email Marketing", "Website", "Exhibition", "Family/Friend", "Agent:Marketer", "TV/Radio", "Print", "Seminar"];

function HowDidYouHearSection() {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (o: string) => setSelected((s) => s.includes(o) ? s.filter((x) => x !== o) : [...s, o]);
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 1.5 }}>
      {HOW_OPTIONS.map((o) => (
        <FormControlLabel
          key={o}
          control={<Checkbox checked={selected.includes(o)} onChange={() => toggle(o)} size="small" sx={{ color: "#9A9A9A", "&.Mui-checked": { color: "#FF6B22" }, py: 0.4, px: 0.6 }} />}
          label={<Typography sx={{ fontSize: 12, color: "#242424" }}>{o}</Typography>}
          sx={{ mr: 1, ml: 0 }}
        />
      ))}
    </Box>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────
interface InsuranceInformationStepProps {
  isLocal: boolean;
  onBack: () => void;
  onCancel: () => void;
  onFinish: () => void;
}

export function InsuranceInformationStep({ isLocal, onBack, onCancel, onFinish }: InsuranceInformationStepProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", minHeight: 0 }}>
      <Box sx={{ mb: 2, flexShrink: 0 }}>
        <Typography fontWeight={700} sx={{ fontSize: 22, color: "#111827" }}>Client&apos;s Information</Typography>
        <Typography sx={{ fontSize: 13, color: "#6B7280" }}>Below is the client&apos;s detail as currently present on the system</Typography>
      </Box>

      <Box sx={{ flex: 1, minHeight: 0, overflowY: "auto", pr: 0.5, "&::-webkit-scrollbar": { width: 4 }, "&::-webkit-scrollbar-track": { bgcolor: "#F3F4F6", borderRadius: 9999 }, "&::-webkit-scrollbar-thumb": { bgcolor: "#FF6B22", borderRadius: 9999 }, scrollbarWidth: "thin", scrollbarColor: "#FF6B22 #F3F4F6" }}>
        <AccordionSection title="Company Information" defaultOpen={false}>
          {isLocal ? <LocalCompanyInfoSection /> : <ForeignCompanyInfoSection />}
        </AccordionSection>
        <AccordionSection title="Contact Information" defaultOpen={false}>
          <ContactInformationSection isLocal={isLocal} />
        </AccordionSection>
        <AccordionSection title="Address Information" defaultOpen={false}>
          <AddressInformationSection />
        </AccordionSection>
        {isLocal && (
          <AccordionSection title="Director Information" defaultOpen={false}>
            <DirectorInformationSection />
          </AccordionSection>
        )}
        <AccordionSection title="Bank Details" defaultOpen={false}>
          <BankDetailsSection isForeign={!isLocal} />
        </AccordionSection>
        <AccordionSection title="Risk & Financial Assessment" defaultOpen={false}>
          <RiskFinancialSection />
        </AccordionSection>
        <AccordionSection title="How did you hear about us?" defaultOpen={false}>
          <HowDidYouHearSection />
        </AccordionSection>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", pt: 2.5, flexShrink: 0 }}>
        <BrandButton onClick={onBack} variant="outline" className="!px-[28px] !font-normal">Back</BrandButton>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <BrandButton variant="ghost" size="sm" onClick={onCancel} className="!text-[#f97316] !font-normal !px-4 hover:!bg-[#FFF0E9]">Cancel</BrandButton>
          <BrandButton onClick={onFinish} className="!py-[4px] !px-[28px]" size="sm">
            {isLocal ? "Finish Onboarding" : "Continue"}
          </BrandButton>
        </Box>
      </Box>
    </Box>
  );
}