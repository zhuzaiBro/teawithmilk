import { Controller } from "egg";

export default class UploadController extends Controller {
    public async upload() {
        const {service, ctx} = this;
        const res = await service.upload.upload(ctx.request.body);
        ctx.body = {
            code: 0,
            data: res
        }
    }
}