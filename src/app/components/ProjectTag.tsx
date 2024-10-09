import React from 'react'

type Props = {
  name: string
  onClick: (name:string) => void
  iselected: boolean
}

const ProjectTag = ({name, onClick, iselected}: Props) => {
  const buttonClasses = iselected ?
    'text-white border-purple-500' :
    'text-[#ADB7BE] border-slate-600 hover:border-white';
  return (
    <button className={`${buttonClasses} rounded-full border-2
       px-6 py-3 text-xl cursor-pointer`} onClick={()=>onClick(name)}>{name}</button>
  )
}

export default ProjectTag
