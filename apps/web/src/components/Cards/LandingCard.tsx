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
    <div className="bg-purple-100 border-purple-700 border-2 rounded-lg max-h-40 max-w-48 p-2 flex flex-col justify-center items-start">
      {icon && <div className="mb-1">{icon}</div>}
      {title && <h2 className="text-l font-bold mb-1">{title}</h2>}
      {text && <p className="text-sm text-justify">{text}</p>}
    </div>
  )
}
