import svgPaths from "./svg-iq2z3rxlgy";
import imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr3 from "figma:asset/3423e5c1b34d415619a5bd4b1c1f960cddefc606.png";
import imgPrimaryLogo22 from "figma:asset/7233c5139de07580f522e3ba67544bfb383ca777.png";
import imgEllipse14 from "figma:asset/26c566c1766854cccde5e1468729a43c074ac5f8.png";

function VuesaxBoldArrowDown() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/arrow-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-down">
          <path d={svgPaths.p3400b100} fill="var(--fill-0, #5C5C5C)" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] py-[4px] relative shrink-0" data-name="Masked Icon">
      <div className="relative shrink-0 size-[14px]" data-name="<vuesax>">
        <VuesaxBoldArrowDown />
      </div>
    </div>
  );
}

function Base() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="font-['My_Font:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#2e2e2e] text-[16px] whitespace-nowrap">Today</p>
      <MaskedIcon />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Leadway_Heavy:Regular','Noto_Sans:Medium',sans-serif] leading-[1.3] relative shrink-0 text-[#0a0a0a] text-[32px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Welcome back, Pascal
      </p>
      <div className="relative rounded-[4px] shrink-0" data-name="<Button>">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit]">
          <Base />
        </div>
        <div aria-hidden="true" className="absolute border border-[#5c5c5c] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#242424] text-[18px] w-full">Team Metrics</p>
    </div>
  );
}

function Base1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="font-['My_Font:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#ff6b22] text-[16px] whitespace-nowrap">View All</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="CardHeader">
        <Content />
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="<Button>">
          <Base1 />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Content">
      <p className="font-['My_Font:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#242424] text-[16px] w-full">Quote Converted</p>
    </div>
  );
}

function Trend1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Trend">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="<vuesax>">
        <div className="h-[8px] relative shrink-0 w-[12px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
            <path d={svgPaths.p47bc300} fill="var(--fill-0, #13A47C)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Leadway_Bold:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#13a47c] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">0%</p>
      </div>
    </div>
  );
}

function TrendValue() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[8px] relative shrink-0" data-name="Trend value">
      <Trend1 />
    </div>
  );
}

function Trend() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Trend">
      <TrendValue />
    </div>
  );
}

function Metrics() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Metrics">
      <p className="font-['Leadway_Heavy:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#242424] text-[32px] whitespace-nowrap">121</p>
      <Trend />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative w-full">
        <Metrics />
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Content">
      <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#242424] text-[16px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Loss Ratio
      </p>
    </div>
  );
}

function Trend3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Trend">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="<vuesax>">
        <div className="h-[8px] relative shrink-0 w-[12px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
            <path d={svgPaths.p17213180} fill="var(--fill-0, #FF2C2C)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Leadway_Bold:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff2c2c] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">0%</p>
      </div>
    </div>
  );
}

function TrendValue1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[8px] relative shrink-0" data-name="Trend value">
      <Trend3 />
    </div>
  );
}

function Trend2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Trend">
      <TrendValue1 />
    </div>
  );
}

function Metrics1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Metrics">
      <p className="font-['Leadway_Heavy:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#242424] text-[32px] whitespace-nowrap">5%</p>
      <Trend2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative w-full">
        <Metrics1 />
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Content">
      <p className="font-['My_Font:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#242424] text-[16px] w-full">Claims Paid</p>
    </div>
  );
}

function Trend5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Trend">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="<vuesax>">
        <div className="h-[8px] relative shrink-0 w-[12px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
            <path d={svgPaths.p47bc300} fill="var(--fill-0, #13A47C)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Leadway_Bold:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#13a47c] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">0%</p>
      </div>
    </div>
  );
}

function TrendValue2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Trend value">
      <Trend5 />
    </div>
  );
}

function Trend4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[8px] relative shrink-0" data-name="Trend">
      <TrendValue2 />
    </div>
  );
}

function Metrics2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Metrics">
      <p className="font-['Leadway_Heavy:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#242424] text-[32px] whitespace-nowrap">N214m</p>
      <Trend4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative w-full">
        <Metrics2 />
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Content">
      <p className="font-['My_Font:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#242424] text-[16px] w-full">Policy Renewals</p>
    </div>
  );
}

function Trend7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Trend">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="<vuesax>">
        <div className="h-[8px] relative shrink-0 w-[12px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
            <path d={svgPaths.p47bc300} fill="var(--fill-0, #13A47C)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Leadway_Bold:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#13a47c] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">0%</p>
      </div>
    </div>
  );
}

function TrendValue3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[8px] relative shrink-0" data-name="Trend value">
      <Trend7 />
    </div>
  );
}

function Trend6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Trend">
      <TrendValue3 />
    </div>
  );
}

function Metrics3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Metrics">
      <p className="font-['Leadway_Heavy:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#242424] text-[32px] whitespace-nowrap">218</p>
      <Trend6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative w-full">
        <Metrics3 />
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Content">
      <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#242424] text-[16px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        New Business Incepted
      </p>
    </div>
  );
}

function Trend9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Trend">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="<vuesax>">
        <div className="h-[8px] relative shrink-0 w-[12px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
            <path d={svgPaths.p17213180} fill="var(--fill-0, #FF2C2C)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Leadway_Bold:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff2c2c] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">0%</p>
      </div>
    </div>
  );
}

function TrendValue4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[8px] relative shrink-0" data-name="Trend value">
      <Trend9 />
    </div>
  );
}

function Trend8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Trend">
      <TrendValue4 />
    </div>
  );
}

function Metrics4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Metrics">
      <p className="font-['Leadway_Heavy:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#242424] text-[32px] whitespace-nowrap">72</p>
      <Trend8 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative w-full">
        <Metrics4 />
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Content">
      <p className="font-['My_Font:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#242424] text-[16px] w-full">Premium Collected</p>
    </div>
  );
}

function Trend11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Trend">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="<vuesax>">
        <div className="h-[8px] relative shrink-0 w-[12px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
            <path d={svgPaths.p47bc300} fill="var(--fill-0, #13A47C)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Leadway_Bold:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#13a47c] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">0%</p>
      </div>
    </div>
  );
}

function TrendValue5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Trend value">
      <Trend11 />
    </div>
  );
}

function Trend10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[8px] relative shrink-0" data-name="Trend">
      <TrendValue5 />
    </div>
  );
}

