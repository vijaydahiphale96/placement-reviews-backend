import { Service, Inject } from "typedi";
import { UserAccessService } from "../access/user-access.service";
import { User } from "../entities/user.entity";
import { UserLoginData } from "../shared/models/user.model";
import { AccessTokenAccessService } from "../access/access-token-access.service";
import { UnauthorizedError } from "routing-controllers";
import { AccessToken } from "../entities/access-token.entity";
import { CollegeAccessService } from "../access/college-access.service";
import { uuid as uuidv4 } from 'uuidv4';
import { BaseResponse, CustomError } from "../shared/models/base-response.model";
import { CustomErrors } from "../shared/errors/custom-errors";


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

    async login(userLoginData: UserLoginData): Promise<BaseResponse<AccessToken | null>> {
        const user: User | undefined = await this.userAccessService.findUserData(userLoginData);
        if (!user) {
            return new BaseResponse(true, null, new CustomError(CustomErrors.WRONG_USER_LOGIN_CREDENTIAL.code, CustomErrors.WRONG_USER_LOGIN_CREDENTIAL.title, CustomErrors.WRONG_USER_LOGIN_CREDENTIAL.message));
        }
        const accessToken = this.generateAccessToken();
        const accessTokenEntity: AccessToken = new AccessToken();
        accessTokenEntity.accessToken = accessToken;
        accessTokenEntity.createdAt = new Date();
        accessTokenEntity.user = user;

        const tempAccessToken = await this.accessTokenAccessService.addAccessToken(accessTokenEntity);
        if (tempAccessToken) {
            return new BaseResponse(false, tempAccessToken);
        } else {
            return new BaseResponse(true, null, new CustomError(CustomErrors.UNABLE_TO_ADD_DATA.code, CustomErrors.UNABLE_TO_ADD_DATA.title, CustomErrors.UNABLE_TO_ADD_DATA.message.concat(' Accesstoken')));
        }
    }

    async logout(accessToken: string): Promise<BaseResponse<string | null>> {
        const accessTokenData: AccessToken | undefined = await this.accessTokenAccessService.findAccessToken(accessToken);
        if (!accessTokenData) {
            return new BaseResponse(true, null, new CustomError(CustomErrors.DATA_NOT_FOUND.code, CustomErrors.DATA_NOT_FOUND.title, 'accessToken '.concat(CustomErrors.DATA_NOT_FOUND.message)));
        }
        const deletedData = await this.accessTokenAccessService.deleteAccessToken(accessTokenData);
        if (deletedData) {
            return new BaseResponse(false, 'Logout Successful');
        } else {
            return new BaseResponse(true, null, new CustomError(CustomErrors.UNABLE_TO_DELETE_DATA.code, CustomErrors.UNABLE_TO_DELETE_DATA.title, CustomErrors.UNABLE_TO_DELETE_DATA.message.concat(' Accesstoken')));
        }
    }

    generateAccessToken(): string {
        return uuidv4();
    }

}
