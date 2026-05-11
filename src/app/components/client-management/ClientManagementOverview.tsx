"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ButtonBase from "@mui/material/ButtonBase";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { BrandButton } from "./BrandButton";
import { Sidebar } from "./Sidebar";
import { TopHeader } from "./TopHeader";
import OnboardingClientType from "./AddNewClientModal";
import { CaseCreatedSuccessModal } from "./CaseCreatedSuccessModal";
import { RequestAdditionalDocumentModal } from "./RequestAdditionalDocumentModal";
import { RequestSentSuccessModal } from "./RequestSentSuccessModal";

import {
  IndividualIcon,
  CorporateIcon,
  IntermediaryIcon,
  LocalInsuranceIcon,
  SearchIcon,
  KeyAngleDown,
  SortIcon,
  TableHorizontalIcon,
  TriangleArrowDown,
  PaginationAngleAllLeft,
  PaginationAngleLeft,
  PaginationAngleRight,
  PagionationAngleAllRight,
} from "./icons";

const BRAND = "#FF6B22";

// ── Tab key type ──────────────────────────────────────────────────────────────
type TabKey = "individual" | "corporate" | "agent" | "broker";

// ── Relative date helper ──────────────────────────────────────────────────────
/**
 * Given an ISO date string or a Date object, returns an object with:
 * - relative: "Today", "Yesterday", "2 days ago", "3 months ago", etc.
 * - absolute: "06 May 2026, 10:09"
 *
 * The absolute format always appends the time component.
 */
export function formatRelativeDate(date: Date | string): { relative: string; absolute: string } {
  const d = typeof date === "string" ? new Date(date) : date;
  const now = new Date();

  // Absolute — "06 May 2026, 10:09"
  const absolute = d.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).replace(",", "").replace(/(\d{2}:\d{2})/, (_, t) => `, ${t}`);

  // Diff in whole days (ignoring time)
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const diffMs = startOfToday.getTime() - startOfDate.getTime();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  let relative: string;
  if (diffDays === 0) {
    relative = "Today";
  } else if (diffDays === 1) {
    relative = "Yesterday";
  } else if (diffDays < 30) {
    relative = `${diffDays} days ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    relative = months === 1 ? "1 month ago" : `${months} months ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    relative = years === 1 ? "1 year ago" : `${years} years ago`;
  }

  return { relative, absolute };
}

// ── Per-tab data ──────────────────────────────────────────────────────────────
interface UnverifiedClient {
  id: string;
  name: string;
  verificationId: string;
  contact: string;
  dateAdded: string; // ISO datetime string
}

const now = new Date();
function daysAgo(d: number, h = 10, m = 9): string {
  const dt = new Date(now);
  dt.setDate(dt.getDate() - d);
  dt.setHours(h, m, 0, 0);
  return dt.toISOString();
}

const INDIVIDUAL_DATA: UnverifiedClient[] = [
  { id: "L1-90321", name: "Elena Adetayo",    verificationId: "11122288901", contact: "08162720193", dateAdded: daysAgo(0, 10, 9) },
  { id: "L1-10892", name: "Temidayo Samuel",  verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(2, 14, 8) },
  { id: "L1-11239", name: "Ayola Timothy",    verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(4, 16, 9) },
  { id: "L1-90329", name: "Grace Banks",      verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(4, 15, 10) },
  { id: "L1-90320", name: "Balogun Mike",     verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 13, 12) },
  { id: "L1-90320", name: "Balogun Mike",     verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 12, 27) },
  { id: "L1-90320", name: "Balogun Mike",     verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 12, 10) },
  { id: "L1-90320", name: "Balogun Mike",     verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 11, 31) },
  { id: "L1-90320", name: "Balogun Mike",     verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 11, 1) },
  { id: "L1-90320", name: "Balogun Mike",     verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 9, 15) },
  { id: "L1-90318", name: "Chioma Okafor",    verificationId: "13445178298", contact: "08055432167", dateAdded: daysAgo(7, 9, 0) },
  { id: "L1-90315", name: "James Adeyemi",    verificationId: "13445178298", contact: "07034567891", dateAdded: daysAgo(9, 11, 30) },
];