function Metrics5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Metrics">
      <p className="font-['Leadway_Heavy:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#242424] text-[32px] whitespace-nowrap">N214m</p>
      <Trend10 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative w-full">
        <Metrics5 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full">
      <div className="bg-white col-1 content-stretch flex flex-col gap-[20px] items-start p-[20px] relative rounded-[12px] row-1 self-start shrink-0 w-[352px]" data-name="CardMetric">
        <div className="relative shrink-0 w-full" data-name="CardHeader">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
            <Content1 />
          </div>
        </div>
        <Container1 />
      </div>
      <div className="bg-white col-3 content-stretch flex flex-col gap-[20px] items-start p-[20px] relative rounded-[12px] row-2 self-start shrink-0 w-[352px]" data-name="CardMetric">
        <div className="relative shrink-0 w-full" data-name="CardHeader">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
            <Content2 />
          </div>
        </div>
        <Container2 />
      </div>
      <div className="bg-white col-2 content-stretch flex flex-col gap-[20px] items-start p-[20px] relative rounded-[12px] row-2 self-start shrink-0 w-[352px]" data-name="CardMetric">
        <div className="relative shrink-0 w-full" data-name="CardHeader">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
            <Content3 />
          </div>
        </div>
        <Container3 />
      </div>
      <div className="bg-white col-2 content-stretch flex flex-col gap-[20px] items-start p-[20px] relative rounded-[12px] row-1 self-start shrink-0 w-[352px]" data-name="CardMetric">
        <div className="relative shrink-0 w-full" data-name="CardHeader">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
            <Content4 />
          </div>
        </div>
        <Container4 />
      </div>
      <div className="bg-white col-3 content-stretch flex flex-col gap-[20px] items-start p-[20px] relative rounded-[12px] row-1 self-start shrink-0 w-[352px]" data-name="CardMetric">
        <div className="relative shrink-0 w-full" data-name="CardHeader">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
            <Content5 />
          </div>
        </div>
        <Container5 />
      </div>
      <div className="bg-white col-1 content-stretch flex flex-col gap-[20px] items-start p-[20px] relative rounded-[12px] row-2 self-start shrink-0 w-[352px]" data-name="CardMetric">
        <div className="relative shrink-0 w-full" data-name="CardHeader">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
            <Content6 />
          </div>
        </div>
        <Container6 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Container />
      <Frame4 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#242424] text-[18px] w-full">{`Priority Task & Workflows`}</p>
    </div>
  );
}

function Base2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#ff6b22] text-[14px] whitespace-nowrap">View All</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #2E2E2E)" strokeWidth="0.666667" />
          <path d={svgPaths.p1ecf4980} id="Vector_2" stroke="var(--stroke-0, #2E2E2E)" strokeWidth="0.666667" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center pl-[12px] pr-[4px] py-[12px] relative shrink-0" data-name="Icon">
      <Icon1 />
    </div>
  );
}

function Input() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-full items-center p-[8px] relative">
          <p className="font-['My_Font:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#898e99] text-[14px] whitespace-nowrap">Search...</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(240,241,242,0.5)] content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative rounded-[8px]" data-name="Container">
      <Icon />
      <Input />
    </div>
  );
}

function Queries() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-[265px]" data-name="Queries">
      <Container8 />
    </div>
  );
}

function VuesaxOutlineFilter() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/filter">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="filter">
          <path d={svgPaths.p12b30880} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <path d={svgPaths.p2a692680} fill="var(--fill-0, #2E2E2E)" id="Vector_2" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon1() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] py-[4px] relative shrink-0" data-name="Masked Icon">
      <div className="relative shrink-0 size-[14px]" data-name="<vuesax>">
        <VuesaxOutlineFilter />
      </div>
    </div>
  );
}

function Base3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <MaskedIcon1 />
      <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2e2e2e] text-[14px] whitespace-nowrap">Filter</p>
    </div>
  );
}

function VuesaxOutlineArrowDown() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/arrow-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-down">
          <path d={svgPaths.p2e2ba4b0} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon2() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] py-[4px] relative shrink-0" data-name="Masked Icon">
      <div className="relative shrink-0 size-[14px]" data-name="<vuesax>">
        <VuesaxOutlineArrowDown />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip p-[8px] relative rounded-[4px] shrink-0 w-[90px]" data-name="Button">
      <Base3 />
      <MaskedIcon2 />
    </div>
  );
}

function VuesaxOutlineSort() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/sort">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="sort">
          <path d={svgPaths.p36e6fe00} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <path d={svgPaths.p28482d80} fill="var(--fill-0, #2E2E2E)" id="Vector_2" />
          <path d={svgPaths.p1f27cf00} fill="var(--fill-0, #2E2E2E)" id="Vector_3" />
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon3() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] py-[4px] relative shrink-0" data-name="Masked Icon">
      <div className="relative shrink-0 size-[14px]" data-name="<vuesax>">
        <VuesaxOutlineSort />
      </div>
    </div>
  );
}

function Base4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Base">
      <MaskedIcon3 />
      <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#333] text-[14px] whitespace-nowrap">Sort</p>
    </div>
  );
}

function VuesaxOutlineArrowDown1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/arrow-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-down">
          <path d={svgPaths.p2e2ba4b0} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon4() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] py-[4px] relative shrink-0" data-name="Masked Icon">
      <div className="relative shrink-0 size-[14px]" data-name="<vuesax>">
        <VuesaxOutlineArrowDown1 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip p-[8px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Button">
      <Base4 />
      <MaskedIcon4 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Actions">
      <Button />
      <Button1 />
    </div>
  );
}

function TableHeaderContent() {
  return <div className="flex-[1_0_0] h-[34px] min-h-px min-w-px" data-name="TableHeaderContent" />;
}

function Box() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-90321</p>
      </div>
    </div>
  );
}

function Box1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e82828] text-[14px] whitespace-nowrap">URGENT</p>
      </div>
    </div>
  );
}

function Box2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">{`Medical Review `}</p>
      </div>
    </div>
  );
}

function Box3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Balogun Mike</p>
      </div>
    </div>
  );
}

function Typography() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[24px] px-[6px] relative shrink-0" data-name="Typography">
      <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[12px] relative shrink-0 text-[#fc8514] text-[12px] tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        In Review
      </p>
    </div>
  );
}

function Box4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="bg-[#fff0e9] content-stretch flex items-center max-h-[24px] min-h-[24px] overflow-clip px-[4px] py-[2px] relative rounded-[100px] shrink-0" data-name="Size=Small, Color=Primary, State=Enabled, Variant=Filled">
        <Typography />
      </div>
    </div>
  );
}

function Box5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">2h</p>
      </div>
    </div>
  );
}

function VuesaxOutlineMore() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more">
          <path d={svgPaths.pb2b2900} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <path d={svgPaths.p23759340} fill="var(--fill-0, #2E2E2E)" id="Vector_2" />
          <path d={svgPaths.p2bba3a00} fill="var(--fill-0, #2E2E2E)" id="Vector_3" />
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Box6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore />
      </div>
    </div>
  );
}

function RowData() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="RowData">
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[112px]" data-name="Cell #1">
        <Box />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[96px]" data-name="Cell #2">
        <Box1 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[148px]" data-name="Cell #3">
        <Box2 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[140px]" data-name="Cell #4">
        <Box3 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[4px] relative w-full">
            <Box4 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[80px]" data-name="Cell #6">
        <Box5 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[4px] relative shrink-0 w-[82px]" data-name="<TableCell>">
        <Box6 />
      </div>
    </div>
  );
}

function Box7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-90322</p>
      </div>
    </div>
  );
}

function Box8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e82828] text-[14px] whitespace-nowrap">URGENT</p>
      </div>
    </div>
  );
}

function Box9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Clinical Trial</p>
      </div>
    </div>
  );
}

function Box10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Smith Jennifer</p>
      </div>
    </div>
  );
}

