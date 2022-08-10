import { Application } from "egg";

export default (app: Application) => {
    const {STRING, BIGINT, FLOAT} = app.Sequelize
    const Ticket = app.model.define("ticket", {
        ticket_id: {
            type: BIGINT,
            primaryKey: true
        },
        name: {
            type: STRING,
            allowNull: false
        },
        // 领取用户的id
        user_id: {
            type: BIGINT,
            allowNull: false
        },
        // 发行商户的id
        store_id: {
            type: BIGINT,
            allowNull: false
        },
        // 满减范围
        range: FLOAT,
        // 优惠的金额
        bargin: {
            type: FLOAT,
            allowNull: false
        }
    }, {
        tableName: "zhujie_ticket",
        timestamps: false
    });
    return Ticket;
}