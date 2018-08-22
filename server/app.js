// importing express and other modules
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';


// importing the routes
import routecontroller from './v1/routes';

// Setup the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// body-parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// configuring the question route
app.use(routecontroller);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`listening on ${PORT}`));

export default app;