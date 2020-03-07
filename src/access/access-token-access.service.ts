import { Service } from "typedi";
import { Repository, getRepository, DeleteResult } from "typeorm";
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

    async findAccessToken(accessToken: string): Promise<AccessToken | undefined> {
        return await this.accessTokenRepository.findOne({ accessToken: accessToken });
    }

    async deleteAccessToken(accessTokenData: AccessToken): Promise<DeleteResult> {
        return await this.accessTokenRepository.delete(accessTokenData);
    }

}
