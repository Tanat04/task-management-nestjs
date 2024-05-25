import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "./user.entity";
import { UsersRepository } from "./users.repository";
import { jwtPayload } from "./jwt-payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(User)
        private usersRepository: UsersRepository
    ) {
        super({
            secretOrKey: 'topNiggaSecret',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate(payload: jwtPayload): Promise<User> {
        const { username} = payload
        const user: User = await this.usersRepository.findOne({ username })

        if (!user) {
            throw new UnauthorizedException()
        }

        return user;
    }
}