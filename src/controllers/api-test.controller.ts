import { Authorized, Controller, Get, HttpCode } from 'routing-controllers';
import { Service } from 'typedi';

@Service()
@Controller()
export class ApiTest {

    @Authorized()
    @Get('/test')
    @HttpCode(201)
    public async testApi(): Promise<string> {
        return 'working';
    }
}