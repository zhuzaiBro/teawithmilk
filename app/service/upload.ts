import COS from 'cos-nodejs-sdk-v5';
import { Service } from 'egg';

export default class UploadServ extends Service {
    
    public async upload({base64}: {base64: string}) {
        const cos = new COS({
            SecretId: 'AKIDb6Wq38DIRcp5Pk5Qj0LWcfbQFJG4mNtS',
            SecretKey: 'kUAiKydK5qX3TtmeQOF6vfXLPZgqxESb',
        });
        // console.log( body)
        const res = await cos.putObject({
            Body: base64.slice(1),
            Bucket: "teawithmilk-1309397063",
            Key: "upload",
            Region: "ap-nanjing"
        });
        
        return res;
    } 
}