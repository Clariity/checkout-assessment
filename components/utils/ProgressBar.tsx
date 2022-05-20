import { useEffect, useState } from "react";

interface ProgressBarProps {
  number: number;
  total: number;
}

export function ProgressBar({ number, total }: ProgressBarProps) {
  const [isRendered, setIsRendered] = useState<boolean>(false);

  // show animation on render
  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <div className="flex w-full h-6 bg-primaryhover rounded-md">
      <div
        className="bg-theme text-fg-primary h-full mr-auto px-4 rounded-md transition-[width] duration-1000 flex justify-end"
        style={{
          width: isRendered ? `${(number / total) * 100}%` : "0%",
        }}
      >
        {number}
      </div>
    </div>
  );
}
