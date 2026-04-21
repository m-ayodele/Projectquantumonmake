function Group() {
  return (
    <div className="absolute contents italic leading-[72px] left-0 text-[#ff6b22] text-[60px] top-0 whitespace-nowrap">
      <p className="absolute font-['Leadway_Heavy_Italic:Italic',sans-serif] left-0 top-0">Life</p>
      <p className="absolute font-['Leadway_Heavy_Italic:Italic',sans-serif] left-0 top-[88px]">Health</p>
      <p className="absolute font-['Leadway_Heavy_Italic:Italic','Noto_Sans:Italic',sans-serif] left-0 top-[176px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        General Business
      </p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="Component 19">
      <Group />
    </div>
  );
}