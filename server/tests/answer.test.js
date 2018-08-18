import chaihhtp from 'chai-http';
import chai from 'chai';
import server from '../app';

const { expect } = chai;

chai.use(chaihhtp);

describe('Answers controller', () => {
    // test for adding an answer to a question
    const newAnswer = {
        id: 3,
        userId: 2,
        body: 'I love shawarma',
        comment: [],
    };
    it('should add an answer to a question', (done) => {
        chai.request(server)
            .post('/api/v1/questions/3/answers')
            .send(newAnswer)
            .end((err, res) => {
                expect(res.body.result.id).to.be.eql(newAnswer.id);
                expect(res.body.result.userId).to.be.eql(newAnswer.userId);
                expect(res.body.result.body).to.be.eql(newAnswer.body);
                expect(res.body.result.comment).to.be.eql(newAnswer.comment);
                done(err);
            });
    });

    // test for getting all answers
    it('should get all answers', (done) => {
        chai.request(server)
            .get('/api/v1/questions/3/answers')
            .end((err, res) => {
                expect(res.body.result.length).to.be.eql(3);
                done(err);
            });
    });

});