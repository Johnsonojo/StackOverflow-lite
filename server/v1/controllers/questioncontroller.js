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

}