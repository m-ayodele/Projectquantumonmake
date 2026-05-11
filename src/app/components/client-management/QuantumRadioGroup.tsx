"use client";

import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

interface QuantumRadioOption {
  label: string;
  value: string;
}

interface QuantumRadioGroupProps {
  label: string;
  value: string;
  options: QuantumRadioOption[];
  onChange: (value: string) => void;
}

export function QuantumRadioGroup({
  label,
  value,
  options,
  onChange,
}: QuantumRadioGroupProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.4, height: 44 }}>
      <Typography sx={{ fontSize: 11, color: "#242424", whiteSpace: "nowrap" }}>
        {label}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
        {options.map((option) => {
          const checked = value === option.value;

          return (
            <Box
              key={option.value}
              onClick={() => onChange(option.value)}
              sx={{ display: "inline-flex", alignItems: "center", gap: 0.6, cursor: "pointer" }}
            >
              {/* Only the radio circle itself gets the ripple + hover */}
              <ButtonBase
                onClick={(e) => { e.stopPropagation(); onChange(option.value); }}
                sx={{
                  borderRadius: "50%",
                  width: 22,
                  height: 22,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  // hover background only on the radio dot area
                  "&:hover": { bgcolor: "#FFF0E9" },
                  transition: "background-color 0.15s ease",
                }}
              >
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    border: checked ? "2px solid" : "1px solid",
                    borderColor: checked ? "#FF6B22" : "#5C5C5C",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "transparent",
                    transition: "border-width 0.15s ease, border-color 0.15s ease",
                  }}
                >
                  {checked && (
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        bgcolor: "#FF6B22",
                      }}
                    />
                  )}
                </Box>
              </ButtonBase>

              {/* Label — no ripple, no hover, just clickable */}
              <Typography
                sx={{ fontSize: 11, color: "#242424", userSelect: "none" }}
              >
                {option.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}