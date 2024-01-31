import express from 'express';
import userCtrl from '../controllers/user_controller';

let apiRouter = express.Router();

let initApiRouter = (app) => {
    apiRouter.get('/', (req, res) => {
        res.send("Hello API");
    });

    apiRouter.post('/login', userCtrl.login);


    return app.use("/api", apiRouter);
}

module.exports = initApiRouter;