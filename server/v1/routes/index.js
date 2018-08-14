// importing express library
import express from 'express';

// importing the question router
import question from './questionroute';

// importing router for question class
const router = express.Router();


// creating api for question class
router.use('/api/v1/questions', question);

export default router;