const database = {
    users: [{
        id: 1,
        firstname: 'Adesewa',
        lastname: 'Adefalujo',
        email: 'adesewa@gmail.com',
        password: '547634',
    }, {
        id: 2,
        firstname: 'Johnson',
        lastname: 'Oj0',
        email: 'johnson@gmail.com',
        password: '123634',
    }, {
        id: 3,
        firstname: 'Lovetta',
        lastname: 'Ojo',
        email: 'lovetta@gmail.com',
        password: 'fdg634',
    }, {
        id: 4,
        firstname: 'Oluchi',
        lastname: 'Aniaku',
        email: 'oluchi@gmail.com',
        password: 'jhkl34',
    }],

    questions: [{
        id: 1,
        title: 'what is css?',
        body: 'css is an acronym that stands for cascading style sheet',
        answers: [{
            id: 1,
            userId: 1,
            body: 'lorem hjkfdlmjnh hihdklsmd jjoukufjguhg cgiugfiuwnhdiy',
            comment: [{
                id: 0,
                userId: 0,
                body: 'lorem hjkfdlmjnh hihdklsmd jjoukufjguhg cgiugfiuwnhdiy',
            }, {
                id: 1,
                userId: 1,
                body: 'lorem hjkfdlmjnh hihdklsmd jjoukufjguhg cgiugfiuwnhdiy',
            }],

        }, {
            id: 2,
            userId: 3,
            body: 'lorem hjkfdlmjnh hihdklsmd jjoukufjguhg cgiugfiuwnhdiy',
            comment: [{
                id: 0,
                userId: 0,
                body: 'lorem hjkfdlmjnh hihdklsmd jjoukufjguhg cgiugfiuwnhdiy',
            }, {
                id: 1,
                userId: 1,
                body: 'lorem hjkfdlmjnh hihdklsmd jjoukufjguhg cgiugfiuwnhdiy',
            }],
        }],
    }, {
        id: 2,
        title: 'what is HTML?',
        body: 'HTML is an acronym that stands for HyperText Markup Language',
        answers: [{
            id: 1,
            userId: 0,
            body: 'lorem hjkfdlmjnh hihdklsmd jjoukufjguhg cgiugfiuwnhdiy',
            comment: [{
                id: 0,
                userId: 0,
                body: 'lorem hjkfdlmjnh hihdklsmd jjoukufjguhg cgiugfiuwnhdiy',
            }, {
                id: 1,
                userId: 1,
                body: 'lorem hjkfdlmjnh hihdklsmd jjoukufjguhg cgiugfiuwnhdiy',
            }],

        }, {
            id: 2,
            userId: 1,
            body: 'lorem hjkfdlmjnh hihdklsmd jjoukufjguhg cgiugfiuwnhdiy',
            comment: [{
                id: 0,
                userId: 0,
                body: 'lorem hjkfdlmjnh hihdklsmd jjoukufjguhg cgiugfiuwnhdiy',
            }, {
                id: 1,
                userId: 1,
                body: 'lorem hjkfdlmjnh hihdklsmd jjoukufjguhg cgiugfiuwnhdiy',
            }],

        }],

    }, {
        id: 3,
        title: 'what is JS?',
        body: 'JS is an acronym that stands for JavaScript',
        answers: [{
            id: 1,
            userId: 0,
            body: 'lorem hjkfdlmjnh hihdklsmd jjoukufjguhg cgiugfiuwnhdiy',
            comment: [{
                id: 0,
                userId: 0,
                body: 'lorem hjkfdlmjnh hihdklsmd jjoukufjguhg cgiugfiuwnhdiy',
            }, {
                id: 1,
                userId: 1,
                body: 'lorem hjkfdlmjnh hihdklsmd jjoukufjguhg cgiugfiuwnhdiy',
            }],

        }, {
            id: 2,
            userId: 1,
            body: 'lorem hjkfdlmjnh hihdklsmd jjoukufjguhg cgiugfiuwnhdiy',
            comment: [{
                id: 0,
                userId: 0,
                body: 'lorem hjkfdlmjnh hihdklsmd jjoukufjguhg cgiugfiuwnhdiy',
            }, {
                id: 1,
                userId: 1,
                body: 'lorem hjkfdlmjnh hihdklsmd jjoukufjguhg cgiugfiuwnhdiy',
            }],

        }],

    }],
};
export default database;