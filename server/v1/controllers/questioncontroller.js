/* import database */
import questionDatabase from '../model/database';

export default class Question {
    // get all questions
    static getAllQuestions(req, res) {
        return res.status(200).json({ questions: questionDatabase.questions });
    }
}