import { Authorized, Get, HttpCode, JsonController, Post, Body, UnauthorizedError } from 'routing-controllers';
import { Service, Inject } from 'typedi';
import { User } from '../entities/user.entity';
import { UserManagerService } from '../managers/user-manager.service';
import { UserLoginData } from '../shared/models/user.model';
import { BaseResponse, CustomError } from '../shared/models/base-response.model';

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
            return new BaseResponse(true, '', new CustomError(100, 'BAD_REQUEST', 'emailId and password field is missing'));
        } else if (!userLoginData.emailId) {
            return new BaseResponse(true, '', new CustomError(100, 'BAD_REQUEST', 'emailId field is missing'));
        } else if (!userLoginData.password) {
            return new BaseResponse(true, '', new CustomError(100, 'BAD_REQUEST', 'password field is missing'));
        }

        try {
            return await this.userManagerService.login(userLoginData);
        } catch (error) {
            return new BaseResponse(true, '', new CustomError(100, 'CANT_HANDLE_REQUEST', 'Server was unable to handle request'));
        }
    }

    @Post('/sign-up')
    @HttpCode(201)
    public addUser(@Body() user: User) {

        return this.userManagerService.addUser(user);
    }
}
