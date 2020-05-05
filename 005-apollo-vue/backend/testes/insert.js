const db = require("../config/db");

/*  const newProfile = {
  nome: "visitante",
  rotulo: "Visitante"
};

db("perfis")
  .insert(newProfile)
  .then(res => console.log(res))
  .catch(error => console.log(error.sqlMessage))
  .finally(() => db.destroy()); */

/* const profileSU = {
  nome: "root" + Math.random(),
  rotulo: "Super Usuário",
};

db("perfis")
  .insert(profileSU)
  .into("perfis")
  .then((res) => res[0])
  .then((id) => `Generated code is ${id}`)
  .then((string) => console.log(string))
  .catch((error) => console.log(error.sqlMessage))
  .finally(() => db.destroy()); */
