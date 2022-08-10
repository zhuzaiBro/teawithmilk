import { Context } from "egg";

export default (secret)  => {
    return async function user_auth(ctx: Context, next: Function) {
        const token = ctx.request.header.authorization as string; // 若是没有 token，返回的是 null 字符串
        if (token !== 'null' && token) {
            try {
                const decode = ctx.app.jwt.verify(token, secret); // 验证token
                console.log(decode);
                await next();
            } catch (error) {
                console.log('error', error);
                ctx.status = 200;
                ctx.body = {
                    msg: '发生错误',
                    success: false,
                    code: 401,
                };
                return;
            }
        } else {
            ctx.status = 200;
            ctx.body = {
                code: 401,
                msg: 'token已过期，请重新登录',
                success: false,
            };
            return;
        }
    };
};