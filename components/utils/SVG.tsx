import { ReactNode } from "react";

interface SVGProps {
  dimOnHover?: boolean;
  icon: ReactNode;
}

export function SVG({ icon }: SVGProps) {
  return (
    <svg
      className="min-w-[24px] min-h-[24px] fill-fg-primary hover:opacity-50"
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 24 24"
    >
      {icon}
    </svg>
  );
}
