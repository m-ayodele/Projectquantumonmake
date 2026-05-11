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
import { CircularTimes, GreenCheckIcon, PolygonWarningIcon, RetryIcon } from "./icons";
import { QuantumDateField } from "./QuantumDateField";
import { Dayjs } from "dayjs";
import { QuantumRadioGroup } from "./QuantumRadioGroup";

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

function StyledDateField({ label, value, onChange }: { label: string; value?: Dayjs | null; onChange?: (v: Dayjs | null) => void }) {
  return <Box sx={dateSx}><QuantumDateField label={label} value={value ?? null} onChange={onChange} /></Box>;
}

function Grid2({ children }: { children: React.ReactNode }) { return <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5, mt: 1.5 }}>{children}</Box>; }
function Grid3({ children }: { children: React.ReactNode }) { return <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1.5, mt: 2 }}>{children}</Box>; }
function FullRow({ children }: { children: React.ReactNode }) { return <Box sx={{ mt: 1.5 }}>{children}</Box>; }
function SectionDividerTitle({ title }: { title: string }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5, mt: 1 }}>
      <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#111", textTransform: "uppercase", whiteSpace: "nowrap" }}>{title}</Typography>
      <Box sx={{ flex: 1, height: "1px", bgcolor: "#D1D5DB" }} />
    </Box>
  );
}

function CompanyInformationSection() {
  const [vals, setVals] = useState({ intermediaryType: "Broker", localInternational: "Local", brokersName: "", rcNumber: "", dateOfIncorporation: null as Dayjs | null, stateOfIncorporation: "", countryOfIncorporation: "", naicomLicenseNumber: "", licenseIssuingDate: null as Dayjs | null, licenseExpiryDate: null as Dayjs | null });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => setVals((v) => ({ ...v, [k]: e.target.value }));
  return (
    <>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5, mt: 2 }}>
        <OutlinedSelect label="Intermediary Type" value={vals.intermediaryType} onChange={(v) => setVals((s) => ({ ...s, intermediaryType: v }))} options={["Broker"]} />
        <OutlinedSelect label="Local / International" value={vals.localInternational} onChange={(v) => setVals((s) => ({ ...s, localInternational: v }))} options={["Local", "International"]} />
      </Box>
      <FullRow><TextField label="Broker's Name" value={vals.brokersName} onChange={set("brokersName")} size="small" sx={fieldSx} /></FullRow>
      <Grid2>
        <TextField label="RC Number" value={vals.rcNumber} onChange={set("rcNumber")} size="small" sx={fieldSx} />
        <StyledDateField label="Date of Incorporation" value={vals.dateOfIncorporation} onChange={(v) => setVals((s) => ({ ...s, dateOfIncorporation: v }))} />
      </Grid2>
      <Grid2>
        <OutlinedSelect label="State of Incorporation" value={vals.stateOfIncorporation} onChange={(v) => setVals((s) => ({ ...s, stateOfIncorporation: v }))} options={["Lagos", "Abuja", "Rivers", "Kano"]} />
        <OutlinedSelect label="Country of Incorporation" value={vals.countryOfIncorporation} onChange={(v) => setVals((s) => ({ ...s, countryOfIncorporation: v }))} options={["Nigeria", "Ghana", "Kenya"]} />
      </Grid2>
      <Grid2>
        <TextField label="NAICOM License Number" value={vals.naicomLicenseNumber} onChange={set("naicomLicenseNumber")} size="small" sx={fieldSx} />
        <StyledDateField label="License Issuing Date" value={vals.licenseIssuingDate} onChange={(v) => setVals((s) => ({ ...s, licenseIssuingDate: v }))} />
      </Grid2>
      <Box sx={{ mt: 1.5, maxWidth: "50%" }}>
        <StyledDateField label="License Expiry Date" value={vals.licenseExpiryDate} onChange={(v) => setVals((s) => ({ ...s, licenseExpiryDate: v }))} />
      </Box>
    </>
  );
}

