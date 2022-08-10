import { Controller } from 'egg';


export default class GoodController extends Controller {
    public async add_good() {
    const {ctx} = this;
        const res = await ctx.service.good.add_good(ctx.request.body);
        ctx.body = {
            code: 0,
            data: res
        }
    }
}