function Typography1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[24px] px-[6px] relative shrink-0" data-name="Typography">
      <p className="font-['My_Font:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#fc8514] text-[12px] tracking-[0.15px] whitespace-nowrap">Pending</p>
    </div>
  );
}

function Box11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="bg-[#fff0e9] content-stretch flex items-center max-h-[24px] min-h-[24px] overflow-clip px-[4px] py-[2px] relative rounded-[100px] shrink-0" data-name="Size=Small, Color=Warning, State=Enabled, Variant=Filled">
        <Typography1 />
      </div>
    </div>
  );
}

function Box12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">1h</p>
      </div>
    </div>
  );
}

function VuesaxOutlineMore1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more">
          <path d={svgPaths.pb2b2900} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <path d={svgPaths.p23759340} fill="var(--fill-0, #2E2E2E)" id="Vector_2" />
          <path d={svgPaths.p2bba3a00} fill="var(--fill-0, #2E2E2E)" id="Vector_3" />
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Box13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore1 />
      </div>
    </div>
  );
}

function RowData1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="RowData">
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[112px]" data-name="Cell #1">
        <Box7 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[96px]" data-name="Cell #2">
        <Box8 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[148px]" data-name="Cell #3">
        <Box9 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[140px]" data-name="Cell #4">
        <Box10 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[4px] relative w-full">
            <Box11 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[80px]" data-name="Cell #6">
        <Box12 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[4px] relative shrink-0 w-[82px]" data-name="<TableCell>">
        <Box13 />
      </div>
    </div>
  );
}

function Box14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-90323</p>
      </div>
    </div>
  );
}

function Box15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e82828] text-[14px] whitespace-nowrap">HIGH</p>
      </div>
    </div>
  );
}

function Box16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Patient Feedback</p>
      </div>
    </div>
  );
}

function Box17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Nguyen Alex</p>
      </div>
    </div>
  );
}

function Typography2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[24px] px-[6px] relative shrink-0" data-name="Typography">
      <p className="font-['My_Font:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#ff2c2c] text-[12px] tracking-[0.15px] whitespace-nowrap">Escalated</p>
    </div>
  );
}

function Box18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="bg-[#ffeaea] content-stretch flex items-center max-h-[24px] min-h-[24px] overflow-clip px-[4px] py-[2px] relative rounded-[100px] shrink-0" data-name="Size=Small, Color=Error, State=Enabled, Variant=Filled">
        <Typography2 />
      </div>
    </div>
  );
}

function Box19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">5h</p>
      </div>
    </div>
  );
}

function VuesaxOutlineMore2() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more">
          <path d={svgPaths.pb2b2900} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <path d={svgPaths.p23759340} fill="var(--fill-0, #2E2E2E)" id="Vector_2" />
          <path d={svgPaths.p2bba3a00} fill="var(--fill-0, #2E2E2E)" id="Vector_3" />
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Box20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore2 />
      </div>
    </div>
  );
}

function RowData2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="RowData">
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[112px]" data-name="Cell #1">
        <Box14 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[96px]" data-name="Cell #2">
        <Box15 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[148px]" data-name="Cell #3">
        <Box16 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[140px]" data-name="Cell #4">
        <Box17 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[4px] relative w-full">
            <Box18 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[80px]" data-name="Cell #6">
        <Box19 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[4px] relative shrink-0 w-[82px]" data-name="<TableCell>">
        <Box20 />
      </div>
    </div>
  );
}

function Box21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-90324</p>
      </div>
    </div>
  );
}

function Box22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fc8514] text-[14px] whitespace-nowrap">NORMAL</p>
      </div>
    </div>
  );
}

function Box23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Patient Feedback</p>
      </div>
    </div>
  );
}

function Box24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Johnson Emily</p>
      </div>
    </div>
  );
}

function Typography3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[24px] px-[6px] relative shrink-0" data-name="Typography">
      <p className="font-['My_Font:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#4358cf] text-[12px] tracking-[0.15px] whitespace-nowrap">New</p>
    </div>
  );
}

function Box25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="bg-[#edeffc] content-stretch flex items-center max-h-[24px] min-h-[24px] overflow-clip px-[4px] py-[2px] relative rounded-[100px] shrink-0" data-name="Size=Small, Color=Info, State=Enabled, Variant=Filled">
        <Typography3 />
      </div>
    </div>
  );
}

function Box26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">1day</p>
      </div>
    </div>
  );
}

function VuesaxOutlineMore3() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more">
          <path d={svgPaths.pb2b2900} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <path d={svgPaths.p23759340} fill="var(--fill-0, #2E2E2E)" id="Vector_2" />
          <path d={svgPaths.p2bba3a00} fill="var(--fill-0, #2E2E2E)" id="Vector_3" />
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Box27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore3 />
      </div>
    </div>
  );
}

function RowData3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="RowData">
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[112px]" data-name="Cell #1">
        <Box21 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[96px]" data-name="Cell #2">
        <Box22 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[148px]" data-name="Cell #3">
        <Box23 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[140px]" data-name="Cell #4">
        <Box24 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[4px] relative w-full">
            <Box25 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[80px]" data-name="Cell #6">
        <Box26 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[4px] relative shrink-0 w-[82px]" data-name="<TableCell>">
        <Box27 />
      </div>
    </div>
  );
}

function Box28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-90325</p>
      </div>
    </div>
  );
}

function Box29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">LOW</p>
      </div>
    </div>
  );
}

function Box30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Patient Feedback</p>
      </div>
    </div>
  );
}

function Box31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Martinez Jose</p>
      </div>
    </div>
  );
}

function Typography4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[24px] px-[6px] relative shrink-0" data-name="Typography">
      <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[12px] relative shrink-0 text-[#119571] text-[12px] tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        In progress
      </p>
    </div>
  );
}

function Box32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="bg-[#e7f6f2] content-stretch flex items-center max-h-[24px] min-h-[24px] overflow-clip px-[4px] py-[3px] relative rounded-[100px] shrink-0" data-name="Size=Small, Color=Success, State=Enabled, Variant=Filled">
        <Typography4 />
      </div>
    </div>
  );
}

function Box33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">2weeks</p>
      </div>
    </div>
  );
}

function VuesaxOutlineMore4() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more">
          <path d={svgPaths.pb2b2900} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <path d={svgPaths.p23759340} fill="var(--fill-0, #2E2E2E)" id="Vector_2" />
          <path d={svgPaths.p2bba3a00} fill="var(--fill-0, #2E2E2E)" id="Vector_3" />
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Box34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore4 />
      </div>
    </div>
  );
}

function RowData4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="RowData">
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[112px]" data-name="Cell #1">
        <Box28 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[96px]" data-name="Cell #2">
        <Box29 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[148px]" data-name="Cell #3">
        <Box30 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[140px]" data-name="Cell #4">
        <Box31 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[4px] relative w-full">
            <Box32 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[80px]" data-name="Cell #6">
        <Box33 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[4px] relative shrink-0 w-[82px]" data-name="<TableCell>">
        <Box34 />
      </div>
    </div>
  );
}

function Box35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-90326</p>
      </div>
    </div>
  );
}

