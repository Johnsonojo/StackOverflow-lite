import questionDatabase from '../model/database';

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
        const result = {
            status: 'failure',
            message: 'question not found',
        };
        const { questionId, answerId } = req.params;
        if (!req.body.body || !req.body.userId) {
            return res.json({
                status: 'failure',
                message: 'Please fill all field',
            });
        }
        questionDatabase.questions.forEach((question) => {
            if (question.id === parseInt(questionId, 10)) {
                question.answers.forEach((answer) => {
                    if (answer.id === parseInt(answerId, 10)) {
                        answer.comment.push({
                            id: answer.comment.length + 1,
                            userId: req.body.userId,
                            body: req.body.body,
                        });
                        return res.status(200).json({
                            status: 'success',
                            message: 'New comment was added',
                            data: answer.comment[answer.comment.length - 1],
                        });
                    }
                });
            }
        });
        return result;
    }
}