import { createConnection } from "mysql2";

export async function connectToDatabase() {
  const connection = await createConnection({
    host: "localhost",
    user: "root",
    password: "root_password",
    database: "mdm_database",
  });

  return connection;
}

export async function executeQuery(sql: string, values?: any[]) {
  const connection = await connectToDatabase();
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}
