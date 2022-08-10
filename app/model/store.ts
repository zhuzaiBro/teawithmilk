import { Application } from "egg";

export default (app: Application) => {
    const { STRING, BIGINT } = app.Sequelize;

    const Store = app.model.define("store", {
        store_id: {
            type: BIGINT,
            primaryKey: true
        },
        name: {
            type: STRING(255),
            allowNull: false
        }
    }, {
        tableName: "zhujie_store",
        timestamps: false
    })
    return Store;
}