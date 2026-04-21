import { ReactNode } from 'react';
import { LanguageDropdown } from './LanguageDropdown';
import imgPrimaryLogo from "figma:asset/53e4f3e9ed376a6177b5542ecc2d5c958512c9b4.png";

interface ResponsiveLayoutProps {
  children: ReactNode;
  showHeader?: boolean;
}

export function ResponsiveLayout({ children, showHeader = true }: ResponsiveLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {showHeader && (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
          {/* Desktop Header - Full Width */}
          <div className="hidden lg:block w-full px-6 py-4">
            <div className="bg-[rgba(46,46,46,0.05)] flex items-center justify-between px-6 py-3 rounded-[12px] max-w-[1440px] mx-auto">
              <div className="flex gap-2 items-center">
                <div className="relative size-[38px] overflow-hidden">
                  <img alt="Quantum Logo" className="absolute h-[152.45%] left-[-55.4%] max-w-none top-[-26.23%] w-[211.64%]" src={imgPrimaryLogo} />
                </div>
                <div className="text-[#151515]">
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[22px] tracking-[2px]">Quantum</p>
                  <p className="font-['Leadway_Bold:Regular',sans-serif] text-[8px] tracking-[1.5px]">UNIFIED INTELLIGENCE</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <LanguageDropdown />
                <button className="flex gap-1 items-center px-3 py-2 rounded-lg hover:bg-[rgba(0,0,0,0.05)] transition-colors">
                  <svg className="size-5" fill="none" viewBox="0 0 20 20">
                    <path fill="#151515" d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                    <path fill="#151515" d="M10 6a1 1 0 011 1v3a1 1 0 11-2 0V7a1 1 0 011-1zm0 6a1 1 0 100 2 1 1 0 000-2z"/>
                  </svg>
                  <span className="font-['Inter:Medium',sans-serif] text-[14px]">Help</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Header */}
          <div className="lg:hidden">
            <div className="bg-[rgba(46,46,46,0.05)] flex items-center justify-between px-4 py-3 mx-4 my-3 rounded-[12px]">
              <div className="flex gap-2 items-center">
                <div className="relative size-[32px] overflow-hidden">
                  <img alt="Quantum Logo" className="absolute h-[152.45%] left-[-55.4%] max-w-none top-[-26.23%] w-[211.64%]" src={imgPrimaryLogo} />
                </div>
                <div className="text-[#151515]">
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] sm:text-[16px] tracking-[1.5px]">Quantum</p>
                  <p className="font-['Leadway_Bold:Regular',sans-serif] text-[6px] tracking-[1px]">UNIFIED INTELLIGENCE</p>
                </div>
              </div>
              <LanguageDropdown />
            </div>
          </div>
        </header>
      )}

      {/* Main Content - Centered with max-width on desktop */}
      <main className="w-full">
        <div className="mx-auto max-w-[1440px]">
          {children}
        </div>
      </main>
    </div>
  );
}

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
}

export function ResponsiveContainer({ children, className = '' }: ResponsiveContainerProps) {
  return (
    <div className={`w-full px-4 sm:px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

interface ResponsiveGridProps {
  children: ReactNode;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: string;
  className?: string;
}

export function ResponsiveGrid({
  children,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 'gap-6',
  className = ''
}: ResponsiveGridProps) {
  const gridCols = `grid-cols-${columns.mobile} sm:grid-cols-${columns.tablet} lg:grid-cols-${columns.desktop}`;

  return (
    <div className={`grid ${gridCols} ${gap} ${className}`}>
      {children}
    </div>
  );
}