function Box36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fc8514] text-[14px] whitespace-nowrap">NORMAL</p>
      </div>
    </div>
  );
}

function Box37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Patient Feedback</p>
      </div>
    </div>
  );
}

function Box38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Chen Wei</p>
      </div>
    </div>
  );
}

function Typography5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[24px] px-[6px] relative shrink-0" data-name="Typography">
      <p className="font-['My_Font:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#ff2c2c] text-[12px] tracking-[0.15px] whitespace-nowrap">Escalated</p>
    </div>
  );
}

function Box39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="bg-[#ffeaea] content-stretch flex items-center max-h-[24px] min-h-[24px] overflow-clip px-[4px] py-[2px] relative rounded-[100px] shrink-0" data-name="Size=Small, Color=Error, State=Enabled, Variant=Filled">
        <Typography5 />
      </div>
    </div>
  );
}

function Box40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">2days</p>
      </div>
    </div>
  );
}

function VuesaxOutlineMore5() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more">
          <path d={svgPaths.pb2b2900} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <path d={svgPaths.p23759340} fill="var(--fill-0, #2E2E2E)" id="Vector_2" />
          <path d={svgPaths.p2bba3a00} fill="var(--fill-0, #2E2E2E)" id="Vector_3" />
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Box41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore5 />
      </div>
    </div>
  );
}

function RowData5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="RowData">
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[112px]" data-name="Cell #1">
        <Box35 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[96px]" data-name="Cell #2">
        <Box36 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[148px]" data-name="Cell #3">
        <Box37 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[140px]" data-name="Cell #4">
        <Box38 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[4px] relative w-full">
            <Box39 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[80px]" data-name="Cell #6">
        <Box40 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[4px] relative shrink-0 w-[82px]" data-name="<TableCell>">
        <Box41 />
      </div>
    </div>
  );
}

function Box42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-90327</p>
      </div>
    </div>
  );
}

function Box43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">LOW</p>
      </div>
    </div>
  );
}

function Box44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Patient Feedback</p>
      </div>
    </div>
  );
}

function Box45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Garcia Mia</p>
      </div>
    </div>
  );
}

function Typography6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[24px] px-[6px] relative shrink-0" data-name="Typography">
      <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4358cf] text-[14px] whitespace-nowrap">New</p>
    </div>
  );
}

function Box46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="bg-[#edeffc] content-stretch flex items-center max-h-[24px] min-h-[24px] overflow-clip px-[4px] py-[3px] relative rounded-[100px] shrink-0" data-name="Size=Small, Color=Info, State=Enabled, Variant=Filled">
        <Typography6 />
      </div>
    </div>
  );
}

function Box47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">1week</p>
      </div>
    </div>
  );
}

function VuesaxOutlineMore6() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more">
          <path d={svgPaths.pb2b2900} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <path d={svgPaths.p23759340} fill="var(--fill-0, #2E2E2E)" id="Vector_2" />
          <path d={svgPaths.p2bba3a00} fill="var(--fill-0, #2E2E2E)" id="Vector_3" />
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Box48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore6 />
      </div>
    </div>
  );
}

function RowData6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="RowData">
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[112px]" data-name="Cell #1">
        <Box42 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[96px]" data-name="Cell #2">
        <Box43 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[148px]" data-name="Cell #3">
        <Box44 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[140px]" data-name="Cell #4">
        <Box45 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[4px] relative w-full">
            <Box46 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[80px]" data-name="Cell #6">
        <Box47 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[4px] relative shrink-0 w-[82px]" data-name="<TableCell>">
        <Box48 />
      </div>
    </div>
  );
}

function Box49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-90328</p>
      </div>
    </div>
  );
}

function Box50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">LOW</p>
      </div>
    </div>
  );
}

function Box51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Patient Feedback</p>
      </div>
    </div>
  );
}

function Box52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Patel Riya</p>
      </div>
    </div>
  );
}

function Typography7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[24px] px-[6px] relative shrink-0" data-name="Typography">
      <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4358cf] text-[14px] whitespace-nowrap">New</p>
    </div>
  );
}

function Box53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="bg-[#edeffc] content-stretch flex items-center max-h-[24px] min-h-[24px] overflow-clip px-[4px] py-[3px] relative rounded-[100px] shrink-0" data-name="Size=Small, Color=Info, State=Enabled, Variant=Filled">
        <Typography7 />
      </div>
    </div>
  );
}

function Box54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">3weeks</p>
      </div>
    </div>
  );
}

function VuesaxOutlineMore7() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more">
          <path d={svgPaths.pb2b2900} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <path d={svgPaths.p23759340} fill="var(--fill-0, #2E2E2E)" id="Vector_2" />
          <path d={svgPaths.p2bba3a00} fill="var(--fill-0, #2E2E2E)" id="Vector_3" />
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Box55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore7 />
      </div>
    </div>
  );
}

function RowData7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="RowData">
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[112px]" data-name="Cell #1">
        <Box49 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[96px]" data-name="Cell #2">
        <Box50 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[148px]" data-name="Cell #3">
        <Box51 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[140px]" data-name="Cell #4">
        <Box52 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[4px] relative w-full">
            <Box53 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[80px]" data-name="Cell #6">
        <Box54 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[4px] relative shrink-0 w-[82px]" data-name="<TableCell>">
        <Box55 />
      </div>
    </div>
  );
}

function Box56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-90329</p>
      </div>
    </div>
  );
}

function Box57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">LOW</p>
      </div>
    </div>
  );
}

function Box58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Patient Feedback</p>
      </div>
    </div>
  );
}

function Box59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Davis Jamal</p>
      </div>
    </div>
  );
}

function Typography8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[24px] px-[6px] relative shrink-0" data-name="Typography">
      <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4358cf] text-[14px] whitespace-nowrap">New</p>
    </div>
  );
}

function Box60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="bg-[#edeffc] content-stretch flex items-center max-h-[24px] min-h-[24px] overflow-clip px-[4px] py-[3px] relative rounded-[100px] shrink-0" data-name="Size=Small, Color=Info, State=Enabled, Variant=Filled">
        <Typography8 />
      </div>
    </div>
  );
}

function Box61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">1week</p>
      </div>
    </div>
  );
}

function VuesaxOutlineMore8() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more">
          <path d={svgPaths.pb2b2900} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <path d={svgPaths.p23759340} fill="var(--fill-0, #2E2E2E)" id="Vector_2" />
          <path d={svgPaths.p2bba3a00} fill="var(--fill-0, #2E2E2E)" id="Vector_3" />
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Box62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore8 />
      </div>
    </div>
  );
}

function RowData8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="RowData">
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[112px]" data-name="Cell #1">
        <Box56 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[96px]" data-name="Cell #2">
        <Box57 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[148px]" data-name="Cell #3">
        <Box58 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[140px]" data-name="Cell #4">
        <Box59 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[4px] relative w-full">
            <Box60 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[80px]" data-name="Cell #6">
        <Box61 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[4px] relative shrink-0 w-[82px]" data-name="<TableCell>">
        <Box62 />
      </div>
    </div>
  );
}

