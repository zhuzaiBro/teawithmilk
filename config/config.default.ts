import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1659840576105_2495';

  // add your egg config in here
  config.middleware = [];

 
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

  config.security = {
 
    csrf: {
      enable: false,
    }
  }

  config.jwt = {
    secret: 'zhujie_love_zhangjiayi', //jwt为自定义密钥
 };

  
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
