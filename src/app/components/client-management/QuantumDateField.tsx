"use client";

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

function CalendarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.334 2.833C4.061 2.833 3.834 2.607 3.834 2.333V0.333C3.834 0.06 4.061 -0.167 4.334 -0.167C4.607 -0.167 4.834 0.06 4.834 0.333V2.333C4.834 2.607 4.607 2.833 4.334 2.833Z"
        fill="currentColor"
      />
      <path
        d="M9.666 2.833C9.393 2.833 9.166 2.607 9.166 2.333V0.333C9.166 0.06 9.393 -0.167 9.666 -0.167C9.939 -0.167 10.166 0.06 10.166 0.333V2.333C10.166 2.607 9.939 2.833 9.666 2.833Z"
        fill="currentColor"
      />
      <path
        d="M4.667 8.667C4.58 8.667 4.493 8.647 4.413 8.613C4.327 8.58 4.26 8.533 4.193 8.473C4.073 8.347 4 8.18 4 8C4 7.913 4.02 7.827 4.053 7.747C4.087 7.667 4.133 7.593 4.193 7.527C4.26 7.467 4.327 7.42 4.413 7.387C4.653 7.287 4.953 7.34 5.14 7.527C5.26 7.653 5.333 7.827 5.333 8C5.333 8.04 5.327 8.087 5.32 8.133C5.313 8.173 5.3 8.213 5.28 8.253C5.267 8.293 5.247 8.333 5.22 8.373C5.2 8.407 5.167 8.44 5.14 8.473C5.013 8.593 4.84 8.667 4.667 8.667Z"
        fill="currentColor"
      />
      <path
        d="M7.001 8.667C6.914 8.667 6.827 8.647 6.747 8.613C6.661 8.58 6.594 8.533 6.527 8.473C6.407 8.347 6.334 8.18 6.334 8C6.334 7.913 6.354 7.827 6.387 7.747C6.421 7.667 6.467 7.593 6.527 7.527C6.594 7.467 6.661 7.42 6.747 7.387C6.987 7.28 7.287 7.34 7.474 7.527C7.594 7.653 7.667 7.827 7.667 8C7.667 8.04 7.661 8.087 7.654 8.133C7.647 8.173 7.634 8.213 7.614 8.253C7.601 8.293 7.581 8.333 7.554 8.373C7.534 8.407 7.501 8.44 7.474 8.473C7.347 8.593 7.174 8.667 7.001 8.667Z"
        fill="currentColor"
      />
      <path
        d="M9.333 8.667C9.246 8.667 9.159 8.647 9.079 8.613C8.993 8.58 8.926 8.533 8.859 8.473C8.833 8.44 8.806 8.407 8.779 8.373C8.753 8.333 8.733 8.293 8.719 8.253C8.699 8.213 8.686 8.173 8.679 8.133C8.673 8.087 8.666 8.04 8.666 8C8.666 7.827 8.739 7.653 8.859 7.527C8.926 7.467 8.993 7.42 9.079 7.387C9.326 7.28 9.619 7.34 9.806 7.527C9.926 7.653 9.999 7.827 9.999 8C9.999 8.04 9.993 8.087 9.986 8.133C9.979 8.173 9.966 8.213 9.946 8.253C9.933 8.293 9.913 8.333 9.886 8.373C9.866 8.407 9.833 8.44 9.806 8.473C9.679 8.593 9.506 8.667 9.333 8.667Z"
        fill="currentColor"
      />
      <path
        d="M4.667 11C4.58 11 4.493 10.98 4.413 10.947C4.333 10.913 4.26 10.867 4.193 10.807C4.073 10.68 4 10.507 4 10.333C4 10.247 4.02 10.16 4.053 10.08C4.087 9.993 4.133 9.92 4.193 9.86C4.44 9.613 4.893 9.613 5.14 9.86C5.26 9.987 5.333 10.16 5.333 10.333C5.333 10.507 5.26 10.68 5.14 10.807C5.013 10.927 4.84 11 4.667 11Z"
        fill="currentColor"
      />
      <path
        d="M7.001 11C6.827 11 6.654 10.927 6.527 10.807C6.407 10.68 6.334 10.507 6.334 10.333C6.334 10.247 6.354 10.16 6.387 10.08C6.421 9.993 6.467 9.92 6.527 9.86C6.774 9.613 7.227 9.613 7.474 9.86C7.534 9.92 7.581 9.993 7.614 10.08C7.647 10.16 7.667 10.247 7.667 10.333C7.667 10.507 7.594 10.68 7.474 10.807C7.347 10.927 7.174 11 7.001 11Z"
        fill="currentColor"
      />
      <path
        d="M9.333 11.0001C9.159 11.0001 8.986 10.9267 8.859 10.8067C8.799 10.7467 8.753 10.6734 8.719 10.5867C8.686 10.5067 8.666 10.4201 8.666 10.3334C8.666 10.2467 8.686 10.1601 8.719 10.0801C8.753 9.993 8.799 9.9201 8.859 9.8601C9.013 9.7067 9.246 9.6334 9.459 9.6801C9.506 9.6867 9.546 9.7001 9.586 9.7201C9.626 9.7334 9.666 9.7534 9.706 9.7801C9.739 9.8001 9.773 9.8334 9.806 9.8601C9.926 9.9867 9.999 10.1601 9.999 10.3334C9.999 10.5067 9.926 10.6801 9.806 10.8067C9.679 10.9267 9.506 11.0001 9.333 11.0001Z"
        fill="currentColor"
      />
      <path
        d="M12.667 5.56H1.334C1.061 5.56 0.834 5.333 0.834 5.06C0.834 4.787 1.061 4.56 1.334 4.56H12.667C12.941 4.56 13.167 4.787 13.167 5.06C13.167 5.333 12.941 5.56 12.667 5.56Z"
        fill="currentColor"
      />
      <path
        d="M9.667 14.1666H4.333C1.9 14.1666 0.5 12.7666 0.5 10.3333V4.6666C0.5 2.2333 1.9 0.833298 4.333 0.833298H9.667C12.1 0.833298 13.5 2.2333 13.5 4.6666V10.3333C13.5 12.7666 12.1 14.1666 9.667 14.1666ZM4.333 1.8333C2.427 1.8333 1.5 2.76 1.5 4.6666V10.3333C1.5 12.24 2.427 13.1666 4.333 13.1666H9.667C11.573 13.1666 12.5 12.24 12.5 10.3333V4.6666C12.5 2.76 11.573 1.8333 9.667 1.8333H4.333Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
