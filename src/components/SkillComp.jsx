import React from 'react'

const SkillComp = ({skill}) => {
  return (
    <div className='flex items-center justify-between gap-1 h-[180px]'>
    <div className='text-md w-[80%] flex flex-col gap-3'>
        <h2 className='text-2xl font-extrabold'>{skill.displayName}</h2>
        <p className='font-bold font-medium'>{skill.description}</p>
    </div>
    <div className='bg-black text-center flex justify-center items-center rounded-lg h-[85%]'>
        <img  className='w-[100%] h-[100%]' src={skill.displayIcon} alt="" />
    </div>
</div>
  )
}

export default SkillComp