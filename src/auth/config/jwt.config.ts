import { registerAs } from "@nestjs/config";
import { register } from "module";
import { defaultIfEmpty } from "rxjs";

export default registerAs('jwt', ()=>{
    return {
        secret: process.env.JWT_SECRET,
        jwtTtl: process.env.JWT_TTL,
        audience: process.env.JWT_TOKEN_AUDIENCE,
        issuer: process.env.JWT_TOKEN_ISSUER
    }
})