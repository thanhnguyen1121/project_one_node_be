import db from "../models/index"


let getWebHomePage = async (req, res) => {
    try {
        let users = await db.User.findAll();
        console.log("users: " + users);
        return res.render("home_page.ejs", { "userData": JSON.stringify(users) });
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    getWebHomePage,
}


