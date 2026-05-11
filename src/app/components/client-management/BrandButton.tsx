"use client";

import React from "react";
import ButtonBase from "@mui/material/ButtonBase";

// @ts-ignore – @quantum/react-components ships its own @types/react causing a ReactNode mismatch
import { QuantumButton as _QuantumButton } from "@quantum/react-components";
const QButton = _QuantumButton as React.ComponentType<any>;

type BrandButtonProps = {
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  width?: "small" | "medium" | "large" | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
  sx?: Record<string, unknown>;
  [key: string]: unknown;
};

const SIZE_CLASSES: Record<string, string> = {
  sm: "h-7 px-2 text-xs gap-1",
  md: "h-9 px-4 text-sm gap-2",
  lg: "h-10 px-6 text-base gap-2",
};

const WIDTH_SX: Record<string, Record<string, unknown>> = {
  small:  { minWidth: 80,  width: 80  },
  medium: { minWidth: 140, width: 140 },
  large:  { minWidth: 200, width: 200 },
};

export function BrandButton({
  variant = "primary",
  size = "md",
  width,
  onClick,
  children,
  className,
  sx,
  ...props
}: BrandButtonProps) {
  const sizeClass = SIZE_CLASSES[size ?? "md"];
  const widthSx = width ? (WIDTH_SX[width] ?? { width }) : {};

  if (variant === "outline") {
    return (
      <ButtonBase
        onClick={onClick}
        className={`inline-flex items-center justify-center cursor-pointer font-bold rounded-[8px] !px-[22px] !border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 ${sizeClass} ${className ?? ""}`}
        sx={{ borderRadius: "8px", ...widthSx }}
        {...(props as any)}
      >
        {children}
      </ButtonBase>
    );
  }

  if (variant === "ghost") {
    return (
      <ButtonBase
        onClick={onClick}
        className={`inline-flex items-center justify-center cursor-pointer font-bold rounded-[8px] !px-[22px] border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 ${sizeClass} ${className ?? ""}`}
        sx={{ borderRadius: "8px", height: 34, ...widthSx }}
        {...(props as any)}
      >
        {children}
      </ButtonBase>
    );
  }

  const withShadow = ["primary", "secondary", "tertiary"].includes(
    variant ?? "",
  );
  const shadow =
     "0 4px 10px rgba(0,0,0,0.18), 0 6px 6px rgba(0,0,0,0.16), 0 2px 6px rgba(0,0,0,0.22)";

  const hoverShadow =
       "0 1px 5px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2)";


  const baseSx = {
    py: size === "sm" ? "4px" : "8px",
    px: size === "sm" ? "12px" : "22px",
    minHeight: size === "sm" ? "28px" : "32px",
    fontWeight: 600,
    borderRadius: "4px",
    ...(variant === "tertiary" && { color: "rgba(0,0,0,0.87)" }),
    ...(withShadow && {
      boxShadow: shadow,
      transition: "box-shadow 0.2s ease, transform 0.15s ease",
      "&:hover": {
        boxShadow: hoverShadow,
        transform: "translateY(-1px)",
      },
      "&:active": {
        boxShadow: shadow,
        transform: "translateY(0)",
      },
    }),
  };

  return (
    <QButton
      variant={variant}
      size={size}
      onClick={onClick}
      className={`${className ?? ""}`}
      sx={{ ...baseSx, ...widthSx, ...sx }}
      {...props}
    >
      {children}
    </QButton>
  );
}
