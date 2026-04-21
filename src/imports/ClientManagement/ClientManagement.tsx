import svgPaths from "./svg-83oxbjg91e";
import imgPrimaryLogo22 from "figma:asset/7233c5139de07580f522e3ba67544bfb383ca777.png";
import imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr3 from "figma:asset/3423e5c1b34d415619a5bd4b1c1f960cddefc606.png";
import imgEllipse14 from "figma:asset/26c566c1766854cccde5e1468729a43c074ac5f8.png";

function Header() {
  return (
    <div className="h-[44px] relative shrink-0 w-[438px]" data-name="Header 2">
      <p className="absolute font-['Leadway_Heavy:Regular','Noto_Sans:Medium',sans-serif] leading-[1.3] left-0 text-[#0a0a0a] text-[32px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Client Management
      </p>
    </div>
  );
}

function Description() {
  return (
    <div className="h-[28px] relative shrink-0 w-[697px]" data-name="Description">
      <p className="absolute font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[28px] left-0 text-[#333] text-[18px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Manage and oversee all client entity types within the ecosystem with real-time analytics
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Header />
      <Description />
    </div>
  );
}

function Base() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="font-['Leadway_Bold:Regular','Noto_Sans:Medium',sans-serif] leading-[1.4] relative shrink-0 text-[#242424] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Add New Client
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame />
      <div className="bg-[#ff6b22] content-stretch flex flex-col items-center justify-center overflow-clip px-[22px] py-[8px] relative rounded-[8px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0" data-name="<Button>">
        <Base />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative" data-name="Content">
      <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#242424] text-[18px] w-full">Individuals</p>
      <p className="font-['My_Font:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.6)] w-full">Policyholder, beneficiaries, legal guardians, assured live, next of kin</p>
    </div>
  );
}

function VuesaxOutlineUser() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/user">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="user">
          <path d={svgPaths.p1d94b00} fill="var(--fill-0, #FF6B22)" id="Vector" />
          <path d={svgPaths.pa577300} fill="var(--fill-0, #FF6B22)" id="Vector_2" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[rgba(255,240,233,0.7)] relative rounded-[12px] shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
          <VuesaxOutlineUser />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="CardHeader">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
            <Content />
          </div>
        </div>
        <Icon />
      </div>
    </div>
  );
}

function Metrics() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Metrics">
      <p className="font-['Leadway_Heavy:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#242424] text-[32px] whitespace-nowrap">300k</p>
    </div>
  );
}

function Base1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#ff6b22] text-[14px] whitespace-nowrap">
        <span className="leading-[1.4]">{`View All `}</span>
        <span className="leading-[1.4]">→</span>
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative size-full">
        <Metrics />
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
          <Base1 />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative" data-name="Content">
      <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#242424] text-[18px] w-full">Corporate</p>
      <p className="font-['My_Font:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.6)] w-full">Employers, associations, unions, clubs, group sponsors</p>
    </div>
  );
}

function VuesaxOutlineBuilding() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/building">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="building">
          <path d={svgPaths.p421c800} fill="var(--fill-0, #FF6B22)" id="Vector" />
          <path d={svgPaths.p286aa180} fill="var(--fill-0, #FF6B22)" id="Vector_2" />
          <path d={svgPaths.p2c515900} fill="var(--fill-0, #FF6B22)" id="Vector_3" />
          <path d={svgPaths.p2da60600} fill="var(--fill-0, #FF6B22)" id="Vector_4" />
          <path d={svgPaths.p285a6680} fill="var(--fill-0, #FF6B22)" id="Vector_5" />
          <path d={svgPaths.p2c399f00} fill="var(--fill-0, #FF6B22)" id="Vector_6" />
          <g id="Vector_7" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[rgba(255,240,233,0.7)] relative rounded-[12px] shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
          <VuesaxOutlineBuilding />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="CardHeader">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
            <Content1 />
          </div>
        </div>
        <Icon1 />
      </div>
    </div>
  );
}

