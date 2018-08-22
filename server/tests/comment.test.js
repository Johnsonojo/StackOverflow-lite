import chaiHttp from 'chai-http';
import chai from 'chai';
import server from '../app';

const { expect } = chai;

chai.use(chaiHttp);


describe('Comments controller', () => {
    // test for adding a comment to an answer
    const newComment = {
        id: 3,
        userId: 3,
        body: 'I am not really sure that is the right answr'
    };

    it('should add a comment to an answer', (done) => {
        chai.request(server)
            .post('/api/v1/questions/3/answers/1/comments')
            .send(newComment)
            .end((err, res) => {
                expect(res.body.data.id).to.be.eql(newComment.id);
                expect(res.body.data.userId).to.be.eql(newComment.userId);
                expect(res.body.data.body).to.be.eql(newComment.body);
                done(err);
            });
    });

});