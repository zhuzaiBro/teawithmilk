import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, middleware } = app;

  const auth = middleware.auth();
  app.beforeStart(async () => {
    // 应用会等待这个函数执行完成才启动
    console.log("==app beforeStart==");
    await app.model.sync({
      //为true时删除原表创建新表
      //为false时不删除原有表，只创建不存在的
      force: false,
      alter: true
    });

  });

  router.get('/', auth, controller.home.index);
  router.post("/api/admin/login", controller.admin.login);
  router.post("/api/admin/add", auth, controller.admin.add_admin);
  router.post("/api/order/init", controller.order.offer_order);
  router.post("/api/good/add", controller.good.add_good);
  router.post("/api/upload", controller.upload.upload);
};
