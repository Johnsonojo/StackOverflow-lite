/* import database */
import questionDatabase from '../model/database';

export default class Question {
    // get all questions
    static getAllQuestions(req, res) {
        return res.status(200).json({
            status: 'success',
            message: 'All question fetched',
            data: questionDatabase.questions,
        });
    }

    // get a question
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

    // Creating a new question
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

    // Deleting a question
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

    // Edit a question
    static editOneQuestion(req, res) {
        // check the validity of the input
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
        // update the question using question id
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