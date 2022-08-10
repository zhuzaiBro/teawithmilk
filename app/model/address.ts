import { Application } from "egg";
import {ModelCtor, Model} from 'sequelize'

export default (app: Application):  ModelCtor<Model<any, any>> => {

    const {STRING, BIGINT} = app.Sequelize;

    const address = app.model.define("address", {
        user_id: {
            type: BIGINT,
            primaryKey: true 
        },
        // 地址详情
        detail: {
            type: STRING(255),
            allowNull: false
        }
    }, {
        tableName: "zhujie_address",
        timestamps: false
    });

    

    return address;
}