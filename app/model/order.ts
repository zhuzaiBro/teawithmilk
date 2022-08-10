import { Application } from "egg";

export default (app: Application) => {

    const {STRING, DATE, INTEGER, DOUBLE, BIGINT} = app.Sequelize;

    const Order = app.model.define("order", {
        order_id: {
            primaryKey: true,
            defaultValue: 0,
            type: BIGINT
        },
        user_id: {
            type: BIGINT,
            allowNull: false
        },
        store_id: {
            type: BIGINT,
            allowNull: false
        },
        ticket_id: {
            type: BIGINT,
        },
        // 总的金额
        price: {
            type: DOUBLE,
            allowNull: false
        },
        // 包含的商品JSON化
        includes: {
            type: STRING(1234),
            allowNull: false
        },
        // 交易流水号
        transIdo: {
            type: BIGINT,
            allowNull: false
        },
        // 交易时间
        start_date: {
            type: DATE,
            allowNull: false
        },
        status: {type: INTEGER, allowNull: false},
        end_date: DATE,
        // 订单的备注
        tip: STRING(1234)
    }, {
        tableName: "zhujie_order",
    })

    return Order;
}