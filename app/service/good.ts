import { Service } from 'egg';
import { sku } from '../model/sku';

export default class GoodServer extends Service {
    public async add_good({ sku_list, name, price_list }) {
        const { ctx } = this;
        // 先创建商品
        if (!name) { return null }
        const info = await ctx.model.models.good.create({
            name
        });
        const good_info = info.get();
        console.log(good_info, 222)
        if (!sku_list || sku_list.length === 0) { return null }

        const arr: any[] = [];
        const prices: any[] = [];
        // 依次存入sku
        for (let i = 0; i < sku_list.length; ++i) {
            const obj: sku = {
                k: sku_list[i].k,
                v: JSON.stringify(sku_list[i].v),
                good_id: good_info.id
            }
            const r = await ctx.model.models.sku.create(obj as any);
            arr.push(r.get());
        }
        // 依次存入商品每个sku品类的价格
        for (const item of price_list) {
            const res = await ctx.model.models.price.create({
                k: item.k,
                v: item.v,
                good_id: good_info.id,
            });
            prices.push(res.get());
        }

        return { good_info, sku: arr, prices };
    }
}