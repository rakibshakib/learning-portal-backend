import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function bootstrap() {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/learningPortal" as string
    );
    console.log("Database Connected....😃");
    app.listen(config.port, () => {
      console.log(`learning Portal listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("Failed To Connect Database..😥", error);
  }
}
bootstrap();
