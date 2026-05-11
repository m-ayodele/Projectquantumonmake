"use client";

import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ButtonBase from "@mui/material/ButtonBase";
import { BrandButton } from "./BrandButton";
import { FileUploadIcon } from "./icons";

// ── Upload document icon ──────────────────────────────────────────────────────
function UploadDocIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path
        d="M21 3H9a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V12L21 3Z"
        stroke="#4A90E2"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 3v9h9"
        stroke="#4A90E2"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 27v-9m0 0-3 3m3-3 3 3"
        stroke="#4A90E2"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────
interface UploadVerificationStepProps {
  onBack: () => void;
  onCancel: () => void;
  onOverrideMismatch: () => void;
}

// ── Component ─────────────────────────────────────────────────────────────────
export function UploadVerificationStep({
  onBack,
  onCancel,
  onOverrideMismatch,
}: UploadVerificationStepProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [comment, setComment] = useState(
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  );

  const handleFiles = (list: FileList | null) => {
    if (list && list.length > 0) setFile(list[0]);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>

      {/* Heading */}
      <Box sx={{ mb: 3, flexShrink: 0 }}>
        <Typography fontWeight={700} sx={{ fontSize: 22, color: "#242424", mb: 0.5 }}>
          Upload Verification Document &amp; Override
        </Typography>
        <Typography sx={{ fontSize: 13, color: "#333333" }}>
          Confirm the necessary documents
        </Typography>
      </Box>

      {/* Drop zone */}
      <Box
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          handleFiles(e.dataTransfer.files);
        }}
        sx={{
          flexShrink: 0,
          mb: 4,
          borderRadius: "4px",
          bgcolor: dragging ? "rgba(25,118,210,0.16)" : "rgba(25,118,210,0.08)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 4.5,
          px: 3,
          transition: "background-color 0.18s",
          backgroundImage: dragging
            ? `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='%230D47A1' stroke-width='2' stroke-dasharray='6%2c 6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
            : `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='%231976D2' stroke-width='1' stroke-dasharray='6%2c 6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          hidden
          onChange={(e) => handleFiles(e.target.files)}
        />

        <FileUploadIcon />

        <Box sx={{ mt: 1.5, display: "flex", alignItems: "center", gap: 0.5 }}>
          <ButtonBase
            onClick={() => fileInputRef.current?.click()}
            sx={{
              fontSize: 13,
              fontWeight: 600,
              color: "#FF6B22",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Browse
          </ButtonBase>
          <Typography sx={{ fontSize: 13, color: "#242424" }}>
            or drag and drop
          </Typography>
        </Box>

        <Typography sx={{ fontSize: 12, color: "#9A9A9A", mt: 0.4 }}>
          {file ? file.name : "PDF (max. 5MB)"}
        </Typography>
      </Box>

      {/* Comment field */}
      <TextField
        label="Comment (Optional)"
        multiline
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        fullWidth
        sx={{
          flexShrink: 0,
          "& .MuiInputLabel-root": {
            fontSize: 12,
            color: "#9A9A9A",
            "&.Mui-focused": { color: "#FF6B22" },
          },
          "& .MuiOutlinedInput-root": {
            fontSize: 13,
            color: "#242424",
            borderRadius: "4px",
            height:"101px",
            bgcolor: "transparent",
            "& fieldset": { borderColor: "#D1D5DB" },
            "&:hover fieldset": { borderColor: "#9CA3AF" },
            "&.Mui-focused fieldset": { borderColor: "#FF6B22", borderWidth: "1px" },
          },
          "& .MuiOutlinedInput-input": { lineHeight: 1.6 },
        }}
      />

      {/* Spacer */}
      <Box sx={{ flex: 1 }} />

      {/* Footer */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pt: 3,
          flexShrink: 0,
        }}
      >
        <BrandButton onClick={onBack} variant="outline" className="!px-[28px]">
          Back
        </BrandButton>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <BrandButton
            variant="ghost"
            size="sm"
            onClick={onCancel}
            className="!text-[#f97316] !font-normal !px-4 hover:!bg-[#FFF0E9]"
          >
            Cancel
          </BrandButton>
          <BrandButton
            onClick={onOverrideMismatch}
            className="!py-[4px] !px-[28px]"
            size="sm"
          >
            Override Mismatch
          </BrandButton>
        </Box>
      </Box>
    </Box>
  );
}