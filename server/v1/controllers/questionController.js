import questionDatabase from '../model/database';

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
            data: questionDatabase.questions,
        });
    }

    /**
     * @description gets a question
     * @param {object} req
     * @param {object} res
     * @return {object}
     */
    static getOneQuestion(req, res) {
        const result = {
            status: 'failure',
            message: 'Question not found',
        };
        const { questionId } = req.params;
        questionDatabase.questions.forEach((question) => {
            if (question.id === parseInt(questionId, 10)) {
                return res.status(200).json({
                    status: 'success',
                    message: `Question  ${question.id}  fetched`,
                    data: question,
                });
            }
        });
        return result;
    }

    /**
     * @description creates a new question
     * @param {object} req
     * @param {object} res
     * @return {object}
     */
    static addNewQuestion(req, res) {
        // check parameters to create a question
        if (!req.body.title || !req.body.body) {
            return res.status(400).json({
                status: 'failure',
                message: 'Please fill all field',
            });
        }
        const newQuestion = {
            id: questionDatabase.questions.length + 1,
            title: req.body.title,
            body: req.body.body,
            answers: [],
        };
        questionDatabase.questions.push(newQuestion);
        return res.status(201).json({
            status: 'success',
            message: 'New question was created',
            data: questionDatabase.questions[questionDatabase.questions.length - 1],
        });
    }

    /**
     * @description deletes a question
     * @param {object} req
     * @param {object} res
     * @return {object}
     */
    static deleteOneQuestion(req, res) {
        const result = {
            message: 'Question not found',
            status: 'failure',
        };
        questionDatabase.questions.forEach((question) => {
            if (question.id === parseInt(req.params.questionId, 10)) {
                questionDatabase.questions.splice(question.id, 1);
                res.status(200).json({
                    status: 'success',
                    message: `Question ${question.id} deleted`,
                });
            }
        });
        return result;
    }

    /**
     * @description updates a question
     * @param {object} req
     * @param {object} res
     * @return {object}
     */
    static editOneQuestion(req, res) {
        const result = {
            status: 'failure',
            message: 'Question not found',
        };
        if (!req.body.title || !req.body.body) {
            return res.json({
                status: 'failure',
                message: 'Please supply title and body of the question',
            });
        }
        questionDatabase.questions.forEach((question) => {
            if (question.id === parseInt(req.params.questionId, 10)) {
                questionDatabase.questions[req.params.questionId - 1].title = req.body.title;
                questionDatabase.questions[req.params.questionId - 1].body = req.body.body;
                return res.status(200).json({
                    message: `Question ${question.id} updated`,
                    status: 'success',
                    data: questionDatabase.questions[req.params.questionId - 1],
                });
            }
        });
        return result;
    }
}