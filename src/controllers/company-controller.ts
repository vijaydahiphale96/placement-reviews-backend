import { Authorized, Get, HttpCode, JsonController, Post } from 'routing-controllers';
import { Service, Inject } from 'typedi';
import { CompanyManagerService } from '../managers/company-manager.service';

@Service()
@JsonController()
export class CompanyController {

    @Inject(type => CompanyManagerService)
    companyManagerService: CompanyManagerService;

    constructor() {

    }

}
