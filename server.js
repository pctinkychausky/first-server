import express from "express";
import setupRoutes from "./routes/index.js";

import setupMiddleware from "./middleware.js";

const app = express();

setupMiddleware(app);

setupRoutes(app);

//Because the file that sets up the middleware uses app.use , so we need to pass it a reference to app, hence we use/export a function.
// app.use(express.static("public"));

// //parse body
// app.use(express.json());

const cars = [{ name: "Bugatti", _id: "123" }];

//routes
app.use("/", setupRoutes);

// app.use((req,res, next)=>{console.log(req);
//     next();})

export default app;
