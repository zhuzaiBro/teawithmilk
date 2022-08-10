import {Service} from 'egg';
import jwt from '../utils/jwt';

export default class UserServ extends Service {
    
    public async login({phone, wx}) {
        const {ctx} = this;
        if(phone) {
            wx
        }
        jwt.publish(ctx.request as any, void 0, {phone});
        return "登录";
    }
}