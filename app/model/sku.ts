import { Application } from "egg";

export interface sku {
    k: string,
    v: string,
    good_id: number
}

export default (app: Application) => {

    const {STRING, BIGINT} = app.Sequelize;

    const Sku = app.model.define("sku", {
        k: STRING(255),
        v: STRING(255),
        good_id: {
            type: BIGINT,
            allowNull: false
        } 
    }, {
        tableName: "zhujie_sku",
        timestamps: false
    });

    return Sku;
}