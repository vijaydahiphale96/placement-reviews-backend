import { Service } from "typedi";
import { Repository, getRepository } from "typeorm";
import { College } from "../entities/college.entity";



@Service()
export class CollegeAccessService {

    protected collegeRepository: Repository<College>;

    constructor() {
        this.collegeRepository = getRepository(College);
    }

    async getCollegeById(collegeId: number = 1): Promise<any> {
        return await this.collegeRepository.findOne(collegeId);
    }

}