const CORPORATE_DATA: UnverifiedClient[] = [
  { id: "L1-90321", name: "AXA",          verificationId: "10923567892", contact: "08162720193", dateAdded: daysAgo(0, 10, 9) },
  { id: "L1-10892", name: "NSIA",         verificationId: "10923567892", contact: "08162720193", dateAdded: daysAgo(2, 14, 8) },
  { id: "L1-11239", name: "Stanbic IBTC", verificationId: "10923567892", contact: "08162720193", dateAdded: daysAgo(4, 16, 9) },
  { id: "L1-90329", name: "AXA",          verificationId: "10923567892", contact: "08162720193", dateAdded: daysAgo(4, 15, 10) },
  { id: "L1-90320", name: "NEM",          verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 13, 12) },
  { id: "L1-90320", name: "NEM",          verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 12, 27) },
  { id: "L1-90320", name: "NEM",          verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 12, 10) },
  { id: "L1-90320", name: "NEM",          verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 11, 31) },
  { id: "L1-90320", name: "NEM",          verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 11, 1) },
  { id: "L1-90320", name: "AXA",          verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 9, 15) },
  { id: "L1-90318", name: "Leadway",      verificationId: "13445178298", contact: "08055432167", dateAdded: daysAgo(7, 9, 0) },
  { id: "L1-90315", name: "Zenith Life",  verificationId: "13445178298", contact: "07034567891", dateAdded: daysAgo(9, 11, 30) },
];

const AGENT_DATA: UnverifiedClient[] = [
  { id: "L1-90321", name: "Elena Adetayo",    verificationId: "10923567892", contact: "08162720193", dateAdded: daysAgo(0, 10, 9) },
  { id: "L1-10892", name: "Temidayo Samuel",  verificationId: "10923567892", contact: "08162720193", dateAdded: daysAgo(2, 14, 8) },
  { id: "L1-11239", name: "Ayola Timothy",    verificationId: "10923567892", contact: "08162720193", dateAdded: daysAgo(4, 16, 9) },
  { id: "L1-90329", name: "Grace Banks",      verificationId: "10923567892", contact: "08162720193", dateAdded: daysAgo(4, 15, 10) },
  { id: "L1-90320", name: "Balogun Mike",     verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 13, 12) },
  { id: "L1-90320", name: "Balogun Mike",     verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 12, 27) },
  { id: "L1-90320", name: "Balogun Mike",     verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 12, 10) },
  { id: "L1-90320", name: "Balogun Mike",     verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 11, 31) },
  { id: "L1-90320", name: "Balogun Mike",     verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 11, 1) },
  { id: "L1-90320", name: "Balogun Mike",     verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 9, 15) },
  { id: "L1-90318", name: "Chioma Okafor",    verificationId: "13445178298", contact: "08055432167", dateAdded: daysAgo(7, 9, 0) },
  { id: "L1-90315", name: "James Adeyemi",    verificationId: "13445178298", contact: "07034567891", dateAdded: daysAgo(9, 11, 30) },
];

const BROKER_DATA: UnverifiedClient[] = [
  { id: "L1-90321", name: "AXA",          verificationId: "10923567892", contact: "08162720193", dateAdded: daysAgo(0, 10, 9) },
  { id: "L1-10892", name: "NSIA",         verificationId: "10923567892", contact: "08162720193", dateAdded: daysAgo(2, 14, 8) },
  { id: "L1-11239", name: "Stanbic IBTC", verificationId: "10923567892", contact: "08162720193", dateAdded: daysAgo(4, 16, 9) },
  { id: "L1-90329", name: "AXA",          verificationId: "10923567892", contact: "08162720193", dateAdded: daysAgo(4, 15, 10) },
  { id: "L1-90320", name: "NEM",          verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 13, 12) },
  { id: "L1-90320", name: "NEM",          verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 12, 27) },
  { id: "L1-90320", name: "NEM",          verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 12, 10) },
  { id: "L1-90320", name: "NEM",          verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 11, 31) },
  { id: "L1-90320", name: "NEM",          verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 11, 1) },
  { id: "L1-90320", name: "AXA",          verificationId: "13445178298", contact: "08162720193", dateAdded: daysAgo(5, 9, 15) },
  { id: "L1-90318", name: "Leadway",      verificationId: "13445178298", contact: "08055432167", dateAdded: daysAgo(7, 9, 0) },
  { id: "L1-90315", name: "Zenith Life",  verificationId: "13445178298", contact: "07034567891", dateAdded: daysAgo(9, 11, 30) },
];

