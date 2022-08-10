import {Service} from 'egg';

export default class orderManager extends Service {
    // status = 1 表示订单建立等待商家，配送员接单
    public async offer_order({includes, user_id, store_id, ticket, tip}) {
        const {app} = this;
        // 计算出价格
        let price = 0;
        for (let i = 0; i < includes.length; i++) {
            const {good_id, k} = includes[i];
            // 数据库寻找商品对应的价格
            const res = await app.model.models.price.findOne({
                where: {
                    good_id,
                    k
                }
            });
            price += res?.get().v * (+includes[i].num);
        }
        price -= ticket.price;
        const start_date = Date.now();
        const res = await app.model.models.order.create({
            user_id,
            store_id,
            start_date,
            ticket_id: ticket?.id,
            transIdo: Date.now().toString().slice(2),
            tip,
            price,
            includes: JSON.stringify(includes),
            status: 1,
        });
        return res;
    }
    public async accept_order({order_id}) {
        // 根据订单id寻找对应的订单
        const {ctx} = this;
        const res = await ctx.model.models.order.update({
            status: 2
        }, {
            where: {
                id: order_id
            }
        });
        return res;
    }
    public async c2order({order_id}) {
        const {ctx} = this;
        const res = await ctx.model.models.order.update({
            status: 3
        }, {
            where: {
                id: order_id
            }
        });
        return res;
    }
}