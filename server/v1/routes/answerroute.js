// importing express library
import express from 'express';

// importing answer controller
import answerClassController from '../controllers/answercontroller';

// importing router for questions
const answerRouter = express.Router();

answerRouter.post('/:questionId/answers', answerClassController.postAnswer)


export default answerRouter;