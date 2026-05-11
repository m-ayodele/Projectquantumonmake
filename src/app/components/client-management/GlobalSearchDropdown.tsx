"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import {
  ClientIcon,
  NoteIcon,
  PlanIcon,
  PoliciesIcon,
  QuotesIcon,
} from "../../../../public/icons/icons";

const BRAND = "#FF6B22";

// ── Highlight matched query in text ──────────────────────────────────────────
function HighlightedText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <span>{text}</span>;
  const regex = new RegExp(
    `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
    "gi",
  );
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <strong key={i} style={{ fontWeight: 700, color: "#242424" }}>
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </span>
  );
}

// ── Status pill ───────────────────────────────────────────────────────────────
function StatusPill({ status }: { status: string }) {
  const isActive = status.toLowerCase() === "active";
  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        px: 0.8,
        py: 0.1,
        borderRadius: "999px",
        bgcolor: isActive ? "#DCFCE7" : "#F3F4F6",
        color: isActive ? "#16A34A" : "#333333",
        fontSize: 10,
        fontWeight: 600,
        lineHeight: 1.6,
      }}
    >
      {status}
    </Box>
  );
}

// ── Avatar initials ───────────────────────────────────────────────────────────
function AvatarInitials({ initials }: { initials: string }) {
  return (
    <Box
      sx={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        bgcolor: "#F8F8F9",
        // border: "1px solid #E5E7EB",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Typography
        sx={{
          fontSize: 11,
          fontWeight: 500,
          color: "#242424",
          letterSpacing: "0.04em",
        }}
      >
        {initials}
      </Typography>
    </Box>
  );
}

// ── Section header ────────────────────────────────────────────────────────────
function SectionHeader({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.75,
        px: 2,
        py: 0.75,
        bgcolor: "transparent",
      }}
    >
      <Box sx={{ color: "#9CA3AF", display: "flex", alignItems: "center" }}>
        {icon}
      </Box>
      <Typography
        sx={{
          fontSize: 10,
          fontWeight: 500,
          color: "#898E99",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

// ── Data types ────────────────────────────────────────────────────────────────
interface ClientResult {
  initials: string;
  name: string;
  id: string;
  status: string;
  phone: string;
  nin: string;
  email: string;
}
interface PolicyResult {
  name: string;
  ref: string;
  status: string;
  role: string;
  holder: string;
  phone: string;
  email: string;
}
interface QuoteResult {
  name: string;
  ref: string;
  status: string;
  createdBy: string;
  phone: string;
  email: string;
}

interface SearchResults {
  query: string;
  totalMatches: number;
  clients: ClientResult[];
  policies: PolicyResult[];
  quotes: QuoteResult[];
}

// ── Mock search function ──────────────────────────────────────────────────────
// Replace with real API call. Returns null when query is empty.
function mockSearch(query: string): SearchResults | null {
  if (!query.trim()) return null;
  return {
    query,
    totalMatches: 3,
    clients: [
      {
        initials: "MP",
        name: `Mohammed Chijoke Olugoke`,
        id: "LW-5829",
        status: "Active",
        phone: "+234 815 239 0019",
        nin: "11102982901",
        email: "mohammedP@gmail.com",
      },
      {
        initials: "CM",
        name: `Christopher Mohammed`,
        id: "LW-5829",
        status: "Inactive",
        phone: "+234 815 239 0019",
        nin: "11102982901",
        email: "chrisM@gmail.com",
      },
    ],
    policies: [
      {
        name: "Family Benefit Plan",
        ref: "FBP/12345678",
        status: "Active",
        role: "Policyholder",
        holder: "Mohammed Eko",
        phone: "+234 815 239 0019",
        email: "EkoM@gmail.com",
      },
      {
        name: "Life Time Plan",
        ref: "FBP/12345678",
        status: "Active",
        role: "Beneficiary",
        holder: "Mohammed Eko",
        phone: "+234 815 239 0019",
        email: "EkoM@gmail.com",
      },
    ],
    quotes: [
      {
        name: "Family Benefit Plan",
        ref: "122345678",
        status: "Valid",
        createdBy: "Mohammed Eko",
        phone: "+234 815 239 0019",
        email: "EkoM@gmail.com",
      },
    ],
  };
}

// ── Client row ────────────────────────────────────────────────────────────────
function ClientRow({ client, query }: { client: ClientResult; query: string }) {
  return (
    <ButtonBase
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: 2.5,
        py: 1.5,
        textAlign: "left",
        transition: "background 0.12s",
        "&:hover": { bgcolor: "#FFF8F5" },
      }}
    >
      <AvatarInitials initials={client.initials} />
      <Box sx={{ minWidth: 0, flex: "0 0 180px" }}>
        <Typography sx={{ fontSize: 13, color: "#242424", lineHeight: 1.3 }}>
          <HighlightedText text={client.name} query={query} />
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            mt: 0.2,
            fontWeight: 500,
          }}
        >
          <Typography sx={{ fontSize: 11, color: "#616874" }}>
            ID: {client.id}
          </Typography>
          <Typography sx={{ fontSize: 11, color: "#616874" }}>•</Typography>
          {/* <StatusPill status={client.status} /> */}
          <Typography sx={{ fontSize: 11, color: "#616874" }}>
            {client.status}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 1,
          minWidth: 0,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: 9,
              fontWeight: 500,
              color: "#616874",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              mb: 0.2,
            }}
          >
            Phone Number
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#374151" }}>
            {client.phone}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: 9,
              fontWeight: 500,
              color: "#616874",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              mb: 0.2,
            }}
          >
            NIN
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#374151" }}>
            {client.nin}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: 9,
              fontWeight: 500,
              color: "#616874",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              mb: 0.2,
            }}
          >
            Email Address
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#374151" }}>
            {client.email}
          </Typography>
        </Box>
      </Box>
    </ButtonBase>
  );
}

// ── Policy row ────────────────────────────────────────────────────────────────
function PolicyRow({ policy, query }: { policy: PolicyResult; query: string }) {
  return (
    <ButtonBase
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: 2.5,
        py: 1.5,
        textAlign: "left",
        transition: "background 0.12s",
        "&:hover": { bgcolor: "#FFF8F5" },
      }}
    >
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          bgcolor: "#F8F8F9",
          // border: "1px solid #E5E7EB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <PlanIcon />
      </Box>
      <Box sx={{ minWidth: 0, flex: "0 0 180px" }}>
        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 500,
            color: "#242424",
            lineHeight: 1.3,
          }}
        >
          {policy.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 0.2 }}>
          <Typography sx={{ fontSize: 11, color: "#333333" }}>
            {policy.ref}
          </Typography>
          <Typography sx={{ fontSize: 11, color: "#616874" }}>•</Typography>
          {/* <StatusPill status={policy.status} /> */}
          <Typography sx={{ fontSize: 11, color: "#616874" }}>
            {policy.status}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 1,
          minWidth: 0,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: 9,
              fontWeight: 500,
              color: "#616874",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              mb: 0.2,
            }}
          >
            {policy.role}
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#374151" }}>
            <HighlightedText text={policy.holder} query={query} />
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: 9,
              fontWeight: 500,
              color: "#616874",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              mb: 0.2,
            }}
          >
            Phone Number
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#374151" }}>
            {policy.phone}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: 9,
              fontWeight: 500,
              color: "#616874",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              mb: 0.2,
            }}
          >
            Email Address
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#374151" }}>
            {policy.email}
          </Typography>
        </Box>
      </Box>
    </ButtonBase>
  );
}

// ── Quote row ─────────────────────────────────────────────────────────────────
function QuoteRow({ quote, query }: { quote: QuoteResult; query: string }) {
  return (
    <ButtonBase
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: 2.5,
        py: 1.5,
        textAlign: "left",
        transition: "background 0.12s",
        "&:hover": { bgcolor: "#FFF8F5" },
      }}
    >
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          bgcolor: "#F8F8F9",
          // border: "1px solid #E5E7EB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <NoteIcon />
      </Box>
      <Box sx={{ minWidth: 0, flex: "0 0 180px" }}>
        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 500,
            color: "#242424",
            lineHeight: 1.3,
          }}
        >
          {quote.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 0.2 }}>
          <Typography sx={{ fontSize: 11, color: "#333333" }}>
            Ref: {quote.ref}
          </Typography>
          <Typography sx={{ fontSize: 11, color: "#616874" }}>•</Typography>
          <Typography sx={{ fontSize: 11, color: "#616874" }}>
            {quote.status}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 1,
          minWidth: 0,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: 9,
              fontWeight: 500,
              color: "#616874",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              mb: 0.2,
            }}
          >
            Created by
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#374151" }}>
            <HighlightedText text={quote.createdBy} query={query} />
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: 9,
              fontWeight: 500,
              color: "#616874",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              mb: 0.2,
            }}
          >
            Phone Number
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#374151" }}>
            {quote.phone}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: 9,
              fontWeight: 500,
              color: "#616874",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              mb: 0.2,
            }}
          >
            Email Address
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#374151" }}>
            {quote.email}
          </Typography>
        </Box>
      </Box>
    </ButtonBase>
  );
}

// ── Thin divider ──────────────────────────────────────────────────────────────
function RowDivider() {
  return <Box sx={{ height: "1px", bgcolor: "#F3F4F6", mx: 2 }} />;
}

// ── Main dropdown component ───────────────────────────────────────────────────
interface GlobalSearchDropdownProps {
  query: string;
  open: boolean;
  onViewAll?: () => void;
}

export function GlobalSearchDropdown({
  query,
  open,
  onViewAll,
}: GlobalSearchDropdownProps) {
  const results = mockSearch(query);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Measure actual content height whenever results or open state changes
  useEffect(() => {
    if (open && results && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open, results, query]);

  if (!results && !open) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: "56px",
        right: { xs: 2, md: 3 },
        zIndex: 1400,
        width: "50vw",
        minWidth: 400,
        margin: "4px 8px 0 0",
        pointerEvents: height > 0 ? "auto" : "none",
      }}
    >
      <Box
        sx={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.28s cubic-bezier(0.4, 0, 0.2, 1)",
          maxHeight: "70vh",
          ...(height > 0 && {
            borderRadius: "12px",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
          }),
        }}
      >
        {/* This inner div is measured for scrollHeight */}
        <div ref={contentRef}>
          <Box
            sx={{ bgcolor: "#fff", borderRadius: "12px", overflow: "hidden" }}
          >
            {results ? (
              <>
                {/* Header */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 2,
                    py: 1.25,
                  }}
                >
                  <Typography sx={{ fontSize: 12, color: "#333333", fontWeight: 700 }}>
                    result for{" "}
                    <Box
                      component="span"
                      sx={{ fontWeight: 700, color: "#242424" }}
                    >
                      &ldquo;{results.query}&rdquo;
                    </Box>
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, color: "#616874", fontWeight: 500 }}
                  >
                    {results.totalMatches} Matches Found
                  </Typography>
                </Box>

                {/* CLIENTS section */}
                {results.clients.length > 0 && (
                  <>
                    <SectionHeader icon={<ClientIcon />} label="Clients" />
                    {results.clients.map((c, i) => (
                      <React.Fragment key={i}>
                        {/* {i > 0 && <RowDivider />} */}
                        <ClientRow client={c} query={results.query} />
                      </React.Fragment>
                    ))}
                  </>
                )}

                {/* POLICIES section */}
                {results.policies.length > 0 && (
                  <>
                    <Box sx={{ mt: 2 }} />
                    <SectionHeader icon={<PoliciesIcon />} label="Policies" />
                    {results.policies.map((p, i) => (
                      <React.Fragment key={i}>
                        {/* {i > 0 && <RowDivider />} */}
                        <PolicyRow policy={p} query={results.query} />
                      </React.Fragment>
                    ))}
                  </>
                )}

                {/* QUOTES section */}
                {results.quotes.length > 0 && (
                  <>
                    <Box sx={{ mt: 2 }} />
                    <SectionHeader icon={<QuotesIcon />} label="Quotes" />
                    {results.quotes.map((q, i) => (
                      <React.Fragment key={i}>
                        {/* {i > 0 && <RowDivider />} */}
                        <QuoteRow quote={q} query={results.query} />
                      </React.Fragment>
                    ))}
                  </>
                )}

                {/* View all results */}
                <Box
                  sx={{
                    mt: 0.5,
                    py: 1.5,
                    display: "flex",
                    justifyContent: "center",
                    bgcolor: "#F8F8F9",
                  }}
                >
                  <ButtonBase
                    onClick={onViewAll}
                    sx={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: BRAND,
                      px: 2,
                      py: 0.5,
                      borderRadius: "6px",
                      transition: "opacity 0.15s",
                      "&:hover": { opacity: 0.75 },
                    }}
                  >
                    View all results
                  </ButtonBase>
                </Box>
              </>
            ) : (
              // Empty state while open but no query yet
              <Box sx={{ px: 2, py: 3, textAlign: "center" }}>
                <Typography sx={{ fontSize: 13, color: "#9CA3AF" }}>
                  Start typing to search…
                </Typography>
              </Box>
            )}
          </Box>
        </div>
      </Box>
    </Box>
  );
}
