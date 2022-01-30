import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose  from "mongoose";
import morgan from "morgan";
import { DB, PORT } from "./config";
import { errorHandler } from "./middleware/errorHandler";

import  exampleRoutes  from "./routes/exampleRoutes"

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use("/", exampleRoutes);
app.use(() => {
    throw createHttpError(404, 'URL not found');
});
app.use(errorHandler);

mongoose
.connect(DB).then(() => {
    console.log("DB connected...");
    app.listen(PORT, () => {
        console.log(`Listen on PORT ${PORT}`);
    })
}).catch(()=> {
    throw createHttpError(501, "Unable to connect to Mongo")
});