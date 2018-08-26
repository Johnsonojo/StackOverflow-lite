// importing express library
import express from 'express';
import validator from '../middleware/validator';


// importing comment controller
import commentClassController from '../controllers/commentController';

// importing router for questions
const commentRouter = express.Router();

commentRouter.post('/:questionId/answers/:answerId/comments', validator.validateComment, commentClassController.postOneComment);


export default commentRouter;