function Box63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-90330</p>
      </div>
    </div>
  );
}

function Box64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">LOW</p>
      </div>
    </div>
  );
}

function Box65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Patient Feedback</p>
      </div>
    </div>
  );
}

function Box66() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Davis Jamal</p>
      </div>
    </div>
  );
}

function Typography9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[24px] px-[6px] relative shrink-0" data-name="Typography">
      <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4358cf] text-[14px] whitespace-nowrap">New</p>
    </div>
  );
}

function Box67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="bg-[#edeffc] content-stretch flex items-center max-h-[24px] min-h-[24px] overflow-clip px-[4px] py-[3px] relative rounded-[100px] shrink-0" data-name="Size=Small, Color=Info, State=Enabled, Variant=Filled">
        <Typography9 />
      </div>
    </div>
  );
}

function Box68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body3, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">1week</p>
      </div>
    </div>
  );
}

function VuesaxOutlineMore9() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more">
          <path d={svgPaths.pb2b2900} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <path d={svgPaths.p23759340} fill="var(--fill-0, #2E2E2E)" id="Vector_2" />
          <path d={svgPaths.p2bba3a00} fill="var(--fill-0, #2E2E2E)" id="Vector_3" />
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Box69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore9 />
      </div>
    </div>
  );
}

function RowData9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="RowData">
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[112px]" data-name="Cell #1">
        <Box63 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[96px]" data-name="Cell #2">
        <Box64 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[148px]" data-name="Cell #3">
        <Box65 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[140px]" data-name="Cell #4">
        <Box66 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[4px] relative w-full">
            <Box67 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[80px]" data-name="Cell #6">
        <Box68 />
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[16px] py-[4px] relative shrink-0 w-[82px]" data-name="<TableCell>">
        <Box69 />
      </div>
    </div>
  );
}

function VuesaxBoldArrowDown1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/arrow-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-down">
          <path d={svgPaths.p3eb43080} fill="var(--fill-0, #767676)" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Page() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Page">
      <p className="col-1 font-['Leadway_Book:Regular',sans-serif] leading-[18px] ml-0 mt-0 not-italic relative row-1 text-[#242424] text-[12px] whitespace-nowrap">10</p>
      <div className="col-1 ml-[16px] mt-px relative row-1 size-[16px]" data-name="<vuesax>">
        <VuesaxBoldArrowDown1 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Leadway_Book:Regular','Noto_Sans:Medium',sans-serif] leading-[18px] relative shrink-0 text-[#767676] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Rows per page:
      </p>
      <Page />
    </div>
  );
}

function VuesaxBoldPrevious() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/previous">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="previous">
          <g id="Vector" opacity="0" />
          <path d={svgPaths.p2dea6700} fill="var(--fill-0, #2E2E2E)" id="Vector_2" />
          <path d={svgPaths.pfa957f0} fill="var(--fill-0, #2E2E2E)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="absolute left-0 opacity-38 overflow-clip rounded-[4px] size-[26px] top-0" data-name="<ButtonBase>">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[16px] top-1/2" data-name="<vuesax>">
        <VuesaxBoldPrevious />
      </div>
    </div>
  );
}

function VuesaxOutlineArrowLeft() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/arrow-left">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-left">
          <path d={svgPaths.p356fb120} fill="var(--fill-0, #242424)" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function ButtonBase1() {
  return (
    <div className="absolute left-0 opacity-38 overflow-clip rounded-[4px] size-[26px] top-0" data-name="<ButtonBase>">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[16px] top-1/2" data-name="<vuesax>">
        <VuesaxOutlineArrowLeft />
      </div>
    </div>
  );
}

function ButtonBase2() {
  return (
    <div className="absolute bg-[#242424] left-0 overflow-clip rounded-[4px] size-[26px] top-0" data-name="<ButtonBase>">
      <p className="absolute font-['My_Font:Regular',sans-serif] inset-[11.54%_38.46%] leading-[20px] not-italic text-[14px] text-center text-white whitespace-nowrap">1</p>
    </div>
  );
}

function ButtonBase3() {
  return (
    <div className="absolute left-0 overflow-clip rounded-[4px] size-[26px] top-0" data-name="<ButtonBase>">
      <p className="absolute font-['My_Font:Regular',sans-serif] inset-[11.54%_38.46%] leading-[20px] not-italic text-[#242424] text-[14px] text-center whitespace-nowrap">2</p>
    </div>
  );
}

function ButtonBase4() {
  return (
    <div className="absolute left-0 overflow-clip rounded-[4px] size-[26px] top-0" data-name="<ButtonBase>">
      <p className="absolute font-['My_Font:Regular',sans-serif] inset-[11.54%_38.46%] leading-[20px] not-italic text-[#242424] text-[14px] text-center whitespace-nowrap">3</p>
    </div>
  );
}

function ButtonBase5() {
  return (
    <div className="absolute left-0 overflow-clip rounded-[4px] size-[26px] top-0" data-name="<ButtonBase>">
      <p className="absolute font-['My_Font:Regular',sans-serif] inset-[11.54%_38.46%] leading-[20px] not-italic text-[#242424] text-[14px] text-center whitespace-nowrap">4</p>
    </div>
  );
}

function ButtonBase6() {
  return (
    <div className="absolute left-0 overflow-clip rounded-[4px] size-[26px] top-0" data-name="<ButtonBase>">
      <p className="absolute font-['My_Font:Regular',sans-serif] inset-[11.54%_38.46%] leading-[20px] not-italic text-[#242424] text-[14px] text-center whitespace-nowrap">5</p>
    </div>
  );
}

function ButtonBase7() {
  return (
    <div className="absolute left-0 overflow-clip rounded-[4px] size-[26px] top-0" data-name="<ButtonBase>">
      <p className="absolute font-['My_Font:Regular',sans-serif] inset-[11.54%_38.46%] leading-[20px] not-italic text-[#242424] text-[14px] text-center whitespace-nowrap">6</p>
    </div>
  );
}

function ButtonBase8() {
  return (
    <div className="absolute left-0 overflow-clip rounded-[4px] size-[26px] top-0" data-name="<ButtonBase>">
      <p className="absolute font-['My_Font:Regular',sans-serif] inset-[11.54%_38.46%] leading-[20px] not-italic text-[#242424] text-[14px] text-center whitespace-nowrap">7</p>
    </div>
  );
}

