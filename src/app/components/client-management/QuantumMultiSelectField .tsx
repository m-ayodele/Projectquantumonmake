"use client";

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Check } from "lucide-react";

function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface QuantumMultiSelectFieldProps {
  label: string;
  value: string[];
  options: string[];
  onChange: (value: string[]) => void;
}

export function QuantumMultiSelectField({
  label,
  value,
  options,
  onChange,
}: QuantumMultiSelectFieldProps) {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const hasValue = value.length > 0;
  const isFloating = focused || open || hasValue;

  useEffect(() => {
    if (open && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [open]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      if (
        containerRef.current &&
        !containerRef.current.contains(target) &&
        !(document.getElementById("quantum-multiselect-portal")?.contains(target))
      ) {
        setOpen(false);
        setFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function toggle(option: string) {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option));
    } else {
      onChange([...value, option]);
    }
  }

  function removeTag(option: string, e: React.MouseEvent) {
    e.stopPropagation();
    onChange(value.filter((v) => v !== option));
  }

  const dropdown = (
    <Box
      id="quantum-multiselect-portal"
      sx={{
        position: "absolute",
        top: dropdownPos.top,
        left: dropdownPos.left,
        width: dropdownPos.width,
        zIndex: 99999,
        bgcolor: "#ffffff",
        border: "1px solid #E5E7EB",
        borderRadius: "4px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        overflow: "hidden",
        transformOrigin: "top left",
        transform: open ? "scaleY(1) translateY(0)" : "scaleY(0.92) translateY(-4px)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "transform 0.18s cubic-bezier(0.4,0,0.2,1), opacity 0.18s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {options.map((option) => {
        const selected = value.includes(option);
        return (
          <Box
            key={option}
            onClick={() => toggle(option)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 1.5,
              py: 1,
              cursor: "pointer",
              bgcolor: selected ? "#FFF0E9" : "transparent",
              "&:hover": { bgcolor: "#FFF0E9" },
              transition: "background-color 0.12s ease",
            }}
          >
            <Typography sx={{ fontSize: 13, fontWeight: selected ? 600 : 400, color: "#1C1C1C" }}>
              {option}
            </Typography>
            {selected && (
              <Box sx={{ color: "#FF6B22", display: "flex", alignItems: "center" }}>
                <Check size={14} strokeWidth={2.5} />
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );

  return (
    <>
      <Box ref={containerRef} sx={{ position: "relative", width: "100%" }}>
        <Box
          onClick={() => { setOpen((v) => !v); setFocused(true); }}
          sx={{
            position: "relative",
            minHeight: 44,
            borderRadius: "4px",
            border: "1px solid",
            // matches QuantumDateField resting border color
            borderColor: focused || open ? "#FF6B22" : "#242424",
            backgroundColor: "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 0.5,
            px: "12px",
            py: hasValue ? "6px" : 0,
            boxSizing: "border-box",
            transition: "border-color 0.2s ease",
            "&:hover": { borderColor: focused || open ? "#FF6B22" : "#4B5563" },
          }}
        >
          {/* Floating label — matches QuantumDateField exactly */}
          <Box
            component="span"
            sx={{
              position: "absolute",
              left: "10px",
              // matches QuantumDateField: top 50% then translateY
              top: "50%",
              pointerEvents: "none",
              transformOrigin: "top left",
              lineHeight: 1,
              fontSize: 13,
              fontWeight: 400,
              // matches QuantumDateField placeholder color
              color: focused || open ? "#FF6B22" : "#333333",
              zIndex: 2,
              // matches QuantumDateField: #EBEBEB bg when floating to cut border
              backgroundColor: isFloating ? "#EBEBEB" : "transparent",
              px: isFloating ? "3px" : 0,
              mx: isFloating ? "-3px" : 0,
              // matches QuantumDateField float translation -26px
              transform: isFloating
                ? "translate(0px, -26px) scale(0.82)"
                : "translate(0px, -50%) scale(1)",
              transition:
                "transform 0.2s cubic-bezier(0,0,0.2,1), color 0.2s cubic-bezier(0,0,0.2,1), background-color 0.2s cubic-bezier(0,0,0.2,1), padding 0.2s cubic-bezier(0,0,0.2,1)",
            }}
          >
            {label}
          </Box>

          {/* Selected tags */}
          {hasValue ? (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: "2px" }}>
              {value.map((v) => (
                <Box
                  key={v}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.4,
                    bgcolor: "#FFF0E9",
                    border: "1px solid #FF6B22",
                    borderRadius: "4px",
                    px: 0.8,
                    py: 0.2,
                  }}
                >
                  <Typography sx={{ fontSize: 11, fontWeight: 600, color: "#FF6B22" }}>
                    {v}
                  </Typography>
                  <Box
                    onClick={(e) => removeTag(v, e)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      color: "#FF6B22",
                      ml: 0.2,
                      "&:hover": { color: "#E8611F" },
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </Box>
                </Box>
              ))}
            </Box>
          ) : (
            <Box sx={{ height: 44 }} />
          )}

          {/* Chevron */}
          <Box
            sx={{
              ml: "auto",
              display: "flex",
              alignItems: "center",
              color: focused || open ? "#FF6B22" : "#6B7280",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease, color 0.2s ease",
              position: "absolute",
              right: "12px",
              top: "50%",
              mt: "-7px",
            }}
          >
            <ChevronDown />
          </Box>
        </Box>
      </Box>

      {typeof window !== "undefined" && createPortal(dropdown, document.body)}
    </>
  );
}