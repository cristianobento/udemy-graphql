const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require("graphql-import");

const profiles = [{ id: 1, name: "common" }, { id: 2, name: "administrator" }];

const users = [
  {
    id: 1,
    profile_id: 1,
    name: "João Silva",
    email: "joao@silva.com",
    age: 29
  },
  {
    id: 2,
    profile_id: 2,
    name: "Rafel Junior",
    email: "rafael@junior.com.br",
    age: 31
  },
  {
    id: 3,
    profile_id: 1,
    name: "Daniela Simth",
    email: "dani@smith.net",
    age: 24
  }
];

// Resolvers define the technique for fetching the types in the
// schema.
const resolvers = {
  // Mapping "salary" property to "real_salary" property
  // from our source. Good if your data source has
  // fields with stranger names or just to normalize your
  // response
  User: {
    salary(user) {
      return user.real_salary;
    },
    profile(user) {
      const selected = profiles.filter(p => p.id === user.profile_id);
      return selected ? selected[0] : null;
    }
  },
  Product: {
    priceWithDiscount(product) {
      if (product.discount) {
        return product.price * (1 - product.discount);
      } else {
        return product.price;
      }
    }
  },
  Query: {
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
  }
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs: importSchema("./schema/index.graphql"),
  resolvers
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

/* On your graphiQl */
// Fragment

// this query uses fragment. Use it like a spread operator
// query {
//   user(id: 3) {
//     ...completedUser
//   }
//   users {
//     ...completedUser
//   }
// }

// Defines a fragment to be reused on queries above
// fragment completedUser on User {
//   id
//   name
//   email
//   salary
//   vip
//   profile {
//     name
//     id
//   }
// }
