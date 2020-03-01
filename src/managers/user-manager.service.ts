import { Service, Inject } from "typedi";
import { UserAccessService } from "../access/user-access.service";
import { User } from "../entities/user.entity";
import { UserLoginData } from "../shared/models/user.model";
import { AccessTokenAccessService } from "../access/access-token-access.service";
import { UnauthorizedError } from "routing-controllers";
import { AccessToken } from "../entities/access-token.entity";
import { CollegeAccessService } from "../access/college-access.service";



@Service()
export class UserManagerService {

    @Inject(type => UserAccessService)
    userAccessService: UserAccessService;

    @Inject(type => AccessTokenAccessService)
    accessTokenAccessService: AccessTokenAccessService;

    @Inject(type => CollegeAccessService)
    collegeAccessService: CollegeAccessService;

    constructor() {

    }

    async addUser(user: User) {
        const college = await this.collegeAccessService.getCollegeById();
        user.college = college;
        return this.userAccessService.addUser(user);
    }

    async login(userLoginData: UserLoginData): Promise<AccessToken> {
        const user: User = await this.userAccessService.findUserData(userLoginData);
        if (!user) {
            throw new UnauthorizedError('Invalid emailId or password');
        }
        const accessToken = this.generateAccessToken();
        const accessTokenEntity: AccessToken = new AccessToken();
        accessTokenEntity.accessToken = accessToken;
        accessTokenEntity.createdAt = new Date();
        accessTokenEntity.user = user;

        return this.accessTokenAccessService.addAccessToken(accessTokenEntity);
    }

    generateAccessToken(): string {
        return 'vijay12345vijay';
    }

}
