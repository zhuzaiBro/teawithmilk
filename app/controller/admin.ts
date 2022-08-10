import { Controller } from "egg";

export default class AdminController extends Controller {
    public async login() {
        const res = await this.service.admin.login(this.ctx.request.body);
        this.ctx.body = res;
    }

    public async add_admin() {
        const {ctx, service} = this;
        const res = await service.admin.addAdmin(ctx.request.body);
        ctx.body = res;
    }
}