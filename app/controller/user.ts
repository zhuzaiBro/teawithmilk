import { Controller } from "egg";

export default class UserController extends Controller {
    async login() {
        const {ctx, service} = this;
        const res = await service.user.login(ctx.request.body);
        ctx.body = {
            code: 0,
            data: res
        }
    }
} 