import { Service, Inject } from "typedi";
import { AccessTokenAccessService } from "../access/access-token-access.service";



@Service()
export class AccessTokenManagerService {

    @Inject(type => AccessTokenAccessService)
    accessTokenAccessService: AccessTokenAccessService;

    constructor() {

    }

}