function Metrics1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Metrics">
      <p className="font-['Leadway_Heavy:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#242424] text-[32px] whitespace-nowrap">534</p>
    </div>
  );
}

function Base2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#ff6b22] text-[14px] whitespace-nowrap">
        <span className="leading-[1.4]">{`View All `}</span>
        <span className="leading-[1.4]">→</span>
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative size-full">
        <Metrics1 />
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
          <Base2 />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative" data-name="Content">
      <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#242424] text-[18px] w-full">Intermediaries</p>
      <p className="font-['My_Font:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.6)] w-full">Employers, associations, unions, clubs, group sponsors</p>
    </div>
  );
}

function VuesaxOutlinePeople() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/people">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="people">
          <path d={svgPaths.p3606f000} fill="var(--fill-0, #FF6B22)" id="Vector" />
          <path d={svgPaths.p3316ee00} fill="var(--fill-0, #FF6B22)" id="Vector_2" />
          <path d={svgPaths.p2703ec80} fill="var(--fill-0, #FF6B22)" id="Vector_3" />
          <path d={svgPaths.p5427c00} fill="var(--fill-0, #FF6B22)" id="Vector_4" />
          <path d={svgPaths.pf770c10} fill="var(--fill-0, #FF6B22)" id="Vector_5" />
          <path d={svgPaths.p3cc8e880} fill="var(--fill-0, #FF6B22)" id="Vector_6" />
          <g id="Vector_7" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[rgba(255,240,233,0.7)] relative rounded-[12px] shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
          <VuesaxOutlinePeople />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="CardHeader">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
            <Content2 />
          </div>
        </div>
        <Icon2 />
      </div>
    </div>
  );
}

function Metrics2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Metrics">
      <p className="font-['Leadway_Heavy:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#242424] text-[32px] whitespace-nowrap">213</p>
    </div>
  );
}

function Base3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#ff6b22] text-[14px] whitespace-nowrap">
        <span className="leading-[1.4]">{`View All `}</span>
        <span className="leading-[1.4]">→</span>
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative size-full">
        <Metrics2 />
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
          <Base3 />
        </div>
      </div>
    </div>
  );
}

function ClientCategory() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] h-[183px] overflow-clip relative shrink-0 w-full" data-name="Client Category">
      <div className="bg-white col-1 content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] row-1 self-start shrink-0 w-[352px]" data-name="CardMetric">
        <Container1 />
        <Container2 />
      </div>
      <div className="bg-white col-2 content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] row-1 self-start shrink-0 w-[352px]" data-name="CardMetric">
        <Container3 />
        <Container4 />
      </div>
      <div className="bg-white col-3 content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] row-1 self-start shrink-0 w-[352px]" data-name="CardMetric">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#242424] text-[18px] w-full">Unverified Client</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[9px] relative shrink-0" data-name="Container">
      <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#ff6b22] text-[14px] whitespace-nowrap">Individual</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[9px] relative shrink-0" data-name="Container">
      <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#616874] text-[14px] whitespace-nowrap">Corporate</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[9px] relative shrink-0" data-name="Container">
      <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#616874] text-[14px] whitespace-nowrap">Intermediary</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="<Tab>">
        <Container8 />
        <div className="absolute bottom-0 h-0 left-0 right-0" data-name="Line">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93 2">
              <line id="Line" stroke="var(--stroke-0, #FF6B22)" strokeWidth="2" x2="93" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="<Tab>">
        <Container9 />
      </div>
      <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="<Tab>">
        <Container10 />
      </div>
    </div>
  );
}

function Icon4() {
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

function Icon3() {
  return (
    <div className="content-stretch flex items-center pl-[12px] pr-[4px] py-[12px] relative shrink-0" data-name="Icon">
      <Icon4 />
    </div>
  );
}

function Input() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <p className="font-['My_Font:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#898e99] text-[14px] whitespace-nowrap">Search...</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[rgba(240,241,242,0.5)] content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative rounded-[8px]" data-name="Container">
      <Icon3 />
      <Input />
    </div>
  );
}

