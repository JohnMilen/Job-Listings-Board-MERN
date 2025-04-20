import express from 'express'
import { getAllJobs, postJob } from '../controllers/jobController.js'

const router = express.Router()

router.post('/',postJob)
router.get('/',getAllJobs)

export default router;