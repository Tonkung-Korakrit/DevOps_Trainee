import React from 'react'
type SkillIconProps = {
  src: string;
  label: string;
}

const SkillIcon = ({ src, label }: SkillIconProps) => {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <img
        src={src}
        alt={label}
        className="w-12 h-12 object-contain opacity-90 hover:opacity-100 transition"
      />
      <span className="text-sm text-neutral-700">{label}</span>
    </div>
  )
}

export default SkillIcon