function VuesaxOutlineArrowRight() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p31093e80} fill="var(--fill-0, #242424)" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxBoldNext() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/next">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="next">
          <g id="Vector" opacity="0" />
          <path d={svgPaths.p1a5b5380} fill="var(--fill-0, #2E2E2E)" id="Vector_2" />
          <path d={svgPaths.p2a9ac200} fill="var(--fill-0, #2E2E2E)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function TableContent() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="TableContent">
      <div className="bg-[rgba(240,241,242,0.5)] content-stretch flex items-center relative shrink-0 w-full" data-name="<TableHeadRow>">
        <TableHeaderContent />
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="<TableCellRow>">
        <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
        <RowData />
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="<TableCellRow>">
        <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
        <RowData1 />
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="<TableCellRow>">
        <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
        <RowData2 />
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="<TableCellRow>">
        <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
        <RowData3 />
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="<TableCellRow>">
        <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
        <RowData4 />
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="<TableCellRow>">
        <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
        <RowData5 />
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="<TableCellRow>">
        <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
        <RowData6 />
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="<TableCellRow>">
        <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
        <RowData7 />
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="<TableCellRow>">
        <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
        <RowData8 />
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="<TableCellRow>">
        <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
        <RowData9 />
      </div>
      <div className="content-stretch flex gap-[32px] items-center justify-end py-[4px] relative shrink-0 w-full" data-name="<TableFooter>">
        <Container9 />
        <div className="content-stretch flex gap-[6px] items-start overflow-clip px-[6px] relative shrink-0" data-name="<Pagination>">
          <div className="overflow-clip relative shrink-0 size-[26px]" data-name="<PaginationItem>">
            <ButtonBase />
          </div>
          <div className="overflow-clip relative shrink-0 size-[26px]" data-name="<PaginationItem>">
            <ButtonBase1 />
          </div>
          <div className="overflow-clip relative shrink-0 size-[26px]" data-name="<PaginationItem>">
            <ButtonBase2 />
          </div>
          <div className="overflow-clip relative shrink-0 size-[26px]" data-name="<PaginationItem>">
            <ButtonBase3 />
          </div>
          <div className="overflow-clip relative shrink-0 size-[26px]" data-name="<PaginationItem>">
            <ButtonBase4 />
          </div>
          <div className="overflow-clip relative shrink-0 size-[26px]" data-name="<PaginationItem>">
            <ButtonBase5 />
          </div>
          <div className="overflow-clip relative shrink-0 size-[26px]" data-name="<PaginationItem>">
            <ButtonBase6 />
          </div>
          <div className="overflow-clip relative shrink-0 size-[26px]" data-name="<PaginationItem>">
            <ButtonBase7 />
          </div>
          <div className="overflow-clip relative shrink-0 size-[26px]" data-name="<PaginationItem>">
            <ButtonBase8 />
          </div>
          <div className="overflow-clip relative shrink-0 size-[26px]" data-name="<PaginationItem>">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[16px] top-1/2" data-name="<vuesax>">
              <VuesaxOutlineArrowRight />
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[26px]" data-name="<PaginationItem>">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[16px] top-1/2" data-name="<vuesax>">
              <VuesaxBoldNext />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#242424] text-[18px] w-full">My Metrics</p>
    </div>
  );
}

function Base5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#ff6b22] text-[14px] whitespace-nowrap">View All</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="leading-[20px]">Avg. Processing Time</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#242424] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="leading-[1.5]">Target: 1h</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pr-[0.01px] relative w-full">
          <Container13 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Leadway_Bold:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] whitespace-nowrap">
        <p className="leading-[1.3]">2h</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <Container16 />
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(237,239,252,0.5)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[#edeffc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[13px] py-[9px] relative w-full">
        <Container12 />
        <Container15 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="leading-[20px]">Approval Rate</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#242424] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="leading-[1.5]">Target: 85%</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pr-[0.01px] relative w-full">
          <Container18 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Leadway_Bold:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] whitespace-nowrap">
        <p className="leading-[1.3]">91.4%</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <Container21 />
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(237,239,252,0.5)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[#edeffc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[13px] py-[9px] relative w-full">
        <Container17 />
        <Container20 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <OverlayBorder />
        <OverlayBorder1 />
      </div>
    </div>
  );
}

function PersonalMetrics() {
  return (
    <div className="backdrop-blur-[6px] bg-white relative rounded-[12px] shrink-0 w-full" data-name="Personal Metrics">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[21px] py-[25px] relative w-full">
        <div className="bg-white relative shrink-0 w-full" data-name="CardHeader">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
            <Content8 />
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0" data-name="Button">
              <Base5 />
            </div>
          </div>
        </div>
        <Container11 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] opacity-80 right-[24px] top-[24px]" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase w-[118.81px]">
        <p className="leading-[16px]">Daily Milestone</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[56px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-[61.19px]">
        <p className="leading-[32px]">12/15</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] opacity-80 right-[24px] top-[92px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-white w-[131.41px]">
        <p className="leading-[16px]">Cases processed today</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center left-[24px] px-px py-[9px] right-[24px] rounded-[8px] top-[124px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white w-[143.84px]">
        <p className="leading-[16px]">View Productivity Report</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#151515] h-[182px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Background+Shadow">
      <div className="absolute bg-[rgba(255,255,255,0.1)] blur-[20px] right-[-64px] rounded-[9999px] size-[128px] top-[-64px]" data-name="Overlay+Blur" />
      <Heading />
      <Container22 />
      <Container23 />
      <Button2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[304px]" data-name="Container">
      <PersonalMetrics />
      <BackgroundShadow />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_2px_1px_-1px_rgba(0,0,0,0.2)]" data-name="<Table-Element>">
        <div className="bg-white relative shrink-0 w-full" data-name="CardHeader">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
              <Content7 />
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0" data-name="Button">
                <Base2 />
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="TableToolbar">
          <div className="flex flex-row justify-end size-full">
            <div className="content-stretch flex gap-[16px] items-start justify-end px-[16px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="_Custom / Table / Toolbar">
                <Queries />
                <Actions />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="<Table-Atom>">
          <TableContent />
        </div>
      </div>
      <Container10 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[288px] px-[24px] py-[32px] top-[72px] w-[1152px]" data-name="Main">
      <Frame5 />
      <Frame3 />
      <Container7 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Link">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="<Link>">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="<Typography>">
          <p className="font-['My_Font:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#ff6b22] text-[16px] whitespace-nowrap">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #2E2E2E)" strokeWidth="0.666667" />
          <path d={svgPaths.p1ecf4980} id="Vector_2" stroke="var(--stroke-0, #2E2E2E)" strokeWidth="0.666667" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center pl-[12px] pr-[4px] py-[12px] relative shrink-0" data-name="Icon">
      <Icon3 />
    </div>
  );
}

function Input1() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-full items-center p-[8px] relative">
          <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[1.4] relative shrink-0 text-[#898e99] text-[14px] text-left whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
            Global search...
          </p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <button className="bg-[rgba(240,241,242,0.5)] content-stretch cursor-pointer flex items-center relative rounded-[24px] shrink-0 w-[320px]" data-name="Container">
      <Icon2 />
      <div className="flex flex-row items-center self-stretch">
        <Input1 />
      </div>
    </button>
  );
}

function VuesaxOutlineNotification() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/notification">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="notification">
          <path d={svgPaths.pd605480} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <path d={svgPaths.pf572b80} fill="var(--fill-0, #2E2E2E)" id="Vector_2" />
          <path d={svgPaths.p4c02580} fill="var(--fill-0, #2E2E2E)" id="Vector_3" />
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Notification() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative rounded-[8px] shrink-0" data-name="Notification">
      <div className="relative shrink-0 size-[20px]" data-name="<vuesax>">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <VuesaxOutlineNotification />
        </div>
      </div>
    </div>
  );
}

