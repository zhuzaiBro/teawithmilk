import { Service } from 'egg';

export default class AdminServ extends Service {


    public async login({ loginId, loginPwd }) {
        const {  ctx } = this;
        const res = await ctx.model.models.admin.findOne({
            where: {
                loginId,
                loginPwd
            }
        });
        return res;

    }

    public async addAdmin({ level = 0, loginId, loginPwd }) {
        const { ctx } = this;
        const res = await ctx.model.models.admin.create(
            {
                level,
                loginId,
                loginPwd
            }
        );
        return res;
    }
}
