// importing express library
import express from 'express';
import validator from '../middleware/validator';


// importing answer controller
import answerClassController from '../controllers/answerController';

// importing router for questions
const answerRouter = express.Router();

answerRouter.post('/:questionId/answers', validator.validateAnswer, answerClassController.postAnswer);

answerRouter.get('/:questionId/answers', validator.checkQuestionId, answerClassController.getAllAnswersToAQuestion);


export default answerRouter;