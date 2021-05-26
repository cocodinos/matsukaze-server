export const environment = {
  production: false,
  port: 80,
  sequelize: {
    host: "test.aethon.sg",
    port: 3306,
    username: "root",
    password: "w3WqrDNYDjmH",
    name: "matsukaze",
    logging: false
  },
  mail: {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    user: 'konstantinos.dimitriou@aethon.sg',
    password: 'WinterIsComing123',
    name: 'Aethon Publishing" <contact@aethon.sg>'
  },
  i18n: {
    watch: false
  }
};
