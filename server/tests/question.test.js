import chaiHttp from 'chai-http';
import chai from 'chai';
import server from '../app';

const { expect } = chai;

chai.use(chaiHttp);

describe('Question controller', () => {
    const newQuestion = {
        id: 4,
        title: 'what is HTMz?',
        body: 'I need an indepth explanation of what HTMz is',
        answers: [],
    };

    it('should create a question', (done) => {
        chai.request(server)
            .post('/api/v1/questions')
            .send(newQuestion)
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body.data.id).to.be.eql(newQuestion.id);
                expect(res.body.data.title).to.be.eql(newQuestion.title);
                expect(res.body.data.body).to.be.eql(newQuestion.body);
                expect(res.body.data.answers).to.be.eql(newQuestion.answers);
                done(err);
            });
    });

    // test for getting all questions
    it('should get all questions', (done) => {
        chai.request(server)
            .get('/api/v1/questions')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.message).to.be.a('string');
                expect(res.body.status).to.be.a('string');
                expect(res.body.data.length).to.be.eql(4);
                done(err);
            });
    });

    // test for getting a question
    it('should get a question', (done) => {
        chai.request(server)
            .get('/api/v1/questions/4')
            .end((err, res) => {
                const {
                    id,
                    title,
                    body,
                    answers,
                } = newQuestion;
                expect(res.status).to.equal(200);
                expect(res.body.data.id).to.be.eql(id);
                expect(res.body.data.title).to.be.eql(title);
                expect(res.body.data.body).to.be.eql(body);
                expect(res.body.data.answers).to.be.eql(answers);
                done(err);
            });
    });


    // test for updating a question
    it('should update a question', (done) => {
        const updateQuestion = {
            id: 3,
            title: 'what is HTMz?',
            body: 'I need an indepth explanation of what HTMz is',
            answers: [],
        };
        chai.request(server)
            .put('/api/v1/questions/3')
            .send(updateQuestion)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.data.id).to.be.eql(updateQuestion.id);
                expect(res.body.data.title).to.be.eql(updateQuestion.title);
                expect(res.body.data.body).to.be.eql(updateQuestion.body);
                done(err);
            });
    });

    // test for deleting a question
    it('should delete a question', (done) => {
        chai.request(server)
            .delete('/api/v1/questions/2')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.status).to.be.eql('success');
                expect(res.body.message).to.be.eql('Question 2 deleted');
                done(err);
            });
    });
});