import { Authorized, Get, HttpCode, JsonController, Post } from 'routing-controllers';
import { Service, Inject } from 'typedi';
import { CompanyLogManagerService } from '../managers/company-log-manager.service';

@Service()
@JsonController()
export class CompanyLogController {

    @Inject(type => CompanyLogManagerService)
    companyLogManagerService: CompanyLogManagerService;

    constructor() {

    }

}
