/* import database */
import questionDatabase from '../model/database';

export default class Question {
    // get all questions
    static getAllQuestions(req, res) {
        return res.status(200).json({ questions: questionDatabase.questions });
    }

    // get a question
    static getOneQuestion(req, res) {
        const { questionId } = req.params;
        questionDatabase.questions.map((value) => {
            if (value.id === parseInt(questionId, 10)) {
                return res.status(200).json({
                    value,
                    message: 'success',
                    error: false,
                });
            }
        });
        return res.status(404).json({
            messsage: 'Question not found',
            Error: true,
        });
    }

    // Creating a new question
    static addNewQuestion(req, res) {
        // check parameters to create a question
        if (!req.body.title || !req.body.body) {
            return res.status(400).json({
                status: 'error',
                message: 'Please fill all field',
            });
        }

        const newquestion = {
            id: questionDatabase.questions.length + 1,
            title: req.body.title,
            body: req.body.body,
            answers: [],
        };
        questionDatabase.questions.push(newquestion);
        return res.status(200).json({
            message: 'New question was created',
            Error: false,
            output: questionDatabase.questions[questionDatabase.questions.length - 1],
        });
    }

    // Deleting a question
    static deleteOneQuestion(req, res) {
        questionDatabase.questions.map((value) => {
            if (value.id === parseInt(req.params.questionId, 10)) {
                questionDatabase.questions.splice(value.id, 1);
                res.status(200).json({
                    Message: 'Question deleted',
                    Error: false,
                    deleteOutput: value,
                });
            }
        });

        res.status(404).json({
            Message: 'Question id not found',
            Error: true,
        });
    }

    // Edit a question
    static editOneQuestion(req, res) {
        // check the validity of the input
        if (!req.body.title || !req.body.body) {
            return res.json({
                message: 'Please supply title and body of the question',
                Error: true,
            });
        }

        // update the question using question id
        questionDatabase.questions.map((value) => {
            if (value.id === parseInt(req.params.questionId, 10)) {
                questionDatabase.questions[req.params.questionId - 1].title = req.body.title;
                questionDatabase.questions[req.params.questionId - 1].body = req.body.body;
                return res.status(200).json({
                    Message: `Question ${value.id} updated`,
                    error: false,
                    question: questionDatabase.questions[req.params.questionId - 1],
                });
            }
        });
        return res.status(404).json({
            status: 'Question not found',
            error: true,
        });
    }


}