import { ReactNode } from "react";

interface ErrorMessageProps {
  children: ReactNode;
}

export function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <div className="text-error p-4 my-2 rounded-md border-2">
      <div className="flex flex-col">{children}</div>
    </div>
  );
}
