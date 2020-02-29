import { Service } from "typedi";
import { Repository, getRepository } from "typeorm";
import { Company } from "../entities/company.entity";



@Service()
export class CompanyAccessService {

    protected companyRepository: Repository<Company>;

    constructor() {
        this.companyRepository = getRepository(Company);
    }
}
