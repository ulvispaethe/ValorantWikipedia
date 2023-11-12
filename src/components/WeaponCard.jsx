import React from 'react'
import { useNavigate } from 'react-router-dom'

const WeaponCard = ({weapon}) => {

    const navigate = useNavigate()

    const handleCardClick = () => {
      navigate(`weapons/${weapon?.uuid}`)
    }

  return (
    <div className='w-[43%] flex flex-col gap-3'>
        <div className='h-[200px] flex justify-center border-4 rounded-lg items-center'><img className='w-[75%] h-[75%]' src={weapon?.displayIcon} alt="" /></div>
        <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-extrabold'>{weapon?.displayName}</h2>
        <span className='text-2xl font-extrabold'>{weapon?.shopData?.cost? (weapon?.shopData?.cost): (<p>Free</p>)}</span>
        </div>
        <div className='flex flex-wrap gap-2 font-bold justify-between items-center'>
            <p className='w-[40%]'>fireRate: {weapon?.weaponStats?.fireRate} </p> <p className='w-[40%]'>magazineSize: {weapon?.weaponStats?.magazineSize}</p>
            <p className='w-[40%]'>equipTimeSeconds: {weapon?.weaponStats?.equipTimeSeconds}</p>
            <p className='w-[40%]'>reloadTimeSeconds: {weapon?.weaponStats?.equipTimeSeconds}</p> <p className='w-[40%]'>headDamage: {weapon?.weaponStats?.damageRanges[0]?.headDamage}</p>
            <p className='w-[40%]'>bodyDamage: {weapon?.weaponStats?.damageRanges[0]?.bodyDamage}</p> <p className='w-[40%]'>legDamage: {weapon?.weaponStats?.damageRanges[0]?.legDamage}</p>
            <p className='w-[40%]'>rangeEndMeters: {weapon?.weaponStats?.damageRanges[0]?.rangeEndMeters} </p>
        </div>
    </div>
  )
}

export default WeaponCard