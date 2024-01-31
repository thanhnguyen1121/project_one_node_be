import express from 'express';
import WebHomeCtrl from "../controllers/web_home_controller";
import UserCtrl from "../controllers/user_controller";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", WebHomeCtrl.getWebHomePage);
    router.get("/user_crud", UserCtrl.userCrud);
    router.post("/create_user", UserCtrl.createUser);
    router.get("/get_user_list", UserCtrl.getUserList);
    router.get("/edit_user", UserCtrl.editUser);
    router.post("/confirm_update_user", UserCtrl.updateUser);
    router.get("/delete_user", UserCtrl.deleteUser);
    router.post("/confirm_delete_user", UserCtrl.confirmDeleteUser);

    return app.use("/web", router);
}

module.exports = initWebRoutes;