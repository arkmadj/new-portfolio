import Image from 'next/image';
import React from 'react'

export interface ButtonProps {
  label: string;
  icon?: React.FC;
  className?: string
}

const AppButton = ({label, icon: Icon, className}: ButtonProps) => {
  return (
    <button className={`flex gap-1 items-center font-sans text-black bg-white border-none outline-none px-6 py-3 rounded font-bold ${className}`}>
      {label}
      {Icon && <Icon/>}
      </button>
  )
}

export default AppButton