function Queries() {
  return (
    <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-[265px]" data-name="Queries">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container11 />
      </div>
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

function MaskedIcon() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] py-[4px] relative shrink-0" data-name="Masked Icon">
      <div className="relative shrink-0 size-[14px]" data-name="<vuesax>">
        <VuesaxOutlineFilter />
      </div>
    </div>
  );
}

function Base4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <MaskedIcon />
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

function MaskedIcon1() {
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
    <div className="h-full relative rounded-[4px] shrink-0 w-[90px]" data-name="Button">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Base4 />
          <MaskedIcon1 />
        </div>
      </div>
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

function MaskedIcon2() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] py-[4px] relative shrink-0" data-name="Masked Icon">
      <div className="relative shrink-0 size-[14px]" data-name="<vuesax>">
        <VuesaxOutlineSort />
      </div>
    </div>
  );
}

function Base5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Base">
      <MaskedIcon2 />
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

function MaskedIcon3() {
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
    <div className="h-full relative rounded-[4px] shrink-0 w-[80px]" data-name="Button">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Base5 />
          <MaskedIcon3 />
        </div>
      </div>
    </div>
  );
}

function VuesaxOutline3Square() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/3square">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="3square">
          <path d={svgPaths.p3d43ea40} fill="var(--fill-0, #2E2E2E)" id="Vector" />
          <path d={svgPaths.p1bf0e000} fill="var(--fill-0, #2E2E2E)" id="Vector_2" />
          <path d={svgPaths.p30ef3100} fill="var(--fill-0, #2E2E2E)" id="Vector_3" />
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Base6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <div className="relative shrink-0 size-[16px]" data-name="<vuesax>">
        <VuesaxOutline3Square />
      </div>
      <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#2e2e2e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Bulk Action
      </p>
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

function MaskedIcon4() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] py-[4px] relative shrink-0" data-name="Masked Icon">
      <div className="relative shrink-0 size-[14px]" data-name="<vuesax>">
        <VuesaxOutlineArrowDown2 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-full relative rounded-[4px] shrink-0 w-[130px]" data-name="Button">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Base6 />
          <MaskedIcon4 />
        </div>
      </div>
    </div>
  );
}

function Base7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#242424] text-[12px] whitespace-nowrap">Run Verification</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center relative shrink-0" data-name="Actions">
      <Button />
      <Button1 />
      <Button2 />
      <div className="bg-[#ff6b22] h-full relative rounded-[8px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0" data-name="Button">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[10px] py-[4px] relative size-full">
            <Base7 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Box() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-90321</p>
      </div>
    </div>
  );
}

function Box1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Elena Adetayo</p>
      </div>
    </div>
  );
}

function Box2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">08162720193</p>
      </div>
    </div>
  );
}

function Box3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">22 Jan, 2026</p>
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

function Box4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore />
      </div>
    </div>
  );
}

function Box5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-10892</p>
      </div>
    </div>
  );
}

function Box6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Temidayo Samuel</p>
      </div>
    </div>
  );
}

function Box7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">09087120193</p>
      </div>
    </div>
  );
}

function Box8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">21 Jan, 2026</p>
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

function Box9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore1 />
      </div>
    </div>
  );
}

function Box10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-11239</p>
      </div>
    </div>
  );
}

function Box11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Ayola Timothy</p>
      </div>
    </div>
  );
}

function Box12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">08011145691</p>
      </div>
    </div>
  );
}

function Box13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">21 Jan, 2026</p>
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

function Box14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore2 />
      </div>
    </div>
  );
}

function Box15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-90329</p>
      </div>
    </div>
  );
}

