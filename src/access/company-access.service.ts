import { Service } from "typedi";
import { Repository, getRepository } from "typeorm";
import { Company } from "../entities/company.entity";



@Service()
export class CompanyAccessService {

    protected companyRepository: Repository<Company>;

    constructor() {
        this.companyRepository = getRepository(Company);
    }

    async getCompanies(): Promise<Company[]> {
        return await this.companyRepository.find();
    }

    addCompany(company: Company): Promise<Company> {
        return this.companyRepository.save(company);
    }

    updateCompany(company: Company) {
        return this.companyRepository.save(company);
    }

}
