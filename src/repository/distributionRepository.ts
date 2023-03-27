import { connectToDatabase, executeQuery } from "../core/db";
import { IDistribution } from "../interface/IDistribution";

export async function list(): Promise<any> {
  const sql = "SELECT * FROM distribution";

  const result = await executeQuery(sql);

  return result;
}

export async function create(
  idApp: number,
  idVersion: number,
  useLastVersion: boolean,
  appRequired: boolean
) {
  const connection = await connectToDatabase();
  const sql =
    "INSERT INTO distribution (id_app, id_version, use_last_version, app_required) VALUES (?, ?, ?, ?)";
  const values = [idApp, idVersion, useLastVersion, appRequired];
  const result = await connection.execute(sql, values);
  return result.insertId;
}

export async function findById(id: number): Promise<IDistribution | null> {
  const sql = "SELECT * FROM distribution WHERE id = ?";
  const values = [id];
  const connection = await connectToDatabase();
  const result = await connection.execute(sql, values);

  return result.length > 0 ? result[0] : null;
}

export async function update(
  id: number,
  idApp: number,
  idVersion: number,
  useLastVersion: boolean,
  appRequired: boolean
): Promise<void> {
  const sql =
    "UPDATE distribution SET id_app = ?, id_version = ?, use_last_version = ?, app_required = ? WHERE id = ?";
  const values = [idApp, idVersion, useLastVersion, appRequired, id];

  await executeQuery(sql, values);
}

export async function remove(id: number): Promise<void> {
  const sql = "DELETE FROM distribution WHERE id = ?";
  const values = [id];

  await executeQuery(sql, values);
}
