import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

// Setup the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// importing the routes


// body-parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes for handling requests

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`listening on ${PORT}`));

export default app;