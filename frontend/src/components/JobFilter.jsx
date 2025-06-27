import React, { useEffect, useState } from 'react'
import { GoSearch } from "react-icons/go";
import Select from 'react-select'
import { options , customStyles,jobTypes } from '../utils/ReactSelectProps';
import { SlLocationPin } from "react-icons/sl";
import { BiUserVoice } from "react-icons/bi";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
const JobFilter = ({setFilters,setFiltersUpdated}) => {
    const [title,setTitle] = useState('');
    const [location, setLocation] = useState(null);
    const [jobType, setJobType] = useState(null);
    const [value, setValue] = useState([0, 1000000]);

    useEffect(() => {
      setFilters({
        title,
        location,
        jobType,
        minSalary:value[0],
        maxSalary:value[1]
      })
      setFiltersUpdated(true);
    
      
    }, [title,location,jobType,value]);
    
    

    const formatK = (val) => `${val / 1000}k`;

    const handleChange = (event, newValue) => {
        setValue(newValue); // [minSalary, maxSalary]
    };


   
        
  return (
    <div className="p-8 pb-6 bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className='flex items-center justify-start gap-3  ml-10 border-r-2'>
        <GoSearch className='text-lg text-[#686868]' />
        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className='w-60 h-10 outline-none ' placeholder='Search By Job Title, Role' />
      </div>
      <div className='flex items-center justify-start gap-3  border-r-2 '>
        <SlLocationPin className='text-lg text-[#686868]' />
        <Select className='w-60 h-10 !outline-none'
           options={options}
           placeholder="Preferred Location"
           isSearchable
           noOptionsMessage={()=> "No Locations Found"}
           styles={customStyles}
           value={options.find(option => option.value === location)}
           onChange={(selectedOption) => setLocation(selectedOption?.value || '')}
           isClearable

        />
      </div>
      <div className='flex items-center justify-start gap-3  border-r-2'>
        <BiUserVoice className=' size-6 text-[#686868]' />
        <Select className='w-60 h-10 !outline-none'
           options={jobTypes}
           placeholder="Job type"
           isSearchable
           noOptionsMessage={()=> "No Locations Found"}
           styles={customStyles}
            value={jobTypes.find(option => option.value === jobType)}
           onChange={(selectedOption) => setJobType(selectedOption?.value || '')}
           isClearable
        />
    </div>
      <div className='flex-col items-center justify-between mr-8 ml-8'>
        <Box sx={{ width: '100%' }}>
        <label className="text-base font-medium text-black mb-1 flex items-center justify-between">
        Salary Per Month
        <div className="flex items-center justify-between gap-3 text-sm mt-1 text-gray-600">
        <span className='text-base text-black'>₹{formatK(value[0])}</span>-
        <span className='text-base text-black'>₹{formatK(value[1])}</span>
      </div>
      </label>
      <Slider className='!text-black '
        getAriaLabel={() => 'Salary range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        min={0}
        max={100000}
        step={10000}
        
        getAriaValueText={(val) => `₹${val}`}
      />
      
    </Box>
      </div>
    </div>
  )
}

export default JobFilter