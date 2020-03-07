import { Authorized, Get, HttpCode, JsonController, Post, Body, UnauthorizedError, Delete, HeaderParam } from 'routing-controllers';
import { Service, Inject } from 'typedi';
import { User } from '../entities/user.entity';
import { UserManagerService } from '../managers/user-manager.service';
import { UserLoginData } from '../shared/models/user.model';
import { BaseResponse, CustomError } from '../shared/models/base-response.model';
import { CustomErrors } from '../shared/errors/custom-errors';
import { AccessToken } from '../entities/access-token.entity';

@Service()
@JsonController()
export class UserController {

    @Inject(type => UserManagerService)
    userManagerService: UserManagerService;

    constructor() {

    }

    @Post('/login')
    @HttpCode(201)
    public async login(@Body() userLoginData: UserLoginData): Promise<BaseResponse<AccessToken | null>> {
        if (!userLoginData) {
            return new BaseResponse(true, null, new CustomError(CustomErrors.BAD_REQUEST.code, CustomErrors.BAD_REQUEST.title, 'emailId and password '.concat(CustomErrors.BAD_REQUEST.message)));
        } else if (!userLoginData.emailId) {
            return new BaseResponse(true, null, new CustomError(CustomErrors.BAD_REQUEST.code, CustomErrors.BAD_REQUEST.title, 'emailId '.concat(CustomErrors.BAD_REQUEST.message)));
        } else if (!userLoginData.password) {
            return new BaseResponse(true, null, new CustomError(CustomErrors.BAD_REQUEST.code, CustomErrors.BAD_REQUEST.title, 'password '.concat(CustomErrors.BAD_REQUEST.message)));
        }

        try {
            return await this.userManagerService.login(userLoginData);
        } catch (error) {
            return new BaseResponse(true, null, new CustomError(CustomErrors.UNABLE_TO_HANDLE_REQUEST.code, CustomErrors.UNABLE_TO_HANDLE_REQUEST.title, CustomErrors.UNABLE_TO_HANDLE_REQUEST.message));
        }
    }

    @Post('/sign-up')
    @HttpCode(201)
    public addUser(@Body() user: User) {

        return this.userManagerService.addUser(user);
    }

    @Authorized()
    @Delete('/logout')
    @HttpCode(201)
    public async logout(@HeaderParam("accessToken") accessToken: string): Promise<BaseResponse<string | null>> {
        if (!accessToken) {
            return new BaseResponse(true, null, new CustomError(CustomErrors.BAD_REQUEST.code, CustomErrors.BAD_REQUEST.title, 'accessToken '.concat(CustomErrors.BAD_REQUEST.message)));
        }

        try {
            return await this.userManagerService.logout(accessToken);
        } catch (error) {
            return new BaseResponse(true, null, new CustomError(CustomErrors.UNABLE_TO_HANDLE_REQUEST.code, CustomErrors.UNABLE_TO_HANDLE_REQUEST.title, CustomErrors.UNABLE_TO_HANDLE_REQUEST.message));
        }
    }

    @Authorized()
    @Get('/users')
    @HttpCode(201)
    public getAllUsers() {
        return [];
    }
}
