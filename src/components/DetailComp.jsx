import React from 'react'
import SkillComp from './SkillComp'

const DetailComp = ({agentDetail}) => {
  return (
    <div className='flex justify-center items-center width-[100%]  py-5'>
    <div className='w-[90%] flex items-center justify-center gap-5'>
            <div className='gap-4 flex flex-col justify-center items-center' > <img className='w-[90%]' src={agentDetail?.fullPortrait} alt="" />
            <p className='text-3xl font-extrabold'>{agentDetail?.role?.displayName}</p>
                <p className='text-xl font-bold'>{agentDetail?.role?.description}</p>
            </div>
            <div className='flex flex-col gap-3' >
                <h1 className=' text-center font-extrabold text-4xl border-b-4 pb-4'>{agentDetail?.displayName}</h1>
                <div className='flex flex-col gap-2'>
                    {
                        agentDetail?.abilities?.map((skill, index) =>{
                            return <SkillComp key={index} skill={skill}/>
                        })
                    }

                </div>

            </div>
    </div>
    </div>
  )
}

export default DetailComp