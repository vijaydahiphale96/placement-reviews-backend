import { Service } from "typedi";
import { Repository, getRepository } from "typeorm";
import { AccessToken } from "../entities/access-token.entity";
import { UserLoginData } from "../shared/models/user.model";
import { User } from "../entities/user.entity";



@Service()
export class AccessTokenAccessService {

    protected accessTokenRepository: Repository<AccessToken>;

    constructor() {
        this.accessTokenRepository = getRepository(AccessToken);
    }

    async addAccessToken(accessToken: AccessToken): Promise<AccessToken> {
        return await this.accessTokenRepository.save(accessToken);
    }

}
