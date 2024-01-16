import express from "express";
import bodyParser from "body-parser";
import viewEnginer from "./config/viewEngine";
import initWebRoutes from "./route/web";
import ConnectDB from "./config/connectDB"

require('dotenv').config();

let app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

ConnectDB.connectToDB();

viewEnginer(app);

initWebRoutes(app);


let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Backend nodejs is runing on the port: " + port);
});

