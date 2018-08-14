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
        questionDatabase.questions.forEach((value) => {
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
            return res.json({
                status: 'error',
                message: 'Please fill all field',
            });
        }

        const newquestion = {
            id: questionDatabase.questions.length + 1,
            title: req.body.title,
            body: req.body.body,
            answer: [],
        };
        questionDatabase.questions.push(newquestion);
        return res.status(200).json({
            message: 'New question was created',
            Error: false,
            output: questionDatabase.questions[questionDatabase.questions.length - 1],
        });
    }
}