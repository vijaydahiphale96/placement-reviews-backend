import { Service, Inject } from "typedi";
import { CompanyAccessService } from "../access/company-access.service";
import { Company } from "../entities/company.entity";
import { BaseResponse, CustomError } from "../shared/models/base-response.model";
import { CustomErrors } from "../shared/errors/custom-errors";



@Service()
export class CompanyManagerService {

    @Inject(type => CompanyAccessService)
    companyAccessService: CompanyAccessService;

    constructor() {

    }

    async getAllCompanies() {
        const companies: Company[] = await this.companyAccessService.getAllCompanies();
        if (companies) {
            return new BaseResponse(false, companies);
        } else {
            return new BaseResponse(true, null, new CustomError(CustomErrors.DATA_NOT_FOUND.code, CustomErrors.DATA_NOT_FOUND.title, 'Company '.concat(CustomErrors.DATA_NOT_FOUND.message)));
        }
    }

    addCompany(company: Company) {
        return this.companyAccessService.addCompany(company);
    }

    updateCompany(company: Company) {
        return this.companyAccessService.updateCompany(company);
    }

}
