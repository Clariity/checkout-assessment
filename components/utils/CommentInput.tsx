import { ChangeEvent } from "react";

interface CommentInputProps {
  error?: string;
  id: string;
  label?: string;
  maxLength?: number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  value: string;
}

export function CommentInput({
  error,
  id,
  label,
  maxLength = 4096,
  onChange,
  placeholder,
  value,
  ...props
}: CommentInputProps) {
  return (
    <div className="mb-4 flex flex-col">
      {label && (
        <label className="mb-[2px]" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`rounded-md p-2 min-h-[300px] text-black resize-none ${
          error
            ? "outline outline-error outline-2"
            : "focus-visible:outline-theme"
        }`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        {...props}
      />
    </div>
  );
}
