import { Authorized, Get, HttpCode, JsonController, Post } from 'routing-controllers';
import { EntityFromBody } from 'typeorm-routing-controllers-extensions';
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

    @Post('/user')
    @HttpCode(201)
    public addUser(@EntityFromBody() user: User) {

        return this.userManagerService.addUser(user);
    }
}
