import { Service } from "typedi";
import { Repository, getRepository } from "typeorm";
import { User } from "../entities/user.entity";
import { College } from "../entities/college.entity";



@Service()
export class UserAccessService {

    protected userRepository: Repository<User>;
    protected collegeRepository: Repository<College>;

    constructor() {
        this.userRepository = getRepository(User);
        this.collegeRepository = getRepository(College);
    }

    async addUser(user: User): Promise<User> {
        const college = await this.collegeRepository.findOne(1);
        user.college = college;
        return this.userRepository.save(user);
    }

}
