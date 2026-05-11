"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BrandButton } from "./BrandButton";
import { BlueInfoIcon, GreenCircularCheck } from "./icons";

type DisparityType = "individual" | "corporate" | "intermediary";



function DisparityField({
  label,
  value,
  highlighted = false,
}: {
  label: string;
  value: string;
  highlighted?: boolean;
}) {
  return (
    <Box sx={{ bgcolor: highlighted ? "#FFBEBE" : "transparent", p: 0.5 }}>
      <Typography sx={{ fontSize: 14, color: "#898E99", mb: 0.1 }}>
        {label}
      </Typography>
      <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#242424" }}>
        {value}
      </Typography>
    </Box>
  );
}

function IndividualRecordCard({
  firstName,
  bg = "#FFF3E880",
  border = "1px solid #FC851466",
}: {
  firstName: string;
  bg?: string;
  border?: string;
}) {
  return (
    <Box
      sx={{
        bgcolor: bg,
        border,
        borderRadius: "6px",
        px: 2,
        py: 1.5,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "4px 8px",
      }}
    >
      <DisparityField label="Surname" value="OLUGOKE" />
      <DisparityField label="First Name" value={firstName} highlighted />
      <DisparityField label="Middle Name" value="CHIJIOKE" />
      <DisparityField label="Date of Birth" value="20 NOV 1986" />
    </Box>
  );
}

function CorporateRecordCard({
  businessName,
  bg = "#FFF3E880",
  border = "1px solid #FC851466",
}: {
  businessName: string;
  bg?: string;
  border?: string;
}) {
  return (
    <Box
      sx={{
        bgcolor: bg,
        border,
        borderRadius: "6px",
        px: 2,
        py: 1.5,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "4px 8px",
      }}
    >
      <DisparityField label="Business Name" value={businessName} highlighted />
      <DisparityField label="RC Number" value="09241279385" />
      <DisparityField label="Date of Incorporation" value="20 NOV 1986" />
    </Box>
  );
}

function IntermediaryRecordCard({
  dateOfBirth,
  bg = "#FFF3E880",
  border = "1px solid #FC851466",
}: {
  dateOfBirth: string;
  bg?: string;
  border?: string;
}) {
  return (
    <Box
      sx={{
        bgcolor: bg,
        border,
        borderRadius: "6px",
        px: 2,
        py: 1.5,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "4px 8px",
      }}
    >
      <DisparityField label="First Name" value="OLUGOKE" />
      <DisparityField label="Middle Name" value="MOHAMMED" />
      <DisparityField label="Last Name" value="CHIJIOKE" />
      <DisparityField label="Date of Birth" value={dateOfBirth} highlighted />
    </Box>
  );
}

interface DisparityInformationStepProps {
  type?: DisparityType;
  onBack: () => void;
  onUploadAndOverride: () => void;
  onRequestAdditionalDocument: () => void;
}

export function DisparityInformationStep({
  type = "individual",
  onBack,
  onUploadAndOverride,
  onRequestAdditionalDocument,
}: DisparityInformationStepProps) {
  const isCorporate = type === "corporate";
  const isIntermediary = type === "intermediary";

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box sx={{ mb: 3, flexShrink: 0 }}>
        <Typography fontWeight={700} sx={{ fontSize: 22, color: "#242424" }}>
          Disparity Information
        </Typography>
        <Typography sx={{ fontSize: 13, color: "#898E99" }}>
          Review the discrepancy between the result and proposal form data
        </Typography>
      </Box>

      <Box sx={{ mb: 3, flexShrink: 0 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography sx={{ fontSize: 18, fontWeight: 700, color: "#242424" }}>
            {isCorporate ? "CAC Search Result" : "NIMC Search Result"}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
            <GreenCircularCheck />
            <Typography sx={{ fontSize: 16, fontWeight: 700, color: "#242424" }}>
              {isCorporate ? "RC Number Found" : "NIN Found"}
            </Typography>
          </Box>
        </Box>

        {isCorporate ? (
          <CorporateRecordCard businessName="NNPC LTD" />
        ) : isIntermediary ? (
          <IntermediaryRecordCard dateOfBirth="21 NOV 1986" />
        ) : (
          <IndividualRecordCard firstName="MOSES" />
        )}
      </Box>

      <Box sx={{ mb: 2, flexShrink: 0 }}>
        <Typography
          sx={{ fontSize: 18, fontWeight: 700, color: "#242424", mb: 1 }}
        >
          Proposal Form Details
        </Typography>

        {isCorporate ? (
          <CorporateRecordCard
            businessName="NNPC"
            bg="#E7F6F2"
            border="1px solid #13A47C66"
          />
        ) : isIntermediary ? (
          <IntermediaryRecordCard
            dateOfBirth="20 NOV 1986"
            bg="#E7F6F2"
            border="1px solid #13A47C66"
          />
        ) : (
          <IndividualRecordCard
            firstName="MOHAMMED"
            bg="#E7F6F2"
            border="1px solid #13A47C66"
          />
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.8,
          bgcolor: "#EDEFFC",
          border: "1px solid #4A61E3",
          borderRadius: "4px",
          px: 2,
          py: 0.8,
          mb: 3,
        }}
      >
        <BlueInfoIcon />
        <Typography sx={{ fontSize: 12, color: "#333333" }}>
          You can upload any supporting document to override the mismatch OR
          request for additional verification document from the client
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "auto",
          flexShrink: 0,
        }}
      >
        <BrandButton
          onClick={onBack}
          variant="outline"
          className="!px-[42px] !font-normal"
        >
          Back
        </BrandButton>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <BrandButton
            variant="ghost"
            size="sm"
            onClick={onUploadAndOverride}
            className="!text-[#f97316] !font-normal !px-4 hover:!bg-[#FFF0E9]"
          >
            Upload &amp; Override
          </BrandButton>

          <BrandButton
            onClick={onRequestAdditionalDocument}
            className="!py-[6px] !px-[20px]"
            size="sm"
          >
            Request for additional Document
          </BrandButton>
        </Box>
      </Box>
    </Box>
  );
}