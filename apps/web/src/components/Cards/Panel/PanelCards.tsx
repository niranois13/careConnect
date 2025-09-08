import { ReactNode } from "react";

interface PanelCardProps {
  icon?: ReactNode,
  title?: string,
  children: ReactNode,
  buttons?: ReactNode
}

export default function PanelCard({ icon, title, children, buttons }: PanelCardProps): ReactNode {
  return (
    <div className="border-2 border-purple-700 rounded-lg bg-purple-100 opacity-75 flex flex-col my-1">
      <div className='flex gap-3 justify-around items-center p-1 my-2'>
        {icon && (
          <div>{icon}</div>
        )}
        {title && (
          <p className="text-xl text-gray-900 font-bold">{title}</p>
        )}
        <div className="flex-shrink-0 w-6"></div>
      </div>
      <div className="w-4/5 mx-auto border-b-2 border-purple-600"></div>
      <div className="flex flex-col items-center justify-start">
        {children}
      </div>
      {buttons && (
        <div>
          {buttons}
        </div>
      )}
    </div>
  )
}
