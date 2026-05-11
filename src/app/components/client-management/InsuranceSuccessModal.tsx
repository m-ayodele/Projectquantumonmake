"use client";

import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { BrandButton } from "./BrandButton";
import Image from "next/image";
import successGif from "../../../../public/images/successGif.gif";

interface InsuranceSuccessModalProps {
  open: boolean;
  clientId: string;
  onContinue: () => void;
  onViewDetail: () => void;
}

export function InsuranceSuccessModal({ open, clientId, onContinue, onViewDetail }: InsuranceSuccessModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onContinue}
      maxWidth={false}
      PaperProps={{ sx: { borderRadius: "16px", width: 400, maxWidth: "92vw", overflow: "hidden" } }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", px: 4, py: 5, textAlign: "center" }}>
        {/* Green check circle */}
          <Image
              src={successGif}
              alt="Success"
              // width={100}
              // height={100}
              unoptimized
              style={{ objectFit: "contain", marginBottom: -38 }}
            />
    

        <Typography fontWeight={700} sx={{ fontSize: 20, color: "#242424", mb: 1 }}>Successful!</Typography>

        <Typography sx={{ fontSize: 13, color: "#333333", mb: 4, lineHeight: 1.7 }}>
          A new Broker with ID{" "}
          <Box component="span" sx={{ fontWeight: 700, color: "#111" }}>{clientId}</Box>
          {" "}has been successfully created
        </Typography>

        <BrandButton onClick={onContinue} className="!w-full !text-[15px] !rounded-[8px] !mb-3">
          Continue
        </BrandButton>

        <ButtonBase
          onClick={onViewDetail}
          sx={{ fontSize: 13, fontWeight: 600, color: "#FF6B22", py: 0.5, "&:hover": { opacity: 0.8 } }}
        >
          View Agent&apos;s Detail
        </ButtonBase>
      </Box>
    </Dialog>
  );
}