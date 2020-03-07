import { Service, Inject } from "typedi";
import { CompanyAccessService } from "../access/company-access.service";
import { Company } from "../entities/company.entity";



@Service()
export class CompanyManagerService {

    @Inject(type => CompanyAccessService)
    companyAccessService: CompanyAccessService;

    constructor() {

    }

    async getAllCompanies() {
        return await this.companyAccessService.getAllCompanies();
    }

    addCompany(company: Company) {
        return this.companyAccessService.addCompany(company);
    }

    updateCompany(company: Company) {
        return this.companyAccessService.updateCompany(company);
    }

}