function Box16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Grace Banks</p>
      </div>
    </div>
  );
}

function Box17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">08134267110</p>
      </div>
    </div>
  );
}

function Box18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">20 Jan, 2026</p>
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

function Box19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore3 />
      </div>
    </div>
  );
}

function Box20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-90320</p>
      </div>
    </div>
  );
}

function Box21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Balogun Mike</p>
      </div>
    </div>
  );
}

function Box22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">08039276118</p>
      </div>
    </div>
  );
}

function Box23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">20 Jan, 2026</p>
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

function Box24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore4 />
      </div>
    </div>
  );
}

function Box25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-90320</p>
      </div>
    </div>
  );
}

function Box26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Balogun Mike</p>
      </div>
    </div>
  );
}

function Box27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">08039276118</p>
      </div>
    </div>
  );
}

function Box28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">20 Jan, 2026</p>
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

function Box29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore5 />
      </div>
    </div>
  );
}

function Box30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-90320</p>
      </div>
    </div>
  );
}

function Box31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Balogun Mike</p>
      </div>
    </div>
  );
}

function Box32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">08039276118</p>
      </div>
    </div>
  );
}

function Box33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">20 Jan, 2026</p>
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

function Box34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore6 />
      </div>
    </div>
  );
}

function Box35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-90320</p>
      </div>
    </div>
  );
}

function Box36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Balogun Mike</p>
      </div>
    </div>
  );
}

function Box37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">08039276118</p>
      </div>
    </div>
  );
}

function Box38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">20 Jan, 2026</p>
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

function Box39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore7 />
      </div>
    </div>
  );
}

function Box40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-90320</p>
      </div>
    </div>
  );
}

function Box41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Balogun Mike</p>
      </div>
    </div>
  );
}

function Box42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">08039276118</p>
      </div>
    </div>
  );
}

function Box43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">20 Jan, 2026</p>
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

function Box44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore8 />
      </div>
    </div>
  );
}

function Box45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">ID: L1-90320</p>
      </div>
    </div>
  );
}

function Box46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">Balogun Mike</p>
      </div>
    </div>
  );
}

function Box47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">08039276118</p>
      </div>
    </div>
  );
}

function Box48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['My_Font:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">20 Jan, 2026</p>
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

function Box49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxOutlineMore9 />
      </div>
    </div>
  );
}

function VuesaxBoldArrowDown() {
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
        <VuesaxBoldArrowDown />
      </div>
    </div>
  );
}