const TAB_DATA: Record<TabKey, UnverifiedClient[]> = {
  individual: INDIVIDUAL_DATA,
  corporate:  CORPORATE_DATA,
  agent:      AGENT_DATA,
  broker:     BROKER_DATA,
};

const UNVERIFIED_TABS: { key: TabKey; label: string }[] = [
  { key: "individual", label: "Individual" },
  { key: "corporate",  label: "Corporate" },
  { key: "agent",      label: "Agents" },
  { key: "broker",     label: "Brokers" },
];

// ── Client type summary cards ─────────────────────────────────────────────────
type ClientTypeCard = {
  type: string;
  label: string;
  description: string;
  count: number;
  Icon: React.ComponentType;
};

const CLIENT_TYPES: ClientTypeCard[] = [
  { type: "individual",     label: "Individuals",  description: "Policyholder, beneficiaries, legal guardians, assured live, next of kin", count: 300000, Icon: IndividualIcon },
  { type: "corporate",      label: "Corporate",    description: "Employers, associations, unions, clubs, group sponsors",                  count: 25423,  Icon: CorporateIcon },
  { type: "agents",         label: "Agents",       description: "Producers, wholesalers, general and sub-agents",                         count: 213,    Icon: IntermediaryIcon },
  { type: "brokers",        label: "Brokers",      description: "Firms, consultants, MGAs, carriers",                                     count: 213,    Icon: LocalInsuranceIcon },
];

function formatCount(n: number): string {
  if (n >= 1000) return `${Math.round(n / 1000)}k`;
  return n.toString();
}

// ── Styled tab components ─────────────────────────────────────────────────────
const StyledTabs = styled(Tabs)({
  minHeight: 44,
  "& .MuiTabs-indicator": { backgroundColor: BRAND, height: 2 },
  "& .MuiTabs-flexContainer": { gap: 0, flexWrap: "nowrap" },
});

const StyledTab = styled(Tab)({
  minHeight: 44,
  padding: "0 16px",
  minWidth: "fit-content",
  fontSize: 13,
  fontWeight: 600,
  textTransform: "none",
  color: "#6B7280",
  letterSpacing: 0,
  transition: "color 0.2s ease",
  "&.Mui-selected": { color: BRAND },
  "&:hover": { color: BRAND, opacity: 1 },
});

// ── Date cell component ───────────────────────────────────────────────────────
function DateCell({ isoString }: { isoString: string }) {
  const { relative, absolute } = formatRelativeDate(isoString);
  return (
    <Box>
      <Typography sx={{ fontSize: 13, fontWeight: 500, color: "#242424", lineHeight: 1.3 }}>
        {relative}
      </Typography>
      <Typography sx={{ fontSize: 11, color: "#5C5C5C", lineHeight: 1.4, mt: 0.25, fontStyle: "italic" }}>
        {absolute}
      </Typography>
    </Box>
  );
}

