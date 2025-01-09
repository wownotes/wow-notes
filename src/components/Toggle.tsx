import React from "react";

export interface ToggleProps {
  options: Array<{ label: string; value: "dungeons" | "raids" }>;
  activeValue: "dungeons" | "raids";
  onToggle: (value: "dungeons" | "raids") => void;
}

const Toggle: React.FC<ToggleProps> = ({ options, activeValue, onToggle }) => {
  return (
    <div className="flex space-x-4">
      {options.map((option) => (
        <button
          key={option.value}
          className={`px-4 py-2 rounded-md ${
            activeValue === option.value
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => onToggle(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Toggle;
