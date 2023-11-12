import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
const Header = () => {
    const navigate = useNavigate()
  return (
    <div className='py-3 px-10 flex justify-between items-center bg-red-500 w-[100%]'>
        <div onClick={()=>navigate("/")} className='flex items-center gap-2 cursor-pointer'><img  className=' w-[6%] h-[6%]' src={logo} alt="" /> <h1 className='font-extrabold text-3xl'>Valorant Wikipedia</h1> </div>
        <div className='flex items-center'>
            <ul className='flex gap-4 items-center text-black font-extrabold text-xl'>
                <li className='cursor-pointer' onClick={()=> navigate("/agents")}>Agents</li>
                <li className='cursor-pointer' onClick={()=> navigate("/maps")} >Maps</li>
                <li className='cursor-pointer' onClick={()=> navigate("/weapons")}>Weapons</li>
            </ul>
        </div>
    </div>
  )
}

export default Header