// ── Client type summary card ──────────────────────────────────────────────────
function ClientTypeSummaryCard({ item }: { item: ClientTypeCard }) {
  return (
    <Paper elevation={0} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 3, p: { xs: 2, sm: 3 }, borderRadius: "12px", border: "1px solid transparent", boxShadow: "0px 1px 2px rgba(0,0,0,0.05), 0px 1px 3px rgba(0,0,0,0)", bgcolor: "background.paper", height: "100%", boxSizing: "border-box", minWidth: 0 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "100%", minWidth: 0 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 1 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, minWidth: 0, flex: 1 }}>
            <Typography fontWeight={700} sx={{ fontSize: 16, lineHeight: 1.3, wordBreak: "break-word" }}>{item.label}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: { xs: 13, sm: 14 }, wordBreak: "break-word" }}>{item.description}</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "flex-end" }, flexDirection: { xs: "column", sm: "row" }, gap: 1.2, width: "100%", mt: "auto" }}>
        <Typography fontWeight={800} sx={{ fontSize: { xs: 28, sm: 36 }, lineHeight: 1 }}>{formatCount(item.count)}</Typography>
        <Link href={`/client-management/${item.type}`} style={{ textDecoration: "none", width: "fit-content" }}>
          <Typography variant="body2" sx={{ color: BRAND, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 0.5, cursor: "pointer", whiteSpace: "nowrap", "& .arrow": { display: "inline-block", transition: "transform 0.2s ease" }, "&:hover .arrow": { transform: "translateX(4px)" }, "&:hover": { textDecoration: "underline" } }}>
            View All <span className="arrow">→</span>
          </Typography>
        </Link>
      </Box>
    </Paper>
  );
}

// ── Toolbar sort dropdown ─────────────────────────────────────────────────────
function ToolbarDropdown({ icon, label, options }: { icon: React.ReactNode; label: string; options: string[] }) {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  return (
    <>
      <ButtonBase onClick={(e) => setAnchor(e.currentTarget)} sx={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 0.5, px: 1.5, py: 0.9, borderRadius: "8px", fontSize: 13, color: "#2E2E2E", fontWeight: 500, bgcolor: "#fff", transition: "background 0.15s", "&:hover": { bgcolor: "#F9FAFB" }, userSelect: "none", whiteSpace: "nowrap", minHeight: 38, flexShrink: 0 }}>
        {icon}
        <span style={{ marginLeft: 4 }}>{label}</span>
        <KeyAngleDown />
      </ButtonBase>
      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)} PaperProps={{ sx: { borderRadius: "8px", mt: 0.5, minWidth: 160, boxShadow: "0 4px 16px rgba(0,0,0,0.12)" } }}>
        {options.map((opt) => (<MenuItem key={opt} onClick={() => setAnchor(null)} sx={{ fontSize: 13 }}>{opt}</MenuItem>))}
      </Menu>
    </>
  );
}

// ── Row action menu ───────────────────────────────────────────────────────────
function ActionMenu({ mobile = false }: { mobile?: boolean }) {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  return (
    <>
      <IconButton size="small" onClick={(e) => setAnchor(e.currentTarget)} sx={{ color: "#6B7280", p: mobile ? 0.5 : 1, minWidth: mobile ? 28 : 32, minHeight: mobile ? 28 : 32, "&:hover": { color: BRAND, bgcolor: "transparent" } }}>
        <TableHorizontalIcon />
      </IconButton>
      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)} PaperProps={{ sx: { borderRadius: "8px", mt: 0.5, minWidth: 160, boxShadow: "0 4px 16px rgba(0,0,0,0.12)" } }}>
        <MenuItem onClick={() => setAnchor(null)} sx={{ fontSize: 13 }}>View Details</MenuItem>
        <MenuItem onClick={() => setAnchor(null)} sx={{ fontSize: 13 }}>Verify Client</MenuItem>
        <MenuItem onClick={() => setAnchor(null)} sx={{ fontSize: 13, color: "error.main" }}>Reject</MenuItem>
      </Menu>
    </>
  );
}

