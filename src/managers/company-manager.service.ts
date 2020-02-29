import { Service, Inject } from "typedi";
import { CompanyAccessService } from "../access/company-access.service";



@Service()
export class CompanyManagerService {

    @Inject(type => CompanyAccessService)
    companyAccessService: CompanyAccessService;

    constructor() {

    }

}
