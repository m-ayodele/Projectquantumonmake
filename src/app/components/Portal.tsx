import { useState, useRef, useEffect } from 'react';
import svgPaths from "../../imports/svg-qznkcrv5zj";
import imgPortal from "figma:asset/db687d105d80cca464efb3b741f3ad217cbb3229.png";
import imgPrimaryLogo13 from "figma:asset/53e4f3e9ed376a6177b5542ecc2d5c958512c9b4.png";
import imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr2 from "figma:asset/a20cd2b6faf7f05c1a138de0fa99487b859f9fe9.png";
import imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr3 from "figma:asset/3423e5c1b34d415619a5bd4b1c1f960cddefc606.png";
import imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr1 from "figma:asset/53a9c35c79ad563be15f5700d6b681bddf3557bf.png";
import imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr4 from "figma:asset/c96aa8b700f793d5784155400af6702cf7e92e82.png";
import imgWhisk4Ffcdd4Dd13D4A396Ba4331Bc20A3E48Eg1 from "figma:asset/8cee217508d2d267a98c2471cf55e38b7f756f9a.png";
import { LanguageDropdown } from './LanguageDropdown';

function QuantumLogo({ textColor = 'white' }: { textColor?: string }) {
  return (
    <div className="flex gap-2 items-center">
      <div className="relative size-[38px] overflow-hidden">
        <img alt="Quantum Logo" className="absolute h-[152.45%] left-[-55.4%] max-w-none top-[-26.23%] w-[211.64%]" src={imgPrimaryLogo13} />
      </div>
      <div>
        <p className={`font-['Inter:Bold',sans-serif] font-bold text-[22px] tracking-[2px] ${textColor === 'white' ? 'text-white' : 'text-[#151515]'}`}>
          Quantum
        </p>
        <p className={`font-['Leadway_Bold:Regular',sans-serif] text-[8px] tracking-[1.5px] ${textColor === 'white' ? 'text-white' : 'text-[#151515]'}`}>
          UNIFIED INTELLIGENCE
        </p>
      </div>
    </div>
  );
}