// ── Rows per page selector ────────────────────────────────────────────────────
function RowsPerPageSelect({ value, onChange }: { value: number; onChange: (val: number) => void }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  return (
    <>
      <ButtonBase onClick={(e) => setAnchorEl(e.currentTarget)} sx={{ display: "flex", alignItems: "center", gap: "4px", px: 0.5, py: 0.5, borderRadius: "6px", transition: "background 0.15s ease", "&:hover": { bgcolor: "#F3F4F6" } }}>
        <Typography sx={{ fontSize: 12, fontWeight: 400, color: "#242424", lineHeight: 1 }}>{value}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", color: "#374151" }}><TriangleArrowDown /></Box>
      </ButtonBase>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)} anchorOrigin={{ vertical: "bottom", horizontal: "left" }} transformOrigin={{ vertical: "top", horizontal: "left" }} PaperProps={{ sx: { mt: 0.5, borderRadius: "8px", minWidth: 80, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)" } }}>
        {[5, 10, 20, 50].map((n) => (
          <MenuItem key={n} selected={value === n} onClick={() => { onChange(n); setAnchorEl(null); }} sx={{ fontSize: 13, color: "#242424", fontWeight: value === n ? 600 : 400, borderRadius: "6px", mx: 0.5, "&.Mui-selected": { backgroundColor: "#FF6B22", color: "#fff" }, "&.Mui-selected:hover": { backgroundColor: "#FF6B22" }, "&:hover": { backgroundColor: "#FFF3ED" } }}>
            {n}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

// ── Pagination ────────────────────────────────────────────────────────────────
function MuiPagination({ page, totalPages, rowsPerPage, onPageChange, onRowsPerPageChange }: { page: number; totalPages: number; rowsPerPage: number; onPageChange: (p: number) => void; onRowsPerPageChange: (r: number) => void }) {
  const pageNumbers: number[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
  } else {
    const set = new Set<number>();
    set.add(1);
    set.add(totalPages);
    for (let i = Math.max(1, page - 1); i <= Math.min(totalPages, page + 1); i++) set.add(i);
    pageNumbers.push(...Array.from(set).sort((a, b) => a - b));
  }

  const PagBtn = ({ onClick, disabled, children, active }: { onClick: () => void; disabled?: boolean; children: React.ReactNode; active?: boolean }) => (
    <ButtonBase onClick={onClick} disabled={disabled} sx={{ minWidth: 32, height: 32, px: 0.5, borderRadius: "6px", fontSize: 13, fontWeight: active ? 700 : 500, color: active ? "#fff" : disabled ? "#C4C4C4" : "#374151", bgcolor: active ? "#242424" : "transparent", transition: "all 0.15s ease", "&:hover:not(:disabled)": { bgcolor: active ? "#242424" : "#F3F4F6" }, "&:disabled": { opacity: 0.4 } }}>
      {children}
    </ButtonBase>
  );

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", sm: "flex-end" }, flexWrap: "wrap", gap: 1, px: { xs: 2, sm: 3 }, py: 1, borderTop: "1px solid #F0F0F0" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
        <Typography variant="caption" sx={{ fontWeight: 400, color: "#6B7280" }}>Rows per page:</Typography>
        <RowsPerPageSelect value={rowsPerPage} onChange={(val) => { onRowsPerPageChange(val); onPageChange(1); }} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.25, flexWrap: "wrap", justifyContent: { xs: "center", sm: "flex-start" } }}>
        <PagBtn onClick={() => onPageChange(1)} disabled={page === 1}><PaginationAngleAllLeft /></PagBtn>
        <PagBtn onClick={() => onPageChange(page - 1)} disabled={page === 1}><PaginationAngleLeft /></PagBtn>
        {pageNumbers.map((num, idx) => {
          const prev = pageNumbers[idx - 1];
          const showEllipsis = idx > 0 && num - prev > 1;
          return (
            <React.Fragment key={num}>
              {showEllipsis && <Typography sx={{ fontSize: 13, color: "#9CA3AF", px: 0.25 }}>…</Typography>}
              <PagBtn onClick={() => onPageChange(num)} active={num === page}>{num}</PagBtn>
            </React.Fragment>
          );
        })}
        <PagBtn onClick={() => onPageChange(page + 1)} disabled={page === totalPages}><PaginationAngleRight /></PagBtn>
        <PagBtn onClick={() => onPageChange(totalPages)} disabled={page === totalPages}><PagionationAngleAllRight /></PagBtn>
      </Box>
    </Box>
  );
}

// ── Unverified Clients table — URL-controlled tabs ────────────────────────────
function UnverifiedClients() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Tab driven by ?tab= URL param, defaults to "individual"
  const activeTab = (searchParams.get("tab") ?? "individual") as TabKey;
  const tabIndex = UNVERIFIED_TABS.findIndex((t) => t.key === activeTab);
  const currentTabIndex = tabIndex === -1 ? 0 : tabIndex;

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleTabChange = (_: React.SyntheticEvent, newIndex: number) => {
    const newKey = UNVERIFIED_TABS[newIndex].key;
    const next = new URLSearchParams(searchParams.toString());
    next.set("tab", newKey);
    router.push(`?${next.toString()}`);
    setPage(1);
    setSearch("");
  };

  const data = TAB_DATA[UNVERIFIED_TABS[currentTabIndex].key];

  const filtered = data.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase()) ||
      c.verificationId.toLowerCase().includes(search.toLowerCase()),
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const paginated = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <Paper elevation={0} sx={{ borderRadius: "8px", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06)", border: "1px solid #F0F0F0" }}>
      <Box sx={{ px: { xs: 2, sm: 3 }, pt: 2.5, pb: 0 }}>
        <Typography variant="body1" fontWeight={700} sx={{ fontSize: 15 }}>Unverified Client</Typography>
        <Typography sx={{ fontSize: 12, fontStyle: "italic", color: "rgba(0,0,0,0.6)", mt: 0.25 }}>
          Last Verification Run: Today, 12:00PM
        </Typography>
      </Box>

      <Box sx={{ px: { xs: 2, sm: 3 }, pt: 2, pb: 1.5, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", rowGap: 1.5, columnGap: 2 }}>
        {/* Tabs */}
        <Box sx={{ flexShrink: 0 }}>
          <StyledTabs value={currentTabIndex} onChange={handleTabChange} variant="standard" sx={{ minHeight: "unset" }}>
            {UNVERIFIED_TABS.map((t) => (
              <StyledTab key={t.key} label={t.label} />
            ))}
          </StyledTabs>
        </Box>

        {/* Search + sort + action */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap", flexShrink: 0 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, bgcolor: "#F0F1F280", borderRadius: "8px", px: 1, py: 0.75, width: { xs: "100%", sm: 220 } }}>
            <SearchIcon />
            <InputBase
              placeholder="Search..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              sx={{ fontSize: 12, flex: 1, color: "#374151", minWidth: 0, paddingLeft: 1 }}
            />
          </Box>
          <ToolbarDropdown icon={<SortIcon />} label="Sort" options={["Name (A–Z)", "Name (Z–A)", "Date Added (Newest)", "Date Added (Oldest)"]} />
          <Box sx={{ flexShrink: 0 }}>
            <BrandButton size="sm">Run Verification</BrandButton>
          </Box>
        </Box>
      </Box>

      <TableContainer sx={{ width: "100%", overflowX: "auto", overflowY: "hidden", WebkitOverflowScrolling: "touch" }}>
        <Table size="small" sx={{ minWidth: { xs: 760, md: 600 }, tableLayout: "fixed" }}>
          <TableHead>
            <TableRow sx={{ bgcolor: "#FAFAFA", "& th": { fontSize: 11, fontWeight: 400, color: "#242424", textTransform: "uppercase", py: 0.5, px: { xs: 1.5, sm: 3 }, borderTop: "1px solid transparent", whiteSpace: "nowrap", bgcolor: "rgba(0,0,0,0)" } }}>
              <TableCell sx={{ width: "15%" }}>Client ID</TableCell>
              <TableCell sx={{ width: "18%" }}>Name</TableCell>
              <TableCell sx={{ width: "20%" }}>Verification ID</TableCell>
              <TableCell sx={{ width: "16%" }}>Contact</TableCell>
              <TableCell sx={{ width: "22%" }}>Date Added</TableCell>
              <TableCell sx={{ width: { xs: 56, sm: "9%" }, textAlign: "center" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginated.map((client, idx) => (
              <TableRow
                key={`${client.id}-${idx}`}
                sx={{
                  "@keyframes rowIn": { from: { opacity: 0, transform: "translateY(6px)" }, to: { opacity: 1, transform: "translateY(0)" } },
                  animation: "rowIn 0.2s ease both",
                  animationDelay: `${idx * 0.04}s`,
                  "&:hover": { bgcolor: "#FFF8F5" },
                  "& td": { fontSize: 13, py: 1, color: "#242424", px: { xs: 1.5, sm: 3 }, borderBottom: "1.5px solid #BBBEC5", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
                  "&:last-child td": { borderBottom: "none" },
                }}
              >
                <TableCell sx={{ color: "#6B7280" }}>ID: {client.id}</TableCell>
                <TableCell sx={{ fontWeight: 500, color: "#111827" }}>{client.name}</TableCell>
                <TableCell sx={{ color: "#374151" }}>{client.verificationId}</TableCell>
                <TableCell sx={{ color: "#374151" }}>{client.contact}</TableCell>
                <TableCell sx={{ whiteSpace: "normal !important" }}>
                  <DateCell isoString={client.dateAdded} />
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <ActionMenu mobile />
                </TableCell>
              </TableRow>
            ))}
            {paginated.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} sx={{ textAlign: "center", py: 4, color: "#9CA3AF", fontSize: 13 }}>No clients found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <MuiPagination page={page} totalPages={totalPages} rowsPerPage={rowsPerPage} onPageChange={setPage} onRowsPerPageChange={setRowsPerPage} />
    </Paper>
  );
}

// ── Main page component ───────────────────────────────────────────────────────
export function ClientManagementOverview() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [addClientOpen, setAddClientOpen] = useState(false);
  const [caseCreatedOpen, setCaseCreatedOpen] = useState(false);
  const [requestDocOpen, setRequestDocOpen] = useState(false);
  const [requestSentOpen, setRequestSentOpen] = useState(false);

  const handleSaveAndExit = () => {
    setAddClientOpen(false);
    setTimeout(() => setCaseCreatedOpen(true), 300);
  };

  const handleRequestAdditionalDocument = () => {
    setAddClientOpen(false);
    setTimeout(() => setRequestDocOpen(true), 300);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden", bgcolor: "background.default" }}>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <Box sx={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0, minHeight: 0, overflow: "hidden" }}>
        <TopHeader onMenuClick={() => setSidebarOpen(true)} crumbs={["Dashboard", "Client Management"]} />

        <Box component="main" sx={{ flex: 1, minHeight: 0, overflowY: "auto", overflowX: "hidden", px: { xs: 2, sm: 3, lg: 4 }, pt: 4, pb: { xs: 2.5, sm: 3 } }}>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "stretch", sm: "flex-start" }, justifyContent: "space-between", gap: 2, mb: 3 }}>
            <Box sx={{ minWidth: 0 }}>
              <Typography variant="h5" fontWeight={800} sx={{ fontSize: { xs: 24, sm: 28 } }}>Client Management</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, fontSize: { xs: 13, sm: 14 }, wordBreak: "break-word" }}>
                Manage and oversee all client entity types within the ecosystem with real-time analytics
              </Typography>
            </Box>
            <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
              <BrandButton sx={{ width: { xs: "100%", sm: "auto" } }} onClick={() => setAddClientOpen(true)}>
                Add New Client
              </BrandButton>
            </Box>
          </Box>

          <Grid container spacing={2} sx={{ mb: 3 }}>
            {CLIENT_TYPES.map((item) => (
              <Grid key={item.type} size={{ xs: 12, sm: 6, md: 3 }}>
                <ClientTypeSummaryCard item={item} />
              </Grid>
            ))}
          </Grid>

          <UnverifiedClients />
        </Box>
      </Box>

      <OnboardingClientType open={addClientOpen} onClose={() => setAddClientOpen(false)} onSaveAndExit={handleSaveAndExit} onRequestAdditionalDocument={handleRequestAdditionalDocument} />
      <CaseCreatedSuccessModal open={caseCreatedOpen} onContinue={() => setCaseCreatedOpen(false)} />
      <RequestAdditionalDocumentModal
        open={requestDocOpen}
        onCancel={() => { setRequestDocOpen(false); setTimeout(() => setAddClientOpen(true), 300); }}
        onSendEmail={() => { setRequestDocOpen(false); setTimeout(() => setRequestSentOpen(true), 250); }}
      />
      <RequestSentSuccessModal open={requestSentOpen} onContinue={() => setRequestSentOpen(false)} />
    </Box>
  );
}