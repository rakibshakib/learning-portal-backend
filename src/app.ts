import express, { Application } from 'express';
import cors from 'cors';
// import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import router from './app/routes/routes';
import cookieParser from 'cookie-parser';

const app: Application = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

//global error handler
// app.use(globalErrorHandler);

export default app;