// importing express library
import express from 'express';

// importing the question and answer router
import question from './questionroute';
import answer from './answerroute';

// importing router for question class
const router = express.Router();


// creating api for question and answer class
router.use('/api/v1/questions', question);
router.use('/api/v1/questions', answer);

export default router;