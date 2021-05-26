export const environment = {
  production: false,
  port: 3000,
  sequelize: {
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "NuckyThompson123",
    name: "matsukaze",
    logging: true
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
    watch: true
  }
};
