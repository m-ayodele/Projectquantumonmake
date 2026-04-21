import svgPaths from "./svg-qznkcrv5zj";
import imgPortal from "figma:asset/db687d105d80cca464efb3b741f3ad217cbb3229.png";
import imgPrimaryLogo13 from "figma:asset/53e4f3e9ed376a6177b5542ecc2d5c958512c9b4.png";
import imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr2 from "figma:asset/a20cd2b6faf7f05c1a138de0fa99487b859f9fe9.png";
import imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr3 from "figma:asset/3423e5c1b34d415619a5bd4b1c1f960cddefc606.png";
import imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr1 from "figma:asset/53a9c35c79ad563be15f5700d6b681bddf3557bf.png";
import imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr4 from "figma:asset/c96aa8b700f793d5784155400af6702cf7e92e82.png";
import imgWhisk4Ffcdd4Dd13D4A396Ba4331Bc20A3E48Eg1 from "figma:asset/8cee217508d2d267a98c2471cf55e38b7f756f9a.png";

function Frame9() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pb-[3px] relative size-full text-white whitespace-nowrap">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[22px] text-center tracking-[2px]">Quantum</p>
        <p className="font-['Leadway_Bold:Regular','Noto_Sans:Medium',sans-serif] leading-[10px] relative shrink-0 text-[8px] tracking-[1.5px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
          UNIFIED INTELLIGENCE
        </p>
      </div>
    </div>
  );
}

function QuantumLogo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Quantum Logo">
      <div className="relative shrink-0 size-[38px]" data-name="Primary logo 1 3">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[152.45%] left-[-55.4%] max-w-none top-[-26.23%] w-[211.64%]" src={imgPrimaryLogo13} />
        </div>
      </div>
      <Frame9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <QuantumLogo />
    </div>
  );
}

function VuesaxOutlineGlobal() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/global">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="global">
          <path d={svgPaths.p18f22980} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p21a59d00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p226586f1} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3ed3c880} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p65a8600} fill="var(--fill-0, white)" id="Vector_5" />
          <g id="Vector_6" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxOutlineArrowDown() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/arrow-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-down">
          <path d={svgPaths.pab90d00} fill="var(--fill-0, #C0C0C0)" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] h-[36px] items-center relative rounded-[8px] shrink-0" data-name="Button">
      <div className="relative shrink-0 size-[20px]" data-name="<vuesax>">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <VuesaxOutlineGlobal />
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">EN</p>
      <div className="relative shrink-0 size-[12px]" data-name="<vuesax>">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <VuesaxOutlineArrowDown />
        </div>
      </div>
    </div>
  );
}

function VuesaxOutlineMessageQuestion() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/message-question">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="message-question">
          <path d={svgPaths.pbf7e8f0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pd291a80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3e6ae180} fill="var(--fill-0, white)" id="Vector_3" />
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[36px] items-center relative rounded-[8px] shrink-0" data-name="Button">
      <div className="relative shrink-0 size-[20px]" data-name="<vuesax>">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <VuesaxOutlineMessageQuestion />
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Help</p>
    </div>
  );
}

function MinWidth() {
  return <div className="h-0 shrink-0 w-px" data-name="min-width" />;
}

