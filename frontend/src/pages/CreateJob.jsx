import React from 'react'
import { useForm,Controller  } from 'react-hook-form';
import Select from 'react-select';
import { options,createJobSelectStyle,jobTypes } from '../utils/ReactSelectProps';
import { PiArrowsDownUpThin } from "react-icons/pi";
import toast from 'react-hot-toast';
import axiosInstance from '../utils/axios';
import { HiMiniChevronDoubleDown } from "react-icons/hi2";
const CreateJob = ({setShowCreateJobModal,setNewJobCreated}) => {

  const { register, handleSubmit, setValue, control ,reset,formState:{errors} } = useForm();
  const onSubmit = async (data) => {
    try {
        console.log(data);
        const payload = {
        ...data,
        minSalary: Number(data.minSalary),
        maxSalary: Number(data.maxSalary),
        description: data.description.split('\n'),
        };
        
        
        
        const response = axiosInstance.post('/add-job',payload);
        if(!response){
          console.log("Posting Job data failed");
          
        }
        setNewJobCreated(true);
        reset();
        setShowCreateJobModal(false);

  } catch (error) {
    toast.error("Failed to Create Job");
    console.error('Error submitting job:', error);
  }finally{
    setNewJobCreated(false);
  }
  };
  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white  rounded-lg">
      <h2 className='text-center text-[#222222] text-xl font-semibold mb-10 '>Create Job Openeing</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-2'>
            <div className='px-3 py-1'>
              <label className='block text-[#222222] text-md font-semibold mb-1'>Job Title</label>
              <input {...register('title')} className='w-full px-3 py-2 border rounded-md ' placeholder='e.g. Python Developer'/>
            </div>
            <div className='px-3 py-1'>
              <label className='block text-[#222222] text-md font-semibold mb-1'>Company Name</label>
              <input {...register('company')} className='w-full px-3 py-2 border rounded-md ' placeholder='e.g. Amazon, Swiggy, Apple ....' />
            </div>
          </div>
          {/*Location and Job Type*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">

          <div className='px-3 py-1'>
            <label className="block text-[#222222] text-md font-semibold mb-1">Location</label>
            <Controller
                name="location"
                control={control}
                render={({ field }) => (
                <Select
                  options={options}
                  onChange={(val) => setValue('location', val.value)}
                  placeholder="Choose Preferred Location"
                  className="text-sm"
                  isSearchable
                  styles={createJobSelectStyle}
                  
                />
             )}
            />
          </div>
          <div className='px-3 py-1'>
            <label className="block text-[#222222] text-md font-semibold mb-1">Job Type</label>
            <Controller
                name="location"
                control={control}
                render={({ field }) => (
                <Select
                  options={jobTypes}
                  onChange={(val) => setValue('jobType', val.value)}
                  placeholder="FullTime"
                  className="text-sm"
                  isSearchable
                  styles={createJobSelectStyle}
                />
              )}
            />
          </div>
        </div>
        {/*Salary Range and Application Deadline*/}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-2'>
            <div className='px-3 py-1'>
              <label className="block text-[#222222] text-md font-semibold mb-1">Salary Range</label>
              <div className='flex gap-3'>
                <div className='flex items-center border rounded-md  px-2 '>
                  <PiArrowsDownUpThin />
                  <input {...register('minSalary')} type="number" placeholder="₹ 0" className='w-full px-3 py-2 focus:outline-none focus:ring-0 focus:border-transparent  ' />
                </div>
                <div className='flex  items-center border rounded-md  px-2 '>
                  <PiArrowsDownUpThin />
                  <input {...register('maxSalary')} type="number" placeholder="₹ 1200000" className='w-full px-3 py-2 focus:outline-none focus:ring-0 focus:border-transparent  ' />
                </div>
                
                
              </div>
            </div>
            <div className='px-3 py-1'>
                <label className="block text-[#222222] text-md font-semibold mb-1">Application Deadline</label>
                <input {...register('applicationDeadline')} type="date" className="w-full border px-3 py-2 rounded-md" />
            </div>
        </div>
        {/*Experience*/}
        <div className='flex flex-col gap-1 px-3 py-1'>
          <label className='block text-[#222222] text-md font-semibold mb-1'>Experience</label>
          <input
            type='text'
            placeholder='e.g. 1-3'
            {...register('experience')}
            className='w-full border px-3 py-2 rounded-md'
          />
        </div>
        {/* Job Description */}
        <div className='mb-5 px-3'>
          <label className="block text-[#222222] text-md font-semibold mb-1">Job Description</label>
           <textarea {...register('description')} rows={4} placeholder="Please share a description to let the candidate know more about the job role" className="w-full border px-3 py-2 rounded-md" />
        </div>
        {/* Buttons */}
        <div className="flex justify-between px-3">
          <button type="button" className="px-6 py-2 border border-gray-400 rounded-md text-gray-700 flex items-center gap-0.5">Save Draft <HiMiniChevronDoubleDown /></button>
          <button type="submit" className="bg-[#00AAFF]  text-white px-8 py-2 rounded-md hover:bg-blue-600">Publish »</button>
        </div>
      </form>
    </div>
  )
}

export default CreateJob