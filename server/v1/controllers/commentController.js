import questionDb from '../model/database';

/**
 * @description class for comments
 */

export default class Comment {
    /**
     * @description creates a comment
     * @param {object} req
     * @param {object} res
     * @return {object}
     */
    static postOneComment(req, res) {
        const questionId = parseInt(req.params.questionId, 10);
        const answerId = parseInt(req.params.answerId, 10);

        const result = questionDb.questions.find(question => question.id === questionId);
        if (!result) {
            res.status(404).json({
                status: 'failure',
                message: 'Question not found',
            });
        }
        const answerResult = result.answers.find(answers => answers.id === answerId);
        if (!answerResult) {
            res.status(404).json({
                status: 'failure',
                message: 'Answer not found',
            });
        } else {
            answerResult.comment.push({
                id: answerResult.comment.length + 1,
                userId: req.body.userId,
                body: req.body.body,
            });
            return res.status(201).json({
                status: 'success',
                message: 'New comment was added',
                data: answerResult.comment[answerResult.comment.length - 1],
            });
        }
    }
}