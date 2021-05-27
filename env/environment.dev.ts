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
    host: 'email-smtp.us-west-2.amazonaws.com',
    port: 465,
    secure: true,
    user: 'AKIAWBDSGSY5V4P5SXF4',
    password: 'BCOq7+aePru24iqLR5Cn45RLjZ4WnX9VFTdr7N85+2Jk',
    name: 'Aethon <contact@aethon.sg>'
  },
  i18n: {
    watch: true
  }
};
