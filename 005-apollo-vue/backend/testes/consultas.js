const db = require("../config/db");

//Ways to use search with Knex

/* db("perfis")
  .then(response => response.map(profile => profile.nome))
  .then(names => console.log(names))
  .finally(() => db.destroy()); */

/* db("perfis")
  .select("nome", "id")
  .then(response => console.log(response))
  .finally(() => db.destroy()); */

/* db.select("nome", "id")
  .from("perfis")
  .then(response => console.log(response))
  .finally(() => db.destroy()); */

/* db.select("nome", "id")
  .from("perfis")
  .limit(2)
  .then(response => console.log(response))
  .finally(() => db.destroy()); */

/* db.select("nome", "id")
  .from("perfis")
  .limit(2)
  .offset(2)
  .then(response => console.log(response))
  .finally(() => db.destroy()); */

/* db("perfis")
  .where({ id: 2 })
  .then(response => console.log(response))
  .finally(() => db.destroy()); */

/* db("perfis")
  .where({ id: 2 })
  .first()
  .then(response => console.log(response.nome))
  .finally(() => db.destroy()); */

/* db("perfis")
  .where("id", "=", 2)
  .first()
  .then(response => console.log(response.nome))
  .finally(() => db.destroy()); */

/* db("perfis")
  .where("nome", "like", "%m%")
  .then(response => console.log(response))
  .finally(() => db.destroy()); */

/* db("perfis")
  .whereNot({ id: 2 })
  .then(response => console.log(response))
  .finally(() => db.destroy()); */

db("perfis")
  .whereIn("id", [1, 2, 3])
  .then(response => console.log(response))
  .finally(() => db.destroy());
