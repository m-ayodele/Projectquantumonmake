import img3 from "figma:asset/a8dd73fc85a26a5633dfe896b2e45c4a0ab97998.png";

function Component() {
  return (
    <div className="absolute contents left-0 top-0" data-name="2">
      <div className="absolute left-0 size-[80px] top-0" data-name="3">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="80" src={img3} width="80" />
      </div>
      <div className="absolute left-[34.4px] size-[12px] top-[68px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="var(--fill-0, #E8611F)" id="Ellipse 1" r="6" />
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[28px] left-[4px] top-0 w-[5px]">
      <p className="absolute font-['Leadway_Bold:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1c1c1c] text-[18px] top-0 whitespace-nowrap">.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[28px] left-[19px] top-0 w-[9px]">
      <p className="absolute font-['Leadway_Bold:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1c1c1c] text-[18px] top-0 whitespace-nowrap">..</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[28px] left-[38px] top-0 w-[13px]">
      <p className="absolute font-['Leadway_Bold:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1c1c1c] text-[18px] top-0 whitespace-nowrap">...</p>
    </div>
  );
}

function Frame3() {
  return <div className="absolute h-[28px] left-[-10px] top-0 w-[4px]" />;
}

function Group() {
  return (
    <div className="absolute contents left-[-10px] top-0">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Container">
      <p className="font-['Leadway_Bold:Regular','Noto_Sans:Medium',sans-serif] leading-[28px] relative shrink-0 text-[#1c1c1c] text-[18px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Verifying Credentials
      </p>
      <div className="h-[28px] overflow-clip relative shrink-0 w-[13px]" data-name="Component 23">
        <Group />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[28px] left-[4px] top-0 w-[5px]">
      <p className="absolute font-['Leadway_Bold:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1c1c1c] text-[18px] top-0 whitespace-nowrap">.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[28px] left-[19px] top-0 w-[9px]">
      <p className="absolute font-['Leadway_Bold:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1c1c1c] text-[18px] top-0 whitespace-nowrap">..</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[28px] left-[38px] top-0 w-[13px]">
      <p className="absolute font-['Leadway_Bold:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1c1c1c] text-[18px] top-0 whitespace-nowrap">...</p>
    </div>
  );
}

function Frame7() {
  return <div className="absolute h-[28px] left-[-10px] top-0 w-[4px]" />;
}

function Group2() {
  return (
    <div className="absolute contents left-[-10px] top-0">
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex items-center left-[36px] top-[30px]" data-name="Container">
      <p className="font-['Leadway_Bold:Regular','Noto_Sans:Medium',sans-serif] leading-[28px] relative shrink-0 text-[#1c1c1c] text-[18px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Finishing up
      </p>
      <div className="h-[28px] overflow-clip relative shrink-0 w-[13px]" data-name="Component 23">
        <Group2 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex items-center left-[67px] top-[60px]" data-name="Container">
      <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#1c1c1c] text-[18px] text-center whitespace-nowrap">Done!</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[29px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[80px]" data-name="Circular Rotation">
        <Component />
      </div>
      <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Status Text">
        <Group1 />
      </div>
    </div>
  );
}

export default function LoadingScreen() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[629px] py-[342px] relative size-full" data-name="Loading Screen">
      <Frame8 />
    </div>
  );
}