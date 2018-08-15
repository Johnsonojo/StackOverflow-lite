/* import database */
import questionDatabase from '../model/database';

export default class Answer {
    // Add an answer 
    static postAnswer(req, res) {
        const { questionId } = req.params;
        if (!req.body.body) {
            return res.json({
                status: 'error',
                message: 'Please fill all field',
            });
        }
        questionDatabase.questions.forEach((value) => {
            if (value.id === parseInt(questionId, 10)) {
                value.answers.push({
                    id: value.answers.length + 1,
                    // userid
                    body: req.body.body,
                    comment: [],
                });
                return res.status(200).json({
                    result: value.answers[value.answers.length - 1],
                    message: 'New answer was added',
                    Error: false,
                });
            }
        });
        return res.status(404).json({
            status: 'error',
            message: 'question not found',
        });
    }


}