function Container12() {
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

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[288px] px-[24px] py-[32px] right-0 top-[78px]" data-name="Main">
      <Container />
      <ClientCategory />
      <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_2px_1px_-1px_rgba(0,0,0,0.2)] shrink-0 w-full" data-name="<Table-Element>">
        <div className="bg-white relative shrink-0 w-full" data-name="CardHeader">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[16px] relative size-full">
              <Content3 />
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="TableToolbar">
          <div className="content-stretch flex items-start justify-between px-[16px] relative size-full">
            <div className="content-stretch flex flex-col items-start overflow-clip relative self-stretch shrink-0" data-name="<Tabs>">
              <Container7 />
            </div>
            <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0" data-name="_Custom / Table / Toolbar">
              <Queries />
              <div className="flex flex-row items-center self-stretch">
                <Actions />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="<Table-Atom>">
          <div className="bg-[rgba(240,241,242,0.5)] content-stretch flex items-center relative shrink-0 w-full" data-name="<TableHeadRow>">
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="<TableHead>">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[6px] relative size-full">
                  <p className="font-['My_Font:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#242424] text-[14px] tracking-[0.17px] uppercase whitespace-nowrap">CLIENT ID</p>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="<TableHead>">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <p className="font-['My_Font:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#242424] text-[14px] tracking-[0.17px] uppercase whitespace-nowrap">NAME</p>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="<TableHead>">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <p className="font-['My_Font:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#242424] text-[14px] tracking-[0.17px] uppercase whitespace-nowrap">CONTACT</p>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="<TableHead>">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <p className="font-['My_Font:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#242424] text-[14px] tracking-[0.17px] uppercase whitespace-nowrap">DATE ADDED</p>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="<TableHead>">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <p className="font-['My_Font:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#242424] text-[14px] tracking-[0.17px] uppercase whitespace-nowrap">ACTION</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row #1">
            <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #1">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[6px] relative size-full">
                  <Box />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #2">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box1 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #3">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box2 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #4">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box3 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[6px] pr-[24px] py-[6px] relative size-full">
                  <Box4 />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row #2">
            <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #1">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[6px] relative size-full">
                  <Box5 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #2">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box6 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #3">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box7 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #4">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box8 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[6px] pr-[24px] py-[6px] relative size-full">
                  <Box9 />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row #3">
            <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #1">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[6px] relative size-full">
                  <Box10 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #2">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box11 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #3">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box12 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #4">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box13 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[6px] pr-[24px] py-[6px] relative size-full">
                  <Box14 />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row #4">
            <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #1">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[6px] relative size-full">
                  <Box15 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #2">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box16 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #3">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box17 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #4">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box18 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[6px] pr-[24px] py-[6px] relative size-full">
                  <Box19 />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row #5">
            <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #1">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[6px] relative size-full">
                  <Box20 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #2">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box21 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #3">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box22 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #4">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box23 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[6px] pr-[24px] py-[6px] relative size-full">
                  <Box24 />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row #6">
            <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #1">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[6px] relative size-full">
                  <Box25 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #2">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box26 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #3">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box27 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #4">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box28 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[6px] pr-[24px] py-[6px] relative size-full">
                  <Box29 />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row #7">
            <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #1">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[6px] relative size-full">
                  <Box30 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #2">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box31 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #3">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box32 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #4">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box33 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[6px] pr-[24px] py-[6px] relative size-full">
                  <Box34 />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row #8">
            <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #1">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[6px] relative size-full">
                  <Box35 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #2">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box36 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #3">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box37 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #4">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box38 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[6px] pr-[24px] py-[6px] relative size-full">
                  <Box39 />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row #9">
            <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #1">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[6px] relative size-full">
                  <Box40 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #2">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box41 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #3">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box42 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #4">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box43 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[6px] pr-[24px] py-[6px] relative size-full">
                  <Box44 />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row #10">
            <div aria-hidden="true" className="absolute border-[#bbbec5] border-b border-solid inset-0 pointer-events-none" />
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #1">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[6px] relative size-full">
                  <Box45 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #2">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box46 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #3">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box47 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #4">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
                  <Box48 />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #5">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[6px] pr-[24px] py-[6px] relative size-full">
                  <Box49 />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[32px] items-center justify-end py-[2px] relative shrink-0 w-full" data-name="<TableFooter>">
            <Container12 />
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
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 text-center whitespace-nowrap">
      <p className="font-['Leadway_Heavy:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[#151515] text-[18px]">LEADWAY</p>
      <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#ff6b22] text-[14px] tracking-[1px]">LIFE</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="h-[48px] relative shrink-0 w-[40px]" data-name="Whisk_a5e8b23d0d6272e995e40a8aa46d6cf4dr 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[169.79%] left-[-104.28%] max-w-none top-[-15.22%] w-[313.22%]" src={imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr3} />
        </div>
      </div>
      <Frame1 />
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
        <div className="flex h-[15px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
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
        <Frame2 />
      </div>
    </div>
  );
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

function LeftContent() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[12px] relative shrink-0" data-name="Left Content">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxBoldFrame />
      </div>
    </div>
  );
}

function ListItemText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#242424] text-[16px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Dashboard
      </p>
    </div>
  );
}

