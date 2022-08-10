import { Controller } from "egg"

export default class OrderController extends Controller {
    // 用户发起订单
    public async offer_order() {
        const {ctx, service} = this;
        const res = await service.orderManager.offer_order(ctx.request.body);
        ctx.body ={
            code: 0,
            data: res
        }
    }
    // 商家接单
    public async b2order() {
        const {ctx, service} = this;
        const res = await service.orderManager.accept_order(ctx.request.body);
        ctx.body = {
            code: 0,
            data: res
        }
    }
    // 用户确认收货
    public async c2order() {
        const {ctx, service} = this;
        const res = await service.orderManager.c2order(ctx.request.body);
        ctx.body = {
            code: 0,
            data: res
        }
    }
}