function MinWidth1() {
  return <div className="size-[32px]" data-name="min-width" />;
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Header">
      <p className="font-['Leadway_Bold:Regular','Noto_Sans:Medium',sans-serif] leading-[1.4] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        John Doe
      </p>
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Header">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Header">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #BBBEC5)" strokeWidth="0.666667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pr-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0" data-name="<Divider> | Vertical">
        <MinWidth />
        <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-0" style={{ containerType: "size", "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
          <div className="flex-none rotate-90 w-[100cqh]">
            <div className="h-0 relative w-full" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 1">
                  <line id="Divider" stroke="var(--stroke-0, #F0F1F2)" strokeOpacity="0.5" x2="48" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#d1d3d8] content-stretch flex flex-col items-center justify-center min-h-[32px] min-w-[32px] relative rounded-[100px] shrink-0" data-name="<Avatar>">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['My_Font:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#242424] text-[16px] text-center top-1/2 w-[32px]">
          <p className="leading-[24px]">JD</p>
        </div>
        <div className="flex items-center justify-center relative shrink-0 size-[32px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <MinWidth1 />
          </div>
        </div>
      </div>
      <Header />
      <Header1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 text-white w-[576px]">
      <p className="font-['Leadway_Heavy:Regular','Noto_Sans:Medium',sans-serif] leading-[0] opacity-90 relative shrink-0 text-[0px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <span className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[44px] text-[18px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
          Welcome
        </span>
        <span className="leading-[44px] text-[18px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>{` `}</span>
        <span className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[44px] text-[18px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
          to
        </span>
      </p>
      <p className="font-['Leadway_Black:Regular','Noto_Sans:Medium',sans-serif] leading-[normal] opacity-90 relative shrink-0 text-[40px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Leadway’s Quantum Ecosystem
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 size-[116px]">
      <div aria-hidden="true" className="absolute border-[#ffd1ba] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[70px] top-[calc(50%-14.5px)]" data-name="Whisk_a5e8b23d0d6272e995e40a8aa46d6cf4dr 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[162.71%] left-[-90.25%] max-w-none top-[-12.5%] w-[284.75%]" src={imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr2} />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Leadway_Heavy:Regular',sans-serif] leading-[1.4] left-[58px] not-italic text-[#767676] text-[10px] text-center top-[80px] whitespace-nowrap">LEADWAY</p>
      <p className="-translate-x-1/2 absolute font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] left-[58.5px] not-italic text-[#ff6b22] text-[10px] text-center top-[93px] whitespace-nowrap">HEALTH</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 size-[116px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[70px] top-[calc(50%-14.5px)]" data-name="Whisk_a5e8b23d0d6272e995e40a8aa46d6cf4dr 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[162.71%] left-[-90.25%] max-w-none top-[-12.5%] w-[284.75%]" src={imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr3} />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Leadway_Heavy:Regular',sans-serif] leading-[1.4] left-[58px] not-italic text-[#767676] text-[10px] text-center top-[80px] whitespace-nowrap">LEADWAY</p>
      <p className="-translate-x-1/2 absolute font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] left-[58px] not-italic text-[#ff6b22] text-[10px] text-center top-[93px] whitespace-nowrap">LIFE</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 size-[116px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[70px] top-[calc(50%-14.5px)]" data-name="Whisk_a5e8b23d0d6272e995e40a8aa46d6cf4dr 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[162.71%] left-[-90.25%] max-w-none top-[-12.5%] w-[284.75%]" src={imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr1} />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Leadway_Heavy:Regular',sans-serif] leading-[1.4] left-[58px] not-italic text-[#767676] text-[10px] text-center top-[80px] whitespace-nowrap">LEADWAY</p>
      <p className="-translate-x-1/2 absolute font-['Leadway_Bold:Regular','Noto_Sans:Medium',sans-serif] leading-[1.4] left-[58.5px] text-[#ff6b22] text-[10px] text-center top-[93px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        GEN. BUSINESS
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 size-[116px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[58px] left-1/2 top-[calc(50%-16px)] w-[70px]" data-name="Whisk_a5e8b23d0d6272e995e40a8aa46d6cf4dr 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[196.38%] left-[-89.54%] max-w-none top-[-28.02%] w-[284.75%]" src={imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr4} />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Leadway_Heavy:Regular',sans-serif] leading-[1.4] left-[58px] not-italic text-[#767676] text-[10px] text-center top-[80px] whitespace-nowrap">LEADWAY</p>
      <p className="-translate-x-1/2 absolute font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] left-[58.5px] not-italic text-[#ff6b22] text-[10px] text-center top-[93px] whitespace-nowrap">PENSURE</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#151515] relative rounded-[16px] shrink-0 size-[116px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[60px] left-1/2 top-[calc(50%-17px)] w-[62px]" data-name="Whisk_4ffcdd4dd13d4a396ba4331bc20a3e48eg 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[187.45%] left-[-103.03%] max-w-none top-[-35.07%] w-[313.6%]" src={imgWhisk4Ffcdd4Dd13D4A396Ba4331Bc20A3E48Eg1} />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Leadway_Heavy:Regular',sans-serif] leading-[1.4] left-[58px] not-italic text-[#ebebeb] text-[10px] text-center top-[80px] whitespace-nowrap">QUANTUM</p>
      <p className="-translate-x-1/2 absolute font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] left-[58px] not-italic text-[#ff6b22] text-[10px] text-center top-[93px] whitespace-nowrap">ADMIN</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-start flex flex-wrap gap-[16px_12px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(255,255,255,0.09)] content-stretch flex flex-col gap-[24px] items-center overflow-clip p-[24px] relative rounded-[16px] shrink-0 w-[420px]">
      <p className="font-['Leadway_Bold:Regular','Noto_Sans:Medium',sans-serif] leading-[28px] relative shrink-0 text-[18px] text-center text-white w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Choose an application to get started
      </p>
      <Frame3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame10 />
      <Frame />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[97px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(0,0,0,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[48px] py-[8px] relative size-full">
            <Frame1 />
            <Container />
          </div>
        </div>
      </div>
      <Frame12 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[97.531px] relative shrink-0 text-white w-[320px]">
      <p className="absolute font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[1.4] left-[29.02px] text-[14px] top-[14.51px] w-[290.982px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Every man has problems that only life insurance can solve. In the young man’s case, the problem is to create cash; for the older man, to conserve it
      </p>
      <ul className="-translate-x-full absolute block font-['Leadway_Heavy:Regular','Noto_Sans:Medium',sans-serif] leading-[0] left-[307.1px] text-[11.285px] text-right top-[74.96px] w-[290.982px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <li className="list-disc ms-[16.927500000000002px]">
          <span className="leading-[22.569px]">Ben Feldman</span>
        </li>
      </ul>
      <p className="absolute font-['American_Typewriter:Regular',sans-serif] leading-[22.569px] left-0 not-italic text-[58.035px] top-[14.51px] w-[290.982px]">“</p>
    </div>
  );
}

function Base() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Base">
      <p className="font-['Leadway_Bold:Regular','Noto_Sans:Medium',sans-serif] leading-[1.4] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Quick Access
      </p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="AddFilled">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p38adf480} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Frame2 />
      <div className="bg-[#1c1c1c] content-stretch flex items-center overflow-clip relative rounded-[100px] shadow-[0px_1px_18px_0px_rgba(0,0,0,0.12),0px_6px_10px_0px_rgba(0,0,0,0.14),0px_3px_5px_-1px_rgba(0,0,0,0.2)] shrink-0" data-name="<Fab>">
        <Base />
      </div>
    </div>
  );
}

export default function Portal() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between pb-[35px] pt-[24px] px-[40px] relative size-full" data-name="Portal">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[123.73%] left-[-0.17%] max-w-none top-[-7.4%] w-[138.89%]" src={imgPortal} />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(180.046deg, rgba(0, 0, 0, 0.54) 4.9191%, rgba(0, 0, 0, 0.36) 26.565%, rgba(0, 0, 0, 0.45) 65.528%, rgba(0, 0, 0, 0.9) 91.504%)" }} />
      </div>
      <Frame13 />
      <Frame11 />
    </div>
  );
}