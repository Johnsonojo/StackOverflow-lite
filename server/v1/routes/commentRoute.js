// importing express library
import express from 'express';

// importing comment controller
import commentClassController from '../controllers/commentController';

// importing router for questions
const commentRouter = express.Router();

commentRouter.post('/:questionId/answers/:answerId/comments', commentClassController.postOneComment);


export default commentRouter;