type PickerView = "day" | "month" | "year";

interface QuantumDateFieldProps {
  label: string;
  value?: Dayjs | null;
  onChange?: (value: Dayjs | null) => void;
}

export function QuantumDateField({
  label,
  value = null,
  onChange,
}: QuantumDateFieldProps) {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [view, setView] = useState<PickerView>("day");
  const [cursor, setCursor] = useState<Dayjs>(value ?? dayjs());
  const [animDir, setAnimDir] = useState<"left" | "right" | null>(null);
  const [animating, setAnimating] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const hasValue = value !== null && value !== undefined;
  const isFloating = focused || open || hasValue;

  useEffect(() => {
    if (value) setCursor(value);
  }, [value]);

  // Recalculate portal position whenever open toggles
  useEffect(() => {
    if (open && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY + 6,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [open]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      if (
        containerRef.current &&
        !containerRef.current.contains(target) &&
        !document.getElementById("quantum-date-portal")?.contains(target)
      ) {
        setOpen(false);
        setFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function animate(dir: "left" | "right", fn: () => void) {
    if (animating) return;
    setAnimDir(dir);
    setAnimating(true);
    setTimeout(() => {
      fn();
      setAnimDir(null);
      setAnimating(false);
    }, 180);
  }

  function prevMonth() {
    animate("right", () => setCursor((c) => c.subtract(1, "month")));
  }
  function nextMonth() {
    animate("left", () => setCursor((c) => c.add(1, "month")));
  }
  function prevYear() {
    animate("right", () => setCursor((c) => c.subtract(1, "year")));
  }
  function nextYear() {
    animate("left", () => setCursor((c) => c.add(1, "year")));
  }
  function prevYearRange() {
    animate("right", () => setCursor((c) => c.subtract(12, "year")));
  }
  function nextYearRange() {
    animate("left", () => setCursor((c) => c.add(12, "year")));
  }

  function selectDay(d: Dayjs) {
    onChange?.(d);
    setOpen(false);
    setFocused(false);
    setView("day");
  }

  function selectMonth(i: number) {
    setCursor((c) => c.month(i));
    setView("day");
  }
  function selectYear(y: number) {
    setCursor((c) => c.year(y));
    setView("month");
  }

  function getDaysGrid() {
    const start = cursor.startOf("month").day();
    const total = cursor.daysInMonth();
    const cells: (Dayjs | null)[] = [];
    for (let i = 0; i < start; i++) cells.push(null);
    for (let d = 1; d <= total; d++) cells.push(cursor.date(d));
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }

  const yearRangeStart = Math.floor(cursor.year() / 12) * 12;
  const years = Array.from({ length: 12 }, (_, i) => yearRangeStart + i);

  const slideStyle = {
    transform: animating
      ? `translateX(${animDir === "left" ? "-8px" : "8px"})`
      : "translateX(0)",
    opacity: animating ? 0 : 1,
    transition: "transform 0.18s ease, opacity 0.18s ease",
  };

  const cellSx = (active: boolean, today: boolean, clickable = true) => ({
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: active ? 700 : 400,
    borderRadius: "6px",
    cursor: clickable ? "pointer" : "default",
    bgcolor: active ? "#FF6B22" : "transparent",
    color: active ? "#fff" : today ? "#FF6B22" : "#242424",
    border: today && !active ? "1px solid #FF6B22" : "1px solid transparent",
    transition: "all 0.15s ease",
    "&:hover":
      clickable && !active ? { bgcolor: "#FFF0E9", color: "#FF6B22" } : {},
  });

  // Portal dropdown content
  const dropdown = (
    <Box
      id="quantum-date-portal"
      sx={{
        position: "absolute",
        top: dropdownPos.top,
        left: dropdownPos.left,
        // Portal renders at document root — no stacking context issues
        zIndex: 99999,
        bgcolor: "#ffffff",
        border: "1px solid #E5E7EB",
        borderRadius: "8px",
        boxShadow: "0 16px 48px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)",
        width: 268,
        overflow: "hidden",
        transformOrigin: "top left",
        transform: open
          ? "scaleY(1) translateY(0)"
          : "scaleY(0.92) translateY(-6px)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition:
          "transform 0.2s cubic-bezier(0.4,0,0.2,1), opacity 0.2s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 1.5,
          pt: 1.5,
          pb: 1,
          borderBottom: "1px solid #F3F4F6",
        }}
      >
        <IconButton
          size="small"
          onClick={
            view === "day"
              ? prevMonth
              : view === "month"
                ? prevYear
                : prevYearRange
          }
          sx={{
            color: "#6B7280",
            "&:hover": { bgcolor: "#FFF0E9", color: "#FF6B22" },
            borderRadius: "6px",
            p: 0.5,
          }}
        >
          <ChevronLeft />
        </IconButton>

        <Box sx={{ display: "flex", gap: 0.5 }}>
          {view === "day" && (
            <>
              <Box
                onClick={() => setView("month")}
                sx={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#242424",
                  cursor: "pointer",
                  px: 1,
                  py: 0.25,
                  borderRadius: "4px",
                  "&:hover": { bgcolor: "#FFF0E9", color: "#FF6B22" },
                  transition: "all 0.15s",
                }}
              >
                {cursor.format("MMMM")}
              </Box>
              <Box
                onClick={() => setView("year")}
                sx={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#242424",
                  cursor: "pointer",
                  px: 1,
                  py: 0.25,
                  borderRadius: "4px",
                  "&:hover": { bgcolor: "#FFF0E9", color: "#FF6B22" },
                  transition: "all 0.15s",
                }}
              >
                {cursor.year()}
              </Box>
            </>
          )}
          {view === "month" && (
            <Box
              onClick={() => setView("year")}
              sx={{
                fontSize: 13,
                fontWeight: 700,
                color: "#242424",
                cursor: "pointer",
                px: 1,
                py: 0.25,
                borderRadius: "4px",
                "&:hover": { bgcolor: "#FFF0E9", color: "#FF6B22" },
                transition: "all 0.15s",
              }}
            >
              {cursor.year()}
            </Box>
          )}
          {view === "year" && (
            <Box
              sx={{
                fontSize: 13,
                fontWeight: 700,
                color: "#242424",
                px: 1,
                py: 0.25,
              }}
            >
              {yearRangeStart} – {yearRangeStart + 11}
            </Box>
          )}
        </Box>

        <IconButton
          size="small"
          onClick={
            view === "day"
              ? nextMonth
              : view === "month"
                ? nextYear
                : nextYearRange
          }
          sx={{
            color: "#6B7280",
            "&:hover": { bgcolor: "#FFF0E9", color: "#FF6B22" },
            borderRadius: "6px",
            p: 0.5,
          }}
        >
          <ChevronRight />
        </IconButton>
      </Box>

      {/* Day view */}
      {view === "day" && (
        <Box sx={{ px: 1.5, pt: 1, pb: 1, ...slideStyle }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              mb: 0.5,
            }}
          >
            {DAYS.map((d) => (
              <Box
                key={d}
                sx={{
                  textAlign: "center",
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#9CA3AF",
                  py: 0.5,
                }}
              >
                {d}
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "2px",
            }}
          >
            {getDaysGrid().map((day, i) => {
              const isSelected = !!(day && value && day.isSame(value, "day"));
              const isToday = !!(day && day.isSame(dayjs(), "day"));
              return (
                <Box
                  key={i}
                  onClick={() => day && selectDay(day)}
                  sx={cellSx(isSelected, isToday, !!day)}
                >
                  {day ? day.date() : ""}
                </Box>
              );
            })}
          </Box>
        </Box>
      )}

      {/* Month view */}
      {view === "month" && (
        <Box
          sx={{
            px: 1.5,
            pt: 1,
            pb: 1,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0.75,
            ...slideStyle,
          }}
        >
          {MONTHS.map((m, i) => {
            const isSelected = !!(
              value &&
              value.month() === i &&
              value.year() === cursor.year()
            );
            const isToday =
              dayjs().month() === i && dayjs().year() === cursor.year();
            return (
              <Box
                key={m}
                onClick={() => selectMonth(i)}
                sx={{
                  ...cellSx(isSelected, isToday),
                  height: 34,
                  fontSize: 12,
                }}
              >
                {m}
              </Box>
            );
          })}
        </Box>
      )}

      {/* Year view */}
      {view === "year" && (
        <Box
          sx={{
            px: 1.5,
            pt: 1,
            pb: 1,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0.75,
            ...slideStyle,
          }}
        >
          {years.map((y) => {
            const isSelected = !!(value && value.year() === y);
            const isToday = dayjs().year() === y;
            return (
              <Box
                key={y}
                onClick={() => selectYear(y)}
                sx={{
                  ...cellSx(isSelected, isToday),
                  height: 34,
                  fontSize: 12,
                }}
              >
                {y}
              </Box>
            );
          })}
        </Box>
      )}

      {/* Footer */}
      <Box
        sx={{
          borderTop: "1px solid #F3F4F6",
          px: 1.5,
          py: 1,
          display: "flex",
          justifyContent: "flex-end",
          gap: 1,
        }}
      >
        <Box
          onClick={() => {
            onChange?.(null);
            setOpen(false);
            setFocused(false);
            setView("day");
          }}
          sx={{
            fontSize: 12,
            fontWeight: 600,
            color: "#6B7280",
            cursor: "pointer",
            px: 1.5,
            py: 0.5,
            borderRadius: "4px",
            "&:hover": { bgcolor: "#F3F4F6" },
            transition: "all 0.15s",
          }}
        >
          Clear
        </Box>
        <Box
          onClick={() => selectDay(dayjs())}
          sx={{
            fontSize: 12,
            fontWeight: 600,
            color: "#FF6B22",
            cursor: "pointer",
            px: 1.5,
            py: 0.5,
            borderRadius: "4px",
            "&:hover": { bgcolor: "#FFF0E9" },
            transition: "all 0.15s",
          }}
        >
          Today
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Box ref={containerRef} sx={{ position: "relative", width: "100%" }}>
        {/* Input trigger */}
        <Box
          onClick={() => {
            setOpen((v) => !v);
            setFocused(true);
          }}
          sx={{
            position: "relative",
            height: 44,
            borderRadius: "4px",
            border: "1px solid",
            borderColor: focused || open ? "#FF6B22" : "#242424",
            backgroundColor: "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            px: "12px",
            boxSizing: "border-box",
            transition: "border-color 0.2s ease",
            "&:hover": { borderColor: focused || open ? "#FF6B22" : "#4B5563" },
          }}
        >
          {/* Floating label — transparent bg, moves above border on float */}
          <Box
            component="span"
            sx={{
              position: "absolute",
              left: "10px",
              top: "50%",
              pointerEvents: "none",
              transformOrigin: "top left",
              lineHeight: 1,
              fontSize: 13,
              fontWeight: 400,
              color: focused || open ? "#FF6B22" : "#333333",
              zIndex: 2,
              // transparent when resting, white only when floated to cut through border
              backgroundColor: isFloating ? "#EBEBEB" : "transparent",
              px: isFloating ? "3px" : 0,
              mx: isFloating ? "-3px" : 0,
              transform: isFloating
                ? "translate(0px, -26px) scale(0.82)"
                : "translate(0px, -50%) scale(1)",
              transition:
                "transform 0.2s cubic-bezier(0,0,0.2,1), color 0.2s cubic-bezier(0,0,0.2,1), background-color 0.2s cubic-bezier(0,0,0.2,1), padding 0.2s cubic-bezier(0,0,0.2,1)",
            }}
          >
            {label}
          </Box>

          {/* Selected value */}
          {hasValue && (
            <Typography
              sx={{ fontSize: 13, fontWeight: 600, color: "#242424" }}
            >
              {value!.format("DD/MM/YYYY")}
            </Typography>
          )}

          {/* Calendar icon */}
          <Box
            sx={{
              ml: "auto",
              display: "flex",
              alignItems: "center",
              color: focused || open ? "#FF6B22" : "#6B7280",
              transition: "color 0.2s ease",
            }}
          >
            <CalendarIcon />
          </Box>
        </Box>
      </Box>

      {/* Portal — renders at document.body, completely outside all stacking contexts */}
      {typeof window !== "undefined" && createPortal(dropdown, document.body)}
    </>
  );
}
