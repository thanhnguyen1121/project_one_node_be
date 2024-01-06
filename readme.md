#init projdect

install first:
    npm install body-parser
    npm install dotenv
    npm install express
    npm install ejs

install as dev dependences:
    npm install --save-dev @babel/core
    npm install --save-dev @babel/node
    npm install --save-dev @babel/preset-env
    npm install --save-dev nodemon

    npm install --save sequelize

init sequelize:
    npm install --save sequelize
    node_modules/.bin/sequelize init 

    create model:
        npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string