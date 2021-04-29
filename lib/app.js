import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

module.exports = app;