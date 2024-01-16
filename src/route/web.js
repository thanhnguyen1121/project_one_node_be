import express from 'express';
import webHomeCtrl from "../controllers/web_home_controller"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", webHomeCtrl.getWebHomePage)
    router.get("/user_crud", webHomeCtrl.userCrud)
    router.post("/create_user", webHomeCtrl.createUser)
    return app.use("/", router);
}

module.exports = initWebRoutes;