function AppCard({ title, subtitle, image, dark = false, onClick }: { title: string; subtitle: string; image: string; dark?: boolean; onClick?: () => void }) {
  return (
    <div onClick={onClick} className={`${dark ? 'bg-[#151515]' : 'bg-white'} relative rounded-[12px] sm:rounded-[16px] w-full aspect-square cursor-pointer hover:scale-105 transition-transform active:scale-95`}>
      {!dark && <div className="absolute border-[#ffd1ba] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] sm:rounded-[16px]" />}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 w-[60%] aspect-square top-[calc(50%-10px)] sm:top-[calc(50%-14.5px)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt={`${title} ${subtitle}`} className="absolute h-[162.71%] left-[-90.25%] max-w-none top-[-12.5%] w-[284.75%]" src={image} />
        </div>
      </div>
      <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex flex-col items-center">
        <p className={`font-['Leadway_Heavy:Regular',sans-serif] leading-[1.4] not-italic text-[8px] sm:text-[10px] text-center ${dark ? 'text-[#ebebeb]' : 'text-[#767676]'}`}>
          {title}
        </p>
        <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] not-italic text-[#ff6b22] text-[8px] sm:text-[10px] text-center">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function UserAvatarDropdown({ onLogout }: { onLogout: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div ref={dropdownRef} className="relative">
      <div onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors cursor-pointer">
        <div className="bg-[#d1d3d8] flex items-center justify-center size-[32px] rounded-full">
          <p className="font-['My_Font:Regular',sans-serif] text-[16px] text-[#242424]">JD</p>
        </div>
        <span className="hidden sm:block font-['Leadway_Bold:Regular',sans-serif] text-[14px] text-white">John Doe</span>
        <svg className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 16 16">
          <path d="M4 6L8 10L12 6" stroke="#BBBEC5" strokeWidth="0.666667" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-[#d1d3d8] rounded-[8px] shadow-lg overflow-hidden z-50 min-w-[180px]">
          <button
            className="w-full px-4 py-3 text-left hover:bg-[#f5f5f5] font-['My_Font:Regular',sans-serif] text-[14px] text-[#242424] flex items-center gap-3"
          >
            <svg className="size-4" fill="none" viewBox="0 0 20 20">
              <path d="M10 0C7.8 0 6 1.8 6 4C6 6.2 7.8 8 10 8C12.2 8 14 6.2 14 4C14 1.8 12.2 0 10 0Z" fill="#242424"/>
              <path d="M10 10C5.6 10 2 11.8 2 14V16C2 17.1 2.9 18 4 18H16C17.1 18 18 17.1 18 16V14C18 11.8 14.4 10 10 10Z" fill="#242424"/>
            </svg>
            User Profile
          </button>
          <button
            onClick={onLogout}
            className="w-full px-4 py-3 text-left hover:bg-[#f5f5f5] font-['My_Font:Regular',sans-serif] text-[14px] text-[#242424] flex items-center gap-3 border-t border-[#f0f1f2]"
          >
            <svg className="size-4" fill="none" viewBox="0 0 20 20">
              <path d="M13 3H16C17.1 3 18 3.9 18 5V15C18 16.1 17.1 17 16 17H13" stroke="#242424" strokeWidth="2" strokeLinecap="round"/>
              <path d="M7 7L3 10L7 13" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 10H13" stroke="#242424" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

interface PortalProps {
  onNavigateToLifeDashboard: () => void;
  onLogout: () => void;
}

interface AppInfo {
  title: string;
  subtitle: string;
  image: string;
  dark?: boolean;
  onClick?: () => void;
}

export function Portal({ onNavigateToLifeDashboard, onLogout }: PortalProps) {
  const apps: AppInfo[] = [
    { title: 'LEADWAY', subtitle: 'HEALTH', image: imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr2 },
    { title: 'LEADWAY', subtitle: 'LIFE', image: imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr3, onClick: onNavigateToLifeDashboard },
    { title: 'LEADWAY', subtitle: 'GEN. BUSINESS', image: imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr1 },
    { title: 'LEADWAY', subtitle: 'PENSURE', image: imgWhiskA5E8B23D0D6272E995E40A8Aa46D6Cf4Dr4 },
    { title: 'QUANTUM', subtitle: 'ADMIN', image: imgWhisk4Ffcdd4Dd13D4A396Ba4331Bc20A3E48Eg1, dark: true },
  ];

  return (
    <div className="relative size-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute bg-white inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[123.73%] left-[-0.17%] max-w-none top-[-7.4%] w-[138.89%] object-cover" src={imgPortal} />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(180.046deg, rgba(0, 0, 0, 0.54) 4.9191%, rgba(0, 0, 0, 0.36) 26.565%, rgba(0, 0, 0, 0.45) 65.528%, rgba(0, 0, 0, 0.9) 91.504%)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-6 sm:p-10 lg:px-10 lg:py-6 justify-between max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:gap-24">
          <div className="bg-[rgba(0,0,0,0.1)] rounded-[12px] px-6 sm:px-12 py-2">
            <div className="flex items-center justify-between">
              <QuantumLogo />

              <div className="flex gap-4 lg:gap-6 items-center">
                <LanguageDropdown theme="dark" />

                <button className="hidden sm:flex gap-1 items-center px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                  <svg className="size-5" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.pbf7e8f0} fill="white" />
                    <path d={svgPaths.pd291a80} fill="white" />
                    <path d={svgPaths.p3e6ae180} fill="white" />
                  </svg>
                  <span className="font-['Inter:Medium',sans-serif] text-[14px] text-white">Help</span>
                </button>

                <UserAvatarDropdown onLogout={onLogout} />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            {/* Welcome Text */}
            <div className="text-white max-w-[576px]">
              <p className="font-['My_Font:Regular',sans-serif] text-[18px] opacity-90 mb-2">Welcome to</p>
              <h1 className="font-['Leadway_Black:Regular',sans-serif] text-[32px] sm:text-[40px] leading-tight opacity-90">
                Leadway's Quantum Ecosystem
              </h1>
            </div>

            {/* App Selection */}
            <div className="bg-[rgba(255,255,255,0.09)] rounded-[16px] p-4 sm:p-6 w-full lg:w-auto lg:max-w-[420px]">
              <p className="font-['Leadway_Bold:Regular',sans-serif] text-[16px] sm:text-[18px] text-center text-white mb-4 sm:mb-6">
                Choose an application to get started
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {apps.map((app, index) => (
                  <AppCard key={index} title={app.title} subtitle={app.subtitle} image={app.image} dark={app.dark} onClick={app.onClick} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse sm:flex-row items-start sm:items-end justify-between gap-6">
          {/* Quote - hidden on small screens */}
          <div className="hidden sm:block text-white max-w-[320px]">
            <div className="flex items-start gap-1">
              <p className="text-[58px] leading-none font-['American_Typewriter:Regular',sans-serif] -mt-2">"</p>
              <div className="flex-1">
                <p className="font-['My_Font:Regular',sans-serif] text-[14px] leading-relaxed mb-2">
                  Every man has problems that only life insurance can solve. In the young man's case, the problem is to create cash; for the older man, to conserve it
                </p>
                <p className="font-['Leadway_Heavy:Regular',sans-serif] text-[11px] text-right">• Ben Feldman</p>
              </div>
            </div>
          </div>

          {/* Quick Access Button */}
          <button className="bg-[#1c1c1c] flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full shadow-lg hover:bg-[#2a2a2a] transition-colors w-full sm:w-auto justify-center">
            <span className="font-['Leadway_Bold:Regular',sans-serif] text-[14px] sm:text-[16px] text-white">Quick Access</span>
            <svg className="size-5 sm:size-6" viewBox="0 0 24 24" fill="none">
              <path d={svgPaths.p38adf480} fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
