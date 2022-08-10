import { Application } from "egg";

export default (app : Application) => {
    
    const {STRING, BIGINT, DOUBLE} = app.Sequelize;
    
    const Price = app.model.define("price", {
        // sku的id加上键对应的值
        k: {
            type: STRING,
            allowNull: false
        },
        v: {
            type: DOUBLE,
            allowNull: false
        },
        good_id: {
            type: BIGINT,
            allowNull: false
        }
    }, {
        tableName: "zhujie_price",
        timestamps: false
    });

    return Price;
}