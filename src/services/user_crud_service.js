import db from '../models/index'
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);


const createUser = async (body) => {
    let result = new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await genHashPassword(body.password);
            await db.User.create({
                email: body.email,
                password: hashPassword,
                address: body.address,
                phoneNumber: body.phoneNumber,
                gender: body.gender === '1' ? false : true,
                firstName: body.firstName,
                lastName: body.lastName,
                roleId: body.roleId,
                positionId: "",
                image: ""
            });
            resolve("Create a new user success!");
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });

    return result;

}

const genHashPassword = async (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hash = await bcrypt.hashSync(password, salt);
            resolve(hash);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    createUser
}