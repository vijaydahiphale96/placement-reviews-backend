import { Authorized, Get, HttpCode, JsonController } from 'routing-controllers';
import { Service } from 'typedi';

@Service()
@JsonController()
export class UserController {

    @Authorized()
    @Get('/users')
    @HttpCode(201)
    public getAllUsers() {
        return [];
    }
}
