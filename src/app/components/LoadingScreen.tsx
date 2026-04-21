import { useEffect, useState } from 'react';
import img3 from "figma:asset/a8dd73fc85a26a5633dfe896b2e45c4a0ab97998.png";

function CircularRotation() {
  return (
    <div className="relative size-[80px]">
      <div className="absolute left-0 size-[80px] top-0">
        <img
          alt="Loading"
          className="absolute block inset-0 max-w-none size-full"
          height="80"
          src={img3}
          width="80"
          style={{
            animation: 'spin 2s linear infinite'
          }}
        />
      </div>
      <div className="absolute left-[34.4px] size-[12px] top-[68px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="#E8611F" r="6" />
        </svg>
      </div>
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

function AnimatedDots() {
  return (
    <div className="h-[28px] overflow-hidden relative w-[13px]">
      <div className="absolute left-[-10px] top-0">
        <div className="absolute h-[28px] left-[4px] top-0 w-[5px] animate-pulse" style={{ animationDelay: '0s' }}>
          <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[28px] not-italic text-[#1c1c1c] text-[18px]">.</p>
        </div>
        <div className="absolute h-[28px] left-[19px] top-0 w-[9px] animate-pulse" style={{ animationDelay: '0.2s' }}>
          <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[28px] not-italic text-[#1c1c1c] text-[18px]">..</p>
        </div>
        <div className="absolute h-[28px] left-[38px] top-0 w-[13px] animate-pulse" style={{ animationDelay: '0.4s' }}>
          <p className="font-['Leadway_Bold:Regular',sans-serif] leading-[28px] not-italic text-[#1c1c1c] text-[18px]">...</p>
        </div>
      </div>
    </div>
  );
}

interface LoadingScreenProps {
  onComplete?: () => void;
  duration?: number;
}

export function LoadingScreen({ onComplete, duration = 3000 }: LoadingScreenProps) {
  const [currentStatus, setCurrentStatus] = useState(0);

  useEffect(() => {
    // Status progression: 0 = Verifying, 1 = Finishing up, 2 = Done
    const timer1 = setTimeout(() => setCurrentStatus(1), duration * 0.33);
    const timer2 = setTimeout(() => setCurrentStatus(2), duration * 0.66);
    const timer3 = setTimeout(() => {
      if (onComplete) onComplete();
    }, duration);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete, duration]);

  const statusMessages = [
    'Verifying Credentials',
    'Finishing up',
    'Done!'
  ];

  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center fixed inset-0 z-[200]">
      <div className="content-stretch flex flex-col gap-[29px] items-center">
        <CircularRotation />

        <div className="h-[28px] relative w-full flex justify-center items-center">
          <div className="flex items-center gap-1">
            <p className="font-['Leadway_Bold:Regular','Noto_Sans:Medium',sans-serif] leading-[28px] text-[#1c1c1c] text-[18px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
              {statusMessages[currentStatus]}
            </p>
            {currentStatus < 2 && <AnimatedDots />}
          </div>
        </div>
      </div>
    </div>
  );
}
