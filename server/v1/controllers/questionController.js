import questionDb from '../model/database';

/**
 * @description A class for questions
 */
export default class Question {

    /**
     * @description gets all questions
     * @param {object} req
     * @param {object} res
     * @return {object}
     */
    static getAllQuestions(req, res) {
        return res.status(200).json({
            status: 'success',
            message: 'All question fetched',
            data: questionDb.questions,
        });
    }

    /**
     * @description gets a question
     * @param {object} req
     * @param {object} res
     * @return {object}
     */
    static getOneQuestion(req, res) {
        const questionId = parseInt(req.params.questionId, 10);

        const result = questionDb.questions.find(question => question.id === questionId);

        if (!result) {
            res.status(404).json({
                status: 'failure',
                message: 'Question not found',
            });
        } else {
            res.status(200).json({
                status: 'success',
                message: `Question  ${result.id}  fetched`,
                data: result,
            });
        }
    }

    /**
     * @description creates a new question
     * @param {object} req
     * @param {object} res
     * @return {object}
     */
    static addNewQuestion(req, res) {
        const newQuestion = {
            id: questionDb.questions.length + 1,
            title: req.body.title,
            body: req.body.body,
            answers: [],
        };
        questionDb.questions.push(newQuestion);
        return res.status(201).json({
            status: 'success',
            message: 'New question was created',
            data: questionDb.questions[questionDb.questions.length - 1],
        });
    }

    /**
     * @description deletes a question
     * @param {object} req
     * @param {object} res
     * @return {object}
     */
    static deleteOneQuestion(req, res) {
        const questionId = parseInt(req.params.questionId, 10);

        const result = questionDb.questions.find(question => question.id === questionId);

        if (!result) {
            res.status(404).json({
                status: 'failure',
                message: 'Question not found',
            });
        } else {
            questionDb.questions.splice(questionDb.questions.indexOf(result), 1);
            res.status(200).json({
                status: 'success',
                message: `Question ${result.id} deleted`,
            });
        }
    }

    /**
     * @description updates a question
     * @param {object} req
     * @param {object} res
     * @return {object}
     */
    static editOneQuestion(req, res) {
        const questionId = parseInt(req.params.questionId, 10);

        const result = questionDb.questions.find(question => question.id === questionId);

        if (!result) {
            res.status(404).json({
                status: 'failure',
                message: 'Question not found',
            });
        } else {
            questionDb.questions[req.params.questionId - 1].title = req.body.title;
            questionDb.questions[req.params.questionId - 1].body = req.body.body;
            return res.status(200).json({
                message: `Question ${result.id} updated`,
                status: 'success',
                data: questionDb.questions[req.params.questionId - 1],
            });

        }
    }
}