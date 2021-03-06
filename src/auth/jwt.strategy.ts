import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {Injectable} from "@nestjs/common";
import {jwtConstants} from "./constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor() {
        super({
            // jwtFromRequest: ExtractJwt.fromBodyField("access_token"),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // ignoreExpiration: false,
            ignoreExpiration: true,
            secretOrKey: jwtConstants.secret
        });

    }

    async validate(payload: any) {
        console.log("Class: JwtStrategy\nMethod: validate()\nMessage: payload:", payload, "\n")
        return { id: payload.sub, email: payload.email}
    }

}