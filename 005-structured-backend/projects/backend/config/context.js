module.exports = async ({ req }) => {
  // Development only
  await require("./simularUsuarioLogado")(req);

  const auth = req.headers.authorization;
};
