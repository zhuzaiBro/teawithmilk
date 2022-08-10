import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.sequelize = {
    // 数据库类型
    dialect: 'mysql',
    // host
    host: '127.0.0.1',
    // 端口号
    port: 3306,
    // 用户名
    username: 'root',
    // 密码
    password: '233333ZJ',
    // 数据库名
    database: 'teawithmilk',
    // 设置时区为东8区
    timezone: '+08:00',
  }
  return config;
};
