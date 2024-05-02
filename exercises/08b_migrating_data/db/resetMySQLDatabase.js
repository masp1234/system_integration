import connectToMySQL from "./connectToMySQL.js";

const connection = await connectToMySQL();

async function truncateTable(tableName) {
  try {
    await connection.query(`TRUNCATE TABLE ${tableName}`);
    console.log(`Table ${tableName} truncated successfully`);
  } catch (error) {
    console.error(`Error truncating table ${tableName}:`, error);
  }
}

async function resetDatabase() {
  const tableNames = ['product_line_items', 'orders', 'customers', 'products'];

  await connection.query('SET FOREIGN_KEY_CHECKS = 0;')

  for (const tableName of tableNames) {
    await truncateTable(tableName);
  }

  await connection.query('SET FOREIGN_KEY_CHECKS = 1;')
}

await resetDatabase();
await connection.close();