import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}
export function Heading({ children }: HeadingProps) {
  return (
    <h1 className="flex items-center text-xl xs:text-2xl sm:text-4xl my-8">
      {children}
    </h1>
  );
}
