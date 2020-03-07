import { Service } from "typedi";
import { Repository, getRepository } from "typeorm";
import { Company } from "../entities/company.entity";



@Service()
export class CompanyAccessService {

    protected companyRepository: Repository<Company>;

    constructor() {
        this.companyRepository = getRepository(Company);
    }

    async getAllCompanies(): Promise<Company[]> {
        return await this.companyRepository.find();
    }

    async addCompany(company: Company): Promise<Company> {
        return await this.companyRepository.save(company);
    }

    async updateCompany(company: Company): Promise<Company> {
        return await this.companyRepository.save(company);
    }

}
