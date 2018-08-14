// importing express library
import express from 'express';

// importing question controller
import questionClassController from '../controllers/questioncontroller';

// importing router for questions
const questionRouter = express.Router();

questionRouter.get('/', questionClassController.getAllQuestions)

questionRouter.get('/:questionId', questionClassController.getOneQuestion)

questionRouter.post('/', questionClassController.addNewQuestion)


export default questionRouter;