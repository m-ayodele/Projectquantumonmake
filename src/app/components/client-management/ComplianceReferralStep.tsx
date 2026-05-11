    "use client";

    import React, { useState } from "react";
    import Box from "@mui/material/Box";
    import Typography from "@mui/material/Typography";
    import ButtonBase from "@mui/material/ButtonBase";
    import { BrandButton } from "./BrandButton";
    import { ArrowRight, BlueInfoIcon, CircularTimes } from "./icons";
    import IconButton from "@mui/material/IconButton";

    function StatusPill({
    label,
    variant,
    }: {
    label: string;
    variant: "red" | "green" | "purple";
    }) {
    const styles = {
        red: { bg: "#FFEAEA", text: "#E82828" },
        green: { bg: "#E7F6F2", text: "#15803D" },
        purple: { bg: "#8A38F51A", text: "#8A38F5" },
    };

    const { bg, text } = styles[variant];

    return (
        <Box
        component="span"
        sx={{
            display: "inline-flex",
            alignItems: "center",
            px: 2.4,
            py: 0.8,
            borderRadius: "20px",
            bgcolor: bg,
            fontSize: 12,
            fontWeight: 600,
            color: text,
            lineHeight: 1,
        }}
        >
        {label}
        </Box>
    );
    }

    function CaseField({
    label,
    value,
    children,
    }: {
    label: string;
    value?: string;
    children?: React.ReactNode;
    }) {
    return (
        <Box>
        <Typography
            sx={{ fontSize: 14, color: "#9A9A9A", mb: 0.2, textWrap: "nowrap" }}
        >
            {label}
        </Typography>

        {children ?? (
            <Typography
            sx={{
                fontSize: 14,
                fontWeight: 700,
                color: "#111827",
                textWrap: "nowrap",
            }}
            >
            {value}
            </Typography>
        )}
        </Box>
    );
    }

    interface ComplianceReferralStepProps {
    clientName?: string;
    caseReference?: string;
    dateSubmitted?: string;
    submittedBy?: string;
    onViewCaseDetails?: () => void;
    onSaveAndExit?: () => void;
    }

    export function ComplianceReferralStep({
    clientName = "OLUGOKE M. CHIJIOKE",
    caseReference = "CMP/2025/0041",
    dateSubmitted = "06 Apr 2025, 14:32",
    submittedBy = "Opeyemi Pascal",
    onViewCaseDetails,
    onSaveAndExit,
    }: ComplianceReferralStepProps) {
    const [bannerDismissed, setBannerDismissed] = useState(false);

    return (
        <Box
        sx={{
            width: "100%",
            maxHeight: "100%",
            overflowY: "auto",
            pb: 2,
            pr: 0.5,
            "&::-webkit-scrollbar": { width: 4 },
            "&::-webkit-scrollbar-track": {
            bgcolor: "#F3F4F6",
            borderRadius: 9999,
            },
            "&::-webkit-scrollbar-thumb": {
            bgcolor: "#FF6B22",
            borderRadius: 9999,
            },
            scrollbarWidth: "thin",
            scrollbarColor: "#FF6B22 #F3F4F6",
        }}
        >
        <Box sx={{ mb: 5 }}>
            <Typography fontWeight={700} sx={{ fontSize: 22, color: "#111827" }}>
            Forwarded to Compliance
            </Typography>
            <Typography sx={{ fontSize: 13, color: "#6B7280" }}>
            This case requires compliance approval before a policyholder record
            can be created
            </Typography>
        </Box>

        {!bannerDismissed && (
            <Box
            sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 0.8,
                bgcolor: "#EDEFFC",
                border: "1px solid #4A61E3",
                borderRadius: "6px",
                px: 2,
                py: 0.8,
                mb: 1,
            }}
            >
            <Box sx={{ flexShrink: 0, mt: 0.1, color: "#3B82F6" }}>
                <BlueInfoIcon />
            </Box>

            <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                sx={{ fontSize: 13, fontWeight: 700, color: "#242424", mb: 0.3 }}
                >
                Pending Compliance Approval
                </Typography>

                <Typography
                sx={{ fontSize: 12, color: "#333333", lineHeight: 1.6 }}
                >
                The AML/sanctions screening has flagged this case for additional
                review. No policyholder record has been created. The onboarding
                process is on hold pending the compliance team's decision.
                </Typography>
            </Box>

            <IconButton
                onClick={() => setBannerDismissed(true)}
                sx={{
                mt: -0.5,
                "&:hover": { bgcolor: "#FFF0E9", color: "#374151" },
                }}
            >
                <CircularTimes />
            </IconButton>
            </Box>
        )}

        {/* Case Summary card */}
        <Box
            sx={{
            bgcolor: "#fff",
            borderRadius: "8px",
            border: "1px solid #BBBEC5",
            p: 2.5,
            mb: 1,
            }}
        >
            <Typography
            sx={{ fontSize: 14, fontWeight: 700, color: "#111827", mb: 2 }}
            >
            Case Summary
            </Typography>
            <Box className="grid grid-cols-4 gap-4 mb-4">
            <CaseField label="Client Name" value={clientName} />
            <CaseField label="Case Reference" value={caseReference} />
            <CaseField label="Date Submitted" value={dateSubmitted} />
            <CaseField label="Submitted by" value={submittedBy} />
            </Box>

            <Box className="grid grid-cols-4 gap-4">
            <CaseField label="Policyholder record">
                <StatusPill label="Not created" variant="red" />
            </CaseField>

            <CaseField label="Verification Status">
                <StatusPill label="Verified" variant="green" />
            </CaseField>

            <CaseField label="Screening status">
                <StatusPill label="Awaiting Approval" variant="purple" />
            </CaseField>
            </Box>
        </Box>

        <Box
            sx={{
            bgcolor: "#EDEFFC",
            border: "1px solid #4A61E3",
            borderRadius: "8px",
            p: 2,
            mb: 4,
            }}
        >
            <Typography
            sx={{ fontSize: 13, fontWeight: 800, color: "#4358CF", mb: 1 }}
            >
            What happens next?
            </Typography>

            <Box
            component="ol"
            sx={{
                pl: 2,
                m: 0,
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
                color: "#333333",
                fontWeight: 600,
                listStyleType: "decimal",
                listStylePosition: "outside",
            }}
            >
            {[
                "The compliance team will review the flagged AML/sanctions result and assess the client's risk profile.",
                "You will receive a notification once a decision is made — typically within 1–2 business days.",
                "If approved, the policyholder record will be created automatically and you can proceed to Inception.",
                "If rejected, you will receive guidance on next steps. The case will remain in the holding database.",
            ].map((item, i) => (
                <Box
                component="li"
                key={i}
                sx={{
                    display: "list-item",
                    fontSize: 12,
                    color: "#374151",
                    lineHeight: 1.6,
                    pl: 0.5,
                }}
                >
                {item}
                </Box>
            ))}
            </Box>
        </Box>

        <Box
            sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pt: 4,
            }}
        >
            <BrandButton
            variant="outline"
            onClick={onViewCaseDetails}
            className="!px-5 !text-[#E8611F]"
            >
            View case details
            </BrandButton>

            <ButtonBase
            onClick={onSaveAndExit}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
                px: 6,
                py: 2,
                borderRadius: "12px",
                bgcolor: "#fff",
                border: "1px solid #E5E7EB",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                minWidth: 110,
                transition: "border-color 0.18s, box-shadow 0.18s, transform 0.15s",
                "&:hover": {
                borderColor: "#FF6B22",
                boxShadow: "0 4px 14px rgba(255,107,34,0.12)",
                transform: "translateY(-1px)",
                },
            }}
            >
            <Box
                sx={{
                width: 40,
                height: 40,
                borderRadius: "8px",
                border: "1px solid #FF6B22",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FF6B22",
                }}
            >
                <ArrowRight />
            </Box>

            <Typography sx={{ fontSize: 13, fontWeight: 500, color: "#242424" }}>
                Save & Exit
            </Typography>
            </ButtonBase>
        </Box>
        </Box>
    );
    }
