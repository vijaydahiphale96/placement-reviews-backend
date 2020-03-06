import { Authorized, Get, HttpCode, JsonController, Post, Body, UnauthorizedError } from 'routing-controllers';
import { Service, Inject } from 'typedi';
import { User } from '../entities/user.entity';
import { UserManagerService } from '../managers/user-manager.service';
import { UserLoginData } from '../shared/models/user.model';
import { BaseResponse, CustomError } from '../shared/models/base-response.model';
import { CustomErrors } from '../shared/errors/custom-errors';

@Service()
@JsonController()
export class UserController {

    @Inject(type => UserManagerService)
    userManagerService: UserManagerService;

    constructor() {

    }

    @Authorized()
    @Get('/users')
    @HttpCode(201)
    public getAllUsers() {
        return [];
    }

    @Post('/login')
    @HttpCode(201)
    public async login(@Body() userLoginData: UserLoginData): Promise<BaseResponse> {
        if (!userLoginData) {
            return new BaseResponse(true, '', new CustomError(CustomErrors.BAD_REQUEST.code, CustomErrors.BAD_REQUEST.title, 'emailId and password '.concat(CustomErrors.BAD_REQUEST.message)));
        } else if (!userLoginData.emailId) {
            return new BaseResponse(true, '', new CustomError(CustomErrors.BAD_REQUEST.code, CustomErrors.BAD_REQUEST.title, 'emailId '.concat(CustomErrors.BAD_REQUEST.message)));
        } else if (!userLoginData.password) {
            return new BaseResponse(true, '', new CustomError(CustomErrors.BAD_REQUEST.code, CustomErrors.BAD_REQUEST.title, 'password '.concat(CustomErrors.BAD_REQUEST.message)));
        }

        try {
            return await this.userManagerService.login(userLoginData);
        } catch (error) {
            return new BaseResponse(true, '', new CustomError(CustomErrors.UNABLE_TO_HANDLE_REQUEST.code, CustomErrors.UNABLE_TO_HANDLE_REQUEST.title, CustomErrors.UNABLE_TO_HANDLE_REQUEST.message));
        }
    }

    @Post('/sign-up')
    @HttpCode(201)
    public addUser(@Body() user: User) {

        return this.userManagerService.addUser(user);
    }
}
