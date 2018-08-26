// importing express library
import express from 'express';
import validator from '../middleware/validator';

// importing question controller
import questionClassController from '../controllers/questionController';


// importing router for questions
const questionRouter = express.Router();

questionRouter.get('/', questionClassController.getAllQuestions);

questionRouter.get('/:questionId', validator.checkQuestionId, questionClassController.getOneQuestion);

questionRouter.post('/', validator.checkQuestionBody, questionClassController.addNewQuestion);

questionRouter.delete('/:questionId', validator.checkQuestionId, questionClassController.deleteOneQuestion);

questionRouter.put('/:questionId', validator.checkQuestionBody, questionClassController.editOneQuestion);

export default questionRouter;