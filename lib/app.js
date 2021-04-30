import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import routes from './routes';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

app.use('/', routes);

module.exports = app;