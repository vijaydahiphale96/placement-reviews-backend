import { Authorized, Get, HttpCode, JsonController, Post, Body, Put, BadRequestError } from 'routing-controllers';
import { Service, Inject } from 'typedi';
import { CompanyManagerService } from '../managers/company-manager.service';
import { Company } from '../entities/company.entity';

@Service()
@JsonController()
export class CompanyController {

    @Inject(type => CompanyManagerService)
    companyManagerService: CompanyManagerService;

    constructor() {

    }

    @Get('/companies')
    @HttpCode(201)
    public getCompanies() {
        return this.companyManagerService.getCompanies();
    }

    @Authorized()
    @Post('/add-company')
    @HttpCode(201)
    public addCompany(@Body() company: Company) {
        return this.companyManagerService.addCompany(company);
    }

    @Authorized()
    @Put('/update-company')
    @HttpCode(201)
    public updateCompany(@Body() company: Company) {

        if (!company.companyId) {
            throw new BadRequestError('userId is missing');
        }

        return this.companyManagerService.updateCompany(company);
    }

}
