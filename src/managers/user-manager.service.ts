import { Service, Inject } from "typedi";
import { UserAccessService } from "../access/user-access.service";
import { User } from "../entities/user.entity";



@Service()
export class UserManagerService {

    @Inject(type => UserAccessService)
    userAccessService: UserAccessService;

    constructor() {

    }

    addUser(user: User) {
        user.createdAt = new Date();
        user.roleId = 1;
        user.isEmailIdVerified = false;

        return this.userAccessService.addUser(user);
    }

}
