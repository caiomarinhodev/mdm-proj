module.exports = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root_password",
  database: "mdm_database",
//   entities: ["dist/**/*.entity{.ts,.js}"],
  entities: ["dist/entities/*.js"],
  logging: true,
  synchronize: true,
};
//This file will configure TypeORM to connect to the MySQL container with the specified username, password, and database name.
