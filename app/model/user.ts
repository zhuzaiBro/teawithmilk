import { Application } from "egg"

export default (app: Application) => {
    const { STRING, BIGINT } = app.Sequelize;

    const User = app.model.define("user", {
        name: STRING,
        user_id: {
            type: BIGINT,
            primaryKey: true
        },

    }, {
        tableName: "zhujie_user",
        timestamps: false
    })

    return User;
}