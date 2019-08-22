const db = require("../config/db");

const newUser = {
  nome: "Pedro",
  email: "pedro@empresa.com.br",
  senha: "12345678"
};

async function exercise() {
  // get number of users on the 'usuarios' table
  const { qtde } = await db("usuarios")
    .count("* as qtde")
    .first();

  // 0 users? Add a new one
  if (qtde === 0) {
    await db("usuarios").insert(newUser);
  }

  // get the new user ID
  let id = await db("usuarios")
    .select("id")
    .limit(1)
    .first();

  // update this user
  await db("usuarios")
    .where({ id })
    .update({
      nome: "Pedro Garcia",
      email: "pedro.garcia@empresa.com.br"
    });

  // return this updated user
  return db("usuarios").where(id);
}

exercise()
  .then(user => console.log(user))
  .finally(() => db.destroy());
