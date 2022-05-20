import { ChangeEvent } from "react";

interface TextInputProps {
  error?: string;
  id: string;
  label?: string;
  maxLength?: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
}

export function TextInput({
  error,
  id,
  label,
  maxLength = 50,
  onChange,
  placeholder,
  value,
  ...props
}: TextInputProps) {
  return (
    <div className="mb-4 flex flex-col">
      {label && (
        <label className="mb-[2px]" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={`rounded-md indent-3 min-h-[50px] text-black ${
          error
            ? "outline outline-error outline-2"
            : "focus-visible:outline-theme"
        }`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        maxLength={maxLength}
        {...props}
      />
    </div>
  );
}
