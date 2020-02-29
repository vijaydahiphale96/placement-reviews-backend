import { Service } from "typedi";
import { Repository, getRepository } from "typeorm";
import { AccessToken } from "../entities/access-token.entity";



@Service()
export class AccessTokenAccessService {

    protected accessTokenRepository: Repository<AccessToken>;

    constructor() {
        this.accessTokenRepository = getRepository(AccessToken);
    }

}
