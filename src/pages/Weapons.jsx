import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeapons } from '../redux/weaponSlice'
import WeaponCard from '../components/WeaponCard'
import Loading from '../layouts/Loading'

const Weapons = () => {

  const dispatch = useDispatch()
  const {weapons, weaponsStatus} = useSelector((state) => state.weapons)
  useEffect(()=>{
    dispatch(getWeapons())
  },[dispatch])
  console.log(weapons);
  return (
    <div className='flex flex-wrap gap-5 justify-center py-6'>
            {weaponsStatus === 'LOADING' ? (
                <Loading />
            ) : (
                <Fragment>
                    {
                        weapons?.map((weapon, index) =>{
                           return <WeaponCard key={index} weapon={weapon}/>
                        })
                    }
                </Fragment>
            )}
        </div>
  )
}

export default Weapons