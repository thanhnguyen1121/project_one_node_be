import express from "express";
import bodyParser from "body-parser";
import viewEnginer from "./config/viewEngine";
import initWebRoutes from "./route/web";

require('dotenv').config();

let app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

viewEnginer(app);

initWebRoutes(app);


let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Backend nodejs is runing on the port: " + port);
});

