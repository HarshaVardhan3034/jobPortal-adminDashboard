import React from 'react';
import { MdWork, MdLocationOn, MdAccessTime } from 'react-icons/md';
import { FaMoneyBillWave } from 'react-icons/fa';
import { BiUserPlus } from "react-icons/bi";
import { TbBuildings } from "react-icons/tb";
import companyLogos from '../utils/companyLogos';
const JobCard = ({job}) => {
  const {
    logoUrl,
    title,
    company,
    experience,
    location,
    jobType,
    minSalary,
    maxSalary,
    description,
    createdAt,
  } = job;
  
  const companyLogo = companyLogos[company] || "https://via.placeholder.com/80";
  
  const formatAnnualSalary = (monthly) => {
    const annual = monthly * 12;
    return `${(annual / 100000).toFixed(1)}LPA`;
};

  const getTimeAgo = (date) => {
    const hours = Math.floor((new Date() - new Date(date)) / 3600000);
    return hours < 24 ? `${hours}h Ago` : `${Math.floor(hours / 24)}d Ago`;
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-5 w-full max-w-sm flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div className='bg-[#f6f6f6] p-3 rounded-lg'>
          <img src={companyLogo} alt="Amazon" className="w-12 h-12 rounded-full" />
        </div>
        
        <span className="text-xs bg-blue-100 text-[#B0D9FF] px-2 py-1 rounded-md font-medium">
          <p className='text-black'>{getTimeAgo(createdAt)}</p>
        </span>
      </div>

      <div>
        <h2 className="font-bold text-lg">{title}</h2>
      </div>

      <div className="flex gap-3 flex-wrap text-sm text-gray-600">
        <span className="flex items-center gap-1 text-[#5A5A5A] text-md">
          <BiUserPlus className='text-xl'/> {experience} yr Exp
        </span>
        <span className="flex items-center gap-1 text-[#5A5A5A]">
          <TbBuildings />{jobType}
        </span>
        <span className="flex items-center gap-1">
          
        <svg className='size-3' xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M22.485,10.975,12,17.267,1.515,10.975A1,1,0,1,0,.486,12.69l11,6.6a1,1,0,0,0,1.03,0l11-6.6a1,1,0,1,0-1.029-1.715Z"/><path d="M22.485,15.543,12,21.834,1.515,15.543A1,1,0,1,0,.486,17.258l11,6.6a1,1,0,0,0,1.03,0l11-6.6a1,1,0,1,0-1.029-1.715Z"/><path d="M12,14.773a2.976,2.976,0,0,1-1.531-.425L.485,8.357a1,1,0,0,1,0-1.714L10.469.652a2.973,2.973,0,0,1,3.062,0l9.984,5.991a1,1,0,0,1,0,1.714l-9.984,5.991A2.976,2.976,0,0,1,12,14.773ZM2.944,7.5,11.5,12.633a.974.974,0,0,0,1,0L21.056,7.5,12.5,2.367a.974.974,0,0,0-1,0h0Z"/></svg>
            {formatAnnualSalary(maxSalary)}
        </span>
      </div>

      <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
        {description?.slice(0, 2).map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>

      <button className="mt-3 bg-[#00AAFF] text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
