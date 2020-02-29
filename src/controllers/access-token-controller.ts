import { Authorized, Get, HttpCode, JsonController, Post } from 'routing-controllers';
import { Service, Inject } from 'typedi';
import { AccessTokenAccessService } from '../access/access-token-access.service';

@Service()
@JsonController()
export class AccessTokenController {

    @Inject(type => AccessTokenAccessService)
    accessTokenAccessService: AccessTokenAccessService;

    constructor() {

    }

}
