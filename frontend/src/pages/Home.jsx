import React, { useEffect, useState } from 'react'
import JobFilter from '../components/JobFilter'
import JobCard from '../components/JobCard'
import axiosInstance from '../utils/axios'
import CreateJob from './CreateJob'
const Home = ({showCreateJobModal,setShowCreateJobModal}) => {
  const [jobs,setJobs] = useState([]);
  const [newJobCreated,setNewJobCreated] = useState(false);
  const [filtersUpdated,setFiltersUpdated] = useState(false);
  const [filters,setFilters] = useState({
          title: "",
          location: "",
          jobType: "",
          minSalary: 0,
          maxSalary: 1000000
      });
    
    
    console.log(filters)
  const fetchJobs = async ()=>{
      try {
        
        const response = await axiosInstance.get('/get-AllJobs'); 
        setJobs(response.data); 
       
      } catch (err) {
        console.error('Error fetching jobs:', err);
      }
    };
    useEffect(() => {
      fetchJobs();
    },[newJobCreated]);
    const fetchFilteredJobs = async ()=>{
      try {
        
        const response = await axiosInstance.get('/get-filteredJobs',{params:filters});
        setJobs(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error('Error fetching jobs:', err);
      }
    }

    

    useEffect(() => {
       if(filtersUpdated){
        fetchFilteredJobs();
        setFiltersUpdated(false);
      }
    }, [filtersUpdated])
    
    
    
  


  return (
    <div>
        <JobFilter setFilters={setFilters} setFiltersUpdated={setFiltersUpdated}/>
        <div className='p-8 bg-[#f7f9fc] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>

          {jobs.map((job)=>(
            <JobCard key={job._id} job={job}/>
          ))}
          
          
        </div>
        {/* Create Job Show Controller */}
        {showCreateJobModal && (
          
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
          onClick={() => setShowCreateJobModal(false)} >
            <div className="bg-white rounded-lg shadow-lg p-4 w-[90%] max-w-3xl relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when modal itself is clicked
            >
              <CreateJob setShowCreateJobModal={setShowCreateJobModal} setNewJobCreated={setNewJobCreated} />
            </div>
          </div>
          )}
          
      </div>
  )
}

export default Home