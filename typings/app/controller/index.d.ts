// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin from '../../../app/controller/admin';
import ExportGood from '../../../app/controller/good';
import ExportHome from '../../../app/controller/home';
import ExportOrder from '../../../app/controller/order';
import ExportUpload from '../../../app/controller/upload';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    admin: ExportAdmin;
    good: ExportGood;
    home: ExportHome;
    order: ExportOrder;
    upload: ExportUpload;
    user: ExportUser;
  }
}
