import { Application } from "egg";

export default (app: Application) => {

    const {STRING} = app.Sequelize;

    const Good = app.model.define("good", {
        name: {
            type: STRING(255)
        }
    }, {
        tableName: "zhujie_good",
        timestamps: false
    })

    return Good;
}