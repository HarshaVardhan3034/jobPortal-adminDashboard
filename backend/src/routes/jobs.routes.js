import express from 'express';
import { addJob, filterJobs, getAllJobs } from '../controllers/jobs.controller.js';

const router = express.Router();

router.post('/add-job',addJob);
router.get('/get-AllJobs',getAllJobs);
router.get('/get-filteredJobs',filterJobs);

export default router;