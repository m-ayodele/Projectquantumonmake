import imgImage1 from "figma:asset/448faeaee7cd37aa22f925e41c9f58a8cf43e123.png";

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Text">
      <p className="font-['Leadway_Bold:Regular','Noto_Sans:Medium',sans-serif] leading-[1.3] relative shrink-0 text-[#242424] text-[24px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Sign in
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] overflow-clip py-[8px] relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#333] text-[14px] tracking-[0.15px]">Email</p>
    </div>
  );
}

function Input() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] relative w-full">
        <Content />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[0] relative shrink-0 text-[#181d27] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <span className="leading-[20px] text-[14px]">{`Use your Microsoft account. `}</span>
        <span className="font-['Leadway_Bold:Regular','Noto_Sans:Medium',sans-serif] leading-[20px] text-[#0067b8] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
          What’s this?
        </span>
      </p>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="<TextField>">
        <Input />
      </div>
      <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[0] relative shrink-0 text-[#181d27] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <span className="leading-[1.3] text-[10px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>{`Not account? `}</span>
        <span className="font-['Leadway_Bold:Regular','Noto_Sans:Medium',sans-serif] leading-[1.3] text-[#0067b8] text-[10px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
          Create one!
        </span>
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Text />
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="h-[56px] relative shrink-0 w-[152px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <Frame1 />
    </div>
  );
}

function Base() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="font-['My_Font:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Next</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full">
      <div className="bg-[#0067b8] content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0 w-[95px]" data-name="<Button>">
        <Base />
      </div>
    </div>
  );
}

export default function LogIn() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[16px] shadow-[0px_2px_2px_-1px_#d1d3d8,0px_14px_32px_-8px_#bbbec5] size-full" data-name="Log in">
      <Frame2 />
      <div className="h-0 relative shrink-0 w-[361px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 361 1">
            <line id="Line 1" stroke="var(--stroke-0, #D1D3D8)" x2="361" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame />
    </div>
  );
}