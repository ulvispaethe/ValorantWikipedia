import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ agent }) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/agents/${agent?.uuid}`)
  }

  return (
    <div onClick={handleCardClick} className='w-[340px] py-4 px-2 m-2 rounded-lg shadow-lg hover:cursor-pointer'>
      <img className='w-[60%] m-auto' src={agent?.displayIcon} alt="" />
      <div className='text-center p-2 text-lg font-extrabold'>{agent?.displayName}</div>
      <div className='text-center p-2 font-extrabold text-xl'>{agent?.role?.displayName}</div>
    </div>
  )
}

export default Card
