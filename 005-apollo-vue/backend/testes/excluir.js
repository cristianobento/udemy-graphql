const db = require("../config/db");

// exclude user by its id
db("usuarios")
  .where({ id: 1 })
  .delete()
  .then(response => console.log(response))
  .finally(() => db.destroy());
