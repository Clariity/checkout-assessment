import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

interface LinkButtonProps extends ButtonProps {
  link: string;
}

export function Button({ children, disabled, onClick }: ButtonProps) {
  return (
    <button
      className="flex justify-center items-center text-black text-sm md:text-xl rounded-md px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed bg-theme hover:bg-theme-hover w-full"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function LinkButton(props: LinkButtonProps) {
  return (
    <Link href={props.link}>
      <a className="mx-auto">
        <Button {...props} />
      </a>
    </Link>
  );
}
