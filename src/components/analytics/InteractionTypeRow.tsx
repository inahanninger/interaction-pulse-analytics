
import React from "react";

interface InteractionTypeRowProps {
  label: string;
  value: number;
  description: string;
}

const InteractionTypeRow: React.FC<InteractionTypeRowProps> = ({ label, value, description }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
};

export default InteractionTypeRow;
