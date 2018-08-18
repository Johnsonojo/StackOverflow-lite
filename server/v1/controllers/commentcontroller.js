/* import database */
import questionDatabase from '../model/database';

export default class Comment {
    // Add a comment to an answer
    static postOneComment(req, res) {
        const { questionId, answerId } = req.params;
        if (!req.body.body || !req.body.userId) {
            return res.json({
                status: 'error',
                message: 'Please fill all field',
            });
        }
        questionDatabase.questions.map((value) => {
            if (value.id === parseInt(questionId, 10)) {
                value.answers.map((val) => {
                    if (val.id === parseInt(answerId, 10)) {
                        val.comment.push({
                            id: val.comment.length + 1,
                            userId: req.body.userId,
                            body: req.body.body,
                        });
                        return res.status(200).json({
                            result: val.comment[val.comment.length - 1],
                            message: 'New comment was added',
                            Error: false,
                        });
                    }
                });
            }
        });
        return res.status(404).json({
            status: 'error',
            message: 'question not found',
        });

    }
}