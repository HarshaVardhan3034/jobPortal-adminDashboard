import mongoose from "mongoose";
import Job from "../models/jobs.model.js";

export const addJob = async (req,res)=>{
    const {title,experience,company,location,minSalary, maxSalary,jobType,description,logoUrl,applicationDeadline} = req.body;

    try {
        if(!title || !experience || !company || !location|| !jobType || !description || !maxSalary || !applicationDeadline){
            return res.status(400).json({message:"All fields are required"});

        }
        const [day, month, year] = applicationDeadline.split("-");
        const deadlineDate = new Date(`${year}-${month}-${day}`);

        const newJob = new Job({
            title,
            company,
            location,
            minSalary,
            maxSalary,
            jobType,
            description,
            experience,
            deadlineDate,
            logoUrl
        });

        if(newJob){
            await newJob.save();

            res.status(201).json({
                _id:newJob._id,
                title:newJob.title,
                company:newJob.company,
                location:location,
                minSalary:newJob.minSalary,
                maxSalary:newJob.maxSalary,
                jobType:newJob.jobType,
                description:newJob.description,
                experience:newJob.experience,
                deadlineDate:newJob.deadlineDate,
                logoUrl:newJob.logoUrl
            }
            )
        }else{
            res.status(400).json({message:"Invalid Job data"});
        }

    } catch (error) {
        console.log("Error in Add Job controller: ",error);
        res.status(500).json({message:"Internal server Error",error})
    }
};

export const getAllJobs = async (req,res)=>{
    try {
        const jobs = await Job.find();
        if(!jobs){
            return res.status(400).json({message:"Can't retrieve data from database"});
        }
        res.status(201).json(jobs);
    } catch (error) {
        console.log("Error in Get All Jobs controller: ",error);
        res.status(500).json({message:"Internal server Error",error})
    }
};

export const filterJobs = async (req, res) => {
  try {
    const { title, location,jobType, minSalary, maxSalary } = req.query;
    const query = {};

     if (title && title.trim() !== "") {
      query.title = { $regex: new RegExp(title, 'i') };
    }

    if (location && location.trim() !== "") {
      query.location = { $regex: new RegExp(location, 'i') };
    }

    if (jobType && jobType.trim() !== "") {
      query.jobType = { $regex: new RegExp(jobType, 'i') };
    }

    if (minSalary || maxSalary) {
      query.minSalary = {};
      if (minSalary) query.minSalary.$gte = parseInt(minSalary);
      if (maxSalary) query.maxSalary = { $lte: parseInt(maxSalary) };
    }

    console.log(query);
    
    const jobs = await Job.find(query);
    res.status(200).json(jobs);
  } catch (error) {
    console.error('Error in filterJobs controller:', error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};