import { Service, Inject } from "typedi";
import { UserAccessService } from "../access/user-access.service";



@Service()
export class UserManagerService {

    @Inject(type => UserAccessService)
    userAccessService: UserAccessService;

    constructor() {

    }

}
