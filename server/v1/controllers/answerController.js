import questionDb from '../model/database';

/**
 * @description class for Answers
 */
export default class Answer {

    /**
     * @description creates an answer
     * @param {object} req
     * @param {object} res
     * @return {object}
     */
    static postAnswer(req, res) {
        const questionId = parseInt(req.params.questionId, 10);

        const result = questionDb.questions.find(question => question.id === questionId);
        if (!result) {
            res.status(404).json({
                status: 'failure',
                message: 'Question not found',
            });
        } else {
            result.answers.push({
                id: result.answers.length + 1,
                userId: req.body.userId,
                body: req.body.body,
                comment: [],
            });
            return res.status(201).json({
                status: 'success',
                message: 'New answer was added',
                data: result.answers[result.answers.length - 1],
            });
        }
    }

    /**
     * @description gets all answers to a question
     * @param {object} req
     * @param {object} res
     * @return {object}
     */
    static getAllAnswersToAQuestion(req, res) {

        const questionId = parseInt(req.params.questionId, 10);

        const result = questionDb.questions.find(question => question.id === questionId);
        return res.status(200).json({
            status: 'success',
            message: 'All answers fetched',
            data: result.answers,
        });
    }
}