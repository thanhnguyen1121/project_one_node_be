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

const getAllUser = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({ raw: true });
            resolve(users);
        } catch (error) {
            reject(error);
        }
    })
}

const getUserById = async (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findByPk(userId, { raw: true });
            resolve(users);
        } catch (error) {
            reject(error);
        }
    })
}

const updateUser = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await db.User.update(body, {
                where: {
                    id: body.id,
                }, u
            });
            console.log("result: ", result);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    })
}

const deleteUser = async (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await db.User.destroy(
                {
                    where: {
                        'id': userId,
                    },

                }
            );
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}

const login = async (email, password) => {
    return new Promise(async (resolve, reject) => {
        let data = {};
        try {
            let user = await db.User.findOne({
                where: {
                    email: email,

                },
                raw: true
            });

            if (user) {
                let checkPassword = bcrypt.compareSync(password, user.password);

                if (checkPassword) {
                    data.statusCode = 200;
                    delete user.password;
                    data.data = user;
                    resolve(data);
                } else {
                    data.statusCode = 404;
                    data.message = `Your password is incorrect!`;
                    reject(data);
                }
            } else {
                data.statusCode = 404;
                data.message = `Can't find user with email ${email}`;
                reject(data);
            }
        } catch (error) {
            data.statusCode = 400;
            data.message = error;
            reject(data);
        }
    });
}

module.exports = {
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser,
    login
}
