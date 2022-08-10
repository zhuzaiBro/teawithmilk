const secret = "wanmuAppzhujie";
const cookieKey = "token";
import { Response,  } from 'express';
import jwt from 'jsonwebtoken';



export default {
    publish(res: Response, maxAge = 7 * 3600 * 24, info = {}) {
        const token = jwt.sign(info, secret, {

            expiresIn: maxAge
        })
        res.cookie(cookieKey, token, {
            maxAge: maxAge * 1000,
            path: "/"
        });
        // 添加其他传输
        res.header("authorization", token);

    },
    verify(req:any) {
        let token: string;
        token = req.cookie?.token ? req.cookie?.token : req.headers?.authorization;
        if (!token) {
            // 没有token
            return null;
        }
        // 用token就是这个情况
        const tokens = token.split(" ");
        token = tokens[0].length === 1 ? tokens[1] : tokens[0];

        // console.log(token);

        try {
            return jwt.verify(token, secret)
        } catch {
            return null;
        }
    }
}



