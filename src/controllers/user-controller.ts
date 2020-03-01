import { Authorized, Get, HttpCode, JsonController, Post, Body } from 'routing-controllers';
import { Service, Inject } from 'typedi';
import { User } from '../entities/user.entity';
import { UserManagerService } from '../managers/user-manager.service';
import { UserLoginData } from '../shared/models/user.model';

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
    public login(@Body() userLoginData: UserLoginData) {

        return this.userManagerService.login(userLoginData);
    }

    @Post('/sign-up')
    @HttpCode(201)
    public addUser(@Body() user: User) {

        return this.userManagerService.addUser(user);
    }
}
