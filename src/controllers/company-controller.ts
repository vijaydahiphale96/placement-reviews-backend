import { Authorized, Get, HttpCode, JsonController, Post, Body } from 'routing-controllers';
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

    @Authorized()
    @Post('/add-company')
    @HttpCode(201)
    public addCompany(@Body() company: Company) {
        return this.companyManagerService.addCompany(company);
    }

}
