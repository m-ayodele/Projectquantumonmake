import { useState, useRef, useEffect } from 'react';
import svgPaths from "../../imports/svg-cgr75p9jue";

interface LanguageDropdownProps {
  theme?: 'light' | 'dark';
}

export function LanguageDropdown({ theme = 'light' }: LanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang: string) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  const iconColor = theme === 'dark' ? 'white' : '#151515';
  const textColor = theme === 'dark' ? 'text-white' : 'text-[#151515]';
  const hoverBg = theme === 'dark' ? 'hover:bg-[rgba(255,255,255,0.1)]' : 'hover:bg-[rgba(0,0,0,0.05)]';
  const arrowColor = theme === 'dark' ? '#C0C0C0' : '#333333';

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`content-stretch flex gap-[4px] h-[36px] items-center rounded-[8px] shrink-0 ${hoverBg} px-2 cursor-pointer`}
      >
        <div className="relative shrink-0 size-[20px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute contents inset-0">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="global">
                  <path d={svgPaths.p18f22980} fill={iconColor} id="Vector" />
                  <path d={svgPaths.p21a59d00} fill={iconColor} id="Vector_2" />
                  <path d={svgPaths.p226586f1} fill={iconColor} id="Vector_3" />
                  <path d={svgPaths.p3ed3c880} fill={iconColor} id="Vector_4" />
                  <path d={svgPaths.p65a8600} fill={iconColor} id="Vector_5" />
                  <g id="Vector_6" opacity="0" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 ${textColor} text-[12px] whitespace-nowrap`}>
          {selectedLang}
        </p>
        <div className="relative shrink-0 size-[12px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute contents inset-0">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <g id="arrow-down">
                  <path d={svgPaths.pab90d00} fill={arrowColor} id="Vector" />
                  <g id="Vector_2" opacity="0" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white border border-[#d1d3d8] rounded-[8px] shadow-lg overflow-hidden z-50">
          <button
            onClick={() => handleSelect('EN')}
            className={`w-full px-4 py-2 text-left hover:bg-[#f5f5f5] font-['Inter:Medium',sans-serif] text-[12px] ${
              selectedLang === 'EN' ? 'bg-[#f0f0f0]' : ''
            }`}
          >
            EN
          </button>
          <button
            onClick={() => handleSelect('FR')}
            className={`w-full px-4 py-2 text-left hover:bg-[#f5f5f5] font-['Inter:Medium',sans-serif] text-[12px] ${
              selectedLang === 'FR' ? 'bg-[#f0f0f0]' : ''
            }`}
          >
            FR
          </button>
        </div>
      )}
    </div>
  );
}
