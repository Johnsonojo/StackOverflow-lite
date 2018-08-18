import chaihhtp from 'chai-http';
import chai from 'chai';
import server from '../app';

const { expect } = chai;

chai.use(chaihhtp);

describe('Question controller', () => {
    const newData = {
        id: 4,
        title: 'what is HTMz?',
        body: 'I need an indepth explanation of what HTMz is',
        answers: [],
    };

    it('should create a question', (done) => {
        chai.request(server)
            .post('/api/v1/questions')
            .send(newData)
            .end((err, res) => {
                expect(res.body.output.id).to.be.eql(newData.id);
                expect(res.body.output.title).to.be.eql(newData.title);
                expect(res.body.output.body).to.be.eql(newData.body);
                expect(res.body.output.answers).to.be.eql(newData.answers);
                done(err);
            });
    });

    // test for getting all questions
    it('should get all questions', (done) => {
        chai.request(server)
            .get('/api/v1/questions')
            .end((err, res) => {
                expect(res.body.questions.length).to.be.eql(4);
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
                } = newData;
                expect(res.body.value.id).to.be.eql(id);
                expect(res.body.value.title).to.be.eql(title);
                expect(res.body.value.body).to.be.eql(body);
                expect(res.body.value.answers).to.be.eql(answers);
                done(err);
            });
    });


    // test for updating a question
    it('should update a question', (done) => {
        const updatedData = {
            id: 3,
            title: 'what is HTMz?',
            body: 'I need an indepth explanation of what HTMz is',
            answers: [],
        };
        chai.request(server)
            .put('/api/v1/questions/3')
            .send(updatedData)
            .end((err, res) => {
                expect(res.body.question.id).to.be.eql(updatedData.id);
                expect(res.body.question.title).to.be.eql(updatedData.title);
                expect(res.body.question.body).to.be.eql(updatedData.body);
                done(err);
            });
    });

    // test for deleting a question
    it('should delete a question', (done) => {
        chai.request(server)
            .delete('/api/v1/questions/2')
            .end((err, res) => {
                expect(res.body.deleteOutput.id).to.be.eql(2);
                done(err);
            })
    });
});