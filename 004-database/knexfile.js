// Update with your config settings.

module.exports = {
  client: "mysql",
  connection: {
    host: "172.19.0.16",
    port: "3306",
    database: "exercises",
    user: "root",
    password: "root"
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  }
};
