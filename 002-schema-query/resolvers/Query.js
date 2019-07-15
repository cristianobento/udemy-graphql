const { users, profiles } = require("../data/db");

module.exports = {
  hello() {
    return `Good morning`;
  },
  timeNow() {
    let date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  },
  loggedUser() {
    return {
      id: 1,
      name: "Cristiano Oliveira",
      email: `mail@mail.com`,
      age: 35,
      real_salary: 10000.66,
      vip: true
    };
  },
  featuredProduct() {
    return {
      name: `Gamer Notebook`,
      price: 5000.0,
      discount: 0.3
    };
  },
  lotteryNumbers() {
    const ascending = (a, b) => a - b;
    return Array(6)
      .fill(0)
      .map(n => parseInt(Math.random() * 60 + 1))
      .sort(ascending);
  },
  users() {
    return users;
  },
  user(_, args) {
    const selected = users.filter(u => u.id === args.id);
    return selected ? selected[0] : null;
  },

  profiles() {
    return profiles;
  },

  // deconstructing: id is the same as args.id
  // profile(_, args)
  profile(_, { id }) {
    const selected = profiles.filter(p => p.id === id);
    return selected ? selected[0] : null;
  }
};
