import chaiHttp from 'chai-http';
import chai from 'chai';
import server from '../app';

const { expect } = chai;

chai.use(chaiHttp);

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
                expect(res.body.data.id).to.be.eql(newAnswer.id);
                expect(res.body.data.userId).to.be.eql(newAnswer.userId);
                expect(res.body.data.body).to.be.eql(newAnswer.body);
                expect(res.body.data.comment).to.be.eql(newAnswer.comment);
                expect(res.body.message).to.be.a('string');
                done(err);
            });
    });

    // test for getting all answers
    it('should get all answers', (done) => {
        chai.request(server)
            .get('/api/v1/questions/3/answers')
            .end((err, res) => {
                expect(res.body.data.length).to.be.eql(3);
                done(err);
            });
    });

});