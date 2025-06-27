import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    
    minSalary: {
    type: Number,
    required: true,
    default:0
    },
    maxSalary: {
    type: Number,
    required: true,
    },

    jobType:{
        type:String,
        required:true
    },
    description: {
      type: [String],
      required: true,
    },
    experience:{
        type:String,
        required:true
    },
    deadlineDate: {
      type: Date,
      required: true
    },
    logoUrl: {
      type: String, // optional: for company logo (can be used in cards)
      default: '',
    },
  },
  { timestamps: true }
);

const Job = mongoose.model('Job', jobSchema)
export default Job ;
