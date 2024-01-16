import db from "../models/index"
import UserCrudService from "../services/user_crud_service"


let getWebHomePage = async (req, res) => {
    try {
        let users = await db.User.findAll();
        console.log("users: " + users);
        return res.render("home_page.ejs", { "userData": JSON.stringify(users) });
    } catch (error) {
        console.log(error);
    }

}

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

module.exports = {
    getWebHomePage,
    userCrud,
    createUser
}