function Container13() {
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

function LeftContent1() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[12px] relative shrink-0" data-name="Left Content">
      <div className="relative shrink-0 size-[24px]" data-name="<vuesax>">
        <VuesaxBoldStar />
      </div>
    </div>
  );
}

function ListItemText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="font-['Leadway_Bold:Regular','Noto_Sans:Medium',sans-serif] leading-[1.4] relative shrink-0 text-[#ff6b22] text-[16px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Client Management
      </p>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
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

function Container15() {
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

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
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

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
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

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
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

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
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
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="<ListItem>">
        <Container13 />
        <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
          <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
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
      <div className="bg-[#fff0e9] relative rounded-[8px] shrink-0 w-full" data-name="<ListItem>">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
          <Container14 />
          <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
            <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
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
        <div aria-hidden="true" className="absolute border border-[#ffd1ba] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-[240px]" data-name="<ListItem>">
        <Container15 />
        <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
          <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
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
        <Container16 />
        <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
          <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
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
        <Container17 />
        <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
          <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
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
        <Container18 />
        <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
          <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
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
        <Container19 />
        <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
          <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
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

function Content4() {
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
        Control Panel
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
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

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
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

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
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

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[4px] relative size-full">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-[260px]" data-name="<ListItem>">
          <Container20 />
          <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
            <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
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
          <Container21 />
          <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
            <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
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
          <Container22 />
          <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
            <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
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
          <Container23 />
          <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
            <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
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
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[32px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgEllipse14} width="32" />
          </div>
          <TableCell />
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-px relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#ffd1ba] border-solid border-t inset-0 pointer-events-none" />
      <MenuItemBottom />
      <Profile />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Link">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="<Link>">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="<Typography>">
          <p className="font-['My_Font:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#333] text-[16px] whitespace-nowrap">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function Separator() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[23px]" data-name="Separator">
      <p className="font-['My_Font:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#767676] text-[16px] whitespace-nowrap">/</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Link">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="<Link>">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="<Typography>">
          <p className="font-['My_Font:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#ff6b22] text-[16px] whitespace-nowrap">Client Management</p>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
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

function Icon5() {
  return (
    <div className="content-stretch flex items-center pl-[12px] pr-[4px] py-[12px] relative shrink-0" data-name="Icon">
      <Icon6 />
    </div>
  );
}

function Input1() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
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
      <Icon5 />
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
          <VuesaxOutlineArrowDown3 />
        </div>
      </div>
    </div>
  );
}

function VuesaxOutlineArrowDown4() {
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

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[40px]" data-name="Whisk_a5e8b23d0d6272e995e40a8aa46d6cf4dr 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[169.79%] left-[-104.28%] max-w-none top-[-15.22%] w-[313.22%]" src={imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr3} />
        </div>
      </div>
      <div className="relative shrink-0 size-[14px]" data-name="<vuesax>">
        <VuesaxOutlineArrowDown4 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Notification />
      <Button3 />
      <div className="bg-white content-stretch flex gap-[8px] items-center px-[8px] relative shrink-0" data-name="<Logo Variants>">
        <div className="flex h-[16px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
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
        <Frame3 />
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

export default function ClientManagement() {
  return (
    <div className="bg-[#f6f7f8] relative size-full" data-name="Client Management">
      <Main />
      <div className="absolute bg-white content-stretch flex flex-col h-[1024px] items-start justify-between left-0 px-[24px] py-[32px] top-0 w-[288px]" data-name="side Nav">
        <div aria-hidden="true" className="absolute border-[#f0f1f2] border-r border-solid inset-0 pointer-events-none" />
        <Content4 />
        <Content5 />
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-between px-[24px] py-[16px] right-0 top-0 w-[1152px]" data-name="Top Nav">
        <div aria-hidden="true" className="absolute border-[#f0f1f2] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex items-center relative shrink-0" data-name="<Breadcrumbs>">
          <Link />
          <Separator />
          <Link1 />
        </div>
        <TopNavContent />
      </div>
    </div>
  );
}