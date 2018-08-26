/**@description A class for validating inputs */

class validator {
    /**
     * @description validates a question id
     * @param {Object} req
     * @param {Object} res
     * @param {Function} next
     * @return {object}
     */
    static checkQuestionId(req, res, next) {
        req.checkParams('questionId', 'Question id must not be empty').notEmpty();
        req.checkParams('questionId', 'Question id must be an integer').isInt();

        const errors = req.validationErrors();

        if (errors) {
            return res.status(404).json({
                status: 'Failure',
                message: 'Question not found',
                data: errors,
            });
        }
        return next();
    }

    /**
     * validates question input fields
     * @param {Object} req
     * @param {Object} res
     * @param {Function} next
     * @return {object}
     */
    static checkQuestionBody(req, res, next) {
        req.checkBody('title', 'Question title should not be empty').notEmpty();
        req.checkBody('body', 'You must enter a body for your question').notEmpty();

        const errors = req.validationErrors();

        if (errors) {
            return res.status(404).json({
                status: 'failure',
                message: 'Question validation not successful',
                data: errors,
            });
        }
        return next();
    }

    /**
     * @description validates answer fields
     * @param {Object} req
     * @param {Object} res
     * @param {Function} next
     * @return {object}
     */
    static validateAnswer(req, res, next) {
        req.checkBody('body', 'body cannot be empty').notEmpty();
        req.checkParams('questionId', 'Must be an integer').notEmpty().isInt();

        const errors = req.validationErrors();

        if (errors) {
            return res.status(400).json({
                status: 'Failure',
                message: 'Validation failed',
                data: errors,
            });
        }
        return next();
    }

    /**
     * @description validates comments field
     * @param {Object} req
     * @param {Object} res
     * @param {Function} next
     * @return {object}
     */
    static validateComment(req, res, next) {
        req.checkBody('body', 'body cannot be empty').notEmpty();
        req.checkParams('answerId', 'Must not be empty').notEmpty();
        req.checkParams('answerId', 'Must be an integer').isInt();

        const errors = req.validationErrors();

        if (errors) {
            return res.status(400).json({
                status: 'Failure',
                message: 'Validation failed',
                data: errors,
            });
        }
        return next();
    }
}

export default validator;