import express from 'express';
import webHomeCtrl from "../controllers/web_home_controller"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", webHomeCtrl.getWebHomePage)
    return app.use("/", router);
}

module.exports = initWebRoutes;