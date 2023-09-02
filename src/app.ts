import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
// import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import router from "./app/routes/routes";
import cookieParser from "cookie-parser";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";

const app: Application = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

//global error handler
app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
  next();
});

export default app;