function AddressInformationSection() {
  const [vals, setVals] = useState({ address: "", country: "", state: "", city: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => setVals((v) => ({ ...v, [k]: e.target.value }));
  return (
    <>
      <FullRow><TextField label="Registered Address" value={vals.address} onChange={set("address")} size="small" sx={{ ...fieldSx, width: "100%", mt: 2 }} /></FullRow>
      <Grid3>
        <OutlinedSelect label="Country" value={vals.country} onChange={(v) => setVals((s) => ({ ...s, country: v }))} options={["Nigeria", "Ghana", "Kenya"]} />
        <OutlinedSelect label="State" value={vals.state} onChange={(v) => setVals((s) => ({ ...s, state: v }))} options={["Lagos", "Abuja", "Rivers", "Kano"]} />
        <OutlinedSelect label="City / Town" value={vals.city} onChange={(v) => setVals((s) => ({ ...s, city: v }))} options={["Ikeja", "Victoria Island", "Lekki"]} />
      </Grid3>
    </>
  );
}

function ContactPersonSection() {
  const [vals, setVals] = useState({ contactName: "", countryCode: "+234", phone: "", altPhone: "", email: "", altEmail: "", preferredCommunication: "Email" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => setVals((v) => ({ ...v, [k]: e.target.value }));
  return (
    <>
      <FullRow><TextField label="Contact Person's Name" value={vals.contactName} onChange={set("contactName")} size="small" sx={{ ...fieldSx, width: "100%", mt: 2 }} /></FullRow>
      <Box sx={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr", gap: 1.5, mt: 1.5 }}>
        <OutlinedSelect label="Country Code" value={vals.countryCode} onChange={(v) => setVals((s) => ({ ...s, countryCode: v }))} options={["+234", "+233", "+254", "+27"]} />
        <TextField label="Phone Number" value={vals.phone} onChange={set("phone")} size="small" sx={fieldSx} />
        <TextField label="Alternative Phone Number" value={vals.altPhone} onChange={set("altPhone")} size="small" sx={fieldSx} />
      </Box>
      <Grid3>
        <TextField label="Email Address" value={vals.email} onChange={set("email")} size="small" sx={fieldSx} />
        <TextField label="Alternative Email Address" value={vals.altEmail} onChange={set("altEmail")} size="small" sx={fieldSx} />
        <OutlinedSelect label="Preferred Communication" value={vals.preferredCommunication} onChange={(v) => setVals((s) => ({ ...s, preferredCommunication: v }))} options={["Email", "SMS", "Phone Call"]} />
      </Grid3>
    </>
  );
}

function BankDetailsSection() {
  const [vals, setVals] = useState({ bank: "Select Bank", accountNumber: "", currency: "", bankAddress: "", sortCode: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => setVals((v) => ({ ...v, [k]: e.target.value }));
  return (
    <>
      <Grid3>
        <OutlinedSelect label="Bank's Name" value={vals.bank} onChange={(v) => setVals((s) => ({ ...s, bank: v }))} options={["Select Bank", "First Bank", "GTBank", "Zenith Bank", "Access Bank", "UBA"]} />
        <TextField label="Account Number" value={vals.accountNumber} onChange={set("accountNumber")} size="small" sx={fieldSx} />
        <OutlinedSelect label="Currency" value={vals.currency} onChange={(v) => setVals((s) => ({ ...s, currency: v }))} options={["NGN", "USD", "GHS", "KES"]} />
      </Grid3>
      <Grid2>
        <TextField label="Bank Address" value={vals.bankAddress} onChange={set("bankAddress")} size="small" sx={fieldSx} />
        <TextField label="Sort Code" value={vals.sortCode} onChange={set("sortCode")} size="small" sx={fieldSx} />
      </Grid2>
    </>
  );
}

function CommissionFinanceSection() {
  const [vals, setVals] = useState({ commissionPayable: "", netCommissionAllowed: "", minCommissionPayable: "N2,000.00", currency: "NGN", vatApplicable: "", whtApplicable: "", taxRateVat: "7.5%", taxRateWht: "5.0%" });
  return (
    <Box>
      <SectionDividerTitle title="Commission Settings" />
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 18px", mt: 1.5 }}>
        <QuantumRadioGroup label="Commission Payable?" value={vals.commissionPayable} onChange={(v) => setVals((s) => ({ ...s, commissionPayable: v }))} options={[{ label: "Yes", value: "yes" }, { label: "No", value: "no" }]} />
        <QuantumRadioGroup label="Net of Commission Allowed?" value={vals.netCommissionAllowed} onChange={(v) => setVals((s) => ({ ...s, netCommissionAllowed: v }))} options={[{ label: "Yes", value: "yes" }, { label: "No", value: "no" }]} />
        <TextField label="Min. Commission Payable" value={vals.minCommissionPayable} onChange={(e) => setVals((v) => ({ ...v, minCommissionPayable: e.target.value }))} size="small" sx={fieldSx} slotProps={{ inputLabel: { shrink: true } }} />
        <OutlinedSelect label="Currency" value={vals.currency} onChange={(v) => setVals((s) => ({ ...s, currency: v }))} options={["NGN", "USD", "GHS", "KES"]} />
      </Box>
      <SectionDividerTitle title="Tax Settings" />
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 18px", mt: 1.5 }}>
        <QuantumRadioGroup label="VAT Applicable?" value={vals.vatApplicable} onChange={(v) => setVals((s) => ({ ...s, vatApplicable: v }))} options={[{ label: "Yes", value: "yes" }, { label: "No", value: "no" }]} />
        <QuantumRadioGroup label="WHT Applicable?" value={vals.whtApplicable} onChange={(v) => setVals((s) => ({ ...s, whtApplicable: v }))} options={[{ label: "Yes", value: "yes" }, { label: "No", value: "no" }]} />
        <TextField label="Tax Rate (VAT)" value={vals.taxRateVat} onChange={(e) => setVals((v) => ({ ...v, taxRateVat: e.target.value }))} size="small" sx={fieldSx} slotProps={{ inputLabel: { shrink: true } }} />
        <OutlinedSelect label="Tax Rate (WHT)" value={vals.taxRateWht} onChange={(v) => setVals((s) => ({ ...s, taxRateWht: v }))} options={["5.0%", "7.5%", "10%"]} />
      </Box>
    </Box>
  );
}

const PRODUCT_OPTIONS = ["Term Life", "Whole Life", "Endowment", "Group Life", "Annuity", "Credit Life"];

function RelationshipManagerSection() {
  const [vals, setVals] = useState({ managerCode: "", managerName: "", subManagerCode: "", subManagerName: "", productClassification: [] as string[] });

  const handleRemoveTag = (tag: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setVals((s) => ({ ...s, productClassification: s.productClassification.filter((t) => t !== tag) }));
  };

  return (
    <>
      <Grid2>
        <TextField label="Relationship Manager Code" value={vals.managerCode} onChange={(e) => setVals((s) => ({ ...s, managerCode: e.target.value }))} size="small" sx={fieldSx} />
        <TextField label="Relationship Manager Name" value={vals.managerName} onChange={(e) => setVals((s) => ({ ...s, managerName: e.target.value }))} size="small" sx={fieldSx} />
      </Grid2>
      <Grid2>
        <TextField label="Sub-relationship Mgr Code" value={vals.subManagerCode} onChange={(e) => setVals((s) => ({ ...s, subManagerCode: e.target.value }))} size="small" sx={fieldSx} />
        <TextField label="Sub-relationship Manager Name" value={vals.subManagerName} onChange={(e) => setVals((s) => ({ ...s, subManagerName: e.target.value }))} size="small" sx={fieldSx} />
      </Grid2>
      <FullRow>
        <FormControl fullWidth size="small">
          <InputLabel sx={{ fontSize: 11, color: "#242424", transform: "translate(12px, 12px) scale(1)", transition: "color 200ms cubic-bezier(0,0,0.2,1), transform 200ms cubic-bezier(0,0,0.2,1)", "&.Mui-focused": { color: "#FF6B22" }, "&.MuiInputLabel-shrink": { transform: "translate(12px, -7px) scale(0.82)" } }}>
            Products Qualification
          </InputLabel>
          <Select multiple value={vals.productClassification} label="Products Qualification"
            onChange={(e) => setVals((s) => ({ ...s, productClassification: typeof e.target.value === "string" ? e.target.value.split(",") : (e.target.value as string[]) }))}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6 }}>
                {(selected as string[]).map((v) => (
                  <Box key={v} sx={{ display: "inline-flex", alignItems: "center", gap: 0.3, border: "1px solid #1C1C1C", borderRadius: "999px", pl: 1.2, pr: 0.5, py: 0.3, bgcolor: "transparent" }}>
                    <Typography sx={{ fontSize: 12, fontWeight: 500, color: "#1C1C1C", lineHeight: 1 }}>{v}</Typography>
                    <IconButton size="small" onMouseDown={(e) => handleRemoveTag(v, e)} sx={{ p: "4px", borderRadius: "50%", transition: "all 0.2s ease", "&:hover": { bgcolor: "#FFF0E9" }, "&:active": { bgcolor: "#FFE0D2" } }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.00065 1.33325C4.32732 1.33325 1.33398 4.32659 1.33398 7.99992C1.33398 11.6733 4.32732 14.6666 8.00065 14.6666C11.674 14.6666 14.6673 11.6733 14.6673 7.99992C14.6673 4.32659 11.674 1.33325 8.00065 1.33325ZM10.2407 9.53325C10.434 9.72658 10.434 10.0466 10.2407 10.2399C10.1407 10.3399 10.014 10.3866 9.88732 10.3866C9.76065 10.3866 9.63398 10.3399 9.53398 10.2399L8.00065 8.70658L6.46732 10.2399C6.36732 10.3399 6.24065 10.3866 6.11398 10.3866C5.98732 10.3866 5.86065 10.3399 5.76065 10.2399C5.56732 10.0466 5.56732 9.72658 5.76065 9.53325L7.29398 7.99992L5.76065 6.46658C5.56732 6.27325 5.56732 5.95325 5.76065 5.75992C5.95398 5.56659 6.27398 5.56659 6.46732 5.75992L8.00065 7.29325L9.53398 5.75992C9.72732 5.56659 10.0473 5.56659 10.2407 5.75992C10.434 5.95325 10.434 6.27325 10.2407 6.46658L8.70732 7.99992L10.2407 9.53325Z" fill="#A1A1A1" /></svg>
                    </IconButton>
                  </Box>
                ))}
              </Box>
            )}
            sx={{ minHeight: 44, fontSize: 13, fontWeight: 600, borderRadius: "4px", color: "#242424", backgroundColor: "transparent", "& .MuiSelect-select": { display: "flex", alignItems: "center", flexWrap: "wrap", padding: "6px 12px !important", minHeight: "44px !important", gap: "4px", boxSizing: "border-box" }, "& fieldset": { borderColor: "#242424", borderWidth: "1px", "& legend": { fontSize: "0.72em" } }, "&:hover fieldset": { borderColor: "#4B5563" }, "&.Mui-focused fieldset": { borderColor: "#FF6B22", borderWidth: "1px" } }}
            MenuProps={{ PaperProps: { sx: { borderRadius: "4px", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", border: "1px solid #E5E7EB", mt: 0.5, "& .MuiMenuItem-root": { fontSize: 13, color: "#1C1C1C", px: 1.5, py: 1, "&:hover": { bgcolor: "#FFF0E9" }, "&.Mui-selected": { bgcolor: "#FFF0E9", fontWeight: 600, "&:hover": { bgcolor: "#FFF0E9" } } } } } }}>
            {PRODUCT_OPTIONS.map((option) => (
              <MenuItem key={option} value={option}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                  <Typography sx={{ fontSize: 13, color: "inherit", fontWeight: vals.productClassification.includes(option) ? 600 : 400 }}>{option}</Typography>
                  {vals.productClassification.includes(option) && (
                    <Box sx={{ color: "#FF6B22", display: "flex", alignItems: "center" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
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

// ── Props ─────────────────────────────────────────────────────────────────────
interface BrokerInformationStepProps {
  onBack: () => void;
  onCancel: () => void;
  onFinish: () => void;
  hasIntegrationDowntime?: boolean;  // broker-2
  hasDisparity?: boolean;
  hasInvalidNin?: boolean;
  hasNaicomFailure?: boolean;        // broker-3
  hasInvalidRcNumber?: boolean;      // broker-4
  onViewDisparity?: () => void;
  onRequestAdditionalDocument?: () => void;
  onEscalateToCompliance?: () => void;
}

// ── Component ─────────────────────────────────────────────────────────────────
export function BrokerInformationStep({
  onBack,
  onCancel,
  onFinish,
  hasIntegrationDowntime = false,
  hasDisparity = false,
  hasInvalidNin = false,
  hasNaicomFailure = false,
  hasInvalidRcNumber = false,
  onViewDisparity,
  onRequestAdditionalDocument,
  onEscalateToCompliance,
}: BrokerInformationStepProps) {
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [retried, setRetried] = useState(false);
  const [retrying, setRetrying] = useState(false);

  // broker-1: green (no error flags set)
  const showGreenBanner = !hasIntegrationDowntime && !hasDisparity && !hasInvalidNin && !hasNaicomFailure && !hasInvalidRcNumber && !bannerDismissed;
  // broker-2: downtime banner visible until dismissed or retried
  const showDowntimeBanner = hasIntegrationDowntime && !bannerDismissed && !retried;
  // broker-2: Continue disabled until retry
  const continueDisabled = hasIntegrationDowntime && !retried;

  const handleRetry = () => {
    setRetrying(true);
    setTimeout(() => { setRetrying(false); setRetried(true); }, 1500);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", minHeight: 0 }}>
      <Box sx={{ mb: 2, flexShrink: 0 }}>
        <Typography fontWeight={700} sx={{ fontSize: 22, color: "#111827" }}>Client&apos;s Information</Typography>
        <Typography sx={{ fontSize: 13, color: "#6B7280" }}>Below is the client&apos;s detail as currently present on the system</Typography>
      </Box>

      {/* ── Green success banner — broker-1 ── */}
      {showGreenBanner && (
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 0.8, bgcolor: "#E7F6F2", border: "1px solid #13A47C", borderRadius: "6px", px: 2, py: 1, mb: 1.5, flexShrink: 0 }}>
          <Box sx={{ flexShrink: 0, mt: "2px", color: "#13A47C" }}><GreenCheckIcon /></Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography sx={{ fontSize: 13, color: "#333333", lineHeight: 1.6 }}>
              RC Number verified successfully. No disparities found between the CAC record and the proposal form. You may proceed to the document checklist.
            </Typography>
          </Box>
          <IconButton onClick={() => setBannerDismissed(true)} size="small" sx={{ mt: -0.5, "&:hover": { bgcolor: "#E7F6F2", color: "#374151" } }}><CircularTimes /></IconButton>
        </Box>
      )}

      {/* ── Orange CAC downtime banner — broker-2 ── */}
      {showDowntimeBanner && (
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 0.8, bgcolor: "#FFF8F5", border: "1px solid #FF6B22", borderRadius: "6px", px: 2, py: 1, mb: 1, flexShrink: 0 }}>
          <Box sx={{ flexShrink: 0, mt: "2px", color: "#FF6B22" }}><PolygonWarningIcon /></Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography sx={{ fontSize: 13, fontWeight: 700, color: "#242424", mb: 0.3 }}>CAC integration failure</Typography>
            <Typography sx={{ fontSize: 12, color: "#333333", lineHeight: 1.6 }}>
              The system could not retrieve a result for this RC Number due to maybe an integration outage.
            </Typography>
          </Box>
          <IconButton onClick={() => setBannerDismissed(true)} size="small" sx={{ mt: -0.5, "&:hover": { bgcolor: "#FFF0E9", color: "#374151" } }}><CircularTimes /></IconButton>
        </Box>
      )}

      {/* ── Orange NAICOM failure banner — broker-3 ── */}
      {hasNaicomFailure && !bannerDismissed && (
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 0.8, bgcolor: "#FFF8F5", border: "1px solid #FF6B22", borderRadius: "6px", px: 2, py: 1, mb: 1, flexShrink: 0 }}>
          <Box sx={{ flexShrink: 0, mt: "2px", color: "#FF6B22" }}><PolygonWarningIcon /></Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography sx={{ fontSize: 13, fontWeight: 700, color: "#242424", mb: 0.3 }}>NAICOM licence not verified</Typography>
            <Typography sx={{ fontSize: 12, color: "#333333", lineHeight: 1.6 }}>
              The licence could not be verified against the NAICOM registry. This requires a compliance review before onboarding can proceed.
            </Typography>
          </Box>
          <IconButton onClick={() => setBannerDismissed(true)} size="small" sx={{ mt: -0.5, "&:hover": { bgcolor: "#FFF0E9", color: "#374151" } }}><CircularTimes /></IconButton>
        </Box>
      )}

      {/* ── Orange invalid RC number banner — broker-4 ── */}
      {hasInvalidRcNumber && !bannerDismissed && (
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 0.8, bgcolor: "#FFF8F5", border: "1px solid #FF6B22", borderRadius: "6px", px: 2, py: 1, mb: 1, flexShrink: 0 }}>
          <Box sx={{ flexShrink: 0, mt: "2px", color: "#FF6B22" }}><PolygonWarningIcon /></Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography sx={{ fontSize: 13, fontWeight: 700, color: "#242424", mb: 0.3 }}>Invalid RC Number</Typography>
            <Typography sx={{ fontSize: 12, color: "#333333", lineHeight: 1.6 }}>
              The RC Number does not match any record with CAC. Verify the NIN with the agent and retry the search.
            </Typography>
          </Box>
          <IconButton onClick={() => setBannerDismissed(true)} size="small" sx={{ mt: -0.5, "&:hover": { bgcolor: "#FFF0E9", color: "#374151" } }}><CircularTimes /></IconButton>
        </Box>
      )}

      {/* ── Disparity banner ── */}
      {hasDisparity && !bannerDismissed && (
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 0.8, bgcolor: "#FFF0E9", border: "1.5px solid #FF6B22", borderRadius: "6px", px: 2, py: 0.8, mb: 1, flexShrink: 0 }}>
          <Box sx={{ flexShrink: 0, mt: "2px", color: "#FF6B22" }}><PolygonWarningIcon /></Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography sx={{ fontSize: 13, fontWeight: 700, color: "#242424", mb: 0.3 }}>Disparities found!</Typography>
            <Typography sx={{ fontSize: 12, color: "#333333", lineHeight: 1.6 }}>
              A data mismatch was found between the CAC record and the proposal form. Highlighted fields do not match.
            </Typography>
          </Box>
          <IconButton onClick={() => setBannerDismissed(true)} size="small" sx={{ mt: -0.5, "&:hover": { bgcolor: "#FFF0E9", color: "#374151" } }}><CircularTimes /></IconButton>
        </Box>
      )}

      {/* Scrollable accordions */}
      <Box sx={{ flex: 1, minHeight: 0, overflowY: "auto", pr: 0.5, "&::-webkit-scrollbar": { width: 4 }, "&::-webkit-scrollbar-track": { bgcolor: "#F3F4F6", borderRadius: 9999 }, "&::-webkit-scrollbar-thumb": { bgcolor: "#FF6B22", borderRadius: 9999 }, scrollbarWidth: "thin", scrollbarColor: "#FF6B22 #F3F4F6" }}>
        <AccordionSection title="Company Information" defaultOpen={false}><CompanyInformationSection /></AccordionSection>
        <AccordionSection title="Address Information" defaultOpen={false}><AddressInformationSection /></AccordionSection>
        <AccordionSection title="Contact Person" defaultOpen={false}><ContactPersonSection /></AccordionSection>
        <AccordionSection title="Bank Details" defaultOpen={false}><BankDetailsSection /></AccordionSection>
        <AccordionSection title="Commission & Finance" defaultOpen={false}><CommissionFinanceSection /></AccordionSection>
        <AccordionSection title="Relationship Manager" defaultOpen={false}><RelationshipManagerSection /></AccordionSection>

        {/* Retry NIMC Search — broker-2, hidden once retried */}
        {hasIntegrationDowntime && !retried && (
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 0.5 }}>
            <ButtonBase onClick={handleRetry} disabled={retrying} sx={{ display: "flex", alignItems: "center", gap: 0.5, fontSize: 12, fontWeight: 600, color: retrying ? "#9CA3AF" : "#FF6B22", px: 1, py: 0.5, borderRadius: "4px", transition: "opacity 0.15s", "&:hover": { opacity: 0.75 }, "&:disabled": { cursor: "not-allowed" } }}>
              <Box sx={{ display: "flex", animation: retrying ? "spin 0.9s linear infinite" : "none", "@keyframes spin": { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } } }}>
                <RetryIcon />
              </Box>
              {retrying ? "Retrying..." : "Retry NIMC Search"}
            </ButtonBase>
          </Box>
        )}

        {/* Retry RC Number Search — broker-4, always visible */}
        {hasInvalidRcNumber && (
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 0.5 }}>
            <ButtonBase sx={{ display: "flex", alignItems: "center", gap: 0.5, fontSize: 12, fontWeight: 600, color: "#FF6B22", px: 1, py: 0.5, borderRadius: "4px", transition: "opacity 0.15s", "&:hover": { opacity: 0.75 } }}>
              <Box sx={{ display: "flex" }}><RetryIcon /></Box>
              Retry RC Number Search
            </ButtonBase>
          </Box>
        )}
      </Box>

      {/* Footer */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", pt: 2.5, flexShrink: 0 }}>
        <BrandButton onClick={onBack} variant="outline" className="!px-[28px] !font-normal">Back</BrandButton>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Cancel hidden for all error/flag scenarios */}
          {!hasDisparity && !hasInvalidNin && !hasNaicomFailure && !hasInvalidRcNumber && (
            <BrandButton variant="ghost" size="sm" onClick={onCancel} className="!text-[#f97316] !font-normal !px-4 hover:!bg-[#FFF0E9]">Cancel</BrandButton>
          )}
          {hasInvalidNin ? (
            <BrandButton onClick={onRequestAdditionalDocument} className="!py-[4px] !px-[20px]" size="sm">
              Request for additional document
            </BrandButton>
          ) : hasDisparity ? (
            <BrandButton onClick={onViewDisparity} className="!py-[4px] !px-[36px]" size="sm">View Disparity</BrandButton>
          ) : hasNaicomFailure ? (
            // broker-3 → escalate to compliance review
            <BrandButton onClick={onEscalateToCompliance} className="!py-[4px] !px-[28px]" size="sm">
              Escalate to Compliance
            </BrandButton>
          ) : hasInvalidRcNumber ? (
            // broker-4 → Continue routes to onRequestAdditionalDocument (email flow)
            <BrandButton onClick={onRequestAdditionalDocument} className="!py-[4px] !px-[36px]" size="sm">
              Continue
            </BrandButton>
          ) : (
            // broker-1 (green) / broker-2 (retry)
            <BrandButton
              onClick={continueDisabled ? undefined : onFinish}
              className={`!py-[4px] !px-[36px] ${continueDisabled ? "!opacity-40 !cursor-not-allowed !pointer-events-none" : ""}`}
              size="sm"
            >
              {hasIntegrationDowntime ? (retried ? "Finish Onboarding" : "Continue") : "Continue"}
            </BrandButton>
          )}
        </Box>
      </Box>
    </Box>
  );
}