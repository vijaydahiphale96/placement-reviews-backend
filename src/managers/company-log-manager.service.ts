import { Service, Inject } from "typedi";
import { CompanyLogAccessService } from "../access/company-log-access.service";



@Service()
export class CompanyLogManagerService {

    @Inject(type => CompanyLogAccessService)
    companyLogAccessService: CompanyLogAccessService;

    constructor() {

    }

}
