import { Authorized, Controller, Get, HttpCode } from 'routing-controllers';
import { Service } from 'typedi';
import { BaseResponse } from '../shared/models/base-response.model';

@Service()
@Controller()
export class ApiTest {

    @Authorized()
    @Get('/test')
    @HttpCode(201)
    public testApi() {
        // const newObj = new BaseResponse();
        return {};
    }
}
