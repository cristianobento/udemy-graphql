const profiles = [{ id: 1, name: "common" }, { id: 2, name: "administrator" }];

const users = [
  {
    id: 1,
    profile_id: 1,
    name: "João Silva",
    email: "joao@silva.com",
    age: 29,
    status: "ACTIVE"
  },
  {
    id: 2,
    profile_id: 2,
    name: "Rafel Junior",
    email: "rafael@junior.com.br",
    age: 31,
    status: "INACTIVE"
  },
  {
    id: 3,
    profile_id: 1,
    name: "Daniela Simth",
    email: "dani@smith.net",
    age: 24,
    status: "BLOCKED"
  }
];

module.exports = { users, profiles };
