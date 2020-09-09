const Sequelize = require("sequelize");

require("dotenv").config({ path: "./.env" });

const sequelize = new Sequelize("", process.env.DB_USER, process.env.DB_PASS, {
  port: 3306,
  dialect: "mysql",
  host: process.env.DB_HOST,
});

const testHashedPw =
  "$2a$12$r8i4QgGOu0N5fbnZ8XIGt.YGpKGHKxK8M9EqTxtMwOkCgApFlQI6i";

sequelize
  .query("CREATE DATABASE if not exists todo_ensolvers;")
  .then(() => {
    console.log("Created database if it did not exist");
    return sequelize.query(`CREATE TABLE IF NOT EXISTS todo_ensolvers.users (id INTEGER NOT NULL auto_increment , email VARCHAR(255), password VARCHAR(255), createdAt DATETIME NOT NULL, updatedAt DATETIME NOT NULL, PRIMARY KEY (id)) ENGINE=InnoDB;
  `);
  })
  .then(() => {
    console.log("Created users table if it did not exist");
    return sequelize.query(`INSERT INTO todo_ensolvers.users (id,email,password,createdAt,updatedAt) 
    VALUES (1,"test@test.com", "${testHashedPw}",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);`);
  })
  .then(() => {
    console.log("Creating default user");
  })
  .catch(() => {
    console.log("Test user already exists");
  })
  .finally(() => {
    console.log("------------------------------------------------------");
    console.log('------USER: "test@test.com"------PASSWORD: "123456"---');
    console.log("------------------------------------------------------");
    process.exit(1);
  });
