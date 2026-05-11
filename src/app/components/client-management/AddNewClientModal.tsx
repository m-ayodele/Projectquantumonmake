"use client";

import { useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Dialog from "@mui/material/Dialog";
import ButtonBase from "@mui/material/ButtonBase";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import { avatar1, avatar2, avatar3, avatar4, businessAvatar, healthAvatar, lifeAvatar } from "./images";
import { IndividualIcon, CorporateIcon, IntermediaryIcon, LocalInsuranceIcon, ValidateCheckIcon, ValidateWarningIcon } from "./icons";
import { IndividualClientStep } from "./IndividualClientStep";
import { SearchResultStep, SearchResultRecord } from "./SearchResultStep";
import { ClientInformationStep } from "./ClientInformationStep";
import { OnboardingSuccessStep } from "./OnboardingSuccessStep";
import { ComplianceReferralStep } from "./ComplianceReferralStep";
import { DisparityInformationStep } from "./DisparityInformationStep";
import { UploadVerificationStep } from "./UploadVerificationStep";
import { CorporateClientStep } from "./CorporateClientStep";
import { CorporateSearchResultStep, CorporateSearchRecord } from "./CorporateSearchResultStep";
import { CorporateInformationStep } from "./CorporateInformationStep";
import { IntermediaryClientStep } from "./IntermediaryClientStep";
import { SearchLoader } from "./SearchLoader";
import { IntermediarySearchResultStep } from "./IntermediarySearchResultStep";
import { BrokerSearchResultStep, BrokerSearchRecord } from "./BrokerSearchResultStep";
import { BrokerInformationStep } from "./BrokerInformationStep";
import { BrokerComplianceReviewStep } from "./BrokerComplianceReviewStep";
import { EscalationSentModal } from "./EscalationSentModal";
import { OnboardingBrokerSuccessStep } from "./OnboardingBrokerSuccessStep";
import { InsuranceClientStep } from "./InsuranceClientStep";
import { InsuranceSearchResultStep, InsuranceSearchRecord } from "./InsuranceSearchResultStep";
import { InsuranceInformationStep } from "./InsuranceInformationStep";
import { OnboardingInsuranceSuccessStep } from "./OnboardingInsuranceSuccessStep";
import { InsuranceSuccessModal } from "./InsuranceSuccessModal";
import { BrandButton } from "./BrandButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { IntermediaryAgentInformationStep } from "./IntermediaryAgentInformationStep";
import { OnboardingAgentSuccessStep } from "./OnboardingAgentSuccessStep";

interface Scenario {
  id: string; label: string; hasRecord: boolean; hasComplianceIssue: boolean;
  hasIntegrationDowntime: boolean; hasDisparity: boolean; hasInvalidNin: boolean;
  clientStatus: string; verificationStatus: "Unverified" | "Verified" | "Pending";
}
interface ScenarioGroup { group: string; scenarios: Scenario[]; }

const SCENARIO_GROUPS: ScenarioGroup[] = [
  {
    group: "Individual",
    scenarios: [
      { id: "ind-1", label: "Client with details on System (Compliance pass → Forward to Compliance)", hasRecord: true, hasComplianceIssue: true, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: false, clientStatus: "Beneficiary", verificationStatus: "Unverified" },
      { id: "ind-2", label: "NIN could not be verified – Integration Failure (Compliance pass)", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: true, hasDisparity: false, hasInvalidNin: false, clientStatus: "Beneficiary", verificationStatus: "Unverified" },
      { id: "ind-3", label: "Disparity between NIN and Proposal form (Upload & Override)", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: true, hasInvalidNin: false, clientStatus: "Beneficiary", verificationStatus: "Unverified" },
      { id: "ind-4", label: "Client who is a policyholder already", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: false, clientStatus: "Beneficiary", verificationStatus: "Unverified" },
      { id: "ind-5", label: "No details on System – Run NIN search (Compliance pass)", hasRecord: false, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: false, clientStatus: "Beneficiary", verificationStatus: "Unverified" },
      { id: "ind-6", label: "NIN could not be verified – Invalid NIN", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: true, clientStatus: "Beneficiary", verificationStatus: "Unverified" },
      { id: "ind-7", label: "Policyholder not verified on System (Compliance pass)", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: false, clientStatus: "Policyholder", verificationStatus: "Unverified" },
      { id: "ind-8", label: "New client with Compliance Fail (Forward to Compliance)", hasRecord: false, hasComplianceIssue: true, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: false, clientStatus: "Beneficiary", verificationStatus: "Unverified" },
    ],
  },
  {
    group: "Corporate",
    scenarios: [
      { id: "corp-1", label: "Corporate Exists – Not Verified (Verification Possible)", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: false, clientStatus: "Employer", verificationStatus: "Unverified" },
      { id: "corp-2", label: "Corporate Exists – Verification Not Possible (Integration Failure)", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: true, hasDisparity: false, hasInvalidNin: false, clientStatus: "Employer", verificationStatus: "Unverified" },
      { id: "corp-3", label: "Corporate Exists – Verification Not Possible (Invalid)", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: false, clientStatus: "Employer", verificationStatus: "Unverified" },
      { id: "corp-4", label: "Disparity between RC Number and Proposal form (Upload & Override)", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: true, hasInvalidNin: false, clientStatus: "Employer", verificationStatus: "Unverified" },
      { id: "corp-5", label: "Corporate client does not exist", hasRecord: false, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: false, clientStatus: "Employer", verificationStatus: "Unverified" },
    ],
  },
  {
    group: "Intermediaries (Agents)",
    scenarios: [
      { id: "agent-1", label: "Agent Exists – Not Verified (Verification Possible)", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: false, clientStatus: "Beneficiary", verificationStatus: "Unverified" },
      { id: "agent-2", label: "Agent exists & NIN could not be verified – Integration Failure", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: true, hasDisparity: false, hasInvalidNin: false, clientStatus: "Beneficiary", verificationStatus: "Unverified" },
      { id: "agent-3", label: "Agent exists & NIN could not be verified – Invalid NIN", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: true, clientStatus: "Beneficiary", verificationStatus: "Unverified" },
      { id: "agent-4", label: "Agent exists with disparity between NIN and Proposal form (Request Docs)", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: true, hasInvalidNin: false, clientStatus: "Beneficiary", verificationStatus: "Unverified" },
      { id: "agent-5", label: "Agent does not exist", hasRecord: false, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: false, clientStatus: "Beneficiary", verificationStatus: "Unverified" },
    ],
  },
  {
    group: "Brokers",
    scenarios: [
      { id: "broker-1", label: "Broker Exists – Not Verified (Verification Possible)", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: false, clientStatus: "Beneficiary", verificationStatus: "Unverified" },
      { id: "broker-2", label: "Broker Exists & RC Number could not be verified – Integration Failure", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: true, hasDisparity: false, hasInvalidNin: false, clientStatus: "Beneficiary", verificationStatus: "Unverified" },
      { id: "broker-3", label: "Broker Exists & NAICOM could not be verified", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: false, clientStatus: "Beneficiary", verificationStatus: "Unverified" },
      { id: "broker-4", label: "Broker Exists & RC Number could not be verified – Invalid", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: false, clientStatus: "Beneficiary", verificationStatus: "Unverified" },
      { id: "broker-5", label: "Broker does not exist", hasRecord: false, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: false, clientStatus: "Beneficiary", verificationStatus: "Unverified" },
    ],
  },
  {
    group: "Insurance – Local",
    scenarios: [
      { id: "ins-local-1", label: "Company Exists – Not Verified (Verification Possible)", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: false, clientStatus: "Insurance Company", verificationStatus: "Unverified" },
      { id: "ins-local-2", label: "Company Exists & RC Number could not be verified – Integration Failure", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: true, hasDisparity: false, hasInvalidNin: false, clientStatus: "Insurance Company", verificationStatus: "Unverified" },
      { id: "ins-local-3", label: "Company Exists & RC Number is invalid", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: false, clientStatus: "Insurance Company", verificationStatus: "Unverified" },
      { id: "ins-local-4", label: "Company exists with disparity between RC Number and KYC form (Request Docs)", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: true, hasInvalidNin: false, clientStatus: "Insurance Company", verificationStatus: "Unverified" },
      { id: "ins-local-5", label: "Company does not exist on the system", hasRecord: false, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: false, clientStatus: "Insurance Company", verificationStatus: "Unverified" },
    ],
  },
  {
    group: "Insurance – Foreign",
    scenarios: [
      { id: "ins-foreign-1", label: "Company Exists – Not Verified (Verification Possible)", hasRecord: true, hasComplianceIssue: false, hasIntegrationDowntime: false, hasDisparity: false, hasInvalidNin: false, clientStatus: "Insurance Company", verificationStatus: "Unverified" },
    ],
  },
];

type ClientType = "individual" | "corporate" | "intermediaries" | "insurance" | null;
type IntermediarySubType = "agent" | "broker" | null;
type InsuranceSubType = "local" | "foreign" | null;
type ModalStep =
  | "choose" | "search"
  | "result" | "information" | "intermediaryInformation" | "brokerInformation"
  | "disparity" | "upload"
  | "corporateResult" | "corporateInformation"
  | "brokerResult" | "brokerSuccess" | "brokerComplianceReview"
  | "insuranceResult" | "insuranceInformation" | "insuranceSuccess"
  | "success" | "agentSuccess" | "compliance";

interface ClientTypeOption { id: Exclude<ClientType, null>; label: string; icon: React.ReactNode; }
const clientTypes: ClientTypeOption[] = [
  { id: "individual", label: "Individual", icon: <IndividualIcon /> },
  { id: "corporate", label: "Corporate", icon: <CorporateIcon /> },
  { id: "intermediaries", label: "Intermediaries", icon: <IntermediaryIcon /> },
  { id: "insurance", label: "Insurance", icon: <LocalInsuranceIcon /> },
];

const CENTER = { x: 365, y: 199 };
const RING_RADII = [32, 68, 112, 157, 199];
const AVATAR_CONFIG: { r: number; angle: number; size: number; swing: number; duration: number; src: string }[] = [
  { r: 199, angle: 220, size: 28, swing: 5, duration: 5.2, src: lifeAvatar },
  { r: 199, angle: 180, size: 40, swing: 4, duration: 4.8, src: avatar1 },
  { r: 157, angle: 160, size: 32, swing: 4, duration: 4.6, src: avatar2 },
  { r: 112, angle: 218, size: 32, swing: 4, duration: 4.4, src: healthAvatar },
  { r: 112, angle: 95, size: 34, swing: 4, duration: 4.9, src: avatar4 },
  { r: 68, angle: 180, size: 30, swing: 3, duration: 4.1, src: avatar3 },
  { r: 157, angle: 118, size: 34, swing: 4, duration: 4.7, src: businessAvatar },
];

interface LeftPanelContent { title: string; description: string; subDescription?: string; checks?: string[]; }

function getLeftContent(
  step: ModalStep,
  isLoading: boolean,
  hasComplianceIssue = false,
  hasIntegrationDowntime = false,
  hasDisparity = false,
  hasOverridden = false,
  hasInvalidNin = false,
  activeScenarioId = "",
): LeftPanelContent {
  if (isLoading || step === "choose" || step === "search") {
    return { title: "Create a New Client", description: "Create a new client in a few easy steps. Select the client type to get started." };
  }
  switch (step) {
    case "result":
    case "corporateResult":
    case "brokerResult":
    case "insuranceResult":
      return { title: "System Search: Detail found on the system", description: "Confirm the client search result on the system against the details on the form and NIN system" };
    case "information":
      return {
        title: "Complete the client's information",
        description: "Ensure the proposal details match our system records.",
        checks: hasIntegrationDowntime
          ? ["Searched NIMC", "⚠ Detail not found...Integration downtime", "⚠ Disparity check could not be completed"]
          : hasInvalidNin
            ? ["Searched NIMC", "⚠ Detail not found...Invalid NIN Number", "⚠ Disparity check could not be completed"]
            : hasOverridden
              ? ["RC Number Detail found!", "Disparities checked", "⚠ Disparity found", "Compliance Check completed"]
              : hasDisparity
                ? ["Searched NIMC", "NIN found", "Disparities checked", "⚠ Disparity found!"]
                : hasComplianceIssue
                  ? ["NIN found", "Disparities checked", "No Disparity found!", "⚠  Compliance Issue found"]
                  : ["NIN found", "Disparities checked", "No Disparity found!", "Compliance Check completed"],
      };
    case "corporateInformation":
      return { title: "Complete the client's information", description: "Ensure the proposal details match our system records.", checks: ["RC Number Detail found!", "Disparities checked", "No Disparity found!", "Compliance Check completed"] };
    case "brokerInformation":
      return {
        title: "Complete the client's information",
        description: "Ensure the proposal details match our system records.",
        checks: hasIntegrationDowntime
          ? ["⚠ Detail not found...Integration downtime", "NIBSS confirmed", "NAICOM licence verified", "Compliance Check completed"]
          : activeScenarioId === "broker-3"
            ? ["Searched NIMC", "RC Number found", "NIBSS confirmed", "⚠ NAICOM could not be verified...detail not found"]
            : activeScenarioId === "broker-4"
              ? ["Searched CAC", "⚠ Detail not found...Invalid RC Number"]
              : ["Searched NIMC", "NIN found", "NIBSS confirmed", "NAICOM licence verified"],
      };
    case "insuranceInformation":
      return {
        title: "Complete the client's information",
        description: "Ensure the proposal details match our system records.",
        checks: activeScenarioId.startsWith("ins-local")
          ? ["RC Number found", "NIBSS confirmed", "NAICOM licence verified", "Compliance Check completed"]
          : ["License Number found", "NIBSS confirmed", "Compliance Check completed"],
      };
    case "brokerComplianceReview":
      return { title: "Compliance Review Required", description: "This broker cannot proceed until the compliance team clears the NAICOM licence issue." };
    case "agentSuccess":
    case "brokerSuccess":
      return { title: "End of Onboarding", description: "Option: Proceed to inception", subDescription: "You can end the onboarding process here or proceed to policy creation (Inception)" };
    case "insuranceSuccess":
      return { title: "End of Onboarding", description: "You can end the onboarding process here or proceed to policy creation (Inception)" };
    case "disparity":
    case "upload":
      return {
        title: "Complete the client's information",
        description: "Ensure the proposal details match our system records.",
        checks: activeScenarioId === "agent-4" ? ["NIN found", "NIBSS confirmed", "NAICOM licence verified", "⚠ Disparity found!"] : undefined,
      };
    case "compliance":
      return { title: "Referred to Compliance", description: "This case has been forwarded to the compliance team for final approval." };
    case "success":
      return { title: "End of Onboarding", description: "Option: Proceed to inception", subDescription: "You can end the onboarding process here or proceed to policy creation (Inception)" };
    case "intermediaryInformation":
      return {
        title: "Complete the client's information",
        description: "Ensure the proposal details match our system records.",
        checks: hasIntegrationDowntime
          ? ["⚠ Detail not found...Integration downtime", "NIBSS confirmed", "NAICOM licence verified", "⚠ Disparity check could not be completed"]
          : hasInvalidNin
            ? ["Searched NIMC", "⚠ Detail not found...Invalid NIN Number"]
            : hasDisparity
              ? ["NIN found", "NIBSS confirmed", "NAICOM licence verified", "⚠ Disparity found!"]
              : ["NIBSS confirmed", "NAICOM licence verified", "Disparities checked", "Compliance Check completed"],
      };
  }
}

function getStepNumber(step: ModalStep, isLoading: boolean): number {
  if (isLoading || step === "choose" || step === "search") return 1;
  switch (step) {
    case "result":
    case "corporateResult":
    case "brokerResult":
    case "insuranceResult":
      return 2;
    case "information":
    case "disparity":
    case "upload":
    case "corporateInformation":
    case "intermediaryInformation":
    case "brokerInformation":
    case "insuranceInformation":
      return 3;
    case "compliance":
    case "success":
    case "agentSuccess":
    case "brokerSuccess":
    case "brokerComplianceReview":
    case "insuranceSuccess":
      return 4;
  }
}

function CheckBadge() {
  return (
    <div style={{ position: "absolute", top: 8, right: 8, zIndex: 2 }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#FF6B22" />
      </svg>
    </div>
  );
}

interface OnboardingClientTypeProps {
  open: boolean;
  onClose: () => void;
  onSaveAndExit?: () => void;
  onRequestAdditionalDocument: () => void;
}

export default function OnboardingClientType({ open, onClose, onSaveAndExit, onRequestAdditionalDocument }: OnboardingClientTypeProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const step = (searchParams.get("step") ?? "choose") as ModalStep;
  const selected = (searchParams.get("clientType") ?? null) as ClientType;
  const activeScenarioId = searchParams.get("scenario") ?? "ind-1";
  const hasRecord = searchParams.get("hasRecord") !== "false";
  const hasComplianceIssue = searchParams.get("hasComplianceIssue") === "true";
  const hasIntegrationDowntime = searchParams.get("hasIntegrationDowntime") === "true";
  const hasDisparity = searchParams.get("hasDisparity") === "true";
  const hasInvalidNin = searchParams.get("hasInvalidNin") === "true";
  const hasOverridden = searchParams.get("hasOverridden") === "true";
  const panelOpen = searchParams.get("panelOpen") === "true";
  const intermediarySubType = (searchParams.get("intermediarySubType") ?? null) as IntermediarySubType;
  const insuranceSubType = (searchParams.get("insuranceSubType") ?? null) as InsuranceSubType;

  const hasNaicomFailure = activeScenarioId === "broker-3";
  const hasInvalidRcNumber = activeScenarioId === "broker-4";
  const isLocalInsurance = insuranceSubType === "local" || activeScenarioId.startsWith("ins-local");
  const isForeignInsurance = insuranceSubType === "foreign" || activeScenarioId.startsWith("ins-foreign");

  const [isLoading, setIsLoading] = useState(false);
  const [loadingSubType, setLoadingSubType] = useState<IntermediarySubType>(null);
  const [prefillData, setPrefillData] = useState<Record<string, string>>({});
  const [showEscalationModal, setShowEscalationModal] = useState(false);
  const [showInsuranceSuccessModal, setShowInsuranceSuccessModal] = useState(false);

  const navigate = useCallback(
    (updates: Record<string, string | null>) => {
      const next = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([k, v]) => { if (v === null) next.delete(k); else next.set(k, v); });
      router.push(`?${next.toString()}`);
    },
    [router, searchParams],
  );

  const currentScenario = SCENARIO_GROUPS.flatMap((g) => g.scenarios).find((s) => s.id === activeScenarioId);
  const mockClientStatus = currentScenario?.clientStatus ?? "Beneficiary";
  const mockVerificationStatus = currentScenario?.verificationStatus ?? "Unverified";

  const MOCK_RESULT: SearchResultRecord = { surname: "OLUGOKE", firstName: "MOHAMMED", middleName: "CHIJIOKE", dateOfBirth: "20 NOV 1986", gender: "M", phoneNumber: "08123456789", clientId: "PO / 0997 /0", clientStatus: mockClientStatus, verificationStatus: mockVerificationStatus };
  const MOCK_CORPORATE_RESULT: CorporateSearchRecord = { businessName: "NNPC LTD", clientId: "PO / 0997 /0", verificationStatus: "Unverified", rcNumber: "", clientStatus: "Employer" };
  const MOCK_BROKER_RESULT: BrokerSearchRecord = { businessName: "APEKS BROKERS NIG. LTD", clientId: "PO / 0997 /0", verificationStatus: "Unverified", rcNumber: "RC 1234567", naicomNo: "NB/00421/2022", clientStatus: "Broker" };
  const MOCK_INSURANCE_LOCAL_RESULT: InsuranceSearchRecord = { companyName: "GREAT NIGERIA INSURANCE", clientId: "PO / 0997 /0", verificationStatus: "Unverified", rcNumber: "RC 1234567", naicomNo: "NL/00421/2022", clientStatus: "Insurance Company", isLocal: true };
  const MOCK_INSURANCE_FOREIGN_RESULT: InsuranceSearchRecord = { companyName: "HSBC ASSURANCE INC.", clientId: "PO / 0997 /0", verificationStatus: "Unverified", licenseNumber: "LN1234567", clientStatus: "Insurance Company", isLocal: false };

  const handleScenarioChange = (id: string) => {
    const scenario = SCENARIO_GROUPS.flatMap((g) => g.scenarios).find((s) => s.id === id);
    if (!scenario) return;
    setPrefillData({});
    setIsLoading(false);
    setLoadingSubType(null);
    setShowEscalationModal(false);
    setShowInsuranceSuccessModal(false);
    const subType = id.startsWith("ins-local") ? "local" : id.startsWith("ins-foreign") ? "foreign" : null;
    navigate({
      scenario: id, step: "choose", clientType: null, panelOpen: null,
      intermediarySubType: null, insuranceSubType: subType,
      hasRecord: scenario.hasRecord ? null : "false",
      hasComplianceIssue: scenario.hasComplianceIssue ? "true" : null,
      hasIntegrationDowntime: scenario.hasIntegrationDowntime ? "true" : null,
      hasDisparity: scenario.hasDisparity ? "true" : null,
      hasInvalidNin: scenario.hasInvalidNin ? "true" : null,
      hasOverridden: null,
    });
  };

  const handleClose = () => {
    onClose();
    setShowEscalationModal(false);
    setShowInsuranceSuccessModal(false);
    setTimeout(() => {
      setPrefillData({});
      setIsLoading(false);
      setLoadingSubType(null);
      navigate({ step: "choose", clientType: null, panelOpen: null, scenario: "ind-1", intermediarySubType: null, insuranceSubType: null, hasRecord: null, hasComplianceIssue: null, hasIntegrationDowntime: null, hasDisparity: null, hasInvalidNin: null, hasOverridden: null });
    }, 300);
  };

  const handleCardClick = (id: Exclude<ClientType, null>) => {
    if (selected === id) navigate({ panelOpen: null, clientType: null, step: "choose", intermediarySubType: null, insuranceSubType: null });
    else navigate({ clientType: id, panelOpen: "true", step: "search" });
  };

  const triggerSearch = (targetStep: ModalStep, subType: IntermediarySubType = null, insSubType: InsuranceSubType = null) => {
    setLoadingSubType(subType);
    setIsLoading(true);
    navigate({
      step: targetStep,
      panelOpen: null,
      ...(subType ? { intermediarySubType: subType } : { intermediarySubType: null }),
      ...(insSubType ? { insuranceSubType: insSubType } : {}),
    });
    setTimeout(() => { setIsLoading(false); setLoadingSubType(null); }, 5000);
  };

  const isIntermediaryAgentScenario = ["agent-1", "agent-2", "agent-3", "agent-4", "agent-5"].includes(activeScenarioId);

  const leftContent = getLeftContent(step, isLoading, hasComplianceIssue, hasIntegrationDowntime, hasDisparity, hasOverridden, hasInvalidNin, activeScenarioId);
  const stepNumber = getStepNumber(step, isLoading);

  const currentInsRecord = isLocalInsurance ? MOCK_INSURANCE_LOCAL_RESULT : MOCK_INSURANCE_FOREIGN_RESULT;

  return (
    <>
      <Dialog
        open={open && !showEscalationModal && !showInsuranceSuccessModal}
        onClose={handleClose}
        maxWidth={false}
        PaperProps={{ sx: { borderRadius: "4px", overflow: "hidden", width: 1097, maxWidth: "95vw", border: "none", maxHeight: "92vh" } }}
      >
        <div style={{ display: "flex", width: "100%", height: "min(707px, 88vh)" }}>

          {/* ── Left Panel ── */}
          <div style={{ width: 367, minWidth: 367, background: "#E57912", position: "relative", overflow: "hidden", flexShrink: 0, display: "flex", flexDirection: "column" }}>
            <style>{`
              @keyframes ringSwingCW  { 0%{transform:rotate(calc(var(--swing)*-1))} 50%{transform:rotate(var(--swing))} 100%{transform:rotate(calc(var(--swing)*-1))} }
              @keyframes ringSwingCCW { 0%{transform:rotate(var(--swing))} 50%{transform:rotate(calc(var(--swing)*-1))} 100%{transform:rotate(var(--swing))} }
              @keyframes faceSwingCW  { 0%{transform:rotate(var(--swing))} 50%{transform:rotate(calc(var(--swing)*-1))} 100%{transform:rotate(var(--swing))} }
              @keyframes faceSwingCCW { 0%{transform:rotate(calc(var(--swing)*-1))} 50%{transform:rotate(var(--swing))} 100%{transform:rotate(calc(var(--swing)*-1))} }
            `}</style>
            <svg width="367" height="572" viewBox="0 0 367 572" fill="none" style={{ position: "absolute", right: 0, bottom: 0, zIndex: 0, pointerEvents: "none" }}>
              <path opacity="0.6" d="M266.218 396.638C357.968 257.787 367 0 367 0V572H0C0 572 174.468 535.489 266.218 396.638Z" fill="url(#lg1)" />
              <defs><linearGradient id="lg1" x1="160.681" y1="371.745" x2="344.108" y2="512.732" gradientUnits="userSpaceOnUse"><stop stopColor="#E57912" /><stop offset="1" stopColor="#B54C18" /></linearGradient></defs>
            </svg>
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
              {RING_RADII.map((r, i) => (<div key={i} style={{ position: "absolute", left: CENTER.x - r, top: CENTER.y - r, width: r * 2, height: r * 2, borderRadius: "50%", border: "1px solid #FFA578", boxSizing: "border-box" }} />))}
              {AVATAR_CONFIG.map((av, i) => {
                const cw = i % 2 === 0;
                return (
                  <div key={i} style={{ position: "absolute", left: CENTER.x, top: CENTER.y, width: 0, height: 0, transform: `rotate(${av.angle}deg)`, transformOrigin: "0 0" }}>
                    <div style={{ position: "absolute", left: 0, top: 0, width: 0, height: 0, transformOrigin: "0 0", animation: `${cw ? "ringSwingCW" : "ringSwingCCW"} ${av.duration}s ease-in-out infinite`, ["--swing" as string]: `${av.swing}deg` } as React.CSSProperties}>
                      <div style={{ position: "absolute", left: av.r, top: 0, width: av.size, height: av.size, borderRadius: "50%", overflow: "hidden", border: "1px solid #fff", boxShadow: "0 4px 10px rgba(0,0,0,0.15)", background: "#fff", transform: `translate(-50%,-50%) rotate(${-av.angle}deg)` }}>
                        <div style={{ width: "100%", height: "100%", animation: `${cw ? "faceSwingCW" : "faceSwingCCW"} ${av.duration}s ease-in-out infinite`, transformOrigin: "center center", ["--swing" as string]: `${av.swing}deg` } as React.CSSProperties}>
                          <img src={av.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <span style={{ position: "relative", zIndex: 2, padding: "24px 20px 0", fontSize: 16, fontWeight: 700, color: "#111", flexShrink: 0 }}>Onboarding</span>
            <div style={{ flex: 1, minHeight: 0 }} />
            <div style={{ position: "relative", zIndex: 2, padding: "0 20px 40px", flexShrink: 0 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: "#111", marginBottom: 10, lineHeight: 1.25 }}>{leftContent.title}</h2>
              {(step === "success" || step === "agentSuccess" || step === "brokerSuccess") && !isLoading ? (
                <>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#111", marginBottom: 6, lineHeight: 1.3 }}>{leftContent.description}</p>
                  <p style={{ fontSize: 13, color: "rgba(0,0,0,0.72)", lineHeight: 1.6, margin: 0 }}>{leftContent.subDescription}</p>
                </>
              ) : (step === "compliance" || step === "brokerComplianceReview") && !isLoading ? (
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(0,0,0,0.72)" }}>{leftContent.description}</p>
              ) : (
                <>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(0,0,0,0.72)", marginBottom: leftContent.checks ? 14 : 0 }}>{leftContent.description}</p>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
                    {(leftContent.checks ?? []).map((check) => {
                      const isWarning = check.startsWith("⚠");
                      const label = isWarning ? check.replace("⚠ ", "") : check;
                      return (
                        <Box key={check} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          {isWarning ? <ValidateWarningIcon /> : <ValidateCheckIcon />}
                          <Typography sx={{ fontSize: 12, color: "#111", fontWeight: 500, lineHeight: 1.3 }}>{label}</Typography>
                        </Box>
                      );
                    })}
                  </Box>
                </>
              )}
            </div>
          </div>

          {/* ── Right Panel ── */}
          <div style={{ flex: 1, background: "#D7D8D980", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>

            {/* Dev Scenario Switcher */}
            <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10, bgcolor: "#1E1E1E", borderBottom: "1px solid #333", display: "flex", alignItems: "center", gap: 1, px: 2, py: 0.6 }}>
              <Box sx={{ flexShrink: 0, bgcolor: "#FF6B22", color: "#fff", fontSize: 9, fontWeight: 700, px: 0.8, py: 0.25, borderRadius: "3px", letterSpacing: "0.04em", textTransform: "uppercase" }}>Demo</Box>
              <Typography sx={{ fontSize: 11, color: "#9CA3AF", flexShrink: 0 }}>Scenario:</Typography>
              <FormControl size="small" sx={{ flex: 1, minWidth: 0 }}>
                <Select value={activeScenarioId} onChange={(e) => handleScenarioChange(e.target.value)}
                  sx={{ fontSize: 11, color: "#fff", bgcolor: "#2A2A2A", height: 26, borderRadius: "4px", "& .MuiSelect-select": { py: 0, px: 1, display: "flex", alignItems: "center", fontSize: 11, color: "#fff" }, "& .MuiOutlinedInput-notchedOutline": { borderColor: "#444" }, "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#FF6B22" }, "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#FF6B22" }, "& .MuiSelect-icon": { color: "#9CA3AF" } }}
                  MenuProps={{ PaperProps: { sx: { bgcolor: "#1E1E1E", border: "1px solid #333", borderRadius: "6px", maxHeight: 340, "& .MuiMenuItem-root": { fontSize: 11, color: "#E5E7EB", py: 0.6, "&:hover": { bgcolor: "#2A2A2A" }, "&.Mui-selected": { bgcolor: "#FF6B2222", color: "#FF6B22" }, "&.Mui-selected:hover": { bgcolor: "#FF6B2233" } } } } }}>
                  {SCENARIO_GROUPS.map((group) => [
                    <MenuItem key={`header-${group.group}`} disabled sx={{ fontSize: 10, fontWeight: 700, color: "#6B7280 !important", textTransform: "uppercase", letterSpacing: "0.06em", py: 0.5, opacity: "1 !important", bgcolor: "#111 !important", cursor: "default" }}>{group.group}</MenuItem>,
                    ...group.scenarios.map((s) => (<MenuItem key={s.id} value={s.id} sx={{ pl: 2 }}>{s.label}</MenuItem>)),
                  ])}
                </Select>
              </FormControl>
            </Box>

            <span style={{ position: "absolute", top: 42, right: 28, fontSize: 12, fontWeight: 500, color: "#242424", zIndex: 1 }}>
              Step {stepNumber} of 4
            </span>

            {isLoading && <SearchLoader clientType={selected} intermediarySubType={loadingSubType} insuranceSubType={insuranceSubType} />}

            {/* Step 1 — Choose + search */}
            {(step === "choose" || step === "search") && (
              <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", padding: "80px 36px 0 36px", overflow: "hidden" }}>
                <Typography fontWeight={700} sx={{ fontSize: 22, color: "#242424", mb: 0.5, flexShrink: 0 }}>Choose a client type</Typography>
                <Typography sx={{ fontSize: 13, color: "#898E99", mb: 3, flexShrink: 0 }}>Creating a new client is just a few steps away. Select the client type to get started</Typography>
                <Box sx={{ display: "flex", gap: 1.5, mb: 3, flexShrink: 0 }}>
                  {clientTypes.map((type) => {
                    const isSelected = selected === type.id;
                    return (
                      <ButtonBase key={type.id} onClick={() => handleCardClick(type.id)}
                        sx={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "14px", flex: "1 1 0", minWidth: 0, py: "20px", px: "12px", borderRadius: "16px", backgroundColor: isSelected ? "#FFF0E5" : "#FFF", border: "1px solid", borderColor: isSelected ? "#FF6B22" : "#E9E9E9", boxShadow: isSelected ? "0 4px 14px rgba(255,107,34,0.14)" : "0 1px 2px rgba(16,24,40,0.04)", transition: "all 0.18s ease", "&:hover": { backgroundColor: isSelected ? "#FFF0E5" : "#FFFAF7", borderColor: "#FF6B22" } }}>
                        {isSelected && <CheckBadge />}
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: "10px", background: isSelected ? "#FF6B22" : "transparent", border: "1px solid #FF6B22", "& svg": { width: 24, height: 24, filter: isSelected ? "brightness(0) invert(1)" : "none" } }}>{type.icon}</Box>
                        <span style={{ fontSize: 13, fontWeight: 500, color: "#374151", textAlign: "center" }}>{type.label}</span>
                      </ButtonBase>
                    );
                  })}
                </Box>
                <Box sx={{ flex: 1, minHeight: 0, overflowY: "auto", "&::-webkit-scrollbar": { width: 4 }, "&::-webkit-scrollbar-track": { bgcolor: "#F3F4F6", borderRadius: 9999 }, "&::-webkit-scrollbar-thumb": { bgcolor: "#FF6B22", borderRadius: 9999 }, scrollbarWidth: "thin", scrollbarColor: "#FF6B22 #F3F4F6" }}>
                  <Collapse in={panelOpen} unmountOnExit>
                    {selected === "individual" && <IndividualClientStep onSearch={() => triggerSearch("result")} onCancel={handleClose} />}
                    {selected === "corporate" && <CorporateClientStep onSearch={() => triggerSearch("corporateResult")} onCancel={handleClose} />}
                    {selected === "intermediaries" && (
                      <IntermediaryClientStep onSearch={(subType) => triggerSearch(subType === "broker" ? "brokerResult" : "result", subType)} onCancel={handleClose} scenarioId={activeScenarioId} />
                    )}
                    {selected === "insurance" && (
                      <InsuranceClientStep
                        onSearch={(insSubType) => triggerSearch("insuranceResult", null, insSubType)}
                        onCancel={handleClose}
                      />
                    )}
                    {selected && !["individual", "corporate", "intermediaries", "insurance"].includes(selected) && (
                      <Box sx={{ py: 3, color: "#333333", fontSize: 13 }}>{selected.charAt(0).toUpperCase() + selected.slice(1)} client form coming soon.</Box>
                    )}
                  </Collapse>
                </Box>
              </div>
            )}

            {(step === "choose" || step === "search") && (
              <Collapse in={!panelOpen}>
                <Box sx={{ display: "flex", justifyContent: "flex-end", px: "36px", py: "20px", flexShrink: 0 }}>
                  <BrandButton variant="ghost" size="sm" onClick={handleClose} className="!text-[#f97316] !font-normal !px-4 hover:!bg-[#FFF0E9]">Cancel</BrandButton>
                </Box>
              </Collapse>
            )}

            {/* Step 2 — Intermediary (Agent) result */}
            {!isLoading && step === "result" && selected === "intermediaries" && (
              <div style={{ flex: 1, minHeight: 0, padding: "80px 36px 32px 36px", display: "flex", flexDirection: "column" }}>
                <IntermediarySearchResultStep
                  record={hasRecord ? MOCK_RESULT : null} hasRecord={hasRecord} scenarioId={activeScenarioId}
                  onBack={() => router.back()} onCancel={handleClose}
                  onUpdateRecord={() => { setPrefillData({ surname: MOCK_RESULT.surname, firstName: MOCK_RESULT.firstName, middleName: MOCK_RESULT.middleName, dob: MOCK_RESULT.dateOfBirth, gender: MOCK_RESULT.gender, phoneNumber: MOCK_RESULT.phoneNumber }); navigate({ step: isIntermediaryAgentScenario ? "intermediaryInformation" : "information" }); }}
                  onCreateNew={() => { setPrefillData({}); navigate({ step: isIntermediaryAgentScenario ? "intermediaryInformation" : "information" }); }}
                />
              </div>
            )}

            {/* Step 2 — Broker result */}
            {!isLoading && step === "brokerResult" && (
              <div style={{ flex: 1, minHeight: 0, padding: "80px 36px 32px 36px", display: "flex", flexDirection: "column" }}>
                <BrokerSearchResultStep
                  record={hasRecord ? MOCK_BROKER_RESULT : null} hasRecord={hasRecord}
                  onBack={() => router.back()} onCancel={handleClose}
                  onUpdateRecord={() => { setPrefillData({ businessName: MOCK_BROKER_RESULT.businessName }); navigate({ step: "brokerInformation" }); }}
                  onCreateNew={() => { setPrefillData({}); navigate({ step: "brokerInformation" }); }}
                />
              </div>
            )}

            {/* Step 2 — Insurance result (local & foreign) */}
            {!isLoading && step === "insuranceResult" && (
              <div style={{ flex: 1, minHeight: 0, padding: "80px 36px 32px 36px", display: "flex", flexDirection: "column" }}>
                <InsuranceSearchResultStep
                  record={hasRecord ? currentInsRecord : null} hasRecord={hasRecord}
                  onBack={() => router.back()} onCancel={handleClose}
                  onUpdateRecord={() => { navigate({ step: "insuranceInformation" }); }}
                  onCreateNew={() => { navigate({ step: "insuranceInformation" }); }}
                />
              </div>
            )}

            {/* Step 2 — Individual/other result */}
            {!isLoading && step === "result" && selected !== "intermediaries" && (
              <div style={{ flex: 1, minHeight: 0, padding: "80px 36px 32px 36px", display: "flex", flexDirection: "column" }}>
                <SearchResultStep
                  record={hasRecord ? MOCK_RESULT : null} hasRecord={hasRecord}
                  onBack={() => router.back()} onCancel={handleClose}
                  onUpdateRecord={() => { setPrefillData({ surname: MOCK_RESULT.surname, firstName: MOCK_RESULT.firstName, middleName: MOCK_RESULT.middleName, dob: MOCK_RESULT.dateOfBirth, gender: MOCK_RESULT.gender, phoneNumber: MOCK_RESULT.phoneNumber }); navigate({ step: "information" }); }}
                  onCreateNew={() => { setPrefillData({}); navigate({ step: "information" }); }}
                />
              </div>
            )}

            {/* Step 2 — Corporate result */}
            {!isLoading && step === "corporateResult" && (
              <div style={{ flex: 1, minHeight: 0, padding: "80px 36px 32px 36px", display: "flex", flexDirection: "column" }}>
                <CorporateSearchResultStep
                  record={hasRecord ? MOCK_CORPORATE_RESULT : null} hasRecord={hasRecord}
                  onBack={() => router.back()} onCancel={handleClose}
                  onUpdateRecord={() => { setPrefillData({ businessName: MOCK_CORPORATE_RESULT.businessName }); navigate({ step: "corporateInformation" }); }}
                  onCreateNew={() => { setPrefillData({}); navigate({ step: "corporateInformation" }); }}
                />
              </div>
            )}

            {/* Step 3 — Individual information */}
            {!isLoading && step === "information" && (
              <div style={{ flex: 1, minHeight: 0, padding: "80px 36px 32px 36px", display: "flex", flexDirection: "column" }}>
                <ClientInformationStep hasComplianceIssue={hasComplianceIssue} hasIntegrationDowntime={hasIntegrationDowntime} hasDisparity={hasDisparity} hasInvalidNin={hasInvalidNin} prefillData={prefillData} onBack={() => router.back()} onCancel={handleClose} onViewDisparity={() => navigate({ step: "disparity" })} onRequestAdditionalDocument={onRequestAdditionalDocument} onFinish={() => navigate({ step: hasComplianceIssue ? "compliance" : "success" })} />
              </div>
            )}

            {/* Step 3 — Agent information */}
            {!isLoading && step === "intermediaryInformation" && (
              <div style={{ flex: 1, minHeight: 0, padding: "80px 36px 32px 36px", display: "flex", flexDirection: "column" }}>
                <IntermediaryAgentInformationStep hasIntegrationDowntime={hasIntegrationDowntime} hasDisparity={hasDisparity} hasInvalidNin={hasInvalidNin} onBack={() => router.back()} onCancel={handleClose} onFinish={() => navigate({ step: "agentSuccess" })} onViewDisparity={() => navigate({ step: "disparity" })} onRequestAdditionalDocument={onRequestAdditionalDocument} />
              </div>
            )}

            {/* Step 3 — Broker information */}
            {!isLoading && step === "brokerInformation" && (
              <div style={{ flex: 1, minHeight: 0, padding: "80px 36px 32px 36px", display: "flex", flexDirection: "column" }}>
                <BrokerInformationStep
                  hasIntegrationDowntime={hasIntegrationDowntime} hasDisparity={hasDisparity} hasInvalidNin={hasInvalidNin}
                  hasNaicomFailure={hasNaicomFailure} hasInvalidRcNumber={hasInvalidRcNumber}
                  onBack={() => router.back()} onCancel={handleClose}
                  onFinish={() => navigate({ step: "brokerSuccess" })}
                  onViewDisparity={() => navigate({ step: "disparity" })}
                  onRequestAdditionalDocument={onRequestAdditionalDocument}
                  onEscalateToCompliance={() => navigate({ step: "brokerComplianceReview" })}
                />
              </div>
            )}

            {/* Step 3 — Insurance information (local and foreign share the same component, isLocal flag controls differences) */}
            {!isLoading && step === "insuranceInformation" && (
              <div style={{ flex: 1, minHeight: 0, padding: "80px 36px 32px 36px", display: "flex", flexDirection: "column" }}>
                <InsuranceInformationStep
                  isLocal={isLocalInsurance || !isForeignInsurance}
                  onBack={() => router.back()}
                  onCancel={handleClose}
                  onFinish={() => navigate({ step: "insuranceSuccess" })}
                />
              </div>
            )}

            {/* Step 4 — Broker compliance review (broker-3) */}
            {!isLoading && step === "brokerComplianceReview" && (
              <div style={{ flex: 1, minHeight: 0, padding: "80px 36px 32px 36px", display: "flex", flexDirection: "column" }}>
                <BrokerComplianceReviewStep caseReference="CR/0041/25" brokerName="APEKS BROKERS NIG. LTD" naicomNo="NB/00421/2022" onBack={() => router.back()} onFinish={() => setShowEscalationModal(true)} />
              </div>
            )}

            {/* Step 4 — Agent success */}
            {!isLoading && step === "agentSuccess" && (
              <div style={{ flex: 1, minHeight: 0, padding: "80px 36px 32px 36px", display: "flex", flexDirection: "column", overflowY: "auto" }}>
                <OnboardingAgentSuccessStep
                  record={{ clientId: "PO/7657/09", clientName: "Bankole Badmus", clientStatus: "Agent", verificationStatus: activeScenarioId === "agent-2" || activeScenarioId === "agent-3" ? "Unverified" : "Verified", amlCftScreening: "Passed" }}
                  onBackToHome={handleClose} onViewClientDetails={handleClose}
                />
              </div>
            )}

            {/* Step 4 — Broker success */}
            {!isLoading && step === "brokerSuccess" && (
              <div style={{ flex: 1, minHeight: 0, padding: "80px 36px 32px 36px", display: "flex", flexDirection: "column", overflowY: "auto" }}>
                <OnboardingBrokerSuccessStep
                  record={{ clientId: "PO/7657/09", clientName: "Bankole Badmus", clientStatus: "Broker", verificationStatus: activeScenarioId === "broker-2" || hasIntegrationDowntime ? "Unverified" : "Verified", amlCftScreening: "Passed" }}
                  onBackToHome={handleClose} onViewClientDetails={handleClose}
                />
              </div>
            )}

            {/* Step 4 — Insurance success */}
            {!isLoading && step === "insuranceSuccess" && (
              <div style={{ flex: 1, minHeight: 0, padding: "80px 36px 32px 36px", display: "flex", flexDirection: "column", overflowY: "auto" }}>
                <OnboardingInsuranceSuccessStep
                  record={{ clientId: "IB/0021/25", type: "Broker", verificationStatus: "Verified" }}
                  onFinishOnboarding={() => setShowInsuranceSuccessModal(true)}
                  onBack={() => router.back()}
                />
              </div>
            )}

            {/* Step 3 — Corporate information */}
            {!isLoading && step === "corporateInformation" && (
              <div style={{ flex: 1, minHeight: 0, padding: "80px 36px 32px 36px", display: "flex", flexDirection: "column" }}>
                <CorporateInformationStep prefillData={prefillData} onBack={() => router.back()} onCancel={handleClose} onFinish={() => navigate({ step: "success" })} />
              </div>
            )}

            {/* Step 3b — Disparity */}
            {!isLoading && step === "disparity" && (
              <div style={{ flex: 1, minHeight: 0, padding: "80px 36px 32px 36px", display: "flex", flexDirection: "column" }}>
                <DisparityInformationStep
                  type={activeScenarioId === "agent-4" ? "intermediary" : activeScenarioId.startsWith("corp") ? "corporate" : "individual"}
                  onBack={() => router.back()} onUploadAndOverride={() => navigate({ step: "upload" })} onRequestAdditionalDocument={onRequestAdditionalDocument}
                />
              </div>
            )}

            {/* Step 3c — Upload & Override */}
            {!isLoading && step === "upload" && (
              <div style={{ flex: 1, minHeight: 0, padding: "80px 36px 32px 36px", display: "flex", flexDirection: "column" }}>
                <UploadVerificationStep onBack={() => router.back()} onCancel={handleClose} onOverrideMismatch={() => navigate({ hasDisparity: null, hasOverridden: "true", step: activeScenarioId === "agent-4" ? "intermediaryInformation" : "information" })} />
              </div>
            )}

            {/* Step 4a — Compliance */}
            {!isLoading && step === "compliance" && (
              <div style={{ flex: 1, minHeight: 0, padding: "80px 36px 32px 36px", display: "flex", flexDirection: "column", overflowY: "auto" }}>
                <ComplianceReferralStep onViewCaseDetails={handleClose} onSaveAndExit={onSaveAndExit} />
              </div>
            )}

            {/* Step 4b — Success */}
            {!isLoading && step === "success" && (
              <div style={{ flex: 1, minHeight: 0, padding: "80px 36px 32px 36px", display: "flex", flexDirection: "column", overflowY: "auto" }}>
                <OnboardingSuccessStep onBackToHome={handleClose} onProceedToInception={handleClose} onViewClientDetails={handleClose} />
              </div>
            )}

          </div>
        </div>
      </Dialog>

      {/* Broker-3 escalation modal — outside main Dialog */}
      <EscalationSentModal open={showEscalationModal} caseReference="CR/0041/25" onBackToClientOverview={handleClose} />

      {/* Insurance success modal — outside main Dialog */}
      <InsuranceSuccessModal open={showInsuranceSuccessModal} clientId="IB/0021/25" onContinue={handleClose} onViewDetail={handleClose} />
    </>
  );
}