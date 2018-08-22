/* import database */
import questionDatabase from '../model/database';

export default class Answer {
    // Add an answer
    static postAnswer(req, res) {
        const result = {
            status: 'failure',
            message: 'question not found',
        };
        const { questionId, userId } = req.params;
        if (!req.body.body) {
            return res.json({
                status: 'failure',
                message: 'Please fill all field',
            });
        }
        questionDatabase.questions.forEach((question) => {
            if (question.id === parseInt(questionId, 10)) {
                question.answers.push({
                    id: question.answers.length + 1,
                    userId: req.body.userId,
                    body: req.body.body,
                    comment: [],
                });
                return res.status(200).json({
                    status: 'success',
                    message: 'New answer was added',
                    data: question.answers[question.answers.length - 1],
                });
            }
        });
        return result;
    }

    static getAllAnswersToAQuestion(req, res) {
        const result = {
            status: 'failure',
            message: 'question not found',
        };
        const { questionId } = req.params;
        questionDatabase.questions.forEach((question) => {
            if (question.id === parseInt(questionId, 10)) {
                return res.status(200).json({
                    status: 'success',
                    message: 'All answers fetched',
                    data: question.answers,
                });
            }
        });
        return result;
    }
}
