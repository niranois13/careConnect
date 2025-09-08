import { ReactNode } from "react";

interface PanelCardButtonProps {
  icon: ReactNode;
  label: string;
  onClick: () => void;
}

interface PanelCardButtonsProps {
  buttons: PanelCardButtonProps[];
}

export default function PanelCardButtons({ buttons }: PanelCardButtonsProps): ReactNode {
  return (
    <div className="w-full p-1 bg-purple-700 text-white text-lg flex justify-around my-4">
      {buttons && (
        buttons.map((btn, i) => (
          <button
            key={i}
            onClick={btn.onClick}
            className="flex gap-3 items-center"
          >
            {btn.icon}
            <label>{btn.label}</label>
          </button>
        )))}
    </div>
  )
}
