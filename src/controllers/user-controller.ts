import { Authorized, Get, HttpCode, JsonController, Post, Body } from 'routing-controllers';
import { Service, Inject } from 'typedi';
import { User } from '../entities/user.entity';
import { UserManagerService } from '../managers/user-manager.service';

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

    @Post('/add-user')
    @HttpCode(201)
    public addUser(@Body() user: User) {

        return this.userManagerService.addUser(user);
    }
}
