import React from "react";

interface LandingCardProps {
  icon?: React.ReactNode;
  title?: string;
  text?: string;
}

export default function LandingCard({
  icon,
  title,
  text
}: LandingCardProps) {
  return (
    <div className="relative bg-purple-50 border-purple-700 border-2 rounded-lg max-h-60 max-w-58 p-4 flex flex-col mb-2">
      {icon && (
        <div className="absolute top-2 left-2">
          {icon}
        </div>
      )}
      <div className="flex flex-col justify-start text-justify w-full pt-8">
        {title && <h2 className="text-l font-bold mb-1 p-1">{title}</h2>}
        {text && <p className="text-sm p-1">{text}</p>}
      </div>
    </div>
  )
}