function VuesaxOutlineGlobal() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/global">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="global">
          <path d={svgPaths.p18f22980} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <path d={svgPaths.p21a59d00} fill="var(--fill-0, #2E2E2E)" id="Vector_2" />
          <path d={svgPaths.p226586f1} fill="var(--fill-0, #2E2E2E)" id="Vector_3" />
          <path d={svgPaths.p3ed3c880} fill="var(--fill-0, #2E2E2E)" id="Vector_4" />
          <path d={svgPaths.p65a8600} fill="var(--fill-0, #2E2E2E)" id="Vector_5" />
          <g id="Vector_6" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxOutlineArrowDown2() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/arrow-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-down">
          <path d={svgPaths.p2e2ba4b0} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[4px] h-[36px] items-center px-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="relative shrink-0 size-[20px]" data-name="<vuesax>">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <VuesaxOutlineGlobal />
        </div>
      </div>
      <div className="relative shrink-0 size-[14px]" data-name="<vuesax>">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <VuesaxOutlineArrowDown2 />
        </div>
      </div>
    </div>
  );
}

function VuesaxOutlineArrowDown3() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/arrow-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-down">
          <path d={svgPaths.p2e2ba4b0} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[40px]" data-name="Whisk_a5e8b23d0d6272e995e40a8aa46d6cf4dr 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[169.79%] left-[-104.28%] max-w-none top-[-15.22%] w-[313.22%]" src={imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr3} />
        </div>
      </div>
      <div className="relative shrink-0 size-[14px]" data-name="<vuesax>">
        <VuesaxOutlineArrowDown3 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Notification />
      <Button3 />
      <div className="bg-white content-stretch flex gap-[8px] items-center px-[8px] relative shrink-0" data-name="<Logo Variants>">
        <div className="flex h-[16px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[16px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1">
                  <line id="Line 1" stroke="var(--stroke-0, black)" x2="16" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame2 />
      </div>
    </div>
  );
}

function TopNavContent() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="TopNav Content">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 text-center whitespace-nowrap">
      <p className="font-['Leadway_Heavy:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[#151515] text-[18px]">LEADWAY</p>
      <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#ff6b22] text-[14px] tracking-[1px]">LIFE</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="h-[48px] relative shrink-0 w-[40px]" data-name="Whisk_a5e8b23d0d6272e995e40a8aa46d6cf4dr 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[169.79%] left-[-104.28%] max-w-none top-[-15.22%] w-[313.22%]" src={imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr3} />
        </div>
      </div>
      <Frame />
    </div>
  );
}

function Platform() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Platform">
      <div className="bg-white content-stretch flex gap-[8px] items-center relative shrink-0" data-name="<Logo Variants>">
        <div className="relative shrink-0 size-[48px]" data-name="Primary logo 2 2">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[440.66%] left-[-73.33%] max-w-none top-[-171.22%] w-[644.74%]" src={imgPrimaryLogo22} />
          </div>
        </div>
        <div className="flex h-[15px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[15px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 1">
                  <line id="Line 1" stroke="var(--stroke-0, black)" x2="15" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame1 />
      </div>
    </div>
  );
}

function VuesaxBoldStar() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="star">
          <path d={svgPaths.p23889b60} fill="var(--fill-0, #FF6B22)" id="Vector" />
          <path d={svgPaths.p20841b80} fill="var(--fill-0, #FF6B22)" id="Vector_2" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[12px] relative shrink-0" data-name="Left Content">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxBoldStar />
      </div>
    </div>
  );
}

function ListItemText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="font-['Leadway_Bold:Regular','Noto_Sans:Medium',sans-serif] leading-[1.4] relative shrink-0 text-[#ff6b22] text-[16px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Dashboard
      </p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative shrink-0 w-[260px]" data-name="Container">
      <LeftContent />
      <ListItemText />
    </div>
  );
}

function MinHeight() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function VuesaxBoldFrame() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="frame">
          <path d={svgPaths.p13d05a80} fill="var(--fill-0, #333333)" id="Vector" />
          <path d={svgPaths.pbb46500} fill="var(--fill-0, #333333)" id="Vector_2" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function LeftContent1() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[12px] relative shrink-0" data-name="Left Content">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxBoldFrame />
      </div>
    </div>
  );
}

function ListItemText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#242424] text-[16px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Client Management
      </p>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <LeftContent1 />
          <ListItemText1 />
        </div>
      </div>
    </div>
  );
}

function MinHeight1() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function VuesaxBoldDocumentText() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/document-text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="document-text">
          <path d={svgPaths.p396b9c00} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <path d={svgPaths.p64d0a80} fill="var(--fill-0, #333333)" id="Vector_2" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function LeftContent2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[12px] relative shrink-0" data-name="Left Content">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxBoldDocumentText />
      </div>
    </div>
  );
}

function ListItemText2() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0 w-[192px]" data-name="ListItem Text">
      <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#242424] text-[16px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Quotation Management
      </p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative shrink-0" data-name="Container">
      <LeftContent2 />
      <ListItemText2 />
    </div>
  );
}

function MinHeight2() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function VuesaxBoldFrame1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="frame">
          <path d={svgPaths.p13d05a80} fill="var(--fill-0, #333333)" id="Vector" />
          <path d={svgPaths.pbb46500} fill="var(--fill-0, #333333)" id="Vector_2" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function LeftContent3() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[12px] relative shrink-0" data-name="Left Content">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxBoldFrame1 />
      </div>
    </div>
  );
}

function ListItemText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#242424] text-[16px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        List item
      </p>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <LeftContent3 />
          <ListItemText3 />
        </div>
      </div>
    </div>
  );
}

function MinHeight3() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function VuesaxBoldFrame2() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="frame">
          <path d={svgPaths.p13d05a80} fill="var(--fill-0, #333333)" id="Vector" />
          <path d={svgPaths.pbb46500} fill="var(--fill-0, #333333)" id="Vector_2" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function LeftContent4() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[12px] relative shrink-0" data-name="Left Content">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxBoldFrame2 />
      </div>
    </div>
  );
}

function ListItemText4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#242424] text-[16px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        List item
      </p>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <LeftContent4 />
          <ListItemText4 />
        </div>
      </div>
    </div>
  );
}

function MinHeight4() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function VuesaxBoldFrame3() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="frame">
          <path d={svgPaths.p13d05a80} fill="var(--fill-0, #333333)" id="Vector" />
          <path d={svgPaths.pbb46500} fill="var(--fill-0, #333333)" id="Vector_2" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function LeftContent5() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[12px] relative shrink-0" data-name="Left Content">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxBoldFrame3 />
      </div>
    </div>
  );
}

function ListItemText5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#242424] text-[16px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        List item
      </p>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <LeftContent5 />
          <ListItemText5 />
        </div>
      </div>
    </div>
  );
}

function MinHeight5() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function VuesaxBoldFrame4() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="frame">
          <path d={svgPaths.p13d05a80} fill="var(--fill-0, #333333)" id="Vector" />
          <path d={svgPaths.pbb46500} fill="var(--fill-0, #333333)" id="Vector_2" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function LeftContent6() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[12px] relative shrink-0" data-name="Left Content">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxBoldFrame4 />
      </div>
    </div>
  );
}

