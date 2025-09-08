import { ReactNode } from "react";

interface PanelCardFieldProps {
  labelIcon?: ReactNode,
  mainText?: string,
  secondaryText?: string,
  optionIcons?: ReactNode[];
}

export default function PanelCardField({
  labelIcon,
  mainText,
  secondaryText,
  optionIcons = []
}: PanelCardFieldProps): ReactNode {
  return (
    <div className='flex items-center justify-between w-full my-2 px-2'>
      <div className="flex items-center gap-3">
        <div className='flex-shrink-0'>
          {labelIcon && (
            <div>
              {labelIcon}
            </div>
          )}
        </div>
        <div className="flex-1 flex text-justify gap-2">
          {mainText && (
            <p className='color-gray-900 xs:text-xs sm:text-sm md:text-md lg:text-lg'>
              {mainText}
            </p>
          )}
          {secondaryText && (
            <p className='color-gray-900 xs:text-xs sm:text-sm md:text-md lg:text-lg'>
              {secondaryText}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-1 flex-shrink-0">
        {optionIcons.map((icon, i) => (
          <div key={i}>{icon}</div>
        ))}
      </div>
    </div>
  )
}
