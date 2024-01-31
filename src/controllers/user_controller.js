import UserCrudService from "../services/user_crud_service"

let userCrud = async (req, res) => {
    try {
        return res.render('user_crud_page.ejs');
    } catch (error) {
        console.log(error);
    }
}


let createUser = async (req, res) => {
    try {
        console.log(req.body);
        let result = await UserCrudService.createUser(req.body);
        console.log("result: ", result);
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}

let getUserList = async (req, res) => {
    try {
        let result = await UserCrudService.getAllUser();
        console.log(result);
        res.render('user_list.ejs', { userList: result });
    } catch (error) {
        console.log(error);
    }
}

let editUser = async (req, res) => {
    try {
        let userId = req.query.user_id;
        let user = await UserCrudService.getUserById(userId);
        res.render('user_edit_page.ejs', { 'userData': user });
    } catch (error) {
        console.log(error);
    }
}

let updateUser = async (req, res) => {
    try {
        let result = await UserCrudService.updateUser(req.body);
        res.redirect(301, '/get_user_list');
    } catch (error) {
        console.log(error);
    }
}

let deleteUser = async (req, res) => {
    try {
        let userId = req.query.user_id;
        let user = await UserCrudService.getUserById(userId);
        res.render("delete_user_page.ejs", { "userData": user });
    } catch (error) {
        console.log(error);
    }
}

let confirmDeleteUser = async (req, res) => {
    try {
        let userId = req.body.id;
        await UserCrudService.deleteUser(userId);
        res.redirect(301, "/get_user_list");
    } catch (error) {
        console.log(error);
    }
}

let login = async (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;

        if (!email || !password) {
            res.status(400).send({
                "message": "Missing paramester"
            })
        } else {
            let userData = await UserCrudService.login(email, password);
            res.send(userData);
        }
    } catch (error) {
        res.status(404).send(error);
    }
}


module.exports = {
    userCrud,
    createUser,
    getUserList,
    editUser,
    updateUser,
    deleteUser,
    confirmDeleteUser,
    login,

}