function ListItemText6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#242424] text-[16px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        List item
      </p>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <LeftContent6 />
          <ListItemText6 />
        </div>
      </div>
    </div>
  );
}

function MinHeight6() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function MenuItem() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="MenuItem_1">
      <div className="bg-[#fff0e9] relative rounded-[12px] shrink-0 w-full" data-name="<ListItem>">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
          <Container26 />
          <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
            <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="flex-none scale-x-0 scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
                <MinHeight />
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 1">
                  <line id="Divider" stroke="var(--stroke-0, #D1D3D8)" x2="240" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#ffd1ba] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="<ListItem>">
        <Container27 />
        <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
          <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none scale-x-0 scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
              <MinHeight1 />
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 1">
                <line id="Divider" stroke="var(--stroke-0, #D1D3D8)" x2="240" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-[240px]" data-name="<ListItem>">
        <Container28 />
        <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
          <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none scale-x-0 scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
              <MinHeight2 />
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 1">
                <line id="Divider" stroke="var(--stroke-0, #D1D3D8)" x2="240" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="<ListItem>">
        <Container29 />
        <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
          <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none scale-x-0 scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
              <MinHeight3 />
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 1">
                <line id="Divider" stroke="var(--stroke-0, #D1D3D8)" x2="240" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="<ListItem>">
        <Container30 />
        <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
          <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none scale-x-0 scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
              <MinHeight4 />
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 1">
                <line id="Divider" stroke="var(--stroke-0, #D1D3D8)" x2="240" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="<ListItem>">
        <Container31 />
        <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
          <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none scale-x-0 scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
              <MinHeight5 />
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 1">
                <line id="Divider" stroke="var(--stroke-0, #D1D3D8)" x2="240" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="<ListItem>">
        <Container32 />
        <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
          <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none scale-x-0 scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
              <MinHeight6 />
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 1">
                <line id="Divider" stroke="var(--stroke-0, #D1D3D8)" x2="240" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Platform />
      <MenuItem />
    </div>
  );
}

function VuesaxBoldSetting() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/setting">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="setting">
          <path d={svgPaths.p379d9a80} fill="var(--fill-0, #333333)" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function LeftContent7() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[12px] relative shrink-0" data-name="Left Content">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxBoldSetting />
      </div>
    </div>
  );
}

function ListItemText7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#242424] text-[16px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Setup
      </p>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <LeftContent7 />
          <ListItemText7 />
        </div>
      </div>
    </div>
  );
}

function MinHeight7() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function VuesaxBoldSetting1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/setting-2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="setting-2">
          <path d={svgPaths.p3f496a00} fill="var(--fill-0, #333333)" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function LeftContent8() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[12px] relative shrink-0" data-name="Left Content">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxBoldSetting1 />
      </div>
    </div>
  );
}

function ListItemText8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#242424] text-[16px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Settings
      </p>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <LeftContent8 />
          <ListItemText8 />
        </div>
      </div>
    </div>
  );
}

function MinHeight8() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function VuesaxBoldFrame5() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="frame">
          <path d={svgPaths.p13d05a80} fill="var(--fill-0, #333333)" id="Vector" />
          <path d={svgPaths.pbb46500} fill="var(--fill-0, #333333)" id="Vector_2" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function LeftContent9() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[12px] relative shrink-0" data-name="Left Content">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxBoldFrame5 />
      </div>
    </div>
  );
}

function ListItemText9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#242424] text-[16px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Audit Logs
      </p>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <LeftContent9 />
          <ListItemText9 />
        </div>
      </div>
    </div>
  );
}

function MinHeight9() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function VuesaxBoldLogout() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/logout">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="logout">
          <path d={svgPaths.p14e7100} fill="var(--fill-0, #333333)" id="Vector" />
          <path d={svgPaths.p2bf69400} fill="var(--fill-0, #333333)" id="Vector_2" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function LeftContent10() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[12px] relative shrink-0" data-name="Left Content">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxBoldLogout />
      </div>
    </div>
  );
}

function ListItemText10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#242424] text-[16px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Sign Out
      </p>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <LeftContent10 />
          <ListItemText10 />
        </div>
      </div>
    </div>
  );
}

function MinHeight10() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function MenuItemBottom() {
  return (
    <div className="relative shrink-0 w-full" data-name="MenuItem_bottom">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[4px] relative w-full">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-[260px]" data-name="<ListItem>">
          <Container33 />
          <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
            <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="flex-none scale-x-0 scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
                <MinHeight7 />
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 1">
                  <line id="Divider" stroke="var(--stroke-0, #D1D3D8)" x2="240" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-[260px]" data-name="<ListItem>">
          <Container34 />
          <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
            <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="flex-none scale-x-0 scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
                <MinHeight8 />
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 1">
                  <line id="Divider" stroke="var(--stroke-0, #D1D3D8)" x2="240" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="<ListItem>">
          <Container35 />
          <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
            <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="flex-none scale-x-0 scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
                <MinHeight9 />
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 1">
                  <line id="Divider" stroke="var(--stroke-0, #D1D3D8)" x2="240" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-[260px]" data-name="<ListItem>">
          <Container36 />
          <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
            <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="flex-none scale-x-0 scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
                <MinHeight10 />
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 1">
                  <line id="Divider" stroke="var(--stroke-0, #D1D3D8)" x2="240" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[1.4] relative shrink-0 text-[14px] w-[117px]" data-name="TableCell">
      <p className="font-['Leadway_Bold:Regular','Noto_Sans:Medium',sans-serif] relative shrink-0 text-[#242424] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Opeyemi Pascal
      </p>
      <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] relative shrink-0 text-[#616874] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Senior Underwriter
      </p>
    </div>
  );
}

function Profile() {
  return (
    <div className="backdrop-blur-[10px] bg-[#fff0e9] relative rounded-[12px] shrink-0 w-full" data-name="Profile">
      <div aria-hidden="true" className="absolute border border-[#ffd1ba] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
          <div className="relative shrink-0 size-[32px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgEllipse14} width="32" />
          </div>
          <TableCell />
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-px relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#ffd1ba] border-solid border-t inset-0 pointer-events-none" />
      <MenuItemBottom />
      <Profile />
    </div>
  );
}

export default function LifeDashboard() {
  return (
    <div className="bg-[#f6f7f8] relative size-full" data-name="Life Dashboard">
      <Main />
      <div className="absolute bg-white content-stretch flex items-center justify-between px-[24px] py-[16px] right-0 top-0 w-[1152px]" data-name="Top Nav">
        <div aria-hidden="true" className="absolute border-[#f0f1f2] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex items-center relative shrink-0" data-name="<Breadcrumbs>">
          <Link />
        </div>
        <TopNavContent />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col h-[1024px] items-start justify-between left-0 px-[24px] py-[32px] top-0 w-[288px]" data-name="side Nav">
        <div aria-hidden="true" className="absolute border-[#f0f1f2] border-r border-solid inset-0 pointer-events-none" />
        <Content9 />
        <Content10 />
      </div>
    </div>
  );
}