const { profiles } = require("../data/db");

// Mapping "salary" property to "real_salary" property
// from our source. Good if your data source has
// fields with stranger names or just to normalize your
// response

module.exports = {
  salary(user) {
    return user.real_salary;
  },
  profile(user) {
    const selected = profiles.filter(p => p.id === user.profile_id);
    return selected ? selected[0] : null;
  }
};
