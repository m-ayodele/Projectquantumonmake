import { ReactNode } from 'react';

interface ResponsiveHeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export function ResponsiveHeading({ children, level = 1, className = '' }: ResponsiveHeadingProps) {
  const baseStyles = 'font-bold text-[#181d27]';

  const levelStyles = {
    1: 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight',
    2: 'text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight',
    3: 'text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-snug',
    4: 'text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-snug',
    5: 'text-base sm:text-lg lg:text-xl xl:text-2xl leading-normal',
    6: 'text-sm sm:text-base lg:text-lg xl:text-xl leading-normal',
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`${baseStyles} ${levelStyles[level]} ${className}`}>
      {children}
    </Tag>
  );
}

interface ResponsiveParagraphProps {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function ResponsiveParagraph({ children, size = 'medium', className = '' }: ResponsiveParagraphProps) {
  const baseStyles = 'text-[#181d27] leading-relaxed';

  const sizeStyles = {
    small: 'text-sm sm:text-base',
    medium: 'text-base sm:text-lg',
    large: 'text-lg sm:text-xl lg:text-2xl',
  };

  return (
    <p className={`${baseStyles} ${sizeStyles[size]} ${className}`}>
      {children}
    </p>
  );
}

interface ResponsiveLinkProps {
  children: ReactNode;
  href: string;
  external?: boolean;
  className?: string;
}

export function ResponsiveLink({ children, href, external = false, className = '' }: ResponsiveLinkProps) {
  const baseStyles = 'text-[#ff6b22] hover:text-[#e55e1a] underline transition-colors cursor-pointer';

  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a href={href} className={`${baseStyles} ${className}`} {...externalProps}>
      {children}
      {external && ' ↗'}
    </a>
  );
}
