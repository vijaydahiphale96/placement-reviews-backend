import { Service } from "typedi";
import { Repository, getRepository } from "typeorm";
import { CompanyLog } from "../entities/company-log.entity";



@Service()
export class CompanyLogAccessService {

    protected companyLogRepository: Repository<CompanyLog>;

    constructor() {
        this.companyLogRepository = getRepository(CompanyLog);
    }

}
