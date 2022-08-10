import { Application } from "../../typings/app";

export default function User(app: Application) {
    const {
        STRING,
        INTEGER,
    } = app.Sequelize;

    const Admin = app.model.define("admin", {
        loginId: {
            type: STRING(255),
            allowNull: false
        },
        loginPwd: {
            type: STRING(255),
            allowNull: false
        },
        level: {
            type: INTEGER,
            allowNull: false
        }
    }, {
        tableName: "zhujie_admin"
    }
    );

    return Admin;
}