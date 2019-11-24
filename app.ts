import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users'
import noMatchPathHandler from './middlewares/no-match-path-handler'
import errorHandler from './middlewares/error-handler'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(noMatchPathHandler);
app.use(errorHandler);

export default app;
