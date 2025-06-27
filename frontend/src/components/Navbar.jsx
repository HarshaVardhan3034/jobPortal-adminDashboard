import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({setShowCreateJobModal}) => {

  const navigate = useNavigate();
  const handleCreateJob = ()=>{
    setShowCreateJobModal(true);
  }

  return (
    <nav className='flex items-center justify-center w-full mt-8'>
        <div className=' flex items-center justify-evenly gap-3 w-[60%] border-black p-3 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)]'>
            <img className='w-[44px] h-[44px]' src="https://www.cybermindworks.com/images/cmwlogo.svg" alt="CyberMindsWorks" />
            <div className='flex items-center justify-between gap-8'>
                <ul className='flex items-start justify-evenly gap-10'>
                    <li className='text-lg font-medium'><Link to="/">Home</Link></li>
                    <li className='text-lg font-medium'><Link to="/">Find Jobs</Link></li>
                    <li className='text-lg font-medium'><Link to="/">Find Talents</Link></li>
                    <li className='text-lg font-medium'><Link to="/">About us</Link></li>
                    <li className='text-lg font-medium'><Link to="/">Testimonials</Link></li>
                    
                </ul>
                <button className='text-white bg-gradient-to-b from-[#A128FF] to-[#6100AD] px-5 py-2 rounded-full' onClick={handleCreateJob}>Create Jobs</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar