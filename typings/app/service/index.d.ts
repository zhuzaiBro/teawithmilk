// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportAdmin from '../../../app/service/admin';
import ExportGood from '../../../app/service/good';
import ExportOrderManager from '../../../app/service/orderManager';
import ExportTest from '../../../app/service/Test';
import ExportUpload from '../../../app/service/upload';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    admin: AutoInstanceType<typeof ExportAdmin>;
    good: AutoInstanceType<typeof ExportGood>;
    orderManager: AutoInstanceType<typeof ExportOrderManager>;
    test: AutoInstanceType<typeof ExportTest>;
    upload: AutoInstanceType<typeof ExportUpload>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
