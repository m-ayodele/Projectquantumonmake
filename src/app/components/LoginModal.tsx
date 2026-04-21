import { useState } from 'react';
import imgImage1 from "figma:asset/448faeaee7cd37aa22f925e41c9f58a8cf43e123.png";
import { LoadingScreen } from './LoadingScreen';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: () => void;
}

export function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = () => {
    setIsLoading(true);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    onClose();
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} duration={3000} />;
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] rounded-[16px] shadow-[0px_2px_2px_-1px_#d1d3d8,0px_14px_32px_-8px_#bbbec5] w-full max-w-[409px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="h-[56px] relative shrink-0 w-[152px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full">
              <p className="font-['Leadway_Bold:Regular','Noto_Sans:Medium',sans-serif] leading-[1.3] relative shrink-0 text-[#242424] text-[24px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
                Sign in
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#181d27] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
                Use your Microsoft account.{' '}
                <span className="font-['Leadway_Bold:Regular','Noto_Sans:Medium',sans-serif] text-[#0067b8] cursor-pointer" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
                  What's this?
                </span>
              </p>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="relative rounded-[4px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="content-stretch flex flex-col items-start px-[12px] relative w-full">
                    <div className="content-stretch flex items-center min-h-[24px] overflow-clip py-[8px] relative shrink-0 w-full">
                      <input
                        type="email"
                        placeholder="Email"
                        className="flex-[1_0_0] font-['Leadway_Bold:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic text-[#333] text-[14px] tracking-[0.15px] bg-transparent border-none outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-['My_Font:Regular','Noto_Sans:Medium',sans-serif] leading-[1.3] relative shrink-0 text-[#181d27] text-[10px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
                Not account?{' '}
                <span className="font-['Leadway_Bold:Regular','Noto_Sans:Medium',sans-serif] text-[#0067b8] cursor-pointer" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
                  Create one!
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 361 1">
              <line stroke="#D1D3D8" x2="361" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full">
          <button
            onClick={handleLogin}
            className="bg-[#0067b8] content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0 w-[95px] cursor-pointer hover:bg-[#005a9e]"
          >
            <p className="font-['My_Font:Regular',sans-serif] leading-[24px] not-italic text-[16px] text-white whitespace-nowrap">Next</p>
          </button>
        </div>
      </div>
    </div>
  );
}
