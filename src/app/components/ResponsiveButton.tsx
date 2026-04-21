import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ResponsiveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidthOnMobile?: boolean;
}

export function ResponsiveButton({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidthOnMobile = false,
  className = '',
  ...props
}: ResponsiveButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-[8px] font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-[#ff6b22] text-[#242424] hover:bg-[#e55e1a] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] active:shadow-inner',
    secondary: 'bg-[#181d27] text-white hover:bg-[#2a3142] shadow-md active:shadow-inner',
    outline: 'bg-transparent border-2 border-[#ff6b22] text-[#ff6b22] hover:bg-[#fff0e9] active:bg-[#ffe5d6]',
  };

  const sizeStyles = {
    small: 'px-4 py-2 text-sm sm:text-base min-h-[44px] sm:min-h-[36px]',
    medium: 'px-6 py-3 text-base sm:text-lg min-h-[48px] sm:min-h-[40px]',
    large: 'px-8 py-4 text-lg sm:text-xl min-h-[52px] sm:min-h-[48px]',
  };

  const widthStyles = fullWidthOnMobile ? 'w-full sm:w-auto' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

interface ResponsiveButtonGroupProps {
  children: ReactNode;
  orientation?: 'horizontal' | 'vertical';
  stackOnMobile?: boolean;
  className?: string;
}

export function ResponsiveButtonGroup({
  children,
  orientation = 'horizontal',
  stackOnMobile = true,
  className = '',
}: ResponsiveButtonGroupProps) {
  const orientationStyles = orientation === 'horizontal' ? 'flex-row' : 'flex-col';
  const mobileStackStyles = stackOnMobile ? 'flex-col sm:flex-row' : orientationStyles;

  return (
    <div className={`flex ${mobileStackStyles} gap-3 sm:gap-4 ${className}`}>
      {children}
    </div>
  );
}
