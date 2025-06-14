import { Service } from "typedi";
import { Repository, getRepository, DeleteResult } from "typeorm";
import { AccessToken } from "../entities/access-token.entity";



@Service()
export class AccessTokenAccessService {

    protected accessTokenRepository: Repository<AccessToken>;

    constructor() {
        this.accessTokenRepository = getRepository(AccessToken);
    }

    async addAccessToken(accessToken: AccessToken): Promise<AccessToken> {
        return await this.accessTokenRepository.save(accessToken);
    }

    async deleteAccessToken(accessToken: string): Promise<DeleteResult> {
        return await this.accessTokenRepository.delete({ accessToken: accessToken });
    }

}
