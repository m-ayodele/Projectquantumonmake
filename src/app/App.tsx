import { useState } from 'react';
import LandingPageBase from '../imports/LandingPage-7-33458';
import { ScrollingImageColumn } from './components/ScrollingImageColumn';
import { ImageCard1, ImageCard2, ImageCard3, ImageCard4, ImageCard5, ImageCard6, ImageCard7, ImageCard8, ImageCard9, ImageCard10, IconCard } from './components/ImageCards';
import { RotatingText } from './components/RotatingText';
import { LanguageDropdown } from './components/LanguageDropdown';
import { LoginModal } from './components/LoginModal';
import { Portal } from './components/Portal';
import { LifeDashboardWrapper } from './components/LifeDashboardWrapper';
import { ClientManagementWrapper } from './components/ClientManagementWrapper';
import svgPaths from "../imports/svg-cgr75p9jue";
import imgPrimaryLogo from "figma:asset/53e4f3e9ed376a6177b5542ecc2d5c958512c9b4.png";

type AppView = 'landing' | 'portal' | 'life-dashboard' | 'client-management';

export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<AppView>('landing');

  const handleLoginSuccess = () => {
    setCurrentView('portal');
  };

  const handleNavigateToLifeDashboard = () => {
    setCurrentView('life-dashboard');
  };

  const handleNavigateToClientManagement = () => {
    setCurrentView('client-management');
  };

  const handleLogout = () => {
    setCurrentView('landing');
  };

  // Show Client Management
  if (currentView === 'client-management') {
    return <ClientManagementWrapper />;
  }

  // Show Life Dashboard
  if (currentView === 'life-dashboard') {
    return <LifeDashboardWrapper onNavigateToClientManagement={handleNavigateToClientManagement} />;
  }

  // Show Portal if logged in
  if (currentView === 'portal') {
    return <Portal onNavigateToLifeDashboard={handleNavigateToLifeDashboard} onLogout={handleLogout} />;
  }

  return (
    <div className="size-full relative overflow-x-hidden bg-white">
      {/*
        Layout Architecture:
        - Header: Full-width (spans entire viewport)
        - Header Content: Centered within 1440px max-width
        - Main Content: Centered within 1440px max-width
        - This creates a consistent, centered layout while allowing the header background to span edge-to-edge
      */}

      {/* Full-width Desktop Header */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="w-full px-6 py-4">
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
              <div className="content-stretch flex gap-[4px] h-[36px] items-center rounded-[8px] shrink-0 hover:bg-[rgba(0,0,0,0.05)] px-2 cursor-pointer">
                <div className="relative shrink-0 size-[20px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <div className="absolute contents inset-0">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="message-question">
                          <path d={svgPaths.pbf7e8f0} fill="var(--fill-0, #151515)" id="Vector" />
                          <path d={svgPaths.pd291a80} fill="var(--fill-0, #151515)" id="Vector_2" />
                          <path d={svgPaths.p3e6ae180} fill="var(--fill-0, #151515)" id="Vector_3" />
                          <g id="Vector_4" opacity="0" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#151515] text-[14px] whitespace-nowrap">Help</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Base landing page - hidden on mobile/tablet, max-width constrained */}
      <div className="absolute inset-0 hidden lg:flex lg:justify-center lg:pt-[104px]">
        <div className="w-full max-w-[1440px] relative">
          <LandingPageBase />
        </div>
      </div>

      {/* Overlay: Hide original elements that we're replacing */}
      <style>{`
        /* Hide static image columns */
        [data-name="LP Image 1"],
        [data-name="LP Image 2"],
        [data-name="LP Image 3"],
        [data-name="LP Image 4"] {
          opacity: 0;
          pointer-events: none;
        }

        /* Hide original rotating text component */
        [data-name="Component 19"] {
          opacity: 0;
          pointer-events: none;
        }

        /* Hide original header from base landing page */
        [data-name="Landing Page"] > [data-name="Header"] {
          opacity: 0;
          pointer-events: none;
          height: 0;
          overflow: hidden;
        }

        /* Hide original Sign In button */
        [data-name="Landing Page"] [data-name="<Button>"] {
          opacity: 0;
          pointer-events: none;
        }
      `}</style>

      {/* Responsive Layout - shown on mobile/tablet */}
      <div className="lg:hidden bg-white min-h-screen p-6">
        {/* Mobile Header */}
        <div className="bg-[rgba(46,46,46,0.05)] flex items-center justify-between px-4 py-3 rounded-[12px] mb-8">
          <div className="flex gap-2 items-center">
            <div className="relative size-[32px] overflow-hidden">
              <img alt="" className="absolute h-[152.45%] left-[-55.4%] max-w-none top-[-26.23%] w-[211.64%]" src={imgPrimaryLogo} />
            </div>
            <div className="text-[#151515]">
              <p className="font-['Inter:Bold',sans-serif] font-bold text-[16px] tracking-[1.5px]">Quantum</p>
              <p className="font-['Leadway_Bold:Regular',sans-serif] text-[6px] tracking-[1px]">UNIFIED INTELLIGENCE</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <LanguageDropdown />
          </div>
        </div>

        {/* Mobile Content */}
        <div className="space-y-6">
          {/* Header with rotating text */}
          <div className="flex flex-wrap items-baseline gap-2">
            <p className="font-['Leadway_Heavy:Regular',sans-serif] text-[36px] sm:text-[48px] leading-tight text-[#181d27]">Quantum</p>
            <p className="font-['Leadway_Bold:Regular',sans-serif] text-[36px] sm:text-[48px] leading-tight text-[#ff6b22]">x</p>
            <div className="h-[48px] sm:h-[60px] overflow-hidden flex-shrink-0">
              <RotatingText />
            </div>
          </div>

          {/* Body text */}
          <p className="font-['My_Font:Regular',sans-serif] text-[16px] sm:text-[18px] leading-[1.6] text-[#181d27]">
            Welcome to the Leadway Product Hub. Your one-stop access to the full suite of Leadway products and services.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="bg-[#ff6b22] w-full sm:w-auto flex items-center justify-center px-12 py-3 rounded-[8px] shadow-lg cursor-pointer hover:bg-[#e55e1a] transition-colors"
          >
            <p className="font-['My_Font:Regular',sans-serif] text-[16px] text-[#242424]">Sign In</p>
          </button>

          {/* Mobile Image Gallery - 2 columns */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <ImageCard1 />
            <ImageCard2 />
            <IconCard />
            <ImageCard3 />
            <ImageCard4 />
            <ImageCard5 />
          </div>
        </div>
      </div>

      {/* Desktop Layout - Override elements - centered within 1440px max-width */}
      <div className="hidden lg:flex lg:justify-center lg:pt-[104px]">
        <div className="w-full max-w-[1440px] relative">
          {/* Rotating text overlay - positioned over Component 19 */}
          <div className="absolute left-[478px] top-[80px] z-20">
            <RotatingText />
          </div>

          {/* CTA Button overlay - positioned below body text */}
          <div className="absolute left-[40px] top-[350px] z-20">
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="bg-[#ff6b22] content-stretch flex flex-col h-[48px] items-center justify-center overflow-clip px-[80px] py-[16px] rounded-[8px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] cursor-pointer hover:bg-[#e55e1a] transition-colors"
            >
              <p className="font-['My_Font:Regular',sans-serif] leading-[24px] not-italic text-[#242424] text-[16px] whitespace-nowrap">Sign In</p>
            </button>
          </div>

          {/* Scrolling Image Column 1 (leftmost) - scrolls down */}
          <div className="absolute h-[934px] left-[760px] overflow-clip top-[80px] w-[166px] z-10">
            <ScrollingImageColumn direction="down" speed={0.6}>
              <div className="flex flex-col gap-[32px] items-center w-[164px]">
                <ImageCard1 />
                <ImageCard2 />
                <IconCard />
                <ImageCard3 />
                <ImageCard4 />
                <ImageCard6 />
                <ImageCard2 />
                <ImageCard4 />
              </div>
            </ScrollingImageColumn>
          </div>

          {/* Scrolling Image Column 2 - scrolls up */}
          <div className="absolute h-[631px] left-[958px] overflow-clip top-[80px] w-[166px] z-10">
            <ScrollingImageColumn direction="up" speed={0.8}>
              <div className="flex flex-col gap-[32px] items-start w-[164px]">
                <ImageCard4 />
                <IconCard />
                <ImageCard6 />
                <ImageCard7 />
                <ImageCard3 />
                <ImageCard7 />
                <ImageCard9 />
                <ImageCard7 />
              </div>
            </ScrollingImageColumn>
          </div>

          {/* Scrolling Image Column 3 - scrolls down */}
          <div className="absolute h-[934px] left-[1156px] overflow-clip top-[80px] w-[166px] z-10">
            <ScrollingImageColumn direction="down" speed={0.7}>
              <div className="flex flex-col gap-[32px] items-start w-[164px]">
                <ImageCard7 />
                <ImageCard8 />
                <IconCard />
                <ImageCard9 />
                <ImageCard7 />
                <ImageCard8 />
                <IconCard />
                <ImageCard9 />
              </div>
            </ScrollingImageColumn>
          </div>

          {/* Scrolling Image Column 4 (rightmost) - scrolls up */}
          <div className="absolute h-[631px] left-[1354px] overflow-clip top-[80px] w-[164px] z-10">
            <ScrollingImageColumn direction="up" speed={0.5}>
              <div className="flex flex-col gap-[32px] items-start w-[164px]">
                <IconCard />
                <ImageCard10 />
                <ImageCard5 />
                <ImageCard1 />
                <IconCard />
                <ImageCard10 />
                <ImageCard5 />
                <ImageCard1 />
              </div>
            </ScrollingImageColumn>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}
